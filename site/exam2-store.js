/* Exam 2 owns a separate event stream; untagged historical events belong to Exam 1. */
function createExamStore(examId) {
  'use strict';
  const prefix='psych202-'+examId+'-v2:';
  let scope='guest',events=[],clock=Date.now(),ok=true;
  const belongs=e=>e?.examId===examId&&e.type!=='legacy'&&StudyProgress.validEvent(e)&&
    (e.type==='video'?/^\d+$/.test(e.target):e.target.startsWith(examId+'-'));
  function read(key){const raw=localStorage.getItem(key);return raw?StudyProgress.importEvents(JSON.parse(raw)).filter(belongs):[];}
  function persist(){try{const value=JSON.stringify({version:2,examId,events});if(localStorage.getItem(prefix+scope)!==value)localStorage.setItem(prefix+scope,value);ok=true;}catch{ok=false;}}
  function merge(incoming=[]){events=StudyProgress.merge(events,incoming.filter(belongs));persist();return state();}
  function state(){return StudyProgress.materialize(events);}
  function record(type,target,data={}){
    try{events=StudyProgress.merge(events,read(prefix+scope));}catch{ok=false;}
    clock=Math.max(Date.now(),clock+1,...events.slice(-1).map(e=>e.at+1));
    const e={...data,id:crypto.randomUUID(),at:clock,type,target,examId};
    if(!belongs(e))throw Error('Invalid exam progress event');
    merge([e]);if(typeof requestSync==='function')requestSync();return state();
  }
  function adopt(userId){
    scope=userId?'account:'+userId:'guest';events=[];
    try{
      events=read(prefix+scope);
      if(userId){const owner=localStorage.getItem(prefix+'guest-owner');if(!owner){localStorage.setItem(prefix+'guest-owner',userId);}if(!owner||owner===userId)events=StudyProgress.merge(events,read(prefix+'guest'));}
    }catch{ok=false;}
    persist();const study=globalThis[examId==='exam2'?'Exam2Study':'Exam3Study'];if(study)study.resetSession();return state();
  }
  function importFile(data){
    if(data?.version!==2||data.examId!==examId||!Array.isArray(data.events)||!data.events.every(belongs))throw Error('Choose an export for the selected exam. This file belongs to another exam or is invalid.');
    const incoming=StudyProgress.importEvents(data);
    try{const raw=localStorage.getItem(prefix+scope);if(raw!==null)localStorage.setItem(prefix+scope+':before-import:'+Date.now(),raw);}catch{ok=false;}
    return merge(incoming);
  }
  adopt(null);
  return {state,record,adopt,merge,importFile,belongs,events:()=>events,exportFile:()=>({version:2,examId,events,...state()}),storageOK:()=>ok,
    onStorage(key){if(key!==prefix+scope)return false;try{merge(read(key));return true;}catch{ok=false;return false;}}};
}
globalThis.Exam2Store=createExamStore('exam2');
globalThis.Exam3Store=createExamStore('exam3');
