'use strict';
// Immutable events let devices merge without overwriting one another's work.
(function(root){
  const finite=n=>Number.isFinite(n)&&n>=0;
  const count=n=>Number.isInteger(n)&&n>=0&&n<1000000;
  const cleanMap=o=>o&&typeof o==='object'&&!Array.isArray(o)?o:{};
  const safeId=s=>typeof s==='string'&&s.length>0&&s.length<160&&!['__proto__','constructor','prototype'].includes(s);
  function cleanLegacy(s){
    if(!s||![1,2].includes(s.version)||!Array.isArray(s.completed)||!Array.isArray(s.videos)||!s.questions||!s.cards)throw Error('Invalid progress export');
    const v={version:1,completed:[...new Set(s.completed.filter(safeId))],videos:[...new Set(s.videos.filter(n=>Number.isInteger(n)&&n>=0&&n<1000))],questions:{},cards:{},diagrams:{},lastLesson:safeId(s.lastLesson)?s.lastLesson:''};
    for(const [id,q] of Object.entries(cleanMap(s.questions))){if(safeId(id)&&count(q?.attempts)&&count(q.correct)&&q.correct<=q.attempts&&typeof q.lastCorrect==='boolean')v.questions[id]={attempts:q.attempts,correct:q.correct,lastCorrect:q.lastCorrect,updated:finite(q.updated)?q.updated:0};}
    for(const [id,c] of Object.entries(cleanMap(s.cards))){if(safeId(id)&&count(c?.streak)&&finite(c.due))v.cards[id]={streak:c.streak,due:c.due,updated:finite(c.updated)?c.updated:Math.max(0,c.due-(c.streak>0?Math.min(7,2**Math.min(c.streak-1,3))*86400000:0))};}
    return v;
  }
  function canonical(v){if(Array.isArray(v))return '['+v.map(canonical).join(',')+']';if(v&&typeof v==='object')return '{'+Object.keys(v).sort().map(k=>JSON.stringify(k)+':'+canonical(v[k])).join(',')+'}';return JSON.stringify(v);}
  function fingerprint(v){const s=canonical(v),h=[2166136261,2246822519,3266489917,668265263];for(let i=0;i<s.length;i++)for(let j=0;j<4;j++)h[j]=Math.imul(h[j]^s.charCodeAt(i),16777619+j*2)>>>0;return h.map(n=>n.toString(16).padStart(8,'0')).join('');}
  function legacyEvent(s){const data=cleanLegacy(s);return {id:'legacy-'+fingerprint(data),at:0,type:'legacy',data};}
  function validEvent(e){
    if(!e||!safeId(e.id)||!finite(e.at)||e.at>8640000000000000)return false;
    if(e.type==='legacy'){try{cleanLegacy(e.data);return true;}catch{return false;}}
    if(!safeId(e.target))return false;
    if(['answer','diagram'].includes(e.type))return typeof e.correct==='boolean';
    if(['lesson','video'].includes(e.type))return typeof e.value==='boolean';
    if(e.type==='card')return count(e.streak)&&finite(e.due);
    return e.type==='lastLesson'||(e.type==='exam'&&Array.isArray(e.questions)&&e.questions.length<=56&&e.questions.every(safeId));
  }
  function importEvents(s){if(s?.version===2&&Array.isArray(s.events)){if(s.events.length>100000)throw Error('Export is too large');if(!s.events.every(validEvent))throw Error('Invalid event in export');return s.events;}return [legacyEvent(s)];}
  function merge(...lists){const m=new Map();for(const list of lists)for(const e of list){if(!validEvent(e))continue;const old=m.get(e.id);if(!old||canonical(e)<canonical(old))m.set(e.id,e);}return [...m.values()].sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id));}
  function materialize(events){
    const out={version:2,completed:[],questions:{},cards:{},videos:[],diagrams:{},lastLesson:'',recentExams:[]},ls=new Set(),vs=new Set();let lastAt=-1;
    const ordered=merge(events);
    for(const e of ordered.filter(e=>e.type==='legacy')){
      const s=cleanLegacy(e.data);s.completed.forEach(x=>ls.add(x));s.videos.forEach(x=>vs.add(x));
      for(const [id,q] of Object.entries(s.questions)){const p=out.questions[id];out.questions[id]={attempts:Math.max(p?.attempts||0,q.attempts),correct:Math.max(p?.correct||0,q.correct),lastCorrect:!p||q.updated>=p.updated?q.lastCorrect:p.lastCorrect,updated:Math.max(p?.updated||0,q.updated)};}
      for(const [id,c] of Object.entries(s.cards)){const p=out.cards[id];if(!p||c.updated>p.updated||(c.updated===p.updated&&c.due>p.due))out.cards[id]={...c};}
      if(s.lastLesson)out.lastLesson=s.lastLesson;
    }
    for(const e of ordered.filter(e=>e.type!=='legacy')){
      if(e.type==='lesson'){if(e.value)ls.add(e.target);else ls.delete(e.target);}
      else if(e.type==='video'){const n=Number(e.target);if(Number.isInteger(n)&&n>=0){if(e.value)vs.add(n);else vs.delete(n);}}
      else if(e.type==='card'){const p=out.cards[e.target];if(!p||e.at>=p.updated)out.cards[e.target]={streak:e.streak,due:e.due,updated:e.at};}
      else if(e.type==='answer'||e.type==='diagram'){const map=e.type==='answer'?out.questions:out.diagrams,p=map[e.target]||{attempts:0,correct:0,updated:0};map[e.target]={attempts:p.attempts+1,correct:p.correct+(e.correct?1:0),lastCorrect:e.at>=p.updated?e.correct:p.lastCorrect,updated:Math.max(p.updated,e.at)};}
      else if(e.type==='lastLesson'&&e.at>=lastAt){out.lastLesson=e.target;lastAt=e.at;}
      else if(e.type==='exam')out.recentExams.push({id:e.target,questions:e.questions,at:e.at});
    }
    out.completed=[...ls].sort();out.videos=[...vs].sort((a,b)=>a-b);out.recentExams=out.recentExams.slice(-10);return out;
  }
  function metrics(s,ids){const vals=(ids||Object.keys(s.questions)).map(id=>s.questions[id]).filter(q=>q?.attempts>0),attempts=vals.reduce((n,q)=>n+q.attempts,0),correct=vals.reduce((n,q)=>n+q.correct,0),latest=vals.filter(q=>q.lastCorrect).length;return {attempted:vals.length,total:ids?.length||0,latest,accuracy:vals.length?Math.round(latest/vals.length*100):null,attempts,correct,lifetime:attempts?Math.round(correct/attempts*100):null};}
  root.StudyProgress={cleanLegacy,canonical,fingerprint,legacyEvent,validEvent,importEvents,merge,materialize,metrics};
})(typeof globalThis!=='undefined'?globalThis:window);
