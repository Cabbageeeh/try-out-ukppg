import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {loadBank} from '../dist/bank.js';
import {sampleQuestions,selectTryout} from '../dist/selection.js';
import {pedagogiTopics} from '../dist/pedagogi.js';
const seed=JSON.parse(await readFile(new URL('../dist/seed.json',import.meta.url),'utf8'));
const nativeFetch=globalThis.fetch;
globalThis.fetch=async()=>({ok:true,json:async()=>seed});
const bank=await loadBank();globalThis.fetch=nativeFetch;
const refs=JSON.parse(await readFile(new URL('../dist/sources.json',import.meta.url),'utf8'));
const signature=qs=>qs.map(q=>q.id).sort().join('|');
const seeded=seed=>()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};

test('new questions have explanations, valid sources, and PU topic mapping',()=>{
 const added=bank.filter(q=>Number(q.id.split('-')[1])>(q.section==='PU'?30:50));
 assert.equal(added.length,90);
 for(const q of added){
  assert.ok(q.explanation.length>=90,q.id);
  assert.ok(q.source_ids.every(id=>refs.some(r=>r.id===id)),q.id);
  assert.ok(q.competency_codes.every(c=>/^(P\.[1-6]|K\.[1-3]|S\.[1-3]|PF\.[1-5])$/.test(c)),q.id);
  if(q.section==='PU')assert.ok(pedagogiTopics.some(t=>t.id===q.puTopic&&t.title===q.topic),q.id);
 }
});

test('full, sprint and PU packages preserve exact composition without duplicate IDs',()=>{
 for(const [mode,pck,pu] of [['full',50,30],['sprint',13,7],['pu',0,30]]){
  const qs=selectTryout(bank,mode,[],seeded(20));
  assert.equal(qs.filter(q=>q.section==='PCK').length,pck);
  assert.equal(qs.filter(q=>q.section==='PU').length,pu);
  assert.equal(new Set(qs.map(q=>q.id)).size,pck+pu);
  if(mode!=='sprint'){
   assert.equal(new Set(qs.filter(q=>q.section==='PU').map(q=>q.topic)).size,8);
   assert.equal(new Set(qs.map(q=>q.type)).size,3);
  }
 }
});

test('a full package after an old 80-question attempt prefers the newly added questions',()=>{
 const old=bank.filter(q=>Number(q.id.split('-')[1])<=(q.section==='PU'?30:50));
 const fresh=selectTryout(bank,'full',[{questions:old}],seeded(3));
 const oldIds=new Set(old.map(q=>q.id));
 assert.equal(fresh.filter(q=>oldIds.has(q.id)).length,0);
});

test('repeated tryouts change question sets, not just order, across the retained history',()=>{
 for(const mode of ['full','sprint','pu']){
  const history=[],random=seeded(90);
  for(let i=0;i<35;i++){
   const qs=selectTryout(bank,mode,history,random),key=signature(qs);
   assert.ok(!history.slice(0,12).some(h=>signature(h.questions)===key),mode+' session '+i);
   history.unshift({questions:structuredClone(qs)});
  }
 }
});

test('collision repair changes a repeated set even with the same random stream',()=>{
 const pool=Array.from({length:6},(_,i)=>({id:String(i),topic:'one',type:'single_choice'}));
 const allSeen={questions:pool};
 const previous=sampleQuestions(pool,3,[allSeen],()=>0.5);
 const next=sampleQuestions(pool,3,[{questions:previous},allSeen],()=>0.5);
 assert.notEqual(signature(previous),signature(next));
 assert.equal(new Set(next.map(q=>q.id)).size,3);
});

test('sampling keeps bank/history snapshots intact and handles finite exhausted banks',()=>{
 const before=JSON.stringify(bank),old={questions:structuredClone(bank.slice(0,8))},saved=JSON.stringify(old);
 selectTryout(bank,'full',[old],seeded(12));
 assert.equal(JSON.stringify(bank),before);assert.equal(JSON.stringify(old),saved);
 const pool=[{id:'a',topic:'t',type:'single_choice'},{id:'b',topic:'t',type:'single_choice'}];
 const next=sampleQuestions(pool,1,[{questions:[pool[0]]},{questions:[pool[1]]}],()=>0.5);
 assert.equal(next[0].id,'b');
 assert.throws(()=>sampleQuestions(pool,3));assert.throws(()=>sampleQuestions(pool,0));
 assert.throws(()=>selectTryout(bank,'unknown'));
});
