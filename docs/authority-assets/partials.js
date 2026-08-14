// Renders header + footer so all detail pages stay tiny.
(function(){
  const depth = parseInt(document.documentElement.dataset.depth || '0', 10);
  const PREFIX = depth === 0 ? '' : '../'.repeat(depth);
  function R(p){ return PREFIX + p.replace(/^\//, ''); }

  const HEADER = `
<header class="site-header">
  <div class="site-header-inner">
    <a href="${R('/index.html')}" class="site-logo">
      <span class="mark">SG</span>
      <span>
        <span data-lang="fr">Samuel Gareau-Lajoie</span>
        <span data-lang="en">Samuel Gareau-Lajoie</span>
        <small data-lang="fr">Médecin · Éducateur IA clinique</small>
        <small data-lang="en">Physician · Clinical AI educator</small>
      </span>
    </a>
    <nav class="site-nav" aria-label="Main">
      <a href="${R('/gareaulajoie-preview/piliers/index.html')}"><span data-lang="fr">Piliers</span><span data-lang="en">Pillars</span></a>
      <a href="${R('/gareaulajoie-preview/selected-appearances/index.html')}"><span data-lang="fr">Apparitions</span><span data-lang="en">Appearances</span></a>
      <a href="${R('/gareaulajoie-preview/answer-objects/index.html')}"><span data-lang="fr">Réponses</span><span data-lang="en">Answers</span></a>
      <a href="${R('/gareaulajoie-preview/research/index.html')}"><span data-lang="fr">Recherche</span><span data-lang="en">Research</span></a>
      <a href="${R('/gareaulajoie-preview/authority/index.html')}"><span data-lang="fr">Parcours</span><span data-lang="en">Track record</span></a>
      <a href="${R('/gareaulajoie-preview/about/index.html')}"><span data-lang="fr">À propos</span><span data-lang="en">About</span></a>
      <a href="${R('/gareaulajoie-preview/media-kit/index.html')}"><span data-lang="fr">Media kit</span><span data-lang="en">Media kit</span></a>
    </nav>
    <button class="menu-btn" aria-label="Menu">☰</button>
    <div class="lang-toggle" role="group" aria-label="Language">
      <button data-lang="fr" aria-label="Français">FR</button>
      <button data-lang="en" aria-label="English">EN</button>
    </div>
  </div>
</header>`;

  const FOOTER = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <h4>Samuel Gareau-Lajoie, MD</h4>
        <p data-lang="fr">Médecin de famille au Québec et éducateur en IA clinique. Travaux publics documentés — sans biais commercial, depuis le terrain.</p>
        <p data-lang="en">Family physician in Québec and clinical AI educator. Documented public work — no commercial bias, from the field.</p>
        <p style="font-family:var(--mono);font-size:0.78rem;letter-spacing:.04em">
          <a href="mailto:drsamuel@gareaulajoie.ca">drsamuel@gareaulajoie.ca</a>
        </p>
      </div>
      <div class="footer-col">
        <h5 data-lang="fr">Explorer</h5><h5 data-lang="en">Explore</h5>
        <ul>
          <li><a href="${R('/gareaulajoie-preview/piliers/index.html')}"><span data-lang="fr">Piliers thématiques</span><span data-lang="en">Thematic pillars</span></a></li>
          <li><a href="${R('/gareaulajoie-preview/answer-objects/index.html')}"><span data-lang="fr">Réponses cliniques</span><span data-lang="en">Clinical answers</span></a></li>
          <li><a href="${R('/gareaulajoie-preview/talks/index.html')}"><span data-lang="fr">Conférences</span><span data-lang="en">Talks</span></a></li>
          <li><a href="${R('/gareaulajoie-preview/podcasts/index.html')}"><span data-lang="fr">Podcasts</span><span data-lang="en">Podcasts</span></a></li>
          <li><a href="${R('/gareaulajoie-preview/publications/index.html')}">Publications</a></li>
          <li><a href="${R('/gareaulajoie-preview/research/index.html')}"><span data-lang="fr">Recherche</span><span data-lang="en">Research</span></a></li>
          <li><a href="${R('/gareaulajoie-preview/credentials/index.html')}"><span data-lang="fr">Accréditations</span><span data-lang="en">Credentials</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5 data-lang="fr">Profil</h5><h5 data-lang="en">Profile</h5>
        <ul>
          <li><a href="${R('/gareaulajoie-preview/about/index.html')}"><span data-lang="fr">À propos</span><span data-lang="en">About</span></a></li>
          <li><a href="${R('/gareaulajoie-preview/authority/index.html')}"><span data-lang="fr">Autorité publique</span><span data-lang="en">Public authority</span></a></li>
          <li><a href="${R('/gareaulajoie-preview/media-kit/index.html')}">Media kit</a></li>
          <li><a href="${R('/gareaulajoie-preview/projects/index.html')}"><span data-lang="fr">Projets</span><span data-lang="en">Projects</span></a></li>
          <li><a href="${R('/gareaulajoie-preview/selected-appearances/index.html')}"><span data-lang="fr">Apparitions publiques</span><span data-lang="en">Public appearances</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5 data-lang="fr">Identifiants</h5><h5 data-lang="en">Identifiers</h5>
        <ul>
          <li><a href="https://orcid.org/0009-0002-3078-8997" target="_blank" rel="noopener">ORCID</a></li>
          <li><a href="https://scholar.google.com/citations?user=i8fupzQAAAAJ" target="_blank" rel="noopener">Google Scholar</a></li>
          <li><a href="https://www.linkedin.com/in/sglmd" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/40565474/" target="_blank" rel="noopener">PubMed</a></li>
          <li><a href="${R('/gareaulajoie-preview/llms.txt')}">llms.txt</a></li>
          <li><a href="${R('/rss.xml')}">RSS</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Samuel Gareau-Lajoie, MD — <span data-lang="fr">Québec, Canada</span><span data-lang="en">Québec, Canada</span></span>
      <div class="meta">
        <span data-lang="fr">Mis à jour : 24 mai 2026</span>
        <span data-lang="en">Updated: May 24, 2026</span>
        <span><a href="${R('/gareaulajoie-preview/llms.txt')}">llms.txt</a></span>
      </div>
    </div>
  </div>
</footer>`;

  const hEl = document.getElementById('header-slot');
  if (hEl) hEl.outerHTML = HEADER;
  const fEl = document.getElementById('footer-slot');
  if (fEl) fEl.outerHTML = FOOTER;
})();
