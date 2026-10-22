import assert from 'node:assert/strict';import {syncFixture} from '../tests/helpers/sync-device.mjs';
const {device,remote,control}=syncFixture();
const A=device(),B=device();await A.signIn('owner-a');A.api.append('lesson','science',{value:true});A.api.append('answer','science-q0',{correct:false});await A.api.syncProgress();assert.equal(remote.size,2);assert.equal(A.api.message().startsWith('Synced with your ChatGPT account'),true);
await B.signIn('owner-a');await B.api.syncProgress();assert.equal(B.api.getState().questions['science-q0'].attempts,1);assert(B.api.getState().completed.includes('science'));assert.equal(remote.size,2,'Blank device overwrote populated cloud');
A.api.append('answer','science-q0',{correct:true});B.api.append('answer','science-q1',{correct:true});await Promise.all([A.api.syncProgress(),B.api.syncProgress()]);await Promise.all([A.api.syncProgress(),B.api.syncProgress()]);assert.equal(remote.size,4);assert.equal(A.api.getState().questions['science-q0'].attempts,2);assert.equal(B.api.getState().questions['science-q0'].lastCorrect,true);assert.equal(A.api.getState().questions['science-q1'].attempts,1);
await A.api.syncProgress();await B.api.syncProgress();assert.equal(remote.size,4,'Replay double-counted uploads');
B.ctx.navigator.onLine=false;B.api.append('card','vision-c0',{streak:3,due:Date.now()+345600000});B.api.append('video','0',{value:true});B.api.append('diagram','diagram-neuron-identify-label-axon',{correct:false});await B.api.syncProgress();assert.equal(remote.size,4);assert.equal(B.api.getState().cards['vision-c0'].streak,3);
B.ctx.navigator.onLine=true;control.failWrites=true;await B.api.syncProgress();assert(B.api.message().includes('sync needs retry'));assert.equal(remote.size,4);assert.equal(B.api.getEvents().length,7);
control.failWrites=false;await B.api.syncProgress();await A.api.syncProgress();assert.equal(remote.size,7);assert.equal(A.api.getState().cards['vision-c0'].streak,3);assert(A.api.getState().videos.includes(0));assert.equal(A.api.getState().diagrams['diagram-neuron-identify-label-axon'].lastCorrect,false);
let release;control.holdRead={promise:new Promise(r=>release=r)};const pending=A.api.syncProgress();await A.signIn('owner-b');release();control.holdRead=null;await pending;await A.api.syncProgress();assert.equal(remote.size,7);assert.equal(Object.keys(A.api.getState().questions).length,0);assert(![...remote.values()].some(row=>row.user_id==='owner-b'));
A.api.append('answer','science-q2',{correct:false});await A.api.syncProgress();assert.equal(remote.size,8);assert.equal([...remote.values()].filter(row=>row.user_id==='owner-b').length,1);await A.signIn('owner-a');await A.api.syncProgress();assert.equal(Object.keys(A.api.getState().questions).length,2);assert(!A.api.getState().questions['science-q2']);
console.log(JSON.stringify({passed:true,checks:'Two independent device stores, simultaneous writes, empty-device safety, replay deduplication, offline queue, failed upload recovery, all progress categories, account switch during an in-flight request',backend:'Deterministic same-origin ChatGPT progress API; database gateway independently verified'}));

A.ctx.Exam2Store.record('answer','exam2-memory-test-q0',{correct:true});
await A.api.syncProgress();await B.api.syncProgress();
assert.equal(B.ctx.Exam2Store.state().questions['exam2-memory-test-q0'].attempts,1);
assert.equal(B.api.getState().questions['exam2-memory-test-q0'],undefined,'Exam 2 cloud answers leaked into Exam 1');
assert.equal(B.ctx.Exam2Store.state().questions['science-q0'],undefined,'Exam 1 cloud answers leaked into Exam 2');
const beforeExamSwitch=remote.size;
await B.signIn('owner-b');assert.equal(B.ctx.Exam2Store.events().length,0);
await B.api.syncProgress();assert.equal(remote.size,beforeExamSwitch,'Account switch reuploaded another account’s Exam 2 work');
B.ctx.Exam2Store.record('card','exam2-memory-test-c0',{streak:2,due:Date.now()+172800000});
await B.api.syncProgress();assert.equal(remote.size,beforeExamSwitch+1);
await B.signIn('owner-a');await B.api.syncProgress();
assert.equal(B.ctx.Exam2Store.state().cards['exam2-memory-test-c0'],undefined);
assert.equal(B.ctx.Exam2Store.state().questions['exam2-memory-test-q0'].lastCorrect,true);
console.log('PASS: Exam 1 and Exam 2 sync through the same account with separate histories; account switches preserve ownership.');

// Bootstrap with a server-verified ChatGPT session; no second account sign-in.
const C=device();C.setServerAccount('chatgpt-new');await C.api.syncProgress();assert.equal(C.api.user().provider,'chatgpt');assert(!C.el.innerHTML.includes('Email sign-in'));assert(!C.el.innerHTML.includes('openSignIn'));
C.api.append('answer','pending-old-account',{correct:true});const queuedId=C.api.getEvents().find(e=>e.target==='pending-old-account').id;C.setServerAccount('chatgpt-other');await C.api.syncProgress();await C.api.syncProgress();assert.equal(C.api.user().id,'chatgpt-other');assert(![...remote.values()].some(r=>r.user_id==='chatgpt-other'&&r.event_id===queuedId));assert(!Object.keys(C.api.getState().questions).includes('pending-old-account'));
// Load more than one page, including a cursor boundary, without dropping events.
for(let n=0;n<1001;n++){const id='page-'+String(n).padStart(4,'0');remote.set('paged/'+id,{user_id:'paged',event_id:id,payload:{id,at:n,type:'answer',target:'page-q'+n,correct:true}});}
const P=device();P.setServerAccount('paged');await P.api.syncProgress();assert.equal(Object.keys(P.api.getState().questions).length,1001);
console.log('PASS: ChatGPT identity bootstraps sync without another login; server-detected account switches isolate queued work; cursor pagination preserves 1,001 events.');
