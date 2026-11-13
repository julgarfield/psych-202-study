/* Consolidate overlapping navigation entries; retain every active question/card ID.
 * Old lesson IDs remain aliases for review links and historical navigation. */
(() => {
const m=globalThis.EXAM3_CONTENT;if(!m||m.consolidated)return;
const G='exam3-gapfill-',L='exam3-lecture-',T='exam3-text-';
const sets=[
[G+'language-milestones',[L+1,'exam3-textbook-language-structure']],
[G+'language-sensitive-period',[L+2]],
[G+'language-theories',[]],
[G+'language-adult',[L+3,T+'language-networks']],
[G+'language-disorders',[]],
[G+'language-bias',[L+4]],
[G+'language-text',['exam3-textbook-language-learning',T+'language-relativity',T+'language-learning']],
[G+'dev-piaget',[L+5]],
[G+'dev-tom',[]],
[G+'dev-attachment',[L+6]],
[G+'dev-parenting',[L+7]],
[G+'dev-gender',[L+8]],
[G+'dev-kohlberg',[T+'development-moral']],
[G+'dev-adolescence',[T+'development-adolescence']],
[G+'dev-adulthood',[L+9,T+'development-adulthood']],
['exam3-reader-1',[]],['exam3-reader-2',[]],['exam3-reader-3',[]],['exam3-reader-4',[]],
[G+'social-attribution',[L+10,T+'social-attribution']],
[G+'social-attitudes',[L+11]],
[G+'social-persuasion',[T+'social-persuasion']],
[G+'social-prejudice',[L+12,T+'social-prejudice']],
[G+'social-conformity',['exam3-social2-norms','exam3-social2-compliance',T+'social-influence']],
[G+'social-milgram',['exam3-social2-obedience']],
[G+'social-groups',['exam3-social2-groups',T+'social-groups']],
['exam3-reader-5',[]],[T+'social-relationships',[]]
];
const byId=new Map(m.lessons.map(l=>[l.id,l]));
// Omnibus textbook prompt packs repeat subjects now covered in focused topics.
// Distribute their paragraphs and practice by subject instead of keeping another section.
const distribute=(id,targets)=>{
 const l=byId.get(id);if(!l)return;
 const pick=text=>targets.find(([re])=>re.test(text))?.[1]||targets.at(-1)[1];
 for(const p of l.body)byId.get(pick(p)).body.push(p);
 for(const q of l.questions)byId.get(pick(q.prompt)).questions.push(q);
 for(const t of l.terms)byId.get(pick(t.term)).terms.push(t);
 m.lessonAliases[id]=targets.at(-1)[1];
};
m.lessonAliases={};
distribute(G+'dev-text',[[/prenatal|zygote|embryo|fetus|teratogen|alcohol|down syndrome/i,'exam3-reader-1'],[/newborn|reflex|rooting|moro|babinski/i,'exam3-reader-2'],[/motor|myelin|cephalocaudal|proximodistal/i,'exam3-reader-3'],[/vygotsky|scaffold|proximal/i,'exam3-reader-4'],[/adolescen|puberty/i,G+'dev-adolescence'],[/midlife|late adult|menopause|aging/i,G+'dev-adulthood']]);
distribute(G+'social-text',[[/first impression|halo|thin slice/i,'exam3-reader-5'],[/cultur.*attribution|individualistic|collectivistic/i,G+'social-attribution'],[/persuas|two-sided/i,G+'social-persuasion'],[/prejudice|contact between/i,G+'social-prejudice'],[/attraction|liking|exposure|alignment|sternberg|love|relationship|partner|gottman/i,T+'social-relationships']]);
const merged=[];
for(const [id,others] of sets){
 const primary=byId.get(id);if(!primary)throw Error('Missing consolidation target '+id);
 const members=[primary,...others.map(x=>byId.get(x))];
 for(const l of members){if(!l)throw Error('Missing consolidation member');m.lessonAliases[l.id]=id;}
 // Expanded lecture lessons replace the short legacy overview prose; questions and
 // cards from those overviews remain available with their original identities.
 primary.body=[...new Set(members.flatMap(l=>l!==primary&&/^exam3-lecture-/.test(l.id)?[]:l.body))];
 primary.questions=members.flatMap(l=>l.questions);
 primary.terms=members.flatMap(l=>l.terms);
 primary.source=[...new Set(members.map(l=>l.source))].join(' · ');
 primary.kind=members.some(l=>l.kind==='textbook')&&members.some(l=>l.kind!=='textbook')?'combined':primary.kind;
 primary.previousLessonIds=members.map(l=>l.id);
 primary.answer=primary.body.join(' ');
 merged.push(primary);
}
for(const l of m.lessons)if(!(l.id in m.lessonAliases))throw Error('Unassigned lesson '+l.id);
m.lessons=merged;
for(const row of m.reviewMap)row[1]=[...new Set(row[1].map(id=>m.lessonAliases[id]||id))];
m.reviewLessons=text=>(m.reviewMap.find(([key])=>text.includes(key))||[,[]])[1].filter(id=>m.lessons.some(l=>l.id===id));
m.consolidated=true;
})();
