(function () {
  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { /* Speicher nicht verfügbar */ }
    return null;
  }

  function best(id) {
    var v = store('m320-quiz-' + id);
    return v === null ? null : parseInt(v, 10);
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  // Bestwerte auf Karten der Übersicht
  Array.prototype.forEach.call(document.querySelectorAll('[data-quiz-score]'), function (s) {
    var b = best(s.dataset.quizScore);
    var total = s.dataset.total;
    if (b !== null) s.textContent = 'Quiz: ' + b + ' von ' + total + ' richtig';
  });

  var box = document.getElementById('quiz');
  var dataEl = document.getElementById('quiz-data');
  if (!box || !dataEl) return;

  var id = box.dataset.task;
  var questions = JSON.parse(dataEl.textContent);

  function start() {
    var queue = shuffle(questions.map(function (q, i) { return { q: q, i: i, retry: false }; }));
    var state = { queue: queue, pos: 0, firstTry: 0, streak: 0, total: questions.length, answered: 0 };
    next(state);
  }

  function intro() {
    box.innerHTML = '';
    var b = best(id);
    box.appendChild(el('p', 'muted', questions.length + ' Fragen, nur antippen, kein Tippen nötig. Falsche Antworten kommen am Ende nochmal.'));
    if (b !== null) box.appendChild(el('p', 'quiz-best', 'Bestes Ergebnis: ' + b + ' von ' + questions.length));
    var btn = el('button', 'btn', b === null ? 'Quiz starten' : 'Nochmal spielen');
    btn.type = 'button';
    btn.addEventListener('click', start);
    box.appendChild(btn);
  }

  function next(state) {
    box.innerHTML = '';
    if (state.pos >= state.queue.length) { return finish(state); }
    var item = state.queue[state.pos];
    var q = item.q;

    var bar = el('div', 'quiz-bar');
    var fill = el('div', 'quiz-bar-fill');
    fill.style.width = Math.round(state.answered / (state.total) * 100) + '%';
    bar.appendChild(fill);
    box.appendChild(bar);

    var head = el('div', 'quiz-head');
    head.appendChild(el('span', 'muted', 'Frage ' + Math.min(state.pos + 1, state.queue.length) + ' von ' + state.queue.length));
    head.appendChild(el('span', 'quiz-streak', state.streak > 1 ? state.streak + ' in Folge' : ''));
    box.appendChild(head);

    box.appendChild(el('h3', 'quiz-q', q.q));

    var opts = el('div', 'quiz-opts');
    var choices;
    if (q.t === 'tf') {
      choices = [{ text: 'Richtig', ok: q.a === true }, { text: 'Falsch', ok: q.a === false }];
    } else {
      choices = shuffle(q.o.map(function (t, i) { return { text: t, ok: i === q.a }; }));
    }

    var feedback = el('div', 'quiz-feedback');
    feedback.hidden = true;
    var locked = false;

    choices.forEach(function (c) {
      var b = el('button', 'quiz-opt', c.text);
      b.type = 'button';
      b.addEventListener('click', function () {
        if (locked) return;
        locked = true;
        Array.prototype.forEach.call(opts.children, function (x, k) {
          x.disabled = true;
          if (choices[k].ok) x.classList.add('is-right');
        });
        var right = c.ok;
        if (!right) b.classList.add('is-wrong');
        if (right) {
          state.streak++;
          if (!item.retry) state.firstTry++;
          state.answered++;
        } else {
          state.streak = 0;
          if (!item.retry) {
            state.queue.push({ q: q, i: item.i, retry: true });
          } else {
            state.queue.push({ q: q, i: item.i, retry: true });
          }
        }
        feedback.className = 'quiz-feedback ' + (right ? 'ok' : 'bad');
        feedback.innerHTML = '';
        feedback.appendChild(el('strong', '', right ? 'Richtig!' : 'Leider falsch.'));
        feedback.appendChild(el('p', '', q.e));
        var cont = el('button', 'btn', 'Weiter');
        cont.type = 'button';
        cont.addEventListener('click', function () { state.pos++; next(state); });
        feedback.appendChild(cont);
        feedback.hidden = false;
        cont.focus();
      });
      opts.appendChild(b);
    });

    box.appendChild(opts);
    box.appendChild(feedback);
  }

  function finish(state) {
    box.innerHTML = '';
    var score = state.firstTry;
    var prev = best(id);
    if (prev === null || score > prev) store('m320-quiz-' + id, String(score));
    var pct = Math.round(score / state.total * 100);
    var bar = el('div', 'quiz-bar');
    var fill = el('div', 'quiz-bar-fill');
    fill.style.width = '100%';
    bar.appendChild(fill);
    box.appendChild(bar);
    box.appendChild(el('h3', 'quiz-q', score + ' von ' + state.total + ' beim ersten Versuch richtig (' + pct + ' %)'));
    var msg = pct === 100 ? 'Perfekt! Alles beim ersten Mal gewusst.' :
              pct >= 70 ? 'Stark! Die falschen Fragen hast du in der Wiederholung gemeistert.' :
              'Gut gekämpft. Lies die Lernziele nochmal und versuch es erneut.';
    box.appendChild(el('p', 'muted', msg));
    var again = el('button', 'btn', 'Nochmal spielen');
    again.type = 'button';
    again.addEventListener('click', start);
    box.appendChild(again);
  }

  intro();
})();
