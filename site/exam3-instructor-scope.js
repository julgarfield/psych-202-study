/* Instructor's post-Nov.12 clarification, supplied by the student Nov.14. */
(() => {
const m=globalThis.EXAM3_CONTENT;if(!m)return;
const source='Instructor email supplied November 14 · Social Psychology II scope';
const groups=m.lessons.find(l=>l.id==='exam3-gapfill-social-groups');
const obedience=m.lessons.find(l=>l.id==='exam3-gapfill-social-milgram');
const excluded=/groupthink|Janis|self-censorship|illusion of unanimity|rationalizing warnings|Pearl Harbor/i;
for(const l of m.lessons){
 l.body=l.body.filter(p=>!excluded.test(p));
 l.terms=l.terms.filter(t=>!excluded.test(t.term+' '+t.definition));
 l.questions=l.questions.filter(q=>!excluded.test(q.prompt+' '+q.choices[q.correct]+' '+q.explanation));
 if(excluded.test(l.recall))l.recall='Explain when social facilitation helps or hurts, how social loafing changes with other factors, and how discussion produces group polarization.';
 l.title=l.title.replace(/,?\s*(?:and )?groupthink/i,'').replace(/:\s*$/,'');
}
for(const g of m.groups)g.items=g.items.filter(t=>!excluded.test(t.name+' '+t.function));
m.diagrams=m.diagrams.filter(d=>!excluded.test(d.title+' '+d.prompt));
groups.title='Working in groups: facilitation, loafing and polarization';
groups.body.push('Instructor clarification: Slides 19–24 are required. Understand task difficulty and familiarity in social facilitation, factors affecting social loafing, and group polarization. Groupthink (Slides 25–29) is explicitly excluded from Exam 3.');
groups.source+=' · '+source;
obedience.body.push('Instructor clarification: deindividuation can involve perpetrators (for example anonymous online abuse or crowd behavior) and people without power. Reducing victims to numbers rather than names, including concentration-camp number tattoos or prisoner numbers, can erase individuality and make mistreatment easier. Dehumanization uses language or actions to deny humanity, such as comparing a group to animals. These processes can overlap; deindividuation is not restricted to the person doing harm.','Slide 18 takeaway: we should not assume we are immune to obedience pressures. The instructor uses the recurrence of atrocities after the Holocaust to emphasize why understanding these processes matters; the findings do not mean every individual inevitably obeys.','Required catch-up: watch the November 12 LECTURE 1 recording from 1:07:11 to the end (through Slide 16), the clip linked on Slide 17, and the assigned CNN Abu Ghraib article before the exam. The instructor also expects textbook study of these concepts. The recording segment has not been supplied here, so these notes do not claim to summarize it.');
obedience.body.push('Assigned CNN reading (student-supplied text, updated March 9, 2026): Abu Ghraib was a US Army detention facility in Iraq. Photos of abuse in 2003 prompted an investigation after Joseph Darby reported them in January 2004; publication of photographs in April brought widespread attention. The documented treatment included physical abuse, forced nudity, humiliation and intimidation with dogs. Eleven US soldiers were convicted, and investigations also raised responsibility higher in the chain of command.','Apply the concepts: stripping prisoners of individuality and humiliating them can illustrate deindividuation and dehumanization; authority structures and guard roles connect to obedience and conformity. These are psychological interpretations of the case, not proof that one process explains every act or excuses responsibility. Darby’s reporting also shows that not everyone simply went along. Focus on connecting evidence to the concepts; the instructor has not specified which timeline dates or individual names must be memorized.');
obedience.source+=' · Assigned CNN article, supplied text updated March 9, 2026';
obedience.source+=' · '+source;
// Retire two narrow questions that conflict with the instructor's expanded definition.
obedience.questions=obedience.questions.filter(q=>!/Prison guards refer to detainees|How do deindividuation and dehumanization differ/.test(q.prompt));
obedience.questions.push({id:obedience.id+'-email-victim-identity',prompt:'According to the instructor, replacing prisoners’ names with numbers can illustrate which process?',choices:['Deindividuation of people without power','Only the anonymity of perpetrators','Social loafing on a shared task','Social facilitation of a familiar skill'],correct:0,explanation:'The email explicitly extends deindividuation to victims whose individuality is stripped away; this can make harming them easier.',source});
for(const l of m.lessons){
 for(const t of l.terms)if(/^Deindividuation/i.test(t.term))t.definition='Loss or stripping of individual identity: may involve anonymous perpetrators or victims reduced to numbers; can facilitate mistreatment.';
 l.answer=l.body.join(' ');
}
for(const g of m.groups)for(const t of g.items)if(t.name==='Deindividuation')t.function='Loss or stripping of individuality, involving perpetrators or victims; not restricted to anonymity of the actor.';
m.transcriptScope='Instructor clarification: Social Psychology II Slides 1–24 are included; groupthink, Slides 25–29, is excluded. Everyone must watch November 12 LECTURE 1 from 1:07:11 to the end, the Slide 17 clip, and read the CNN Abu Ghraib article before the exam. Continue studying the textbook concepts. Other videos are limited to class-shown portions unless specifically assigned here.';
m.requiredScopeLinks=[{title:'Required CNN Abu Ghraib reading',url:'https://www.cnn.com/2013/10/30/world/meast/iraq-prison-abuse-scandal-fast-facts/index.html'},{title:'Slide 17 clip: Milgram, Zimbardo and Abu Ghraib',url:'http://go.wisc.edu/h0z72g'},{title:'Dehumanization examples: Language section',url:'https://en.wikipedia.org/wiki/Dehumanization#Language'}];
const sheet=globalThis.Exam3ReviewSheet;if(sheet){const render=sheet.render;sheet.render=(root,esc)=>{render(root,esc);for(const li of root.querySelectorAll('.review-questions li'))if(/groupthink/i.test(li.textContent)){li.querySelector('.review-links')?.remove();li.append(document.createTextNode(' — Excluded by the instructor’s later email; skip Slides 25–29.'));}};}
})();
