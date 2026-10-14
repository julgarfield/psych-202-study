import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const dist = new URL('../dist/', import.meta.url), ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(new URL('content.js', dist), 'utf8') + ';globalThis.CONTENT=CONTENT', ctx);
const C = ctx.CONTENT;
for (const file of ['bank-research.js', 'bank-brain.js', 'bank-senses.js']) {
  vm.runInContext(fs.readFileSync(new URL(file, dist), 'utf8'), ctx);
}
const feedback = { ...ctx.OLD_RESEARCH_FEEDBACK, ...ctx.OLD_BRAIN_FEEDBACK, ...ctx.OLD_SENSES_FEEDBACK };
const original = C.lessons.flatMap(l => l.questions.map((q, i) => ({
  ...q, id: l.id + '-q' + i, lessonId: l.id, unit: l.unit, source: l.source
})));
const old = original.map(q => ({ ...q, ...feedback[q.id] }));
const bank = [...ctx.BANK_RESEARCH, ...ctx.BANK_BRAIN, ...ctx.BANK_SENSES];
const all = [...old, ...bank], ids = new Set(), prompts = new Set();
const lessons = new Map(C.lessons.map(l => [l.id, l]));
const retainedSources = new Set(C.lessons.map(l => l.source));
const repeatDistractors = new Map(), absoluteChoiceWarnings = [];
for (const q of all) {
  assert(!ids.has(q.id), 'Duplicate id ' + q.id); ids.add(q.id);
  const prompt = q.prompt.trim().toLowerCase().replace(/\s+/g, ' ');
  assert(!prompts.has(prompt), 'Duplicate prompt ' + q.id + ': ' + q.prompt); prompts.add(prompt);
  assert(lessons.has(q.lessonId), 'Unknown lesson ' + q.id);
  assert.equal(q.choices.length, 4);
  assert.equal(new Set(q.choices.map(s => s.trim().toLowerCase())).size, 4, 'Duplicate choices ' + q.id);
  assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4);
  assert(q.explanation.length > 15, 'Missing explanation ' + q.id);
  assert.equal(q.unit, lessons.get(q.lessonId).unit);
  assert(retainedSources.has(q.source), 'Unknown retained source ' + q.id);
  assert((q.supportingSources || []).every(s => retainedSources.has(s)), 'Unknown supporting source ' + q.id);
  assert.equal(q.choiceExplanations.length, 4, 'Missing option feedback ' + q.id);
  assert(q.choiceExplanations.every(s => typeof s === 'string' && s.length > 10), 'Short feedback ' + q.id);
  assert(q.misconception.length > 10, 'Missing misconception ' + q.id);
  assert(![q.prompt, q.explanation, ...q.choices, ...q.choiceExplanations].some(s => /\bundefined\b/.test(s)), 'Unresolved generated wording ' + q.id);
  assert(!/which component\/process is involved/i.test(q.prompt), 'Vague generic task ' + q.id);
  const wrong = q.choices.filter((_, i) => i !== q.correct);
  assert(wrong.filter(s => /\bonly\b/i.test(s)).length < 3, 'Three wrong choices contain only: ' + q.id);
  const marked = q.choices.filter(s => /\b(only|always|never|every|solely|exclusively)\b/i.test(s));
  if (marked.length) absoluteChoiceWarnings.push({ id: q.id, choices: marked });
  const key = wrong.slice().sort().join('|');
  const group = repeatDistractors.get(key) || []; group.push(q.id); repeatDistractors.set(key, group);
}
for (const q of original) {
  const effective = old.find(x => x.id === q.id);
  assert(feedback[q.id], 'Missing original feedback ' + q.id);
  assert.equal(effective.correct, q.correct, 'Original answer index changed: ' + q.id);
  assert.equal(effective.lessonId, q.lessonId, 'Original lesson changed: ' + q.id);
}
assert.equal(old.length, 166, 'Original questions removed');
const units = [...new Set(C.lessons.map(l => l.unit))];
for (const lesson of C.lessons) {
  assert(all.some(q => q.lessonId === lesson.id), 'Lesson lost question coverage: ' + lesson.id);
}
vm.runInContext(fs.readFileSync(new URL('exams.js', dist), 'utf8') + ';globalThis.pickMock=selectMock;', ctx);
ctx.shuffled = arr => Array.from(arr).reverse();
const sets = ['A', 'B', 'C', 'D'].map(f => ctx.pickMock(all, units, f));
for (const set of sets) {
  assert.equal(set.length, 56);
  assert.equal(new Set(set.map(q => q.id)).size, 56);
  assert.deepEqual(units.map(u => set.filter(q => q.unit === u).length), [16, 24, 8, 8]);
  assert.equal(set.filter(q => q.lessonId.startsWith('pearson')).length, 2);
}
assert.equal(new Set(sets.flat().map(q => q.id)).size, 224, 'Fixed mock forms repeat questions');
const recent = sets.slice(0, 3).map(set => ({ questions: set.map(q => q.id) }));
const fresh = ctx.pickMock(all, units, 'fresh', recent);
assert.equal(fresh.length, 56);
assert(!fresh.some(q => sets.slice(0, 3).flat().some(old => old.id === q.id)), 'Fresh exam repeats a recent form despite adequate bank');
const report = {
  total: all.length, expanded: bank.length, original: old.length,
  lessons: C.lessons.length, cards: C.lessons.reduce((n, l) => n + l.terms.length, 0),
  textbookSections: C.textbook.chapters.reduce((n, c) => n + c.sections.length, 0),
  units: Object.fromEntries(units.map(u => [u, all.filter(q => q.unit === u).length])),
  types: Object.fromEntries([...new Set(bank.map(q => q.type))].map(t => [t, bank.filter(q => q.type === t).length])),
  repeatedDistractorTriples: [...repeatDistractors.values()].filter(ids => ids.length > 3),
  absoluteChoiceWarnings,
  checks: 'Original IDs/concepts retained; effective wording/options/feedback audited; unique prompts/options; retained source strings; four disjoint 56-question forms; recent-exam avoidance; no three-only distractor pattern. Semantic review is separate from these structural checks.'
};
console.log(JSON.stringify(report, null, 2));
fs.writeFileSync(new URL('../../content-audit.json', import.meta.url), JSON.stringify(report, null, 2));
