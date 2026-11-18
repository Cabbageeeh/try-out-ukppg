import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {loadBank} from '../dist/bank.js';
import {answered,correct,grade,remaining,clock,shuffle} from '../dist/engine.js';
const nativeFetch=globalThis.fetch;
globalThis.fetch=async()=>({ok:true,json:async()=>JSON.parse(await readFile(new URL('../dist/seed.json',import.meta.url),'utf8'))});
const bank=await loadBank();
globalThis.fetch=nativeFetch;
test('80 unique questions; 50 PCK, 30 PU; keys and all three response types valid',()=>{
 assert.equal(bank.length,80);assert.equal(new Set(bank.map(q=>q.id)).size,80);
 assert.equal(bank.filter(q=>q.section==='PCK').length,50);assert.equal(bank.filter(q=>q.section==='PU').length,30);
 assert.equal(new Set(bank.map(q=>q.type)).size,3);
 for(const q of bank){assert.ok(q.explanation.length>70,q.id);assert.ok(q.source_ids.length,q.id);assert.ok(q.competency_codes.length,q.id);
  if(q.type==='single_choice')assert.ok(q.options[q.answer],q.id);
  if(q.type==='multiple_response'){assert.ok(q.answer.length>1,q.id);assert.ok(q.answer.every(k=>q.options[k]),q.id);assert.equal(new Set(q.answer).size,q.answer.length);}
  if(q.type==='category_matrix'){assert.deepEqual(Object.keys(q.answer).sort(),q.options.map(o=>o.id).sort());assert.ok(Object.values(q.answer).every(v=>q.categories.includes(v)),q.id);}
  assert.equal(correct(q,q.answer),true,q.id);
 }
});
test('MCMA exact set required; subset and extra choices do not earn points',()=>{
 const q=bank.find(q=>q.type==='multiple_response');assert.equal(correct(q,q.answer),true);assert.equal(correct(q,[q.answer[0]]),false);
 assert.equal(correct(q,[...q.answer,Object.keys(q.options).find(k=>!q.answer.includes(k))]),false);
 assert.equal(correct(q,[...q.answer].reverse()),true);
});
test('partial category response is incomplete, full wrong response is wrong',()=>{
 const q=bank.find(q=>q.type==='category_matrix');const first=q.options[0].id;
 assert.equal(!!answered(q,{[first]:q.answer[first]}),false);
 const wrong={...q.answer,[first]:q.categories.find(c=>c!==q.answer[first])};
 assert.equal(correct(q,wrong),false);assert.equal(answered(q,wrong),true);
 const g=grade([q],{[q.id]:{[first]:q.answer[first]}});assert.equal(g.empty,1);assert.equal(g.wrong,0);
});
test('unanswered bank yields zero; perfect bank yields 100 and sums per topic',()=>{
 const empty=grade(bank,{});assert.equal(empty.score,0);assert.equal(empty.empty,80);
 const perfect=grade(bank,Object.fromEntries(bank.map(q=>[q.id,q.answer])));assert.equal(perfect.score,100);assert.equal(perfect.correct,80);assert.equal(perfect.empty,0);
 assert.equal(perfect.topics.reduce((s,t)=>s+t.total,0),80);
});
test('deadline persists independently of reload or timer ticks',()=>{
 const start=1000000,deadline=start+150*60*1000;
 assert.equal(remaining(deadline,start),9000);assert.equal(remaining(deadline,start+90*60*1000),3600);
 assert.equal(remaining(deadline,deadline),0);assert.equal(remaining(deadline,deadline+6000),0);
 assert.equal(clock(9000),'02:30:00');assert.equal(clock(59),'00:00:59');assert.equal(clock(0),'00:00:00');
});
test('shuffle preserves every question without mutating source',()=>{
 const src=[1,2,3,4,5],before=[...src];assert.deepEqual(shuffle(src).sort(),before);assert.deepEqual(src,before);
});
