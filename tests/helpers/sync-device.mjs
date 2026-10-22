import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {webcrypto} from 'node:crypto';
const site=new URL('../../site/',import.meta.url);
export function syncFixture(){
 const remote=new Map(),control={failWrites:false,failProfile:false,holdRead:null,pageSize:500,requests:[]};
 function device(seed=[]){
  const data=new Map(seed),localStorage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,String(v))},el={innerHTML:''};let authUser=null;
  const reply=(data,status=200)=>({ok:status>=200&&status<300,status,json:async()=>data});
  const ctx={console,Date,TextEncoder,crypto:webcrypto,localStorage,navigator:{onLine:true},location:{protocol:'http:',origin:'http://local-test'},document:{documentElement:{dataset:{}},addEventListener(){}},window:{addEventListener(){}},setTimeout:()=>0,clearTimeout(){},setInterval:()=>0,clearInterval(){},$:id=>id==='#accountBar'?el:null,esc:String,render(){},sidebar(){},updateProgress(){},toast(){},lessons:[{id:'science'}],quizInterval:null,quiz:null,cardDeck:[],cardIndex:0,diagramRound:null,lessonId:'science',
  fetch:async(path,opts)=>{
   control.requests.push({path,opts});assert.equal(opts.credentials,'same-origin');const actor=authUser;if(!actor)return reply({error:'Sign in with ChatGPT'},401);
   if(path==='/api/progress/profile')return control.failProfile?reply({error:'Temporary profile outage'},503):reply({user:{id:actor,email:actor+'@example.invalid',provider:'chatgpt'}});
   const u=new URL(path,'http://local-test');
   if(opts.method==='POST'){
    const {accountId,events}=JSON.parse(opts.body);if(accountId!==actor)return reply({error:'ChatGPT account changed'},409);if(control.failWrites)return reply({error:'simulated temporary network failure'},503);
    for(const event of events){const key=actor+'/'+event.id;if(!remote.has(key))remote.set(key,{user_id:actor,event_id:event.id,payload:event});}return reply({accountId:actor,ok:true});
   }
   if(control.holdRead)await control.holdRead.promise;
   if(u.searchParams.get('account')!==actor)return reply({error:'ChatGPT account changed'},409);
   const cursor=u.searchParams.get('after')||'',rows=[...remote.values()].filter(r=>r.user_id===actor&&r.event_id>cursor).sort((a,b)=>a.event_id<b.event_id?-1:1).slice(0,control.pageSize);
   return reply({accountId:actor,events:rows,nextCursor:rows.length===control.pageSize?rows.at(-1).event_id:null});
  }};
  vm.createContext(ctx);vm.runInContext(fs.readFileSync(new URL('progress.js',site),'utf8')+'\n'+fs.readFileSync(new URL('storage.js',site),'utf8')+'\n'+fs.readFileSync(new URL('exam2-store.js',site),'utf8')+'\nlet state=initializeProgress();',ctx);
  vm.runInContext(fs.readFileSync(new URL('sync.js',site),'utf8').replace(/startSync\(\);\s*$/,'')+'\nglobalThis.qaAPI={adoptIdentity,refreshSyncIdentity,syncProgress,append:(type,target,data)=>{state=appendProgress(type,target,data);},import:s=>{state=mergeProgressExport(s);},getState:()=>state,getEvents:()=>progressEvents,message:()=>syncMessage,user:()=>syncUser,renderSync};',ctx);
  return {ctx,data,el,api:ctx.qaAPI,setServerAccount(id){authUser=id;},async signIn(id){authUser=id;if(id)await ctx.qaAPI.refreshSyncIdentity();else ctx.qaAPI.adoptIdentity(null);}};
 }
 return {remote,control,device};
}
