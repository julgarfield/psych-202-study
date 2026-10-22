import fs from 'node:fs';import assert from 'node:assert/strict';import {pathToFileURL} from 'node:url';
const module=await import(pathToFileURL(new URL('../dist/server/index.js',import.meta.url).pathname));assert.equal(typeof module.default.fetch,'function');
const manifest=JSON.parse(fs.readFileSync(new URL('../.openai/hosting.json',import.meta.url),'utf8'));assert.equal(manifest.static,undefined);
const r=await module.default.fetch(new Request('https://study.example/content.js'));assert.equal(r.headers.get('cache-control'),'private, no-store, max-age=0');assert(!((await r.text()).includes('const CONTENT')));
console.log('PASS: Worker entrypoint valid; anonymous requests cannot receive study assets.');
