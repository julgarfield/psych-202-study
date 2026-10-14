import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {webcrypto} from 'node:crypto';
const dist=new URL('../dist/',import.meta.url),remote=new Map();let failWrites=false,holdRead=null;
function device(){
 const data=new Map(),localStorage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,String(v))},el={innerHTML:''},ctx={console,Date,crypto:webcrypto,localStorage,navigator:{onLine:true},location:{protocol:'http:',origin:'http://local-test'},document:{documentElement:{dataset:{}}},window:{addEventListener(){}},setTimeout:()=>0,clearTimeout(){},setInterval:()=>0,clearInterval(){},SYNC_CONFIG:{},$:id=>id==='#accountBar'?el:null,esc:String,render(){},sidebar(){},updateProgress(){},toast(){},lessons:[{id:'science'}],quizInterval:null,quiz:null,cardDeck:[],cardIndex:0,diagramRound:null,lessonId:'science'};
 vm.createContext(ctx);vm.runInContext(fs.readFileSync(new URL('progress.js',dist),'utf8')+'\n'+fs.readFileSync(new URL('storage.js',dist),'utf8')+'\n'+fs.readFileSync(new URL('exam2-store.js',dist),'utf8')+'\nlet state=initializeProgress();',ctx);
 let authUser=null;
 const client={from(table){assert.equal(table,'study_events');let owner=null;return {select(){return this;},eq(field,id){assert.equal(field,'user_id');owner=id;return this;},order(){return this;},async range(a,b){if(holdRead)await holdRead.promise;if(owner!==authUser)return {data:[],error:{message:'wrong auth owner'}};return {data:[...remote.values()].filter(r=>r.user_id===owner).sort((a,b)=>a.event_id.localeCompare(b.event_id)).slice(a,b+1),error:null};},async upsert(rows,opts){assert.equal(opts.ignoreDuplicates,true);if(failWrites)return {error:{message:'simulated temporary network failure'}};for(const row of rows){if(row.user_id!==authUser)return {error:{message:'RLS rejected wrong owner'}};const key=row.user_id+'/'+row.event_id;if(!remote.has(key))remote.set(key,row);}return {error:null};}};}};
 vm.runInContext(fs.readFileSync(new URL('sync.js',dist),'utf8').replace(/startSync\(\);\s*$/,'')+'\nglobalThis.qaAPI={setClient:c=>{syncClient=c;},adoptSession,syncProgress,append:(type,target,data)=>{state=appendProgress(type,target,data);},import:s=>{state=mergeProgressExport(s);},getState:()=>state,getEvents:()=>progressEvents,exam2:ctx=>globalThis.Exam2Store,message:()=>syncMessage};',ctx);
 ctx.qaAPI.setClient(client);
 return {ctx,data,api:ctx.qaAPI,signIn(id){authUser=id;ctx.qaAPI.adoptSession(id?{user:{id,email:id+'@example.invalid'}}:null);}};
}
const A=device(),B=device();A.signIn('owner-a');A.api.append('lesson','science',{value:true});A.api.append('answer','science-q0',{correct:false});await A.api.syncProgress();assert.equal(remote.size,2);assert.equal(A.api.message().startsWith('Saved to your account'),true);
B.signIn('owner-a');await B.api.syncProgress();assert.equal(B.api.getState().questions['science-q0'].attempts,1);assert(B.api.getState().completed.includes('science'));assert.equal(remote.size,2,'Blank device overwrote populated cloud');
A.api.append('answer','science-q0',{correct:true});B.api.append('answer','science-q1',{correct:true});await Promise.all([A.api.syncProgress(),B.api.syncProgress()]);await Promise.all([A.api.syncProgress(),B.api.syncProgress()]);assert.equal(remote.size,4);assert.equal(A.api.getState().questions['science-q0'].attempts,2);assert.equal(B.api.getState().questions['science-q0'].lastCorrect,true);assert.equal(A.api.getState().questions['science-q1'].attempts,1);
await A.api.syncProgress();await B.api.syncProgress();assert.equal(remote.size,4,'Replay double-counted uploads');
B.ctx.navigator.onLine=false;B.api.append('card','vision-c0',{streak:3,due:Date.now()+345600000});B.api.append('video','0',{value:true});B.api.append('diagram','diagram-neuron-identify-label-axon',{correct:false});await B.api.syncProgress();assert.equal(remote.size,4);assert.equal(B.api.getState().cards['vision-c0'].streak,3);
B.ctx.navigator.onLine=true;failWrites=true;await B.api.syncProgress();assert(B.api.message().includes('sync needs retry'));assert.equal(remote.size,4);assert.equal(B.api.getEvents().length,7);
failWrites=false;await B.api.syncProgress();await A.api.syncProgress();assert.equal(remote.size,7);assert.equal(A.api.getState().cards['vision-c0'].streak,3);assert(A.api.getState().videos.includes(0));assert.equal(A.api.getState().diagrams['diagram-neuron-identify-label-axon'].lastCorrect,false);
let release;holdRead={promise:new Promise(r=>release=r)};const pending=A.api.syncProgress();A.signIn('owner-b');release();holdRead=null;await pending;await A.api.syncProgress();assert.equal(remote.size,7);assert.equal(Object.keys(A.api.getState().questions).length,0);assert(![...remote.values()].some(row=>row.user_id==='owner-b'));
A.api.append('answer','science-q2',{correct:false});await A.api.syncProgress();assert.equal(remote.size,8);assert.equal([...remote.values()].filter(row=>row.user_id==='owner-b').length,1);A.signIn('owner-a');await A.api.syncProgress();assert.equal(Object.keys(A.api.getState().questions).length,2);assert(!A.api.getState().questions['science-q2']);
console.log(JSON.stringify({passed:true,checks:'Two independent device stores, simultaneous writes, empty-device safety, replay deduplication, offline queue, failed upload recovery, all progress categories, account switch during an in-flight request',backend:'Deterministic Supabase API test double; actual Postgres RLS separately verified'}));

A.ctx.Exam2Store.record('answer','exam2-memory-test-q0',{correct:true});
await A.api.syncProgress();await B.api.syncProgress();
assert.equal(B.ctx.Exam2Store.state().questions['exam2-memory-test-q0'].attempts,1);
assert.equal(B.api.getState().questions['exam2-memory-test-q0'],undefined,'Exam 2 cloud answers leaked into Exam 1');
assert.equal(B.ctx.Exam2Store.state().questions['science-q0'],undefined,'Exam 1 cloud answers leaked into Exam 2');
const beforeExamSwitch=remote.size;
B.signIn('owner-b');assert.equal(B.ctx.Exam2Store.events().length,0);
await B.api.syncProgress();assert.equal(remote.size,beforeExamSwitch,'Account switch reuploaded another account’s Exam 2 work');
B.ctx.Exam2Store.record('card','exam2-memory-test-c0',{streak:2,due:Date.now()+172800000});
await B.api.syncProgress();assert.equal(remote.size,beforeExamSwitch+1);
B.signIn('owner-a');await B.api.syncProgress();
assert.equal(B.ctx.Exam2Store.state().cards['exam2-memory-test-c0'],undefined);
assert.equal(B.ctx.Exam2Store.state().questions['exam2-memory-test-q0'].lastCorrect,true);
console.log('PASS: Exam 1 and Exam 2 sync through the same account with separate histories; account switches preserve ownership.');
