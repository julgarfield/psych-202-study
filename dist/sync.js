'use strict';
let syncClient=null,syncUser=null,syncGeneration=0,syncBusy=false,syncAgain=false,syncTimer=null,syncMessage='Saved on this device',syncFailure='',signInOpen=false;
const offlineEdition=document.documentElement.dataset.offline==='true'||location.protocol==='file:';
function renderSync(){
  const el=$('#accountBar');if(!el)return;
  el.innerHTML=`<span class="sync-state" role="status">${esc(!progressStoreOK?'Device storage unavailable — export progress before leaving':!navigator.onLine?'Offline · changes stay on this device':syncMessage)}</span>${syncUser?`<span class="signed-user">${esc(syncUser.email||'Signed in')}</span><button class="text-btn" id="syncNow">Sync now</button><button class="text-btn" id="signOut">Sign out</button>`:!offlineEdition?'<button class="text-btn" id="openSignIn">Sign in to sync laptop & phone</button>':'<span>Offline edition · use export/import to move progress</span>'}${signInOpen&&!syncUser?`<form id="signInForm"><label>Email<input id="syncEmail" type="email" autocomplete="email" required placeholder="you@example.com"></label><button class="btn" type="submit">Email sign-in link</button><button class="text-btn" type="button" id="closeSignIn">Close</button><p class="subtle">Open the email link in the browser you want to use. Your existing device progress is backed up and merged on first sign-in.</p><p class="subtle" id="signInResult" role="status"></p></form>`:''}${syncFailure?`<span class="bad-text">${esc(syncFailure)}</span>`:''}`;
  if($('#openSignIn'))$('#openSignIn').onclick=()=>{signInOpen=true;renderSync();$('#syncEmail').focus();};
  if($('#closeSignIn'))$('#closeSignIn').onclick=()=>{signInOpen=false;renderSync();};
  if($('#signInForm'))$('#signInForm').onsubmit=async e=>{e.preventDefault();if(!syncClient){$('#signInResult').textContent='Sign-in is temporarily unavailable. Your local progress is saved.';return;}const email=$('#syncEmail').value.trim(),btn=e.target.querySelector('[type=submit]');btn.disabled=true;try{const {error}=await syncClient.auth.signInWithOtp({email,options:{emailRedirectTo:SYNC_CONFIG.redirect,shouldCreateUser:true}});$('#signInResult').textContent=error?error.message:'Check your email for the sign-in link. Open it on this device to finish.';}catch{$('#signInResult').textContent='Could not reach sign-in. Check your connection and try again.';}btn.disabled=false;};
  if($('#syncNow'))$('#syncNow').onclick=()=>requestSync(0);
  if($('#signOut'))$('#signOut').onclick=async()=>{const {error}=await syncClient.auth.signOut({scope:'local'});if(error){syncFailure='Sign-out failed. Please retry.';renderSync();}};
}
function adoptSession(session){
  const next=session?.user||null;if(next?.id===syncUser?.id){if(next)requestSync(0);return;}
  syncGeneration++;syncBusy=false;syncAgain=false;syncUser=next;syncFailure='';signInOpen=false;
  if(globalThis.Exam2Store)Exam2Store.adopt(next?.id||null);state=next?accountProgress(next.id):guestProgress();lessonId=lessons.some(l=>l.id===state.lastLesson)?state.lastLesson:lessons[0].id;
  quiz=null;cardDeck=[];cardIndex=0;diagramRound=null;clearInterval(quizInterval);syncMessage=next?'Signed in · loading cloud progress':'Saved on this device';render();renderSync();if(next)requestSync(0);
}
function requestSync(delay=700){if(offlineEdition||!syncUser)return;clearTimeout(syncTimer);syncTimer=setTimeout(syncProgress,delay);}
async function syncProgress(){
  if(!syncUser||offlineEdition)return;if(syncBusy){syncAgain=true;return;}if(!navigator.onLine){syncMessage='Offline · changes will sync when connected';renderSync();return;}
  const userId=syncUser.id,generation=syncGeneration,current=()=>syncUser?.id===userId&&syncGeneration===generation;syncBusy=true;syncMessage='Syncing…';syncFailure='';renderSync();
  try{
    let cloud=[],offset=0;
    while(true){const {data,error}=await syncClient.from('study_events').select('event_id,payload').eq('user_id',userId).order('event_id').range(offset,offset+499);if(!current())return;if(error)throw error;cloud.push(...data);if(data.length<500)break;offset+=500;}
    const old=StudyProgress.canonical(state),oldExam2=globalThis.Exam2Store?StudyProgress.canonical(Exam2Store.state()):'';state=mergeCloudEvents(cloud.map(row=>row.payload));if(globalThis.Exam2Store)Exam2Store.merge(cloud.map(row=>row.payload));const remoteIds=new Set(cloud.map(row=>row.event_id)),pending=[...progressEvents,...(globalThis.Exam2Store?Exam2Store.events():[])].filter(e=>!remoteIds.has(e.id));
    for(let i=0;i<pending.length;i+=100){if(!current())return;const {error}=await syncClient.from('study_events').upsert(pending.slice(i,i+100).map(e=>({user_id:userId,event_id:e.id,payload:e})),{onConflict:'user_id,event_id',ignoreDuplicates:true});if(!current())return;if(error)throw error;}
    if(!current())return;syncMessage='Saved to your account · '+new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'});if(old!==StudyProgress.canonical(state)||(globalThis.Exam2Store&&oldExam2!==StudyProgress.canonical(Exam2Store.state()))){if(!quiz){render();}else{sidebar();updateProgress();}}renderSync();
  }catch(e){if(current()){syncMessage='Saved on this device · sync needs retry';syncFailure=e.message||'Could not reach sync. Your progress is kept locally.';renderSync();}}
  finally{if(current()){syncBusy=false;if(syncAgain){syncAgain=false;requestSync(0);}}}
}
function startSync(){
  renderSync();if(offlineEdition)return;
  if(!globalThis.supabase||!SYNC_CONFIG.url||!SYNC_CONFIG.key){syncFailure='Sync configuration is unavailable; local study still works.';renderSync();return;}
  syncClient=supabase.createClient(SYNC_CONFIG.url,SYNC_CONFIG.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'implicit',storageKey:'psych202-auth'}});
  syncClient.auth.onAuthStateChange((_event,session)=>{setTimeout(()=>adoptSession(session),0);});
  syncClient.auth.getSession().then(({data,error})=>{if(error){syncFailure=error.message;renderSync();}else adoptSession(data.session);});
  setInterval(()=>requestSync(0),20000);
  window.addEventListener('online',()=>{renderSync();requestSync(0);});window.addEventListener('offline',renderSync);window.addEventListener('focus',()=>requestSync(0));
  window.addEventListener('storage',e=>{if(globalThis.Exam2Store&&Exam2Store.onStorage(e.key)){if(selectedExamId==='exam2')render();requestSync();return;}if(e.key!==PROGRESS_PREFIX+progressScope)return;try{const incoming=readEnvelope(e.key);state=mergeCloudEvents(incoming);if(!quiz)render();else{sidebar();updateProgress();}requestSync();}catch{toast('Another tab’s progress could not be read. Export a recovery copy.');}});
}
startSync();
