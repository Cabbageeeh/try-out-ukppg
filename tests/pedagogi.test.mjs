import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {loadBank} from '../dist/bank.js';
import * as engine from '../dist/engine.js';
import {pedagogiTopics, selectPedagogiQuestions, pedagogiTopicFor, pedagogiTryoutMinutes} from '../dist/pedagogi.js';
import {pedagogiPage} from '../dist/pedagogi-page.js';

const seed=JSON.parse(await readFile(new URL('../dist/seed.json',import.meta.url),'utf8'));
const nativeFetch=globalThis.fetch;
globalThis.fetch=async()=>({ok:true,json:async()=>seed});
const bank=await loadBank();
globalThis.fetch=nativeFetch;
const sources=JSON.parse(await readFile(new URL('../dist/sources.json',import.meta.url),'utf8'));

test('eight PU topics partition all 30 questions exactly once and link to existing sources',()=>{
 assert.equal(pedagogiTopics.length,8);
 const ids=pedagogiTopics.flatMap(t=>t.questionIds);
 assert.equal(ids.length,30);assert.equal(new Set(ids).size,30);
 assert.deepEqual(ids.toSorted(),bank.filter(q=>q.section==='PU').map(q=>q.id).toSorted());
 for(const t of pedagogiTopics){
  const qs=selectPedagogiQuestions(bank,t.id);
  assert.ok(qs.length>0,t.id);assert.ok(qs.every(q=>q.section==='PU'&&q.topic===t.title));
  assert.ok(t.concepts.length>=4&&t.steps.length===4&&t.example.reason&&t.recall,t.id);
  assert.ok(t.sources.every(id=>sources.some(s=>s.id===id)),t.id);
 }
 const pu=selectPedagogiQuestions(bank);
 assert.equal(pu.length,30);assert.equal(new Set(pu.map(q=>q.type)).size,3);
 assert.equal(pedagogiTryoutMinutes,55);
 assert.throws(()=>selectPedagogiQuestions(bank,'missing'));
 assert.equal(pedagogiTopicFor('INF-001'),undefined);
});

// Exercise the actual app handlers without a browser. No DOM dependency is needed
// for these session, answer-locking, and persistence contracts.
const appSource=(await readFile(new URL('../dist/app.js',import.meta.url),'utf8'))
 .replace(/^import .*;\r?\n/gm,'').split("app.innerHTML='<div class=\"loading\">")[0];
function appHarness(){
 const listeners={};const storage=new Map();
 const element=()=>({innerHTML:'',textContent:'',open:false,addEventListener(){},classList:{add(){},remove(){},toggle(){}},focus(){},showModal(){this.open=true;},close(){this.open=false;}});
 const app=element(),modal=element(),toast=element();let selectedMode='simulation';
 const context=vm.createContext({
  ...engine,pedagogiTopics,selectPedagogiQuestions,pedagogiTryoutMinutes,pedagogiPage,
  document:{querySelector:s=>s==='#app'?app:s==='#modal'?modal:s==='#toast'?toast:s==='input[name="feedback-mode"]:checked'?{value:selectedMode}:null,addEventListener:(type,fn)=>{(listeners[type]??=[]).push(fn);}},
  window:{addEventListener(){},scrollTo(){},print(){}},location:{hash:'#pedagogi'},
  localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
  setTimeout:()=>1,clearTimeout(){},structuredClone,Date,console,fixtures:structuredClone(bank),sourceFixtures:sources
 });
 vm.runInContext(appSource+'\nbank=fixtures;sources=sourceFixtures;',context);
 const run=code=>vm.runInContext(code,context);
 const change=(answer,row)=>{const target={dataset:{answer,row},checked:true,matches:s=>s==='[data-answer]'};for(const fn of listeners.change)fn({target});};
 const action=name=>{const el={dataset:{action:name},disabled:false};for(const fn of listeners.click)fn({target:{closest:s=>s==='[data-action]'?el:null},preventDefault(){}});};
 return {run,change,action,modal,app,mode:m=>{selectedMode=m;}};
}

test('PU tryout uses only 30 PU questions and a 55 minute deadline; topic practice is untimed',()=>{
 const h=appHarness();h.run("requestStart('pu')");assert.match(h.modal.innerHTML,/55 menit merupakan durasi latihan/);
 h.run('start()');assert.equal(h.run('active.questions.length'),30);
 assert.equal(h.run("active.questions.every(q=>q.section==='PU')"),true);
 assert.ok(Math.abs(h.run('active.deadline-active.startedAt')-55*60000)<100);
 h.run("active=null;requestStart('pu-topic','asesmen');start()");
 assert.equal(h.run('active.deadline'),null);assert.equal(h.run('active.questions.length'),4);
 assert.equal(h.run("active.questions.every(q=>q.topic==='Asesmen & umpan balik')"),true);
});

test('expired PU tryout finishes automatically and retains all question responses',()=>{
 const h=appHarness();h.run("requestStart('pu');start()");
 h.change(h.run('active.questions[active.cursor].answer'));
 h.run('active.deadline=Date.now()-1;tick()');
 assert.equal(h.run('active'),null);assert.equal(h.run('history[0].autoFinished'),true);
 assert.equal(h.run('history[0].questions.length'),30);
 assert.equal(h.run('Object.keys(history[0].answers).length'),1);
});

test('old broad PU results can still start a 30 question practice session',()=>{
 const h=appHarness();h.run("requestStart('practice','Pedagogi umum');start()");
 assert.equal(h.run('active.questions.length'),30);assert.equal(h.run('active.deadline'),null);
});

test('learning reveals single and completed matrix answers, waits for MCMA confirmation, locks and persists',()=>{
 const h=appHarness();h.mode('learning');h.run("requestStart('pu');start()");
 h.run("active.cursor=active.questions.findIndex(q=>q.type==='single_choice')");
 const key=h.run('active.questions[active.cursor].answer');h.change(key);
 assert.equal(h.run('!!active.revealed[active.questions[active.cursor].id]'),true);
 h.change('invalid');assert.equal(h.run('active.answers[active.questions[active.cursor].id]'),key);
 h.run("active.cursor=active.questions.findIndex(q=>q.type==='category_matrix')");
 const entries=h.run('Object.entries(active.questions[active.cursor].answer)');
 h.change(entries[0][1],entries[0][0]);assert.equal(h.run('!!active.revealed[active.questions[active.cursor].id]'),false);
 for(const [row,answer] of entries.slice(1))h.change(answer,row);
 assert.equal(h.run('!!active.revealed[active.questions[active.cursor].id]'),true);
 h.run("active.cursor=active.questions.findIndex(q=>q.type==='multiple_response')");
 for(const answer of h.run('active.questions[active.cursor].answer'))h.change(answer);
 assert.equal(h.run('!!active.revealed[active.questions[active.cursor].id]'),false);
 h.action('reveal');assert.equal(h.run('!!active.revealed[active.questions[active.cursor].id]'),true);
 h.run('active=null;read()');assert.equal(h.run('active.feedbackMode'),'learning');
 assert.equal(h.run('!!active.revealed[active.questions[active.cursor].id]'),true);
});

test('simulation hides answers throughout topic practice and reveals them only in the completed review',()=>{
 const h=appHarness();h.mode('simulation');h.run("requestStart('pu-topic','asesmen');start()");
 h.run("active.cursor=active.questions.findIndex(q=>q.type==='single_choice')");
 h.change(h.run('active.questions[active.cursor].answer'));h.action('reveal');
 assert.equal(h.run('!!active.revealed[active.questions[active.cursor].id]'),false);
 assert.doesNotMatch(h.run('exam()'),/class="practice-feedback"/);
 h.run('complete(false)');assert.equal(h.run('history[0].feedbackMode'),'simulation');
 assert.match(h.run('reviewPage(history[0])'),/Pembahasan/);
});

test('all material routes render and unknown topics show a return link',()=>{
 const h=appHarness();h.run('render()');assert.match(h.app.innerHTML,/8 topik/);
 for(const t of pedagogiTopics){h.run(`location.hash='#pedagogi/${t.id}';render()`);assert.ok(h.app.innerHTML.includes(t.title.replaceAll('&','&amp;')),t.id);assert.match(h.app.innerHTML,/Latihan topik ini/);}
 h.run("location.hash='#pedagogi/missing';render()");assert.match(h.app.innerHTML,/Materi belum ditemukan/);
});
