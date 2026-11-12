/* Exam 3 gap fill, November 12, 2026.
 * Audit of the five lecture decks and the instructor review sheet against the Exam 3 study space.
 *  1. Repairs: replaces filler distractors on 17 existing questions and fills in results that existing lessons left open.
 *     Lesson IDs, question IDs, prompts and correct answers are unchanged, so saved progress still lines up.
 *  2. Appends the lessons in exam3-gap-language.js, exam3-gap-development.js and exam3-gap-social.js,
 *     each placed after the lesson it extends. Every added lesson and question has its own ID.
 *  3. Adds recall groups, all 15 assigned clips, and a review-sheet → lesson map.
 * Content marked "background research" goes beyond the supplied slides and is labeled in the lesson source. */
(() => {
'use strict';
const m=globalThis.EXAM3_CONTENT,gap=globalThis.EXAM3_GAP||[];
if(!m||m.gapFilled)return;
m.gapFilled='2026-11-12';
const lesson=id=>m.lessons.find(l=>l.id===id);
const warn=msg=>{(m.gapWarnings ||= []).push(msg);};

/* ---------- 1. Repairs to existing lessons ---------- */
const distractors={
 'exam3-lecture-1-q0':['Phoneme','Syllable','Sentence'],
 'exam3-lecture-2-q0':['Behaviorist','Nativist','Linguistic relativity'],
 'exam3-lecture-3-q0':['Broca’s (expressive)','Wernicke’s (receptive)','Dyslexia'],
 'exam3-lecture-4-q0':['Participants’ later blank responses','The participants’ gender','The number of blanks in the task'],
 'exam3-lecture-5-q0':['Assimilation','Conservation','Object permanence'],
 'exam3-lecture-6-q0':['Food alone explains attachment','Infant reactivity predicts shyness','Children can delay gratification'],
 'exam3-lecture-7-q0':['Authoritarian','Permissive','Uninvolved'],
 'exam3-lecture-8-q0':['Preconventional','Conventional','Concrete operational'],
 'exam3-lecture-9-q0':['Fluid intelligence','Processing speed','Working memory capacity'],
 'exam3-lecture-10-q0':['A situational attribution','The self-serving bias','A just-world belief'],
 'exam3-lecture-11-q0':['Peripheral','Defensive avoidance','Foot-in-the-door'],
 'exam3-lecture-12-q0':['Prejudice','Discrimination','Stereotype threat'],
 'exam3-reader-1-q0':['Zygote period','Newborn period','Sensorimotor period'],
 'exam3-reader-2-q0':['Palmar grasp','Moro','Babinski'],
 'exam3-reader-3-q0':['Head to toe','Toe to head','Outside inward'],
 'exam3-reader-4-q0':['Object permanence','Accommodation','Conservation'],
 'exam3-reader-5-q0':['Situational attribution','Mere exposure effect','Self-serving bias']
};
for(const l of m.lessons)l.questions.forEach((q,i)=>{const d=distractors[q.id||l.id+'-q'+i];if(d&&q.correct===0)q.choices=[q.choices[0],...d];});
const pairing=lesson('exam3-social2-obedience')?.questions[1];
if(pairing?.choices?.[1]?.startsWith('Both terms'))pairing.choices=[pairing.choices[0],'Deindividuation is denying others human qualities; dehumanization is anonymity within a group','Both describe reduced effort on a group task','Deindividuation is obeying an authority; dehumanization is conforming to peers'];

const bodyFixes=[
 ['exam3-lecture-2','The lecture describes an especially sensitive period from late gestation through early childhood.','The lecture puts the sensitive period for language at about 7 months in utero to 6 years.'],
 ['exam3-lecture-2','Moon and colleagues compared newborn sucking responses to native and foreign vowel sounds, evidence consistent with prenatal experience.','Moon and colleagues (2013) found that newborns about 30 hours old sucked a pacifier more to foreign vowels than to native vowels, so the native sounds were already familiar from the womb.'],
 ['exam3-lecture-4','The slide identifies gender differences and changes after awareness of gender terms, but the supplied text alone does not specify the direction of every result; inspect the original graph and lecture for that detail.','Result: women used more gender-fair forms after merely reading the gender-fair text; men did so only after being made aware of the gender-fair terms.'],
 ['exam3-lecture-9','The slides include marital satisfaction and status graphs whose exact values and interpretation require visual review.','Life satisfaction is highest for married people and lowest for divorced or separated people. Marital satisfaction is U-shaped across the family life cycle: lowest with school-aged children and highest at retirement.'],
 ['exam3-lecture-11','Do not assume all corrections backfire or that the slide text establishes every result.','Result: none of the four messages increased intent to vaccinate, and correcting the autism myth lowered intent among the most skeptical parents.']
];
for(const [id,from,to] of bodyFixes){const l=lesson(id);if(!l){warn('Missing lesson '+id);continue;}const before=l.body.join('\n');l.body=l.body.map(p=>p.replace(from,to));if(l.body.join('\n')===before)warn('Body text not found in '+id);l.answer=l.body.join(' ');}
const anomic=lesson('exam3-lecture-3')?.terms.find(t=>t.term==='Anomic aphasia');
if(anomic)anomic.definition='Difficulty finding words; the lecture says especially for actions.';
const figureAnswers={
 'exam3-figure-koeser':'Independent variable: the wording of a fictional drug insert (gender-fair, masculine, no personal nouns, or another topic). Dependent variable: the number of gender-fair forms chosen in a later fill-in-the-blank task. Study 1: women used more gender-fair forms after the gender-fair text; men did not change. Study 2: men used more gender-fair forms only when made aware of the terms; women did so whether aware or not.',
 'exam3-figure-satisfaction-status':'Each bar shows the share of a marital-status group reporting very high, high, medium or low life satisfaction. Married people have the largest very-high share and the smallest low share; divorced or separated people have the reverse. The graph is correlational, so it cannot show that marital status causes the differences.'
};
for(const d of m.diagrams)if(figureAnswers[d.id])d.answer=figureAnswers[d.id];

/* ---------- 2. Added lessons ---------- */
let added=0,addedQuestions=0;
gap.forEach((g,n)=>{
 const id='exam3-gapfill-'+g.id;if(lesson(id))return;
 const questions=g.qs.map(([prompt,choices,explanation],i)=>{
  const at=(i+n)%4,rest=choices.slice(1),ordered=[...rest.slice(0,at),choices[0],...rest.slice(at)];
  return {id:id+'-q'+i,prompt,choices:ordered,correct:at,explanation,source:g.source,kind:g.kind||'lecture'};
 });
 const entry={id,unit:g.unit,title:g.title,kind:g.kind||'lecture',source:g.source,body:g.body,terms:g.terms.map(([term,definition])=>({term,definition})),questions,recall:g.recall,answer:g.answer||g.body.join(' '),examEligible:true,gapFill:true,...(g.extraFigures?{extraFigures:g.extraFigures}:{})};
 const index=m.lessons.findIndex(l=>l.id===g.after);
 if(index<0){warn('Anchor lesson not found for '+id);m.lessons.push(entry);}else m.lessons.splice(index+1,0,entry);
 added++;addedQuestions+=questions.length;
});
m.gapSummary={lessons:added,questions:addedQuestions};

/* ---------- 3. Recall groups ---------- */
const group=(title,source,items)=>m.groups.push({title,source,items:items.map(([name,fn])=>({name,function:fn}))});
group('Language milestones (lecture ages)','Language · slide 5',[['4–6 months','Babbling'],['10–12 months','First words'],['18 months','Vocabulary of 30–50 words'],['18–24 months','Use of basic grammar'],['Throughout','Comprehension develops before production']]);
group('Three theories of language development','Language · slides 18–21',[['Behaviorist (Skinner)','Operant conditioning. Problems: grammar is not actively taught; children generate novel sentences.'],['Nativist (Chomsky)','Innate capacity. Evidence: genetic dysphasia; feral children acquire some language skills.'],['Interactionist','Innate ability plus social interaction; experience in the sensitive period is essential.']]);
group('Language disorders','Language · slides 25–31',[['Broca’s aphasia','Expressive: comprehension spared, speech effortful.'],['Wernicke’s aphasia','Receptive: speech fluent but meaningless, comprehension impaired.'],['Anomic aphasia','Word-finding difficulty, especially with actions.'],['Stuttering','Repetition, prolongation of sounds, blocks; varies by context.'],['Dyslexia','Reading difficulty; a learning disorder; not associated with intelligence; genetic predisposition.']]);
group('Research studies to know: IV, DV, result','Exam 3 review sheet + lecture slides',[['Moon et al. (2013)','Newborns about 30 hours old; native versus foreign vowels; pacifier sucking. More sucking to foreign vowels, so native sounds were learned in the womb.'],['Gollan et al. (2014)','Bilinguals read single- and mixed-language paragraphs aloud. Intrusion errors in mixed paragraphs; reversed dominance (more errors in the dominant language).'],['Koeser et al. (2015)','IV: wording of a drug insert (gender-fair, masculine, two controls). DV: gender-fair forms in 10 blanks. Women increased after just reading; men only when made aware.'],['Nyhan et al. (2014)','IV: type of vaccine information (disease risk, autism correction, narrative danger, disease images). DV: intent to vaccinate a future child. None increased intent; correction backfired among the most skeptical.'],['Kagan','Infant reactivity to unfamiliar stimuli. High-reactive infants are more likely to be shy later.'],['Ainsworth','Strange Situation. Secure, avoidant, anxious-ambivalent; disorganized added later.'],['Harlow','Cloth versus wire surrogate mothers. Comfort matters more than food.'],['Mischel','Marshmallow test. Delay of gratification; distraction helps; correlates with adult behavior.'],['Sherif','Robbers Cave. Competition creates hostility; superordinate goals reduce it.'],['Asch (1951)','Line judgments. People conform to an obviously wrong unanimous group.'],['Zimbardo (1971)','Stanford Prison Study. People conform to assigned roles.'],['Milgram (1961)','65% gave the maximum shock; obedience depends on proximity of experimenter, proximity of learner, and peers.']]);
group('Piaget’s four stages','Development I · slides 9–16',[['Sensorimotor (birth–2)','Interaction with the environment; here and now. Milestone: object permanence.'],['Preoperational (2–6)','No internal mental operations; egocentrism; fails conservation.'],['Concrete operational (6–12)','Mental operations on concrete things; hands-on learning. Milestone: conservation.'],['Formal operational (12+)','Abstract concepts; problem solving beyond trial and error; "what if" questions.']]);
group('Attachment patterns (Strange Situation)','Development I · slides 24–25',[['Secure','Upset at separation, quickly comforted at reunion.'],['Avoidant','Little distress at separation; avoids the mother at reunion.'],['Anxious-ambivalent','Very distressed; seeks and resists contact at reunion.'],['Disorganized','Confused, contradictory behavior; added by later researchers.']]);
group('Parenting styles: regulation × support','Development I · slides 30–31',[['Authoritative','High behavioral regulation, high support.'],['Authoritarian','High behavioral regulation, low support.'],['Permissive','Low behavioral regulation, high support.'],['Uninvolved','Low behavioral regulation, low support.']]);
group('Kohlberg’s three levels','Development II · slides 11–13',[['Preconventional','Avoid punishment, gain reward.'],['Conventional','Social approval, rules, law and order.'],['Postconventional','Social contract and universal principles; right is not always the same as legal.'],['Criticisms','Justice over caring; male-only original samples; many may never reach postconventional.']]);
group('Erikson’s eight stages in order','Development II · slide 19',[['Infant–18 months','Trust vs. mistrust'],['18 months–3 years','Autonomy vs. shame and doubt'],['3–5 years','Initiative vs. guilt'],['5–13 years','Industry vs. inferiority'],['13–21 years','Identity vs. role confusion'],['21–39 years','Intimacy vs. isolation'],['40–65 years','Generativity vs. stagnation'],['65 and older','Ego integrity vs. despair']]);
group('Attribution errors and biases','Social Psychology I · slides 5–12',[['Correspondence bias','Overestimate dispositional and underestimate situational factors for others.'],['Fundamental attribution error','Complete failure to consider situational factors.'],['Actor–observer bias','Dispositional for others; situational for self.'],['Self-serving bias','Own successes dispositional; own failures situational.'],['Group-serving bias','Group’s successes dispositional; group’s failures situational.'],['Just-world belief','Good things happen to good people, bad to bad; leads to victim blaming.']]);
group('Conformity, compliance, obedience','Social Psychology II · slides 4–14',[['Conformity','Matching behavior and appearance to perceived social norms. Asch; Zimbardo.'],['Compliance','Agreeing to a request from someone with no perceived authority. Foot-in-the-door; door-in-the-face.'],['Obedience','Complying with a request from an authority figure. Milgram.']]);
group('Working in groups','Social Psychology II · slides 19–29',[['Social facilitation','Others’ presence improves simple or familiar tasks and worsens complex or unfamiliar ones.'],['Social loafing','Lower effort in a group than alone; less if the task is intrinsically enjoyable.'],['Group polarization','Discussion pushes members to more extreme positions in the direction they already leaned.'],['Groupthink','The group does not question its decisions critically; flawed decisions.'],['Deindividuation','Immersion in a group, leading to anonymity.'],['Dehumanization','Depriving a person or group of positive human qualities.']]);
group('Symptoms of groupthink (Janis)','Social Psychology II · slides 28–29',[['Morality','Unquestioned belief in the morality of the group; consequences ignored.'],['Rationalizing','Explaining away warnings that challenge the group’s assumptions.'],['Stereotyping','Stereotyping those who oppose the group.'],['Self-censorship','Withholding ideas that deviate from the apparent consensus.'],['Illusion of unanimity','Silence is viewed as agreement.']]);
group('Sternberg’s types of love','Textbook 13-9 · background research, check against the eText',[['Liking','Intimacy only'],['Infatuation','Passion only'],['Empty love','Commitment only'],['Romantic love','Intimacy + passion'],['Companionate love','Intimacy + commitment'],['Fatuous love','Passion + commitment'],['Consummate love','Intimacy + passion + commitment']]);

/* ---------- 4. Assigned clips (the first two entries keep their saved positions) ---------- */
const clip=(title,url,prompt,chapter)=>{if(!m.videos.some(v=>v.url===url))m.videos.push({title,url,prompt,source:'Exam 3 review sheet · '+chapter+' · contents not audited'});};
clip('Babbling twins','https://www.youtube.com/watch?v=_JmA2ClUvUY','Which features of conversation are present (turn-taking, intonation, gesture) and which are missing (words, grammar)?','Language');
clip('Feral children','https://www.youtube.com/watch?v=nv3ocntSSUU','Which children are described, what language did each recover, and what does that say about the sensitive period?','Language');
clip('Conservation of volume','http://go.wisc.edu/1f4o80','How does the child justify the answer before and after the liquid is poured? Which Piaget stage does each answer show?','Development');
clip('False belief test','https://www.youtube.com/watch?v=8hLubgpY2_w','Where does each child say the character will look, and what does the answer show about theory of mind?','Development');
clip('Kagan’s reactivity test','http://go.wisc.edu/403o2b','What stimuli are used, how do high- and low-reactive infants respond, and what is predicted for each?','Development');
clip('Strange situation test','http://go.wisc.edu/x378gm','Watch the reunion. Which attachment pattern does each child’s behavior fit?','Development');
clip('Harlow and attachment','http://go.wisc.edu/gv9e2y','Where does the infant monkey spend its time and where does it go when frightened? What does that say about food versus comfort?','Development');
clip('Marshmallow test','https://www.youtube.com/watch?v=QX_oy9614HQ','List the strategies the children who wait are using.','Development');
clip('Toy play experiment','https://www.youtube.com/watch?v=nWu44AqF0iI','Which toys do the adults offer, and what are they basing the choice on? Which side of the biological/social question is this evidence for?','Development');
clip('Moral reasoning','http://go.wisc.edu/kn8ujv','For each answer, name the Kohlberg level from the reason given, not from the yes or no.','Development');
clip('Fear appeal: anti-smoking ad','https://www.youtube.com/watch?v=5zWB4dLYChM','How does the ad create fear, and would you expect persuasion or defensive avoidance?','Social Psychology');
clip('Implicit Association Test','http://go.wisc.edu/9l25d4','What is being measured, and why does reaction time get around social desirability?','Social Psychology');
clip('Stereotype threat','http://go.wisc.edu/7s81b8','What primed the stereotype, what happened to performance, and what removed the effect?','Social Psychology');

/* ---------- 5. Review-sheet prompt → lessons ---------- */
const G='exam3-gapfill-';
m.reviewMap=[
 ['What are phonemes',[G+'language-milestones']],['basic definition of grammar',[G+'language-milestones']],['production and comprehension',[G+'language-milestones']],['milestones of language development',[G+'language-milestones']],['What is babbling',[G+'language-milestones']],['Do animals babble',[G+'language-milestones']],
 ['What is the sensitive period for language',[G+'language-sensitive-period']],['sensitive period starting before birth',[G+'language-sensitive-period']],['not exposed to language',[G+'language-sensitive-period']],['How is social interaction important',[G+'language-sensitive-period']],
 ['behaviorist, nativist and interactionist',[G+'language-theories']],['attentional interference and inhibition',[G+'language-adult']],['reversed dominance effect',[G+'language-adult']],
 ['What is aphasia',[G+'language-disorders']],['symptoms of stuttering',[G+'language-disorders']],['What is dyslexia',[G+'language-disorders']],['Koeser et al.',[G+'language-bias']],
 ['Are visual languages',[G+'language-text','exam3-text-language-networks']],['Whorf',[G+'language-text','exam3-text-language-relativity']],['Do animals use language',[G+'language-text','exam3-text-language-relativity']],['apes and parrots',[G+'language-text','exam3-text-language-relativity']],['statistical learning',[G+'language-text','exam3-text-language-learning']],['socioeconomic differences',[G+'language-text','exam3-text-language-learning']],['process multiple languages',[G+'language-text','exam3-text-language-networks']],
 ['What is a schema',[G+'dev-piaget']],['assimilation and accommodation',[G+'dev-piaget']],['four main stages',[G+'dev-piaget']],['object permanence',[G+'dev-piaget']],['conservation of mass',[G+'dev-piaget']],['criticisms of Piaget',[G+'dev-piaget']],
 ['What is Theory of Mind',[G+'dev-tom']],['false belief (Sally-Anne)',[G+'dev-tom']],
 ['What is temperament',[G+'dev-attachment']],['Kagan’s test for reactivity',[G+'dev-attachment']],['What is attachment',[G+'dev-attachment']],['four different attachment patterns',[G+'dev-attachment']],['Harlow’s tests',[G+'dev-attachment']],['Reactive Attachment Disorder',[G+'dev-attachment']],
 ['two dimensions of parenting',[G+'dev-parenting']],['Marshmallow Test',[G+'dev-parenting']],
 ['biological component to gender-role',[G+'dev-gender']],['social factors that influence gender-role',[G+'dev-gender']],
 ['Kohlberg’s stages',[G+'dev-kohlberg']],['criticisms of Kohlberg',[G+'dev-kohlberg']],
 ['brain development occur during adolescence',[G+'dev-adolescence']],['risky behavior',[G+'dev-adolescence']],['Erikson’s 8 stages',[G+'dev-adolescence']],
 ['life satisfaction vary',[G+'dev-adulthood']],['marital satisfaction vary',[G+'dev-adulthood']],['cognitive changes in late adulthood',[G+'dev-adulthood']],
 ['milestones of prenatal development',[G+'dev-text','exam3-reader-1']],['risks during prenatal development',[G+'dev-text','exam3-reader-1']],['reflexes of newborns',[G+'dev-text','exam3-reader-2']],['milestones during the newborn period',[G+'dev-text','exam3-reader-2']],['nervous system and motor development',[G+'dev-text','exam3-reader-3']],['Vygotsky',[G+'dev-text','exam3-reader-4']],['milestones during adolescence',[G+'dev-text','exam3-text-development-adolescence']],['changes during midlife',[G+'dev-text','exam3-text-development-adulthood']],
 ['What is attribution',[G+'social-attribution']],['errors and biases',[G+'social-attribution']],
 ['What are attitudes',[G+'social-attitudes']],['cognitive dissonance',[G+'social-attitudes']],
 ['Elaboration Likelihood Model',[G+'social-persuasion']],['fear appeal',[G+'social-persuasion']],['Nyhan et al.',[G+'social-persuasion']],
 ['difference between prejudice and stereotypes',[G+'social-prejudice']],['confirmation bias',[G+'social-prejudice']],['natural extension of general cognitive',[G+'social-prejudice']],['in-group favoritism',[G+'social-prejudice']],['Implicit Association Test (IAT)',[G+'social-prejudice']],['What is stereotype threat',[G+'social-prejudice']],
 ['What are social norms',[G+'social-conformity']],['conformity, compliance and obedience',[G+'social-conformity']],['classic Asch study',[G+'social-conformity']],['beneficial functions of conformity',[G+'social-conformity']],['techniques for compliance',[G+'social-conformity']],
 ['Milgram’s classic study',[G+'social-milgram']],['Abu Ghraib',[G+'social-milgram']],['What is deindividuation',[G+'social-milgram']],
 ['What is social facilitation',[G+'social-groups']],['What is social loafing',[G+'social-groups']],['What is group polarization',[G+'social-groups']],['What is groupthink',[G+'social-groups']],
 ['first impressions',[G+'social-text','exam3-reader-5']],['cultural differences in terms of attribution',[G+'social-text','exam3-text-social-attribution']],['effectiveness of persuasive messages',[G+'social-text','exam3-text-social-persuasion']],['reduce prejudice',[G+'social-text','exam3-text-social-prejudice']],['attraction and liking',[G+'social-text','exam3-text-social-relationships']],['mere exposure effect',[G+'social-text','exam3-text-social-relationships']],['attitude alignment',[G+'social-text','exam3-text-social-relationships']],['Sternberg',[G+'social-text','exam3-text-social-relationships']],['maintenance of relationships',[G+'social-text','exam3-text-social-relationships']]
];
m.reviewLessons=text=>(m.reviewMap.find(([key])=>text.includes(key))||[,[]])[1].filter(id=>lesson(id));

/* Each review-sheet question links straight to the lesson that answers it. */
const sheet=globalThis.Exam3ReviewSheet;
if(sheet&&!sheet.linked){
 const render=sheet.render;
 sheet.render=(root,esc)=>{
  render(root,esc);
  root.querySelectorAll('.review-questions li').forEach(li=>{
   const ids=m.reviewLessons(li.textContent);if(!ids.length)return;
   const span=document.createElement('span');span.className='review-links';
   for(const id of ids){const b=document.createElement('button');b.type='button';b.className='text-btn';b.textContent='Study: '+lesson(id).title;b.onclick=()=>globalThis.Exam3Study?.openLesson(id);span.append(b);}
   li.append(span);
  });
 };
 sheet.linked=true;
}
})();
