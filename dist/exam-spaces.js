/* New exam material can be attached to the empty slots below without changing Exam 1 identities. */
(() => {
  'use strict';
  const emptyMaterial=()=>({lessons:[],questions:[],cards:[],groups:[],diagrams:[],labs:[],textbookSections:[],courseMap:[]});
  const exams=[
    {id:'exam1',label:'Exam 1',short:'EXAM 01',color:'Green',ink:'#122b36',accent:'#087963',mint:'#7ee3c0',paper:'#f5f8f8',soft:'#e9f3ee',muted:'#50666e',material:null},
    {id:'exam2',label:'Exam 2',short:'EXAM 02',color:'Blue',ink:'#183657',accent:'#205dad',mint:'#badbfd',paper:'#f4f7fc',soft:'#e8f0fa',muted:'#47617c',material:globalThis.EXAM2_CONTENT},
    {id:'exam3',label:'Exam 3',short:'EXAM 03',color:'Purple',ink:'#39244f',accent:'#7841a0',mint:'#dec9f0',paper:'#faf6fc',soft:'#f2e9f7',muted:'#6d597b',material:emptyMaterial()},
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
    document.querySelector('#examFormat').textContent=e.id==='exam1'?'56 multiple-choice questions':e.id==='exam2'?'Emotion & motivation · Memory I & II':'Material not yet added';
    document.querySelector('#examSelector').value=e.id;
  }
  function renderEmpty(root,id,mode,esc){
    const e=get(id);root.innerHTML=`<p class="eyebrow">${esc(e.label)} / ${esc(modeLabels[mode]||'Study')}</p><h1>${esc(modeLabels[mode]||'Study')}.</h1><section class="exam-empty"><span class="exam-empty-mark" aria-hidden="true">${e.id==='final'?'F':e.id.slice(-1)}</span><h2>No material added yet.</h2><p>This space is ready for ${esc(e.label.toLowerCase())}. Content will appear here when it is added.</p></section>`;
  }
  globalThis.ExamSpaces={exams,get,initial,remember,header,renderEmpty,modeLabels};
})();
