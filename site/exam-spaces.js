/* New exam material can be attached to the empty slots below without changing Exam 1 identities. */
(() => {
  'use strict';
  const emptyMaterial=()=>({lessons:[],questions:[],cards:[],groups:[],diagrams:[],labs:[],textbookSections:[],courseMap:[]});
  const exams=[
    {id:'exam1',label:'Exam 1',short:'EXAM 01',color:'Green',ink:'#122b36',accent:'#087963',mint:'#7ee3c0',paper:'#f5f8f8',soft:'#e9f3ee',muted:'#50666e',material:null},
    {id:'exam2',label:'Exam 2',short:'EXAM 02',color:'Blue',ink:'#183657',accent:'#205dad',mint:'#badbfd',paper:'#f4f7fc',soft:'#e8f0fa',muted:'#47617c',material:globalThis.EXAM2_CONTENT},
    {id:'exam3',label:'Exam 3',short:'EXAM 03',color:'Purple',ink:'#39244f',accent:'#7841a0',mint:'#dec9f0',paper:'#faf6fc',soft:'#f2e9f7',muted:'#6d597b',material:globalThis.EXAM3_CONTENT},
    {id:'final',label:'Final exam',short:'FINAL EXAM',color:'Amber',ink:'#4a331c',accent:'#9b4d09',mint:'#ffd48f',paper:'#fcf8f1',soft:'#fbefd9',muted:'#735c45',material:emptyMaterial()}
  ];
  const modeLabels={learn:'Learn',cards:'Flashcards',groups:'Groups & functions',practice:'Practice',diagrams:'Diagrams',labs:'Interactive lab',reference:'Textbook notes',coverage:'Course map'};
  const key='psych202-selected-exam';
  const dates={exam1:'Tuesday, October 6',exam2:'Tuesday, October 27',exam3:'Tuesday, November 17',final:'Monday, December 14'};
  const get=id=>exams.find(e=>e.id===id)||exams[0];
  function initial(){try{return get(localStorage.getItem(key)).id;}catch{return 'exam1';}}
  function remember(id){try{localStorage.setItem(key,get(id).id);}catch{}}
  function header(id){
    const e=get(id),root=document.documentElement;root.dataset.exam=e.id;
    for(const k of ['ink','accent','mint','paper','soft','muted'])root.style.setProperty('--'+k,e[k]);
    document.querySelector('meta[name="theme-color"]').content=e.ink;
    document.title='Psych 202 · '+e.label+' Study Lab';
    document.querySelector('#courseLabel').textContent='PSYCH 202 / '+e.short;
    document.querySelector('#examDate').textContent=dates[e.id];
    document.querySelector('#examFormat').textContent=e.id==='exam1'?'56 multiple-choice questions':e.id==='exam2'?'Emotion & motivation · Memory I & II · Learning I & II':e.id==='exam3'?'Chapter 10 · Thinking, language & intelligence':'Material not yet added';
    document.querySelector('#examSelector').value=e.id;
  }
  function renderEmpty(root,id,mode,esc){
    const e=get(id);root.innerHTML=`<p class="eyebrow">${esc(e.label)} / ${esc(modeLabels[mode]||'Study')}</p><h1>${esc(modeLabels[mode]||'Study')}.</h1><section class="exam-empty"><span class="exam-empty-mark" aria-hidden="true">${e.id==='final'?'F':e.id.slice(-1)}</span><h2>${e.id==='exam3'?'Lecture material not yet added.':'No material added yet.'}</h2>${e.id==='exam3'?'<p>Chapter 10 textbook summaries and original self-checks are available in Textbook notes.</p><button class="btn secondary" data-view="reference">Read Chapter 10</button>':''}<p>This space is ready for ${esc(e.label.toLowerCase())}. Content will appear here when it is added.</p></section>`;
  }
  /* Lesson paragraphs as escaped HTML, bolding each glossary term the first time it appears. */
  function paragraphs(body,terms,esc){
    const marks=body.map(()=>[]),free=(i,a,b)=>marks[i].every(([x,y])=>b<=x||a>=y);
    const forms=t=>{const m=t.match(/^(.+?)\s*\((.+)\)$/);return m?[t,m[1],m[2]]:[t];};
    const groups=t=>t.split(/\s+(?:versus|vs\.?|\/|→|and)\s+/).filter(p=>p.length>2).map(forms);
    const quote=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const all=(terms||[]).flatMap(t=>[forms(t.term),...(groups(t.term).length>1?groups(t.term):[])]);
    for(const group of all.sort((a,b)=>b[0].length-a[0].length)){
      found:for(const form of group){
        const stem=/[^aeiou]y$/i.test(form)?quote(form.slice(0,-1))+'(?:y|ies)':quote(form)+'(?:s|es)?';
        const re=new RegExp('(?<![\\p{L}\\p{N}])'+stem+'(?![\\p{L}\\p{N}])',/^[^a-z]*[A-Z]{2}[^a-z]*$/.test(form)?'gu':'giu');
        for(let i=0;i<body.length;i++)for(const m of body[i].matchAll(re)){const a=m.index,b=a+m[0].length;if(free(i,a,b)){marks[i].push([a,b]);break found;}}
      }
    }
    return body.map((p,i)=>{let out='',at=0;for(const [a,b] of marks[i].sort((x,y)=>x[0]-y[0])){out+=esc(p.slice(at,a))+'<strong>'+esc(p.slice(a,b))+'</strong>';at=b;}return '<p>'+out+esc(p.slice(at))+'</p>';}).join('');
  }
  globalThis.ExamSpaces={exams,get,initial,remember,header,renderEmpty,modeLabels,paragraphs};
})();
