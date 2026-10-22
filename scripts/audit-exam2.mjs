import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const context={};vm.createContext(context);vm.runInContext(fs.readFileSync(new URL('../site/exam2-content.js',import.meta.url),'utf8'),context);
const d=context.EXAM2_CONTENT,ids=new Set(),prompts=new Set();let questions=0,cards=0;
assert.deepEqual(Array.from(d.sources.filter(s=>s.slides),s=>s.slides),[39,29,30,28,40]);
for(const l of d.lessons){
 assert(l.id.startsWith('exam2-'));assert(!ids.has(l.id));ids.add(l.id);assert(l.title&&l.body.length>=2&&l.terms.length>0&&l.recall&&l.answer);assert(/\.pptx · slides?/.test(l.source));assert(['Emotion & motivation','Memory I','Memory II','Learning I','Learning II'].includes(l.unit));
 for(const q of l.questions){assert(q.prompt&&q.choices.length===4);assert(new Set(q.choices).size===4);assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert(q.explanation.length>25);assert(q.choiceExplanations?.length===4);assert(q.choiceExplanations.every(x=>typeof x==='string'&&x.length>12));assert(q.misconception);assert(!prompts.has(q.prompt),'Duplicate question '+q.prompt);prompts.add(q.prompt);assert(q.choices.filter(c=>/\bonly\b/i.test(c)).length<3,'Three-only giveaway');questions++;}
 cards+=l.terms.length;
 if(l.figure)assert(fs.existsSync(new URL('../site/'+l.figure,import.meta.url)));
}
for(const g of d.groups){assert(g.title&&g.source&&g.items.length>=2);g.items.forEach(x=>assert(x.name&&x.function));}
for(const f of d.diagrams){assert(f.id.startsWith('exam2-')&&f.alt&&f.answer&&f.source);assert(fs.existsSync(new URL('../site/'+f.image,import.meta.url)));assert(f.question.choices.length===4);}
assert(d.lessons.length>=16&&questions>=60&&d.groups.length>=6);
assert.equal(d.review.topics.length,87);assert.equal(new Set(d.review.topics.map(t=>t.id)).size,87);
for(const t of d.review.topics){assert(t.id.startsWith('exam2-review-'));assert(['covered','partial','pending'].includes(t.status));assert(['7','8','9'].includes(t.chapter));assert(t.prompt&&t.note);assert(t.lessonIds.every(id=>ids.has(id)));if(t.status==='covered')assert(t.lessonIds.length);}
const learning=d.lessons.filter(l=>l.unit==='Learning I');
assert.equal(learning.length,9);
assert.equal(learning.reduce((n,l)=>n+l.questions.length,0),36);
const firstLearningII=d.lessons.findIndex(l=>l.unit==='Learning II');
assert.equal(d.lessons[firstLearningII-10].unit,'Memory II');
assert(d.lessons.slice(firstLearningII-9,firstLearningII).every(l=>l.unit==='Learning I'));
const learningII=d.lessons.slice(firstLearningII);
assert.equal(learningII.length,11);assert(learningII.every(l=>l.unit==='Learning II'&&l.id.startsWith('exam2-learning2-')&&l.source.startsWith('202 F26 Learning II Student Copy.pptx')));
assert.equal(learningII.reduce((n,l)=>n+l.questions.length,0),48);
assert.equal(d.diagrams.filter(f=>f.id.startsWith('exam2-figure-learning2-')).length,3);
for(const l of learning){assert(l.id.startsWith('exam2-learning1-'));assert(l.source.startsWith('202 F26 Learning I Student Copy.pptx'));}
for(let n=1;n<=10;n++){const t=d.review.topics.find(t=>t.id==='exam2-review-8-lecture-'+n);assert.equal(t.status,'covered');assert(t.lessonIds.every(id=>id.startsWith('exam2-learning1-')));}
for(let n=11;n<=23;n++){const t=d.review.topics.find(t=>t.id==='exam2-review-8-lecture-'+n);assert.equal(t.status,'covered');assert(t.lessonIds.every(id=>id.startsWith('exam2-learning2-')));}
assert.equal(d.diagrams.filter(f=>f.id.startsWith('exam2-figure-learning1-')).length,3);
console.log(JSON.stringify({passed:true,exam:'Exam 2',decks:5,slides:166,lessons:d.lessons.length,questions,cards,groups:d.groups.length,figures:d.diagrams.length,reviewPrompts:d.review.topics.length,checks:'Source references, distinct Exam 2 IDs, question/feedback shape, unique prompts/options, no three-only pattern, local figure assets, and complete review-prompt coverage with valid lesson links. Source-based semantic review conducted separately.'}));
