/* UX checks complement the Worker and live database policies; never authorize locally. */
(()=>{
 'use strict';if(document.documentElement.dataset.offline==='true'||location.protocol==='file:')return;
 let stopped=false;
 const deny=()=>{if(stopped)return;stopped=true;document.body.replaceChildren(Object.assign(document.createElement('p'),{textContent:'Checking access…'}));location.replace('/access');};
 async function call(path,data){const r=await fetch(path,{method:data?'POST':'GET',headers:data?{'Content-Type':'application/json'}:{},body:data?JSON.stringify(data):undefined,cache:'no-store'});if(!r.ok){deny();return null;}const s=await r.json();if(s.enforced!==false&&s.state!=='approved'){deny();return null;}return s;}
 async function check(){try{const s=await call('/api/access/status');if(!s)return;let nav=document.getElementById('accessNav');if(!nav){nav=document.createElement('div');nav.id='accessNav';nav.className='account-bar';document.querySelector('#accountBar').after(nav);}nav.replaceChildren();if(s.role==='admin'){const a=document.createElement('a');a.href='/admin';a.textContent='Manage access';a.className='text-btn';nav.append(a);}const exit=document.createElement('a');exit.href='/signout-with-chatgpt?return_to=%2F';exit.textContent='Sign out of ChatGPT';exit.className='text-btn';nav.append(exit);}catch{deny();}}
 globalThis.SiteAccess={async link(token){
  try{const r=await fetch('/api/access/link',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({access_token:token}),cache:'no-store'});const s=await r.json();if(!r.ok){if(r.status===401||r.status===409)throw Object.assign(Error(s.error||'Use the progress account linked to this ChatGPT account.'),{recoverable:true});deny();return false;}if(s.enforced!==false&&s.state!=='approved'){deny();return false;}return true;}
  catch(e){if(e.recoverable)throw e;deny();return false;}
 }};
 check();setInterval(check,20000);window.addEventListener('focus',check);document.addEventListener('visibilitychange',()=>{if(!document.hidden)check();});
})();
