// Loaded in <head> before CSS to apply the saved/system theme before paint.
(() => {
  const key='nalar.theme.v1';
  const system=window.matchMedia?.('(prefers-color-scheme: dark)');
  let preference=null;
  try { const saved=localStorage.getItem(key); if(saved==='dark'||saved==='light')preference=saved; } catch {}
  let current=preference||(system?.matches?'dark':'light');
  const sun='<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>';
  const moon='<path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/>';
  const content=()=>`<svg viewBox="0 0 24 24" aria-hidden="true">${current==='dark'?moon:sun}</svg><span class="theme-choice">${current==='dark'?'Gelap':'Terang'}</span>`;
  function apply(){
    document.documentElement.dataset.theme=current;
    document.documentElement.style.colorScheme=current;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',current==='dark'?'#101917':'#123f39');
    document.querySelectorAll('[data-theme-toggle]').forEach(button=>{
      button.setAttribute('aria-pressed',String(current==='dark'));
      button.title=current==='dark'?'Beralih ke mode terang':'Beralih ke mode gelap';
      button.innerHTML=content();
    });
  }
  function toggle(){
    current=current==='dark'?'light':'dark';preference=current;
    try {localStorage.setItem(key,preference);} catch {}
    apply();
  }
  window.NalarTheme={
    current:()=>current,
    button:()=>`<button type="button" class="theme-toggle" data-theme-toggle aria-label="Mode gelap" aria-pressed="${current==='dark'}" title="${current==='dark'?'Beralih ke mode terang':'Beralih ke mode gelap'}">${content()}</button>`,
    toggle
  };
  apply();
  document.addEventListener('click',event=>{if(event.target.closest('[data-theme-toggle]'))toggle();});
  system?.addEventListener?.('change',event=>{if(!preference){current=event.matches?'dark':'light';apply();}});
  window.addEventListener('storage',event=>{
    if(event.key!==key)return;
    preference=event.newValue==='dark'||event.newValue==='light'?event.newValue:null;
    current=preference||(system?.matches?'dark':'light');apply();
  });
})();
