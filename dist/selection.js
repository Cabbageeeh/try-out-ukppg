import {shuffle} from './engine.js';

const signature=questions=>questions.map(q=>q.id).sort().join('|');

// History contains saved question snapshots. Only IDs in the current pool count.
// A set can recur eventually when a finite bank is exhausted; prefer unseen IDs
// and avoid the recent sets whenever another valid combination is available.
export function sampleQuestions(pool,count,history=[],random=Math.random){
 if(!Number.isInteger(count)||count<1||pool.length<count)throw new Error('Bank soal tidak mencukupi untuk paket ini.');
 if(new Set(pool.map(q=>q.id)).size!==pool.length)throw new Error('Identitas soal dalam bank tidak unik.');
 const ids=new Set(pool.map(q=>q.id));
 const previous=history.slice(0,12).map(h=>(h.questions||[]).filter(q=>ids.has(q.id))).filter(qs=>qs.length);
 const seen=new Set(previous.flatMap(qs=>qs.map(q=>q.id)));
 const ranked=shuffle(pool,random).sort((a,b)=>Number(seen.has(a.id))-Number(seen.has(b.id)));
 const topics=[...new Set(pool.map(q=>q.topic))],types=[...new Set(pool.map(q=>q.type))];
 const picked=[];
 const add=q=>{if(q&&!picked.includes(q)&&picked.length<count)picked.push(q);};
 if(count>=topics.length+types.length){
  for(const topic of shuffle(topics,random))add(ranked.find(q=>q.topic===topic));
  for(const type of types)if(!picked.some(q=>q.type===type))add(ranked.find(q=>q.type===type));
 }
 for(const q of ranked)add(q);
 const keepCoverage=count>=topics.length+types.length;
 const validSwap=(old,next)=>!keepCoverage||(
  (old.topic===next.topic||picked.filter(q=>q.topic===old.topic).length>1)&&
  (old.type===next.type||picked.filter(q=>q.type===old.type).length>1));
 const avoid=blocked=>{
  if(!blocked.has(signature(picked)))return true;
  for(const next of ranked.filter(q=>!picked.includes(q))){
   for(let i=0;i<picked.length;i++){
    const old=picked[i];if(!validSwap(old,next))continue;
    picked[i]=next;
    if(!blocked.has(signature(picked)))return true;
    picked[i]=old;
   }
  }
  return false;
 };
 const blocked=new Set(previous.filter(qs=>qs.length===count).map(signature));
 if(!avoid(blocked)&&previous.length)avoid(new Set([signature(previous[0])]));
 return shuffle(picked,random);
}

export function selectTryout(bank,mode,history=[],random=Math.random){
 if(mode==='pu')return sampleQuestions(bank.filter(q=>q.section==='PU'),30,history,random);
 if(mode!=='full'&&mode!=='sprint')throw new Error('Paket tryout tidak dikenal.');
 return [
  ...sampleQuestions(bank.filter(q=>q.section==='PCK'),mode==='full'?50:13,history,random),
  ...sampleQuestions(bank.filter(q=>q.section==='PU'),mode==='full'?30:7,history,random)
 ];
}
