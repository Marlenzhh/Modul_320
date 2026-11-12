(function () {
  var root = document.documentElement;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (e) { /* Speicher nicht verfügbar */ }
    return null;
  }

  // Hell/Dunkel
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      store('theme', next);
      renderDiagrams();
    });
  }

  // Mermaid-Diagramme
  var diagrams = Array.prototype.slice.call(document.querySelectorAll('pre.mermaid'));
  diagrams.forEach(function (el) { el.dataset.src = el.textContent; });

  function renderDiagrams() {
    if (!window.mermaid || !diagrams.length) return;
    var light = root.getAttribute('data-theme') === 'light';
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: light ? {
        background: '#ffffff', primaryColor: '#e7f5ff', primaryTextColor: '#183153',
        primaryBorderColor: '#146ebe', lineColor: '#146ebe', secondaryColor: '#f0f1f3',
        tertiaryColor: '#ffffff', fontFamily: 'Nunito, sans-serif'
      } : {
        background: '#183153', primaryColor: '#0d1a2d', primaryTextColor: '#f0f4fa',
        primaryBorderColor: '#74c0fc', lineColor: '#74c0fc', secondaryColor: '#183153',
        tertiaryColor: '#183153', fontFamily: 'Nunito, sans-serif'
      }
    });
    diagrams.forEach(function (el) {
      el.removeAttribute('data-processed');
      el.textContent = el.dataset.src;
    });
    mermaid.run({ nodes: diagrams });
  }
  window.addEventListener('load', renderDiagrams);

  // Lernziele abhaken
  Array.prototype.forEach.call(document.querySelectorAll('input[data-key]'), function (box) {
    box.checked = store('m320-' + box.dataset.key) === '1';
    box.addEventListener('change', function () {
      store('m320-' + box.dataset.key, box.checked ? '1' : null);
    });
  });

  // Erledigt-Status
  function isDone(id) { return store('m320-done-' + id) === '1'; }

  var doneBtn = document.getElementById('doneBtn');
  if (doneBtn) {
    var id = doneBtn.dataset.task;
    var paint = function () {
      var d = isDone(id);
      doneBtn.classList.toggle('is-done', d);
      doneBtn.textContent = d ? 'Erledigt' : 'Als erledigt markieren';
    };
    doneBtn.addEventListener('click', function () {
      store('m320-done-' + id, isDone(id) ? null : '1');
      paint();
      markDone();
    });
    paint();
  }

  function markDone() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-task]'), function (el) {
      if (el.id === 'doneBtn') return;
      var d = isDone(el.dataset.task);
      el.classList.toggle('done', d);
    });
    var cards = document.querySelectorAll('a.card[data-task]');
    var bar = document.getElementById('progressBar');
    if (bar && cards.length) {
      var n = 0;
      Array.prototype.forEach.call(cards, function (c) { if (isDone(c.dataset.task)) n++; });
      bar.style.width = Math.round(n / cards.length * 100) + '%';
      var txt = document.getElementById('progressText');
      if (txt) txt.textContent = n + ' von ' + cards.length + ' Aufgaben erledigt';
    }
  }
  markDone();

  // PWA: Service Worker fuer den Offline-Modus
  var status = document.getElementById('swStatus');
  var appScript = document.querySelector('script[src$="js/app.js"]');
  if ('serviceWorker' in navigator && appScript && /^https?:$/.test(location.protocol)) {
    var swUrl = appScript.src.replace(/js\/app\.js.*$/, 'sw.js');
    navigator.serviceWorker.register(swUrl).then(function () {
      return navigator.serviceWorker.ready;
    }).then(function () {
      if (status) status.textContent = 'Offline verfügbar';
    }).catch(function () {
      if (status) status.textContent = '';
    });
  }
  function net() {
    if (status && !navigator.onLine) status.textContent = 'Offline-Modus aktiv';
  }
  window.addEventListener('offline', net);
  window.addEventListener('online', function () { if (status) status.textContent = 'Offline verfügbar'; });
})();
