// Sites Dispatch supplies these identity headers after its existing ChatGPT login.
// Never deploy this module behind a proxy that forwards caller-supplied identity headers.
const ASSETS = /* INJECT_ASSETS */ {};
const PUBLIC = new Set(['/access.js','/access.css','/auth-sdk.js']);
const enc = new TextEncoder();
export const escapeHTML = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function identity(request) {
 const id=request.headers.get('oai-authenticated-user-id');
 if(!id||id.length>200)return null;
 let name=request.headers.get('oai-authenticated-user-full-name')||'';
 if(request.headers.get('oai-authenticated-user-full-name-encoding')==='percent-encoded-utf-8')try{name=decodeURIComponent(name);}catch{name='';}
 return {id,name:name.slice(0,200),email:(request.headers.get('oai-authenticated-user-email')||'').slice(0,320)};
}
const headers = type => ({'Content-Type':type,'Cache-Control':'private, no-store, max-age=0','CDN-Cache-Control':'no-store','Vary':'Cookie','X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin','Content-Security-Policy':"frame-ancestors 'self' https://chatgpt.com https://*.chatgpt.com"});
function json(value,status=200){return new Response(JSON.stringify(value),{status,headers:headers('application/json; charset=utf-8')});}
function text(value,status=200,type='text/plain; charset=utf-8'){return new Response(value,{status,headers:headers(type)});}
function bytes(asset){return Uint8Array.from(atob(asset.body),c=>c.charCodeAt(0));}
function assetText(asset){return new TextDecoder().decode(bytes(asset));}
function shell(admin=false){return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#122b36"><title>${admin?'Access management':'Private study lab'} · Psych 202</title><link rel="stylesheet" href="/access.css"></head><body><header><a class="brand" href="/">P <span>STUDY LAB<small>PSYCH 202</small></span></a><a href="/signout-with-chatgpt?return_to=%2F">Sign out of ChatGPT</a></header><main id="accessRoot" data-admin="${admin}"><p class="eyebrow">PRIVATE STUDY SPACE</p><h1>${admin?'Access management':'Welcome to Study Lab'}</h1><p role="status">Checking your access…</p></main><script src="/auth-sdk.js"></script><script src="/access.js"></script></body></html>`;}
function login(){return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sign in · Study Lab</title><link rel="stylesheet" href="/access.css"></head><body><main><p class="eyebrow">PSYCH 202 · PRIVATE STUDY LAB</p><h1>A place to study.</h1><p>Sign in with ChatGPT to continue. New visitors can request access after signing in.</p><a class="btn" target="_top" href="/signin-with-chatgpt?return_to=%2F">Sign in with ChatGPT</a></main></body></html>`;}
export async function signedGateway(env,actor,operation,data={},fetcher=fetch){
 if(!env.ACCESS_GATEWAY_SECRET||!env.SUPABASE_URL||!env.SUPABASE_PUBLISHABLE_KEY)throw Error('Access configuration unavailable');
 const body=JSON.stringify({actor,operation,data,timestamp:Math.floor(Date.now()/1000),nonce:crypto.randomUUID()});
 const key=await crypto.subtle.importKey('raw',enc.encode(env.ACCESS_GATEWAY_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign']);
 const sig=await crypto.subtle.sign('HMAC',key,enc.encode(body));
 const signature=Array.from(new Uint8Array(sig),b=>b.toString(16).padStart(2,'0')).join('');
 const r=await fetcher(env.SUPABASE_URL+'/rest/v1/rpc/site_access_gateway',{method:'POST',headers:{apikey:env.SUPABASE_PUBLISHABLE_KEY,'Content-Type':'application/json'},body:JSON.stringify({body,signature}),signal:AbortSignal.timeout(10000)});
 if(!r.ok){let code='';try{code=(await r.json()).code;}catch{}const e=Error(code==='42501'?(operation.startsWith('progress_')?'Study access required':'Administrator access required'):code==='23505'?(operation.startsWith('progress_')?'ChatGPT account changed. Reload to continue.':'This progress account is already linked. Use its original ChatGPT account.'):code==='40001'?'Status changed. Refresh and try again.':'Could not verify access. Please retry.');e.status=code==='42501'?403:code==='22023'?400:code==='23505'||code==='40001'?409:503;throw e;}
 return r.json();
}
async function readJSON(request,maxBytes=8192){if(!request.headers.get('content-type')?.startsWith('application/json'))throw Object.assign(Error('JSON required'),{status:415});const reader=request.body?.getReader();let raw='',size=0;if(reader){const decoder=new TextDecoder();while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>maxBytes){await reader.cancel();throw Object.assign(Error('Request too large'),{status:413});}raw+=decoder.decode(value,{stream:true});}raw+=decoder.decode();}if(enc.encode(raw).length>maxBytes)throw Object.assign(Error('Request too large'),{status:413});try{return JSON.parse(raw);}catch{throw Object.assign(Error('Invalid request'),{status:400});}}
export function makeApp({assets=ASSETS,gateway=signedGateway,fetcher=fetch}={}) {
 return {async fetch(request,env={}){
  const url=new URL(request.url),pathname=url.pathname;const actor=identity(request);
  try{
   if(!['GET','HEAD','POST'].includes(request.method))return text('Method not allowed',405);
   // Only the shell CSS, public SDK and request/dashboard script are unprotected.
   if(PUBLIC.has(pathname)&&['GET','HEAD'].includes(request.method)){
    const asset=assets[pathname];return asset?new Response(request.method==='HEAD'?null:bytes(asset),{headers:headers(asset.type)}):text('Not found',404);
   }
   if(!actor)return pathname.startsWith('/api/')?json({error:'Sign in with ChatGPT to continue.'},401):text(login(),200,'text/html; charset=utf-8');
   if(pathname==='/api/access/identity'&&request.method==='GET')return json(actor);
   if(request.method==='POST'){
    // Same-origin JSON POST only: no form submissions, credentialed CORS or GET mutations.
    if(request.headers.get('Origin')!==url.origin||request.headers.get('Sec-Fetch-Site')==='cross-site')return json({error:'Same-origin request required'},403);
    const input=await readJSON(request,pathname==='/api/progress'?3145728:8192);
    if(pathname==='/api/progress'){
     if(!input||typeof input.accountId!=='string'||input.accountId.length>240||!Array.isArray(input.events)||input.events.length>100)return json({error:'Invalid progress batch'},400);
     return json(await gateway(env,actor,'progress_push',{accountId:input.accountId,events:input.events}));
    }
    if(pathname==='/api/access/request'){
     if(typeof input.message!=='string'||input.message.length>500)return json({error:'Keep your message to 500 characters.'},400);
     return json(await gateway(env,actor,'request',{message:input.message}));
    }
    if(pathname==='/api/access/link'){
     if(typeof input.access_token!=='string'||input.access_token.length>6000)return json({error:'Sign in to verify your email.'},401);
     const auth=await fetcher(env.SUPABASE_URL+'/auth/v1/user',{headers:{apikey:env.SUPABASE_PUBLISHABLE_KEY,Authorization:'Bearer '+input.access_token},signal:AbortSignal.timeout(10000)});
     if(!auth.ok)return json({error:'Email verification failed. Sign in again.'},401);
     const user=await auth.json();
     if(!/^[0-9a-f-]{36}$/i.test(user.id||'')||!user.email_confirmed_at||user.is_anonymous)return json({error:'A verified email is required.'},403);
     return json(await gateway(env,actor,'link',{auth_user_id:user.id}));
    }
    if(pathname==='/api/admin/action')return json(await gateway(env,actor,'admin_action',input));
    return json({error:'Not found'},404);
   }
   if(pathname==='/api/progress/profile')return json(await gateway(env,actor,'progress_profile'));
   if(pathname==='/api/progress')return json(await gateway(env,actor,'progress_read',{accountId:url.searchParams.get('account'),after:url.searchParams.get('after')||''}));
   if(pathname==='/api/access/status')return json(await gateway(env,actor,'status'));
   if(pathname==='/api/admin/list')return json(await gateway(env,actor,'admin_list',{kind:url.searchParams.get('kind'),offset:Number(url.searchParams.get('offset')||0)}));
   const access=await gateway(env,actor,'status');
   if(pathname==='/admin')return access.role==='admin'&&access.state==='approved'?text(shell(true),200,'text/html; charset=utf-8'):text('Administrator access required',403);
   if(pathname==='/access')return text(shell(),200,'text/html; charset=utf-8');
   if(access.state!=='approved'&&access.enforced!==false)return pathname==='/'||pathname==='/index.html'?text(shell(),200,'text/html; charset=utf-8'):json({error:'Approval required',state:access.state},403);
   // No storage origin, static binding or fallback serves these assets independently.
   let key=pathname==='/'?'/index.html':pathname;
   if(key==='/offline.html')return text(makeOffline(assets),200,'text/html; charset=utf-8');
   const asset=assets[key];if(!asset||key.startsWith('/access.'))return text('Not found',404);
   return new Response(request.method==='HEAD'?null:bytes(asset),{headers:headers(asset.type)});
  }catch(e){return pathname.startsWith('/api/')?json({error:e.status?e.message:'Access check unavailable. Please retry.'},e.status||503):text(`<!doctype html><html lang="en"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Access check unavailable</title><link rel="stylesheet" href="/access.css"><main><h1>We couldn’t check your access.</h1><p>Your saved progress has not been changed.</p><a class="btn" href="/">Try again</a></main></html>`,503,'text/html; charset=utf-8');}
 }};
}
export function makeOffline(assets){
 let html=assetText(assets['/index.html']).replace('<html lang="en">','<html lang="en" data-offline="true">');
 html=html.replace(/<link rel="stylesheet" href="style\.css(?:\?[^\"]*)?">/,'<style>'+assetText(assets['/style.css'])+'</style>');
 html=html.replace(/<script src="([^"]+)"><\/script>/g,(_all,src)=>{
  const name=src.split('?')[0];if(['assets/supabase.js','access-monitor.js'].includes(name))return '';
  let code=assetText(assets['/'+name]);for(const [p,a] of Object.entries(assets))if(/\.(png|jpg)$/.test(p))code=code.split(p.slice(1)).join('data:'+a.type+';base64,'+a.body);
  return '<script>'+code.replace(/<\/script/gi,'<\\/script')+'</script>';
 });
 return html.replace('id="offlineDownload"','id="offlineDownload" hidden');
}
export default makeApp();
