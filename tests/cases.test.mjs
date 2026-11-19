import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {loadBank} from '../dist/bank.js';
import {caseQuestions,casePuTopicIds} from '../dist/case-bank.js';
const bank=await loadBank();

test('all live questions are self-contained revised cases with substantive explanations',()=>{
 assert.equal(bank.length,170);
 assert.equal(new Set(bank.map(q=>q.case_id)).size,34);
 for(const q of bank){
  assert.equal(q.bank_revision,'2026.3-cases');
  const [scenario,prompt,...extra]=q.stem.split('\n\n');
  assert.ok(scenario.length>=220,q.id);assert.ok(prompt.length>25,q.id);assert.equal(extra.length,0);
  assert.ok(q.explanation.length>=120,q.id);
  assert.ok(q.case_title&&q.topic,q.id);
  // Options are shuffled at session start, so prose must not hard-code A/B/C/D.
  assert.doesNotMatch(q.explanation,/Kunci: [ABCD]|[Pp]ilihan [ABCD]\b/,q.id);
 }
 assert.deepEqual(Object.fromEntries(['single_choice','multiple_response','category_matrix'].map(t=>[t,bank.filter(q=>q.type===t).length])),{single_choice:102,multiple_response:34,category_matrix:34});
});

test('every authored row compiles exactly once and case-specific keys are well formed',async()=>{
 const source=await readFile(new URL('../content/cases.txt',import.meta.url),'utf8');
 assert.equal(source.split('\n').filter(line=>/^[SMC]\|/.test(line)).length,170);
 for(const caseId of new Set(bank.map(q=>q.case_id))){
  const qs=bank.filter(q=>q.case_id===caseId);
  assert.equal(qs.length,5);assert.equal(qs.filter(q=>q.type==='single_choice').length,3);
  assert.equal(qs.filter(q=>q.type==='multiple_response').length,1);
  assert.equal(qs.filter(q=>q.type==='category_matrix').length,1);
 }
 assert.equal(Object.values(casePuTopicIds).flat().length,70);
 const copy=await loadBank();copy[0].stem='changed';assert.notEqual(caseQuestions.find(q=>q.id===copy[0].id).stem,'changed');
});
