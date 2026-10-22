import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const site=new URL('../site/',import.meta.url),c={};vm.createContext(c);
const load=f=>vm.runInContext(fs.readFileSync(new URL(f,site),'utf8'),c),plain=x=>JSON.parse(JSON.stringify(x));
load('exam2-content.js');const original=plain(c.EXAM2_CONTENT);
for(const f of ['textbook-content.js','textbook-integration-data.js','textbook-integration.js'])load(f);
const before=[...c.EXAM2_CONTENT.lessons,...c.EXAM3_CONTENT.lessons].map(plain);
for(const f of ['course-audit-data.js','course-audit.js'])load(f);
let totals=[];const qids=new Set(),prompts=new Set();
for(const [exam,d] of [['exam2',c.EXAM2_CONTENT],['exam3',c.EXAM3_CONTENT]]){
 let questions=0,cards=0;
 for(const l of d.lessons){
  const old=before.find(x=>x.id===l.id);assert(old);assert.equal(l.id,old.id);assert(l.body.length>=old.body.length);
  old.questions.forEach((q,i)=>assert.deepEqual(plain(l.questions[i]),q,'Existing question changed: '+l.id));
  old.terms.forEach((t,i)=>assert.equal(l.terms[i].term,t.term,'Card identity moved: '+l.id+'-c'+i));
  l.questions.forEach((q,i)=>{const id=q.id||l.id+'-q'+i;assert(id.startsWith(exam+'-'));assert(!qids.has(id));qids.add(id);assert(!prompts.has(q.prompt));prompts.add(q.prompt);assert.equal(new Set(q.choices).size,4);assert(q.correct>=0&&q.correct<4);assert(q.explanation.length>25);assert.equal(q.choiceExplanations.length,4);questions++;});cards+=l.terms.length;
  for(const f of l.extraFigures||[])assert(fs.existsSync(new URL(f.image,site))&&f.alt&&f.caption);
 }
 totals.push({exam,lessons:d.lessons.length,questions,cards});
}
assert.equal(c.EXAM2_CONTENT.review.topics.length,87);
for(const t of c.EXAM2_CONTENT.review.topics)assert(t.lessonIds.every(id=>c.EXAM2_CONTENT.lessons.some(l=>l.id===id)));
assert.equal(c.EXAM2_CONTENT.review.topics.find(t=>t.id==='exam2-review-8-text-1').status,'covered');
assert(c.EXAM2_CONTENT.review.topics.find(t=>t.id==='exam2-review-7-lecture-9').status!=='covered','Do not invent an animal-disgust result');
const lesson=id=>[...c.EXAM2_CONTENT.lessons,...c.EXAM3_CONTENT.lessons].find(l=>l.id===id);
assert(lesson('exam3-textbook-measurement').body.join(' ').includes('× 100'));assert(c.TEXTBOOK_CHAPTERS.find(x=>x.number==='10').sections.some(s=>s.blocks.some(b=>b.text?.includes('× 100'))));
assert(lesson('exam2-emotion-motivation').body.some(b=>b.toLowerCase().includes('endorsement')&&b.includes('193')));
assert(lesson('exam2-learning1-conditioning-types').terms.some(t=>t.term==='Imprinting'));
assert(lesson('exam2-memory-working-model').terms.find(t=>t.term==='Phonological loop').definition.includes('verbal'));
assert.equal(c.COURSE_AUDIT_DATA.patches.reduce((n,p)=>n+(p.questions?.length||0),0),20);
assert(c.EXAM2_CONTENT.lessons.filter(l=>l.examEligible===false).every(l=>l.unit==='Optional textbook enrichment'));
const ids=original.lessons.flatMap(l=>l.questions.map((q,i)=>l.id+'-q'+i));assert(ids.every(id=>qids.has(id)));
console.log(JSON.stringify({passed:true,totals,updatedLessons:c.COURSE_AUDIT_DATA.patches.length,newQuestions:20,reviewPrompts:87,checks:'Stable existing question/card identities; valid original feedback; corrected IQ and trophy variable; imprinting present; no invented discussion answer; image assets valid; instructor exclusions retained.'}));
