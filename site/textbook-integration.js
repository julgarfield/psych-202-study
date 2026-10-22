/* Apply textbook additions once, preserving existing indices and historical identities. */
(() => {
 'use strict';
 const data=TEXTBOOK_INTEGRATION;
 const source=chapter=>'Discovering Psychology · Chapter '+chapter+' · condensed notes reviewed October 20, 2026';
 const chapterSource=chapter=>TEXTBOOK_CHAPTERS.find(c=>c.number===chapter).source;
 for(const patch of data.patches){
  const lesson=EXAM2_CONTENT.lessons.find(l=>l.id===patch.id);
  if(!lesson)throw Error('Unknown textbook lesson '+patch.id);
  lesson.body.push(...patch.body);lesson.kind='combined';lesson.chapter=patch.chapter;
  lesson.textbookSource=source(patch.chapter);lesson.textbookUrl=chapterSource(patch.chapter);
  for(const term of patch.terms){if(!lesson.terms.some(t=>t.term.toLocaleLowerCase()===term.term.toLocaleLowerCase()))lesson.terms.push(term);}
  lesson.questions.push(...patch.questions);
 }
 for(const lesson of data.exam2){lesson.textbookSource=lesson.source;lesson.textbookUrl=chapterSource(lesson.chapter);EXAM2_CONTENT.lessons.push(lesson);}
 const unitOrder=['Emotion & motivation','Memory I','Memory II','Learning I','Learning II','Optional textbook enrichment'];
 EXAM2_CONTENT.lessons.sort((a,b)=>unitOrder.indexOf(a.unit)-unitOrder.indexOf(b.unit));
 EXAM2_CONTENT.sources.push({title:'Chapters 7–9 textbook summaries',file:'User-supplied original notes · reviewed October 20, 2026',textbook:true});
 globalThis.EXAM3_CONTENT={lessons:data.exam3,sources:[{title:'Chapter 10 · Thinking, Language, and Intelligence',file:'Discovering Psychology · supplied condensed notes · October 20, 2026',textbook:true}],groups:[],diagrams:[],videos:[]};
 for(const l of EXAM3_CONTENT.lessons){l.textbookSource=l.source;l.textbookUrl=chapterSource('10');}
 const reviewLinks={
 '7-text-1':['emotion-models'],'7-text-2':['textbook-emotion-biology'],'7-text-3':['textbook-emotion-biology'],
 '9-lecture-16':['memory-working-model'],'9-lecture-20':['memory2-emotion'],'9-lecture-29':['memory2-improvement'],
 '9-text-1':['memory2-reconstruction'],'9-text-2':['memory2-reconstruction'],'9-text-3':['memory2-decay-savings'],'9-text-4':['memory2-cortex-alzheimers'],
 '8-text-2':['learning1-conditioning-types'],'8-text-3':['learning1-conditioning-types'],'8-text-4':['learning1-acquisition-extinction'],
 '8-text-5':['learning1-acquisition-extinction'],'8-text-6':['learning1-aversions-triggers'],'8-text-7':['learning1-counterconditioning'],
 '8-text-8':['textbook-latent-learning'],'8-text-9':['textbook-latent-learning'],'8-text-10':['learning2-observation']
 };
 for(const [key,ids] of Object.entries(reviewLinks)){
  const topic=EXAM2_CONTENT.review.topics.find(t=>t.id==='exam2-review-'+key);
  topic.lessonIds=[...new Set([...topic.lessonIds,...ids.map(id=>'exam2-'+id)])];
  topic.status='covered';topic.note='The linked Learn lessons now integrate the supplied textbook explanations and original application practice. Condensed summaries do not replace every assigned-reader detail.';
 }
 const partial=EXAM2_CONTENT.review.topics.find(t=>t.id==='exam2-review-8-text-1');
 partial.lessonIds=['exam2-learning1-conditioning-types'];partial.status='partial';partial.note='Reflexes and instincts are explained in the linked lesson. Imprinting is named by the review sheet but not explained in the supplied summaries; revisit the assigned reader for that part.';
 // The existing grouping exercise now includes the textbook’s new term families.
 for(const [material,chapter] of [[EXAM2_CONTENT,'7'],[EXAM2_CONTENT,'8'],[EXAM2_CONTENT,'9'],[EXAM3_CONTENT,'10']]){
  const lessons=material.lessons.filter(l=>l.chapter===chapter&&l.examEligible!==false);
  const terms=lessons.flatMap(l=>l.terms.filter(t=>l.kind==='textbook'||data.patches.find(p=>p.id===l.id)?.terms.some(x=>x.term===t.term)));
  const unique=[...new Map(terms.map(t=>[t.term.toLowerCase(),t])).values()];
  if(unique.length)material.groups.push({title:'Chapter '+chapter+' · textbook distinctions',source:source(chapter),items:unique.map(t=>({name:t.term,function:t.definition}))});
 }
})();
