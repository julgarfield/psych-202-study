import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const site=new URL('../site/',import.meta.url),ctx={};vm.createContext(ctx);
for(const name of ['exam2-content.js','textbook-content.js','textbook-integration-data.js'])vm.runInContext(fs.readFileSync(new URL(name,site),'utf8'),ctx);
const plain=x=>JSON.parse(JSON.stringify(x)),original=plain(ctx.EXAM2_CONTENT);
vm.runInContext(fs.readFileSync(new URL('textbook-integration.js',site),'utf8'),ctx);
let additions=0,newCards=0;const ids=new Set(),prompts=new Set();
for(const old of original.lessons){const l=ctx.EXAM2_CONTENT.lessons.find(l=>l.id===old.id);assert(l,'Removed lesson '+old.id);assert.deepEqual(plain(l.questions.slice(0,old.questions.length)),old.questions,'Historical question changed '+old.id);assert.deepEqual(plain(l.terms.slice(0,old.terms.length)),old.terms,'Historical card index changed '+old.id);assert.deepEqual(plain(l.body.slice(0,old.body.length)),old.body,'Original explanation removed '+old.id);}
for(const [exam,data] of [['exam2',ctx.EXAM2_CONTENT],['exam3',ctx.EXAM3_CONTENT]]){
 for(const l of data.lessons){assert(l.id.startsWith(exam+'-'));assert(!ids.has(l.id));ids.add(l.id);assert(l.body.length&&l.terms.length&&l.questions.length);const old=original.lessons.find(x=>x.id===l.id);newCards+=l.terms.length-(old?.terms.length||0);
  l.questions.forEach((q,i)=>{const id=q.id||l.id+'-q'+i;assert(id.startsWith(exam+'-'));assert(!ids.has(id),'Duplicate ID '+id);ids.add(id);assert(!prompts.has(q.prompt),'Duplicate prompt '+q.prompt);prompts.add(q.prompt);assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(q.correct>=0&&q.correct<4);assert(q.explanation.length>25);assert.equal(q.choiceExplanations.length,4);assert(q.choiceExplanations.every(x=>x.length>12));if(q.kind==='textbook'){additions++;assert(q.id&&q.source.includes('Chapter '+l.chapter));}});
 }
}
assert.equal(ctx.TEXTBOOK_INTEGRATION.patches.length,32);assert.equal(additions,56);assert.equal(ctx.EXAM3_CONTENT.lessons.length,9);
assert(ctx.EXAM2_CONTENT.lessons.filter(l=>l.examEligible===false).every(l=>l.unit==='Optional textbook enrichment'));
// Exercise the very selectors used by quick practice, mixed review, and cards.
ctx.selectedExamId='exam2';ctx.shuffled=a=>Array.from(a).reverse();
vm.runInContext(fs.readFileSync(new URL('exam2-study.js',site),'utf8').replace('globalThis.Exam2Study={','globalThis.testStudy={qs,cs,scopePool,balancedReview};globalThis.Exam2Study={'),ctx);
const pool=ctx.testStudy.scopePool(ctx.testStudy.qs()),cards=ctx.testStudy.scopePool(ctx.testStudy.cs()),mixed=ctx.testStudy.balancedReview(pool,20);
assert.equal(mixed.length,20);assert(mixed.some(q=>q.kind==='textbook'));assert(mixed.some(q=>q.kind==='lecture'));assert(pool.every(q=>q.examEligible));assert(cards.every(c=>c.examEligible));assert(mixed.every(q=>!q.lessonId.startsWith('exam3-')));
for(const old of original.lessons)for(let i=0;i<old.questions.length;i++)assert(pool.some(q=>q.id===old.id+'-q'+i),'Historical practice ID missing');
for(const t of ctx.EXAM2_CONTENT.review.topics)assert(t.lessonIds.every(id=>ctx.EXAM2_CONTENT.lessons.some(l=>l.id===id)));
assert.equal(ctx.EXAM2_CONTENT.review.topics.find(t=>t.id==='exam2-review-8-text-1').status,'partial');
console.log(JSON.stringify({passed:true,expandedLessons:32,newQuestions:additions,newFlashcards:newCards,exam2Lessons:ctx.EXAM2_CONTENT.lessons.length,exam2DefaultQuestions:pool.length,exam2DefaultCards:cards.length,exam3Lessons:9,exam3Questions:ctx.EXAM3_CONTENT.lessons.reduce((n,l)=>n+l.questions.length,0),mixedQuestions:mixed.length,checks:'Original descriptions, Q/card indices retained; original feedback unchanged; new IDs and answer feedback valid; mixed review includes textbook and lecture; optional enrichment excluded by default; review links valid.'}));
