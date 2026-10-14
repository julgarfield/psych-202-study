'use strict';
const LEGACY_KEY='psych202-exam1-v1',PROGRESS_PREFIX='psych202-exam1-v2:',BACKUP_KEY=LEGACY_KEY+':untouched-backup';
let progressScope='guest',progressEvents=[],progressStoreOK=true,progressClock=Date.now();
const exam1Event=e=>!e.examId||e.examId==='exam1';
function readEnvelope(key){const raw=localStorage.getItem(key);return raw?StudyProgress.importEvents(JSON.parse(raw)).filter(exam1Event):[];}
function preserveRaw(key,raw){if(raw!==null&&!localStorage.getItem(key))localStorage.setItem(key,raw);}
function initializeProgress(){
  try{
    const raw=localStorage.getItem(LEGACY_KEY);preserveRaw(BACKUP_KEY,raw);
    progressEvents=readEnvelope(PROGRESS_PREFIX+'guest');
    if(raw)progressEvents=StudyProgress.merge(progressEvents,StudyProgress.importEvents(JSON.parse(raw)));
    persistEvents();
  }catch(e){progressStoreOK=false;try{progressEvents=readEnvelope(PROGRESS_PREFIX+'guest');}catch{} }
  return StudyProgress.materialize(progressEvents);
}
function persistEvents(){try{localStorage.setItem(PROGRESS_PREFIX+progressScope,JSON.stringify({version:2,events:progressEvents}));progressStoreOK=true;}catch{progressStoreOK=false;}return progressStoreOK;}
function makeEvent(type,target,data={}){progressClock=Math.max(Date.now(),progressClock+1,...progressEvents.slice(-1).map(e=>e.at+1));return {id:crypto.randomUUID(),at:progressClock,type,target,...data};}
function appendProgress(type,target,data){try{progressEvents=StudyProgress.merge(progressEvents,readEnvelope(PROGRESS_PREFIX+progressScope));}catch{}progressEvents=StudyProgress.merge(progressEvents,[makeEvent(type,target,data)]);persistEvents();return StudyProgress.materialize(progressEvents);}
function commitProgress(next){
  // Compatibility adapter for the original app's save calls; emits only changes.
  const prev=StudyProgress.materialize(progressEvents),newEvents=[];
  for(const type of ['completed','videos']){const p=new Set(prev[type]),n=new Set(next[type]);for(const id of new Set([...p,...n]))if(p.has(id)!==n.has(id))newEvents.push(makeEvent(type==='completed'?'lesson':'video',String(id),{value:n.has(id)}));}
  for(const type of ['questions','diagrams'])for(const [id,q] of Object.entries(next[type]||{})){const p=prev[type][id];if(q.attempts>(p?.attempts||0))newEvents.push(makeEvent(type==='questions'?'answer':'diagram',id,{correct:!!q.lastCorrect}));}
  for(const [id,c] of Object.entries(next.cards||{})){const p=prev.cards[id];if(!p||p.streak!==c.streak||p.due!==c.due)newEvents.push(makeEvent('card',id,{streak:c.streak,due:c.due}));}
  if(next.lastLesson&&next.lastLesson!==prev.lastLesson)newEvents.push(makeEvent('lastLesson',next.lastLesson));
  // Pull changes from other tabs before persisting so their events survive.
  try{progressEvents=StudyProgress.merge(progressEvents,readEnvelope(PROGRESS_PREFIX+progressScope),newEvents);}catch{progressEvents=StudyProgress.merge(progressEvents,newEvents);}
  persistEvents();return StudyProgress.materialize(progressEvents);
}
function mergeProgressExport(s,raw){const imported=StudyProgress.importEvents(s);if((s.examId&&s.examId!=='exam1')||!imported.every(exam1Event))throw Error('This export belongs to another exam. Select that exam before importing.');const key=PROGRESS_PREFIX+progressScope;preserveRaw(key+':before-import:'+Date.now(),localStorage.getItem(key));if(s.version===1)preserveRaw(BACKUP_KEY,raw||JSON.stringify(s));progressEvents=StudyProgress.merge(progressEvents,imported);persistEvents();return StudyProgress.materialize(progressEvents);}
function accountProgress(userId){
  const scope='account:'+userId;let local=[];try{local=readEnvelope(PROGRESS_PREFIX+scope);const owner=localStorage.getItem(PROGRESS_PREFIX+'guest-owner');if(!owner){localStorage.setItem(PROGRESS_PREFIX+'guest-owner',userId);local=StudyProgress.merge(local,readEnvelope(PROGRESS_PREFIX+'guest'));}else if(owner===userId)local=StudyProgress.merge(local,readEnvelope(PROGRESS_PREFIX+'guest'));}catch{progressStoreOK=false;}
  progressScope=scope;progressEvents=local;persistEvents();return StudyProgress.materialize(progressEvents);
}
function guestProgress(){progressScope='guest';try{progressEvents=readEnvelope(PROGRESS_PREFIX+'guest');}catch{progressEvents=[];progressStoreOK=false;}return StudyProgress.materialize(progressEvents);}
function mergeCloudEvents(events){progressEvents=StudyProgress.merge(progressEvents,events.filter(exam1Event));persistEvents();return StudyProgress.materialize(progressEvents);}
