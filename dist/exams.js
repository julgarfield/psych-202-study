'use strict';
function seededOrder(list,seed){let n=2166136261;for(const c of seed)n=Math.imul(n^c.charCodeAt(0),16777619)>>>0;const random=()=>{n+=0x6D2B79F5;let t=n;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};const a=[...list].sort((a,b)=>a.id.localeCompare(b.id));for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function selectMock(pool,topics,form,recent=[]){
 const counts=[16,24,8,8],seen=new Set(recent.slice(-3).flatMap(e=>e.questions)),forms=['A','B','C','D'];
 const pick=(topic,n,seed)=>{if(form==='fresh')return [...shuffled(topic.filter(q=>!seen.has(q.id))),...shuffled(topic.filter(q=>seen.has(q.id)))].slice(0,n);const ordered=seededOrder(topic,'psych202-fixed-v2-'+seed),start=forms.indexOf(form)*n;if(start<0)throw Error('Unknown exam form');return ordered.slice(start,start+n).length===n?ordered.slice(start,start+n):ordered.slice(0,n);};
 const result=topics.flatMap((u,i)=>{const topic=pool.filter(q=>q.unit===u),n=counts[i];if(topic.length<n)throw Error('Insufficient question coverage for '+u);
   if(i===0){const article=topic.filter(q=>q.lessonId.startsWith('pearson'));if(article.length>=8)return [...pick(article,2,u+'-pearson'),...pick(topic.filter(q=>!q.lessonId.startsWith('pearson')),n-2,u+'-other')];}
   return pick(topic,n,u);
 });return form==='fresh'?shuffled(result):seededOrder(result,'psych202-form-'+form);
}
