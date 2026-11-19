import {caseQuestions} from './case-bank.js';
import {pedagogiTopics} from './pedagogi.js';
export async function loadBank(){
 return structuredClone(caseQuestions).map(q=>q.section==='PU'?{...q,topic:pedagogiTopics.find(t=>t.id===q.puTopic)?.title}:q).sort((a,b)=>a.id.localeCompare(b.id));
}
