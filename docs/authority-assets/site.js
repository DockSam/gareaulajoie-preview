// Shared site behavior: bilingual toggle + mobile menu + active nav.
(function(){
  // --- Language toggle (persists in localStorage) ---
  const KEY = 'sgl_lang';
  function setLang(l){
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.setAttribute('lang', l === 'en' ? 'en' : 'fr');
    try { localStorage.setItem(KEY, l); } catch(e){}
    document.querySelectorAll('.lang-toggle button').forEach(b=>{
      b.classList.toggle('on', b.dataset.lang === l);
    });
  }
  let initial = 'fr';
  try { initial = localStorage.getItem(KEY) || 'fr'; } catch(e){}
  setLang(initial);

  document.addEventListener('click', function(e){
    const b = e.target.closest('.lang-toggle button');
    if (b) { setLang(b.dataset.lang); e.preventDefault(); }
    const m = e.target.closest('.menu-btn');
    if (m) {
      document.querySelector('.site-nav').classList.toggle('open');
    }
  });

  // --- Active nav highlight ---
  const path = location.pathname.replace(/\/index\.html$/, '/gareaulajoie-preview/').replace(/\.html$/, '');
  document.querySelectorAll('.site-nav a').forEach(a=>{
    const href = a.getAttribute('href').replace(/\/index\.html$/, '/gareaulajoie-preview/').replace(/\.html$/, '');
    if (href === '/gareaulajoie-preview/' && path === '/gareaulajoie-preview/') a.classList.add('active');
    else if (href !== '/gareaulajoie-preview/' && path.startsWith(href.replace(/\/$/, ''))) a.classList.add('active');
  });
})();
