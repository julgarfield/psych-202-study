import fs from 'node:fs';import path from 'node:path';import zlib from 'node:zlib';
const root=path.resolve(import.meta.dirname,'..'),source=path.join(root,'site'),output=path.join(root,'dist');
const assets={};const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.txt':'text/plain; charset=utf-8'};
function walk(dir){for(const ent of fs.readdirSync(dir,{withFileTypes:true})){if(ent.name.startsWith('.')||ent.name==='server'||ent.name==='offline.html')continue;const full=path.join(dir,ent.name);if(ent.isDirectory())walk(full);else{const key='/'+path.relative(source,full).split(path.sep).join('/');assets[key]={type:types[path.extname(key)]||'application/octet-stream',body:fs.readFileSync(full).toString('base64')};}}}
walk(source);
const configText=fs.readFileSync(path.join(source,'sync-config.js'),'utf8');const config=JSON.parse(configText.match(/const SYNC_CONFIG=(.*);/)[1]);
for(const [key,name] of [['/access.js','access.js'],['/access.css','access.css']]){let data=fs.readFileSync(path.join(root,'worker',name),'utf8').replace('/* INJECT_PUBLIC_CONFIG */ {}',JSON.stringify({url:config.url,key:config.key}));assets[key]={type:types[path.extname(key)],body:Buffer.from(data).toString('base64')};}
assets['/auth-sdk.js']=assets['/assets/supabase.js'];
const worker=fs.readFileSync(path.join(root,'worker/index.js'),'utf8').replace('/* INJECT_ASSETS */ {}',JSON.stringify(assets));
fs.rmSync(output,{recursive:true,force:true});fs.mkdirSync(path.join(output,'server'),{recursive:true});fs.mkdirSync(path.join(output,'.openai'),{recursive:true});fs.writeFileSync(path.join(output,'server/index.js'),worker);fs.copyFileSync(path.join(root,'.openai/hosting.json'),path.join(output,'.openai/hosting.json'));
console.log(JSON.stringify({assets:Object.keys(assets).length,workerBytes:Buffer.byteLength(worker),compressedBytes:zlib.gzipSync(worker).length}));
