// ===== Translations =====
const t = {
  en: {
    'nav-about':        'About',
    'nav-research':     'Research',
    'nav-publications': 'Publications',
    'nav-materials':    'Materials',
    'nav-contact':      'Contact',

    'hero-label': 'Professor · Economist',
    'pos-1': 'Associate Professor, Department of Economics, Universidade Federal de Sergipe (UFS)',
    'pos-2': 'Postdoctoral Researcher, Center for Collective Learning, IAST, Toulouse School of Economics',
    'pos-3': 'PhD and Visiting Researcher, CEDEPLAR/UFMG',
    'hero-bio': 'My research sits at the intersection of economic complexity, regional development, international trade, and industrial economics, using tools from network science and quantitative methods to understand how economies diversify, transform structurally, and converge or diverge over time.',

    'lbl-citations': 'Citations',

    'research-title': 'Research',
    'research-sub':   'My work combines complexity science, regional economics, industrial economics, and network analysis to study how economies grow, diversify, and fall behind.',

    'card-ec-title': 'Economic Complexity',
    'card-ec-desc':  'Applying complexity science to understand how productive capabilities accumulate, how economies diversify, and the role of knowledge in structural transformation.',
    'card-re-title': 'Regional Economics',
    'card-re-desc':  'Investigating regional disparities in productivity, employment, and development paths, with a focus on Brazilian states and municipalities.',
    'card-it-title': 'International Trade',
    'card-it-desc':  'Examining trade network structures, core-periphery patterns, and the dynamics of export diversification and sophistication in developing economies.',
    'card-qm-title': 'Quantitative Methods',
    'card-qm-desc':  'Combining network analysis, econometrics, and computational approaches to build rigorous empirical work in economics.',
    'card-ie-title': 'Industrial Economics',
    'card-ie-desc':  'Studying market structure, firm behavior, and industrial organization, with a focus on how industries evolve and shape productive transformation in developing economies.',

    'pub-title': 'Selected Publications',
    'pub-sub':   'Full list on <a href="https://scholar.google.com/citations?user=5jq6W3AAAAAJ" target="_blank" rel="noopener">Google Scholar</a> and <a href="http://lattes.cnpq.br/7115134234408070" target="_blank" rel="noopener">Lattes</a>.',

    'pub-meta-1': 'with A.R. Queiroz, J.P. Romero &middot; <em>Structural Change and Economic Dynamics</em>, v. 76, p. 20-43',
    'pub-meta-2': 'with F. Silveira, J.P. Romero, A. Queiroz, A. Stein &middot; <em>World Development</em>, v. 185, p. 106804',
    'pub-meta-3': 'with A.R. Queiroz, J.P. Romero &middot; <em>Revista Economia da ANPEC</em>, v. 25',
    'pub-meta-4': 'with G. Britto, P. Amaral &middot; <em>Papers in Regional Science</em>, v. 103, p. 100011',
    'pub-meta-5': 'with J.P. Romero, F. Silveira, G. Britto, F. Cimini, F.G. Jayme Jr. &middot; <em>Spatial Economic Analysis</em>, v. 1, p. 1-24',

    'tag-regional':    'Regional Economics',
    'tag-complexity':  'Complexity',
    'tag-employment':  'Employment',
    'tag-environment': 'Environment',
    'tag-development': 'Development',
    'tag-trade':       'Trade',
    'tag-networks':    'Networks',

    'mat-title': 'Teaching &amp; Materials',
    'mat-sub':   'Class notes, datasets, and code for students and researchers.',

    'mat-notes-title': 'Class Notes',
    'mat-notes-desc':  'Lecture notes and slides from undergraduate and graduate courses in economics, regional development, and quantitative methods.',
    'mat-notes-btn':   'Coming soon',
    'mat-data-title':  'Datasets',
    'mat-data-desc':   'Curated datasets on economic complexity, trade flows, and Brazilian regional economic indicators, ready for research and teaching.',
    'mat-code-title':  'Code &amp; Notebooks',
    'mat-code-desc':   'Python scripts and Jupyter notebooks for economic complexity calculations, network analysis, and spatial econometrics.',

    'contact-title': 'Contact',
  },

  pt: {
    'nav-about':        'Sobre',
    'nav-research':     'Pesquisa',
    'nav-publications': 'Publicações',
    'nav-materials':    'Materiais',
    'nav-contact':      'Contato',

    'hero-label': 'Professor · Economista',
    'pos-1': 'Professor Adjunto, Departamento de Economia, Universidade Federal de Sergipe (UFS)',
    'pos-2': 'Pós-doutorando, Center for Collective Learning, IAST, Toulouse School of Economics',
    'pos-3': 'Doutor e Pesquisador Visitante, CEDEPLAR/UFMG',
    'hero-bio': 'Minha pesquisa está na interseção entre complexidade econômica, desenvolvimento regional, comércio internacional e economia industrial, utilizando ferramentas de ciência de redes e métodos quantitativos para entender como as economias se diversificam, se transformam estruturalmente e convergem ou divergem ao longo do tempo.',

    'lbl-citations': 'Citações',

    'research-title': 'Pesquisa',
    'research-sub':   'Minha pesquisa combina ciência da complexidade, economia regional, economia industrial e análise de redes para estudar como as economias crescem, se diversificam e ficam para trás.',

    'card-ec-title': 'Complexidade Econômica',
    'card-ec-desc':  'Aplicando a ciência da complexidade para entender como as capacidades produtivas se acumulam, como as economias se diversificam e o papel do conhecimento na transformação estrutural.',
    'card-re-title': 'Economia Regional',
    'card-re-desc':  'Investigando disparidades regionais em produtividade, emprego e trajetórias de desenvolvimento, com foco em estados e municípios brasileiros.',
    'card-it-title': 'Comércio Internacional',
    'card-it-desc':  'Examinando estruturas de redes de comércio, padrões centro-periferia e a dinâmica da diversificação e sofisticação das exportações em economias em desenvolvimento.',
    'card-qm-title': 'Métodos Quantitativos',
    'card-qm-desc':  'Combinando análise de redes, econometria e abordagens computacionais para construir trabalho empírico rigoroso em economia.',
    'card-ie-title': 'Economia Industrial',
    'card-ie-desc':  'Estudando estrutura de mercados, comportamento das firmas e organização industrial, com foco em como as indústrias evoluem e moldam a transformação produtiva em economias em desenvolvimento.',

    'pub-title': 'Publicações Selecionadas',
    'pub-sub':   'Lista completa no <a href="https://scholar.google.com/citations?user=5jq6W3AAAAAJ" target="_blank" rel="noopener">Google Scholar</a> e no <a href="http://lattes.cnpq.br/7115134234408070" target="_blank" rel="noopener">Lattes</a>.',

    'pub-meta-1': 'com A.R. Queiroz, J.P. Romero &middot; <em>Structural Change and Economic Dynamics</em>, v. 76, p. 20-43',
    'pub-meta-2': 'com F. Silveira, J.P. Romero, A. Queiroz, A. Stein &middot; <em>World Development</em>, v. 185, p. 106804',
    'pub-meta-3': 'com A.R. Queiroz, J.P. Romero &middot; <em>Revista Economia da ANPEC</em>, v. 25',
    'pub-meta-4': 'com G. Britto, P. Amaral &middot; <em>Papers in Regional Science</em>, v. 103, p. 100011',
    'pub-meta-5': 'com J.P. Romero, F. Silveira, G. Britto, F. Cimini, F.G. Jayme Jr. &middot; <em>Spatial Economic Analysis</em>, v. 1, p. 1-24',

    'tag-regional':    'Economia Regional',
    'tag-complexity':  'Complexidade',
    'tag-employment':  'Emprego',
    'tag-environment': 'Meio Ambiente',
    'tag-development': 'Desenvolvimento',
    'tag-trade':       'Comércio',
    'tag-networks':    'Redes',

    'mat-title': 'Ensino e Materiais',
    'mat-sub':   'Notas de aula, bases de dados e código para estudantes e pesquisadores.',

    'mat-notes-title': 'Notas de Aula',
    'mat-notes-desc':  'Notas de aula e slides de disciplinas de graduação e pós-graduação em economia, desenvolvimento regional e métodos quantitativos.',
    'mat-notes-btn':   'Em breve',
    'mat-data-title':  'Bases de Dados',
    'mat-data-desc':   'Bases de dados curadas sobre complexidade econômica, fluxos de comércio e indicadores econômicos regionais brasileiros, prontas para pesquisa e ensino.',
    'mat-code-title':  'Código e Notebooks',
    'mat-code-desc':   'Scripts Python e Jupyter notebooks para cálculos de complexidade econômica, análise de redes e econometria espacial.',

    'contact-title': 'Contato',
  }
};

// ===== Detect language from URL path =====
function getLang() {
  return window.location.pathname.includes('/pt') ? 'pt' : 'en';
}

// ===== Apply language to DOM =====
function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[lang][key] !== undefined) el.innerHTML = t[lang][key];
  });
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.dataset.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.l === lang);
  });
}

// ===== Language toggle — navigate to /en/ or /pt/ =====
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.l;
    if (lang === getLang()) return;
    const hash = window.location.hash;
    window.location.pathname = window.location.pathname.replace(/\/(en|pt)\//, '/' + lang + '/');
    // hash is preserved automatically by the browser when changing pathname
  });
});

// ===== Init =====
setLang(getLang());

// ===== Mobile nav toggle =====
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// ===== Active nav highlight on scroll =====
const sections = document.querySelectorAll('section[id], footer[id]');
const navAs    = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id
          ? 'var(--navy)' : '';
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => observer.observe(s));
