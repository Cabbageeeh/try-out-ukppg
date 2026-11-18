export function answered(q, value) {
  if (q.type === 'single_choice') return typeof value === 'string' && Object.hasOwn(q.options, value);
  if (q.type === 'multiple_response') return Array.isArray(value) && value.length > 0;
  return value && q.options.every(o => Object.hasOwn(value, o.id));
}
export function correct(q, value) {
  if (!answered(q, value)) return false;
  if (q.type === 'single_choice') return value === q.answer;
  if (q.type === 'multiple_response') return value.length === q.answer.length && q.answer.every(x => value.includes(x));
  return q.options.every(o => value[o.id] === q.answer[o.id]);
}
export function grade(questions, answers) {
  const rows = questions.map(q => ({ id:q.id, section:q.section, topic:q.topic, correct:correct(q, answers[q.id]), answered:!!answered(q, answers[q.id]) }));
  const right = rows.filter(r => r.correct).length;
  const empty = rows.filter(r => !r.answered).length;
  const topics = [...new Set(rows.map(r => r.topic))].map(topic => {
    const set = rows.filter(r => r.topic === topic);
    return { topic, total:set.length, correct:set.filter(r => r.correct).length };
  });
  return { correct:right, wrong:rows.length-right-empty, empty, total:rows.length, score:Math.round(right/rows.length*100), rows, topics };
}
export function remaining(deadline, now=Date.now()) { return Math.max(0, Math.ceil((deadline-now)/1000)); }
export function clock(seconds) { seconds=Math.max(0,Math.floor(seconds)); return `${String(Math.floor(seconds/3600)).padStart(2,'0')}:${String(Math.floor(seconds%3600/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`; }
export function shuffle(array, random=Math.random) {
  const out=[...array]; for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];} return out;
}
