import test from 'node:test';import assert from 'node:assert/strict';import {syncFixture} from './helpers/sync-device.mjs';
test('new textbook question and card events sync per exam, retain old history, and replay once',async()=>{
 const f=syncFixture(),a=f.device(),b=f.device();await a.signIn('reader');await b.signIn('reader');
 a.ctx.Exam2Store.record('answer','exam2-learning1-clicker-q0',{correct:true});
 a.ctx.Exam2Store.record('answer','exam2-learning1-clicker-textbook-q0',{correct:false});
 a.ctx.Exam3Store.record('answer','exam3-textbook-decisions-textbook-q0',{correct:false});
 a.ctx.Exam3Store.record('lesson','exam3-textbook-decisions',{value:true});
 a.ctx.Exam3Store.record('card','exam3-textbook-decisions-c0',{streak:1,due:Date.now()+86400000});
 await a.api.syncProgress();await b.api.syncProgress();await b.api.syncProgress();
 const e2=b.ctx.Exam2Store.state(),e3=b.ctx.Exam3Store.state();
 assert.equal(e2.questions['exam2-learning1-clicker-q0'].attempts,1);assert.equal(e2.questions['exam2-learning1-clicker-textbook-q0'].lastCorrect,false);
 assert.equal(e3.questions['exam3-textbook-decisions-textbook-q0'].attempts,1);assert.equal(e3.cards['exam3-textbook-decisions-c0'].streak,1);assert(e3.completed.includes('exam3-textbook-decisions'));
 assert.equal(e2.questions['exam3-textbook-decisions-textbook-q0'],undefined);assert.equal(b.api.getState().questions['exam3-textbook-decisions-textbook-q0'],undefined);
 assert.throws(()=>b.ctx.Exam2Store.importFile(a.ctx.Exam3Store.exportFile()),/another exam/);
 const exported=a.ctx.Exam3Store.exportFile();b.ctx.Exam3Store.importFile(exported);assert.equal(b.ctx.Exam3Store.state().questions['exam3-textbook-decisions-textbook-q0'].attempts,1);
 await b.signIn('other-reader');assert.equal(b.ctx.Exam3Store.events().length,0);await b.api.syncProgress();assert.equal(b.ctx.Exam3Store.events().length,0);
 await b.signIn('reader');assert.equal(b.ctx.Exam3Store.state().questions['exam3-textbook-decisions-textbook-q0'].lastCorrect,false);
});
test('Exam 3 textbook practice survives failed upload and device reload',async()=>{
 const f=syncFixture(),a=f.device();await a.signIn('reader');f.control.failWrites=true;
 a.ctx.Exam3Store.record('answer','exam3-textbook-concepts-textbook-q0',{correct:true});await a.api.syncProgress();assert.equal(f.remote.size,0);
 const reloaded=f.device([...a.data]);await reloaded.signIn('reader');assert.equal(reloaded.ctx.Exam3Store.state().questions['exam3-textbook-concepts-textbook-q0'].lastCorrect,true);
 f.control.failWrites=false;await reloaded.api.syncProgress();const b=f.device();await b.signIn('reader');await b.api.syncProgress();assert.equal(b.ctx.Exam3Store.state().questions['exam3-textbook-concepts-textbook-q0'].attempts,1);
});
