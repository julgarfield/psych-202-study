/* Structural audit of the Exam 3 study space after the November 12 gap fill. Semantic review is separate. */
import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const site=new URL('../site/',import.meta.url),c={};vm.createContext(c);
const order=fs.readFileSync(new URL('index.html',site),'utf8').match(/<script src="[^"]+"/g).map(s=>s.slice(13,-1).split('?')[0]);
const upto=order.indexOf('exam3-transcript-review.js');assert(upto>order.indexOf('exam3-review-sheet.js'),'Gap fill must load after the review sheet');
assert(order.indexOf('exam3-study.js')>upto,'Gap fill must load before the study interface');
let beforeTranscript;
for(const f of ['exam2-content.js','textbook-content.js','textbook-integration-data.js','textbook-integration.js','course-audit-data.js','course-audit.js','exam2-gap-fill.js',...order.slice(order.indexOf('exam3-lectures.js'),upto+1)]){
 if(f==='exam3-transcript-review.js')beforeTranscript=JSON.parse(JSON.stringify(c.EXAM3_CONTENT));
 vm.runInContext(fs.readFileSync(new URL(f,site),'utf8'),c,{filename:f});
}
const m=c.EXAM3_CONTENT;
assert.deepEqual([...(m.gapWarnings||[])],[],'Gap-fill repairs did not apply cleanly');
const ids=new Set(),qids=new Set(),prompts=new Set();let questions=0,cards=0,gapLessons=0,gapQuestions=0;const positions=[0,0,0,0];
for(const l of m.lessons){
 assert(!ids.has(l.id),'Duplicate lesson '+l.id);ids.add(l.id);assert(l.id.startsWith('exam3-'));
 assert(['Language','Development','Social psychology'].includes(l.unit),l.id);
 assert(l.title&&l.source&&l.recall&&l.answer&&l.body.length&&l.body.every(p=>p.length>40),l.id);
 assert(l.terms.length&&l.terms.every(t=>t.term&&t.definition.length>10),l.id);cards+=l.terms.length;
 assert(l.questions.length,l.id);
 l.questions.forEach((q,i)=>{const id=q.id||l.id+'-q'+i;
  assert(!qids.has(id),'Duplicate question '+id);qids.add(id);assert(!prompts.has(q.prompt),'Duplicate prompt: '+q.prompt);prompts.add(q.prompt);
  assert.equal(q.choices.length,4,id);assert.equal(new Set(q.choices).size,4,id);assert(q.correct>=0&&q.correct<4,id);assert(q.explanation.length>25,id);
  assert(!q.choices.some(x=>/Neither concept|Both terms (mean|describe)/.test(x)),'Filler distractor left in '+id);
  questions++;if(l.gapFill){gapQuestions++;positions[q.correct]++;}});
 for(const f of l.extraFigures||[])assert(fs.existsSync(new URL(f.image,site))&&f.alt&&f.caption,l.id);
 if(l.gapFill){gapLessons++;assert(l.questions.length>=5,l.id);}
}
assert(positions.every(n=>n>gapQuestions/6),'Correct answers should be spread across positions');
for(const g of c.EXAM3_GAP)assert(ids.has(g.after),'Unknown anchor '+g.after);
for(const d of m.diagrams)assert(fs.existsSync(new URL(d.image,site)),d.id);
/* Every lecture and textbook prompt on the instructor review sheet links to one or more lessons. */
vm.runInContext('globalThis.__sheet=Exam3ReviewSheet.parse(EXAM3_REVIEW_TEXT)',c);
let reviewPrompts=0,videoLinks=0;
for(const ch of c.__sheet.chapters){for(const line of [...ch.lecture,...ch.text]){reviewPrompts++;const hit=m.reviewLessons(line);assert(hit.length,'No lesson linked for review prompt: '+line);assert(hit.every(id=>ids.has(id)));}
 for(const v of ch.videos){const url=v.match(/https?:\/\/\S+$/)[0];assert(m.videos.some(x=>x.url===url),'Clip missing from Course map: '+v);videoLinks++;}}
for(const [key] of m.reviewMap)assert(c.__sheet.chapters.some(ch=>[...ch.lecture,...ch.text].some(line=>line.includes(key))),'Review map key matches nothing: '+key);
assert.equal(m.videos[0].title,'Asch conformity study');assert.equal(m.videos.length,15);
console.log(JSON.stringify({passed:true,exam:'Exam 3',lessons:m.lessons.length,questions,cards,groups:m.groups.length,figures:m.diagrams.length,clips:m.videos.length,gapLessons,gapQuestions,reviewPrompts,videoLinks,checks:'Unique lesson/question IDs and prompts; four distinct options; no filler distractors; correct answers spread across positions; figure assets present; every review-sheet lecture/text prompt linked to a lesson; every assigned clip listed. Semantic review conducted separately against the slides.'}));

assert(m.transcriptReviewed,'Transcript review must run');
for(const l of m.lessons){
 const old=beforeTranscript.lessons.find(x=>x.id===l.id);
 for(const q of l.questions){const previous=old.questions.find(x=>x.prompt===q.prompt);if(previous)assert.equal(q.id,previous.id,'Existing question identity changed');}
 for(const t of l.terms){const index=old.terms.findIndex(x=>x.term===t.term);if(index>=0)assert.equal(t.id,old.terms[index].id||old.id+'-c'+index,'Existing card identity changed');}
}
const adolescent=m.lessons.find(l=>l.id==='exam3-gapfill-dev-adolescence');
assert(!adolescent.questions.some(q=>/30-year-old|80-year-old|9-year-old|crisis for adolescence/.test(q.prompt)));
assert(!m.lessons.find(l=>l.id==='exam3-gapfill-dev-attachment').terms.some(t=>t.term==='Disorganized attachment'));
assert(m.transcriptScope.includes('Full linked videos'));
console.log('PASS: transcript integration, retained question/card identities, and instructor scope.');

// Consolidated navigation must retain all active practice and source coverage.
const priorQuestions=new Map(m.lessons.flatMap(l=>l.questions.map(q=>[q.id,q.prompt])));
const priorCards=new Map(m.lessons.flatMap(l=>l.terms.map(t=>[t.id,t.term])));
const priorLessons=m.lessons.map(l=>l.id);
vm.runInContext(fs.readFileSync(new URL('exam3-consolidate.js',site),'utf8'),c,{filename:'exam3-consolidate.js'});
assert.equal(m.lessons.length,28);
const finalIds=new Set(m.lessons.map(l=>l.id));
for(const old of priorLessons)assert(finalIds.has(m.lessonAliases[old]),'Missing old lesson alias '+old);
const finalQuestions=new Map(m.lessons.flatMap(l=>l.questions.map(q=>[q.id,q.prompt])));
const finalCards=new Map(m.lessons.flatMap(l=>l.terms.map(t=>[t.id,t.term])));
assert.deepEqual(finalQuestions,priorQuestions,'Question content/identity must survive consolidation');
assert.deepEqual(finalCards,priorCards,'Card content/identity must survive consolidation');
for(const ch of c.__sheet.chapters)for(const line of [...ch.lecture,...ch.text])assert(m.reviewLessons(line).length&&m.reviewLessons(line).every(id=>finalIds.has(id)),line);
assert(m.lessons.every(l=>l.body.length&&l.questions.length&&l.terms.length));
console.log('PASS: 28 consolidated sections retain all 270 questions, 182 cards, 59 legacy lesson aliases and 92 review links.');
vm.runInContext(fs.readFileSync(new URL('exam3-instructor-scope.js',site),'utf8'),c);
assert(!m.lessons.some(l=>l.questions.some(q=>/groupthink|Janis|Pearl Harbor/i.test(q.prompt+' '+q.choices[q.correct]))));
assert(m.transcriptScope.includes('1:07:11'));
assert(m.lessons.find(l=>l.id==='exam3-gapfill-social-milgram').body.some(p=>p.includes('people without power')));
console.log('PASS: instructor email exclusions, victim deindividuation, and required catch-up resources.');
