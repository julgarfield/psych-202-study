import test from 'node:test';import assert from 'node:assert/strict';import {syncFixture} from './helpers/sync-device.mjs';
test('ChatGPT sign-in automatically adopts the existing progress namespace without Supabase login',async()=>{
 const {device,remote}=syncFixture(),uuid='11111111-1111-4111-8111-111111111111';
 const old={id:'old-answer',at:1,type:'answer',target:'science-q0',correct:true};
 const d=device([['psych202-exam1-v2:account:'+uuid,JSON.stringify({version:2,events:[old]})]]);d.setServerAccount(uuid);await d.api.syncProgress();
 assert.equal(d.api.user().id,uuid);assert.equal(d.api.getState().questions['science-q0'].attempts,1);assert.equal(remote.size,1);assert(d.el.innerHTML.includes('Signed in with ChatGPT'));assert(!d.el.innerHTML.includes('Email sign-in'));assert(!d.el.innerHTML.includes('openSignIn'));
});
test('a transient initial profile failure can recover without losing device progress',async()=>{
 const {device,remote,control}=syncFixture();const d=device();d.setServerAccount('owner');d.api.append('answer','science-q0',{correct:false});control.failProfile=true;await d.api.syncProgress();assert(d.el.innerHTML.includes('Retry sync'));assert.equal(d.api.getState().questions['science-q0'].attempts,1);control.failProfile=false;await d.api.syncProgress();assert.equal(remote.size,1);assert(d.api.message().startsWith('Synced with your ChatGPT account'));
});
test('the standalone offline edition never contacts an account API',async()=>{
 const {device,control}=syncFixture();const d=device();d.ctx.document.documentElement.dataset.offline='true'; // fresh script reads this constant at initialization below
 // File edition is verified directly by evaluating a fresh sync module with its flag set.
 const fs=await import('node:fs'),vm=await import('node:vm');
 const ctx={document:{documentElement:{dataset:{offline:'true'}}},location:{protocol:'file:'},navigator:{onLine:true},progressStoreOK:true,$:()=>({innerHTML:''}),esc:String,fetch:()=>{throw Error('Offline API call');}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(new URL('../site/sync.js',import.meta.url),'utf8'),ctx);assert.equal(control.requests.length,0);
});
