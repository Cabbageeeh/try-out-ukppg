import test from 'node:test';
import assert from 'node:assert/strict';
import {dashboardView} from '../dist/dashboard-view.js';
import {shellView} from '../dist/shell-view.js';
import {grade} from '../dist/engine.js';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;');
const bank=Array.from({length:170},(_,i)=>({id:String(i),section:i<100?'PCK':'PU',topic:'Algoritma & pemrograman',type:'single_choice',options:{A:'yes',B:'no'},answer:'A'}));
function view(history=[],cov=0){return dashboardView({bank,history,name:'Dani',covered:()=>cov,best:()=>history.length?grade(history[0].questions,history[0].answers).score:null,title:(h,p)=>`<h1>${h}</h1><p>${p}</p>`,btn:(l,a)=>`<button data-action="${a}">${l}</button>`,icon:n=>`<svg data-icon="${n}"></svg>`,esc,grade,modeLabel:()=> 'Mode Simulasi',date:()=> '19 Nov 2026',packageCard:()=>'<section>Package</section>',topicCard:t=>`<button>${t}</button>`});}
test('dashboard uses actual empty statistics instead of the example values in the design',()=>{
 const html=view();assert.match(html,/aria-valuenow="0"/);assert.match(html,/170/);
 assert.match(html,/Perjalananmu dimulai di sini/);assert.doesNotMatch(html,/activity-score high/);
 assert.match(html,/stat-value">0<\/strong>/);assert.match(html,/stat-value">—<\/strong>/);
 assert.ok(html.indexOf('dashboard-lead')<html.indexOf('editorial-stats'));
 assert.ok(html.indexOf('dashboard-middle')<html.indexOf('editorial-topics'));
});
test('progress and activity cards derive their numbers and links from saved attempts',()=>{
 const questions=bank.slice(0,80),answers=Object.fromEntries(questions.slice(0,57).map(q=>[q.id,'A']));
 const html=view([{id:'saved',questions,answers,title:'My actual tryout',finishedAt:Date.now(),elapsed:11220}],112);
 assert.match(html,/aria-valuenow="112"/);assert.match(html,/112 soal/);assert.match(html,/>58<\/b>/);
 assert.match(html,/activity-score high">71/);assert.match(html,/57\/80 benar/);assert.match(html,/data-id="saved"/);
 assert.match(html,/stat-value">187<\/strong>/);assert.match(html,/My actual tryout/);
});
test('mobile navigation exposes all routes including the more menu and current page',()=>{
 const html=shellView('content','pedagogi',{brand:()=>'<a>Nalar</a>',icon:()=>'<svg></svg>',themeButton:()=>'<button data-theme-toggle>Theme</button>',esc,name:'Dani',banner:()=>'',storageOK:true});
 const mobile=html.slice(html.indexOf('<nav class="bottom-nav"'));
 assert.match(mobile,/href="#pedagogi" class="active" aria-current="page"/);
 assert.match(mobile,/data-action="menu"/);assert.match(html,/href="#referensi"/);assert.match(html,/href="#riwayat"/);
 assert.match(html,/data-theme-toggle/);assert.match(html,/mobile-profile avatar/);
});
