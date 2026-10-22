'use strict';
// The Worker derives ownership from Sites' trusted ChatGPT identity on every request.
const chapterStores=()=>[globalThis.Exam2Store,globalThis.Exam3Store].filter(Boolean);
let syncUser=null,syncGeneration=0,syncBusy=false,syncAgain=false,syncTimer=null,syncIdentityAttempt=0,syncMessage='Connecting your ChatGPT progress…',syncFailure='';
const offlineEdition=document.documentElement.dataset.offline==='true'||location.protocol==='file:';
function renderSync(){
  const el=$('#accountBar');if(!el)return;
  el.innerHTML=`<span class="sync-state" role="status">${esc(!progressStoreOK?'Device storage unavailable — export progress before leaving':offlineEdition?'Offline edition · progress stays on this device':!navigator.onLine?'Offline · changes stay on this device':syncMessage)}</span>${offlineEdition?'<span>Use export/import to move offline progress</span>':syncUser?`<span class="signed-user">Signed in with ChatGPT${syncUser.name||syncUser.email?' · '+esc(syncUser.name||syncUser.email):''}</span><button class="text-btn" id="syncNow">Sync now</button>`:syncFailure?'<button class="text-btn" id="syncNow">Retry sync</button>':''}${syncFailure?`<span class="bad-text">${esc(syncFailure)}</span>`:''}`;
  if($('#syncNow'))$('#syncNow').onclick=()=>requestSync(0);
}
async function progressAPI(path,data){
  const r=await fetch(path,{method:data?'POST':'GET',credentials:'same-origin',headers:data?{'Content-Type':'application/json'}:{},body:data?JSON.stringify(data):undefined,cache:'no-store'});
  let value;try{value=await r.json();}catch{throw Error('Could not read the sync response. Your progress is saved on this device.');}
  if(!r.ok)throw Object.assign(Error(value.error||'Could not sync. Your progress is saved on this device.'),{status:r.status});
  return value;
}
function adoptIdentity(next){
  if(next?.id===syncUser?.id){if(next)syncUser=next;return;}
  syncGeneration++;syncBusy=false;syncAgain=false;syncUser=next;syncFailure='';
  chapterStores().forEach(store=>store.adopt(next?.id||null));state=next?accountProgress(next.id):guestProgress();lessonId=lessons.some(l=>l.id===state.lastLesson)?state.lastLesson:lessons[0].id;
  quiz=null;cardDeck=[];cardIndex=0;diagramRound=null;clearInterval(quizInterval);syncMessage=next?'Signed in with ChatGPT · loading progress':'Saved on this device';render();renderSync();
}
async function refreshSyncIdentity(){
  const attempt=++syncIdentityAttempt;
  const {user}=await progressAPI('/api/progress/profile');
  if(attempt!==syncIdentityAttempt)return false;
  if(!user||typeof user.id!=='string'||!user.id||user.provider!=='chatgpt')throw Error('Could not verify your ChatGPT account. Reload to retry.');
  adoptIdentity(user);return true;
}
function requestSync(delay=700){if(offlineEdition)return;clearTimeout(syncTimer);syncTimer=setTimeout(syncProgress,delay);}
async function syncProgress(){
  if(offlineEdition)return;if(syncBusy){syncAgain=true;return;}if(!navigator.onLine){syncMessage='Offline · changes will sync when connected';renderSync();return;}
  if(!syncUser){try{if(!await refreshSyncIdentity())return;}catch(e){syncMessage='Saved on this device · sync needs retry';syncFailure=e.message;renderSync();return;}}
  const userId=syncUser.id,generation=syncGeneration,current=()=>syncUser?.id===userId&&syncGeneration===generation;syncBusy=true;syncMessage='Syncing…';syncFailure='';renderSync();
  try{
    let cloud=[],cursor='';
    while(true){
      const page=await progressAPI('/api/progress?account='+encodeURIComponent(userId)+'&after='+encodeURIComponent(cursor));if(!current())return;
      if(page.accountId!==userId)throw Object.assign(Error('ChatGPT account changed. Reconnecting progress…'),{status:409});
      if(!Array.isArray(page.events))throw Error('Could not read cloud progress. Retry sync.');
      cloud.push(...page.events);if(!page.nextCursor)break;if(typeof page.nextCursor!=='string'||page.nextCursor===cursor)throw Error('Could not continue loading progress. Retry sync.');cursor=page.nextCursor;
    }
    const old=StudyProgress.canonical(state),oldChapters=chapterStores().map(store=>StudyProgress.canonical(store.state())).join('|');
    state=mergeCloudEvents(cloud.map(row=>row.payload));chapterStores().forEach(store=>store.merge(cloud.map(row=>row.payload)));
    const remoteIds=new Set(cloud.map(row=>row.event_id)),pending=[...progressEvents,...chapterStores().flatMap(store=>store.events())].filter(e=>!remoteIds.has(e.id));
    // Keep both the number of events and the encoded request size bounded. Legacy
    // imports may contain one larger event; no snapshot can replace remote work.
    let batch=[],batchBytes=0;
    async function upload(){if(!batch.length||!current())return;const result=await progressAPI('/api/progress',{accountId:userId,events:batch});if(result.accountId!==userId)throw Object.assign(Error('ChatGPT account changed.'),{status:409});batch=[];batchBytes=0;}
    for(const event of pending){
      if(!current())return;const size=new TextEncoder().encode(JSON.stringify(event)).length;
      if(batch.length&&(batch.length>=100||batchBytes+size>2400000))await upload();if(!current())return;batch.push(event);batchBytes+=size;
    }
    await upload();if(!current())return;
    syncMessage='Synced with your ChatGPT account · '+new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'});
    if(old!==StudyProgress.canonical(state)||oldChapters!==chapterStores().map(store=>StudyProgress.canonical(store.state())).join('|')){if(!quiz){render();}else{sidebar();updateProgress();}}renderSync();
  }catch(e){
    if(current()){
      if(e.status===409){try{await refreshSyncIdentity();if(!current()){requestSync(0);return;}}catch{} }
      syncMessage='Saved on this device · sync needs retry';syncFailure=e.message||'Could not reach sync. Your progress is kept locally.';renderSync();
    }
  }finally{if(current()){syncBusy=false;if(syncAgain){syncAgain=false;requestSync(0);}}}
}
function startSync(){
  renderSync();if(offlineEdition)return;
  requestSync(0);setInterval(()=>requestSync(0),20000);
  window.addEventListener('online',()=>{renderSync();requestSync(0);});window.addEventListener('offline',renderSync);window.addEventListener('focus',()=>requestSync(0));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)requestSync(0);});
  window.addEventListener('storage',e=>{if(chapterStores().some(store=>store.onStorage(e.key))){if(['exam2','exam3'].includes(selectedExamId))render();requestSync();return;}if(e.key!==PROGRESS_PREFIX+progressScope)return;try{const incoming=readEnvelope(e.key);state=mergeCloudEvents(incoming);if(!quiz)render();else{sidebar();updateProgress();}requestSync();}catch{toast('Another tab’s progress could not be read. Export a recovery copy.');}});
}
startSync();
