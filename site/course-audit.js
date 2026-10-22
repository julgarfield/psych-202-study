/* Add source-checked details without changing existing lesson or progress IDs. */
(() => {
 'use strict';
 const audit=COURSE_AUDIT_DATA,all=[...EXAM2_CONTENT.lessons,...EXAM3_CONTENT.lessons];
 for(const patch of audit.patches){
  const lesson=all.find(l=>l.id===patch.id);if(!lesson)throw Error('Unknown audited lesson '+patch.id);
  lesson.body.push(...patch.body);lesson.auditSource=patch.source+' · verified October 22, 2026';
  for(const term of patch.terms){if(!lesson.terms.some(t=>t.term.toLowerCase()===term.term.toLowerCase()))lesson.terms.push(term);}
  lesson.questions.push(...(patch.questions||[]));if(lesson.kind!=='textbook')lesson.kind='combined';
 }
 for(const [id,definitions] of Object.entries(audit.termUpgrades)){
  const lesson=all.find(l=>l.id===id);for(const term of lesson.terms)if(definitions[term.term])term.definition=definitions[term.term];
 }
 const cue=all.find(l=>l.id==='exam2-memory-cues-specificity');
 cue.body=cue.body.map(p=>p.includes('It supplies no passage, procedure or results, so those details are not added here.')?p.replace('It supplies no passage, procedure or results, so those details are not added here.','The lecture alone supplies no passage, procedure or results; the textbook addition now explains the laundry-schema comparison in the related organization lesson.'):p);
 const emotion=all.find(l=>l.id==='exam2-memory2-emotion');
 for(const term of emotion.terms)if(term.term==='Flashbulb memory')term.definition='Vivid memory of the circumstances in which important emotional news was learned; vividness does not guarantee accuracy.';
 const figures={
 'exam2-emotion-recognition':[{image:'assets/audit-fear-disgust.jpg',alt:'The lecture’s posed disgust and fear comparison: narrowed versus widened features, with a closed versus open mouth.',caption:'Emotion & Motivation slide 18 · Features of these displayed examples; not a diagnostic test.'}],
 'exam2-emotion-universality':[{image:'assets/audit-ekman-scenarios.jpg',alt:'Lecture cross-cultural expression example uses four emotion-eliciting scenarios.',caption:'Emotion & Motivation slide 11 · Situation-based expression prompts; no universal recognition rate supplied.'}],
 'exam2-emotion-reconciliation':[{image:'assets/audit-animal-disgust1.jpg',alt:'Photograph accompanying the lecture question about animals interpreting human disgust.',caption:'Emotion & Motivation slide 19 · Discussion prompt; no experimental result is supplied.'},{image:'assets/audit-animal-disgust2.jpg',alt:'Second illustration accompanying the open animal-disgust discussion.',caption:'Emotion & Motivation slide 19 · A photograph alone does not establish an animal’s interpretation.'}],
 'exam2-memory-ltm-organization':[{image:'assets/audit-hsam-testimonial.jpg',alt:'HSAM lecture illustration includes an early-infancy recollection testimonial.',caption:'Memory I slide 13 · The early-memory statement is a testimonial, not independently verified evidence of neonatal recall.'}]
 };
 for(const [id,items] of Object.entries(figures))all.find(l=>l.id===id).extraFigures=items;
 const reviewed=EXAM2_CONTENT.review.topics.find(t=>t.id==='exam2-review-8-text-1');
 reviewed.status='covered';reviewed.note='Reflexes, fixed action patterns, and imprinting are now explained in Learn with definitions and original practice, checked against the assigned Chapter 8.';
 const emotionReview=EXAM2_CONTENT.review.topics.find(t=>t.id==='exam2-review-9-lecture-21');
 emotionReview.lessonIds=[...new Set([...emotionReview.lessonIds,'exam2-memory2-emotion'])];emotionReview.note='Learn now adds the assigned text’s PTSD flashback and stress discussion. The source examples do not diagnose an individual or imply one effect of all stress.';
 const animal=EXAM2_CONTENT.review.topics.find(t=>t.id==='exam2-review-7-lecture-9');animal.lessonIds=['exam2-emotion-reconciliation'];animal.status='partial';animal.note='The slide’s question and photos are included, but the supplied deck contains no procedure or result that settles the question. Evaluate claims using additional study evidence.';
 // Expand the existing chapter notes, keeping lecture-only examples out of the textbook account.
 for(const c of TEXTBOOK_CHAPTERS){
  const additions=audit.patches.filter(p=>p.chapter===c.number&&/assigned textbook/i.test(p.source));
  const blocks=additions.flatMap(p=>p.body.map(text=>({type:'p',text})));if(blocks.length)c.sections.push({id:'textbook-'+c.number+'-source-check',title:'Additional mechanisms and research evidence · checked October 22',blocks});
 }
 globalThis.CourseSourceAudit={render(root,esc){root.innerHTML=`<section class="panel"><p class="eyebrow">SOURCE CHECK / OCTOBER 22, 2026</p><h2>Checked against your course export.</h2><p>All five supplied decks (166 slides) and all 87 review prompts were compared with the study path. The live assigned Chapter 7–10 reading sections and key-term lists were checked against the earlier condensed notes.</p><p>The audit adds missing distinctions and study evidence and corrects historical ratio IQ to (mental age ÷ chronological age) × 100. It also distinguishes endorsement of participation trophies from experimentally receiving them.</p><details><summary>What this check covers</summary><p>Slide text, speaker notes, instructional images and links, review scope, and textbook section coverage. Decorative slide images do not create additional lessons. Course-video links are retained; their complete video contents and every publisher assessment variant are outside this file-and-reading check. The slides’ open questions are not converted into invented research results.</p><p>Chapters 7, 9, and 8 remain in Exam 2. Chapter 10 remains in Exam 3. Motivation material excluded by the instructor remains optional enrichment. The site provides condensed study material rather than every sentence, original dataset, or incidental textbook example.</p></details></section>`;}};
})();
