/* ============================================================
   DinamiAcademy · app.js — motor de render + interactividad
   ============================================================ */
const App = (() => {
  const LS = 'examen_v1';
  const view = () => document.getElementById('view');

  // ---------- estado persistente ----------
  let S = load();
  function load() {
    try { return JSON.parse(localStorage.getItem(LS)) || fresh(); }
    catch { return fresh(); }
  }
  function fresh() {
    return { done: {}, quiz: {}, fcKnown: {}, streak: 0, lastDay: null, maxStreak: 0 };
  }
  function save() { localStorage.setItem(LS, JSON.stringify(S)); }

  // ---------- streak ----------
  function touchStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (S.lastDay === today) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak = (S.lastDay === y) ? S.streak + 1 : 1;
    S.lastDay = today;
    S.maxStreak = Math.max(S.maxStreak || 0, S.streak);
    save();
  }

  // ---------- helpers ----------
  const totalLessons = () => CONTENT.units.reduce((n, u) => n + u.lessons.length, 0);
  const doneCount = () => Object.keys(S.done).filter(k => S.done[k]).length;
  function unitDone(u) { return u.lessons.filter(l => S.done[l.id]).length; }
  function notaAvg() {
    const vals = Object.values(S.quiz);
    if (!vals.length) return null;
    // cada entrada: {correct, total}. Nota 1-7 según % acierto.
    let c = 0, t = 0; vals.forEach(v => { c += v.correct; t += v.total; });
    if (!t) return null;
    return (1 + 6 * (c / t));
  }

  function typeset() {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([view()]).catch(() => {});
    }
  }
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 1900);
  }

  // ---------- block renderer ----------
  function renderBlocks(blocks) {
    return blocks.map(renderBlock).join('');
  }
  function renderBlock(b) {
    switch (b.t) {
      case 'p': return `<p>${b.html}</p>`;
      case 'h3': return `<h3>${b.html}</h3>`;
      case 'h4': return `<h4>${b.html}</h4>`;
      case 'html': return b.html;
      case 'fig': {
        if (b.svg) return b.svg;
        if (b.img) return `<figure class="fig fig-img"><img src="${b.img}" alt="${(b.cap || 'figura del enunciado').replace(/"/g, '')}" loading="lazy"><figcaption>${b.cap ? '📷 ' + b.cap : 'Figura del enunciado original.'}</figcaption></figure>`;
        return '';
      }
      case 'box': {
        const cls = { def: 'box-def', form: 'box-form', peras: 'box-peras', warn: 'box-warn', exam: 'box-exam' }[b.kind] || 'box-def';
        const ico = { def: '📐', form: '🧮', peras: '🍐', warn: '⚠️', exam: '🎯' }[b.kind] || '';
        const ttl = b.title || { def: 'Definición', form: 'Fórmula', peras: 'Con peras y manzanas', warn: 'Cuidado', exam: 'En la prueba' }[b.kind];
        return `<div class="box ${cls}"><div class="box-t">${ico} ${ttl}</div>${b.html}</div>`;
      }
      case 'vars': {
        const rows = b.items.map(([k, d]) => `<div class="row"><div class="k">${k}</div><div class="d">${d}</div></div>`).join('');
        return `<div class="vars">${rows}</div>`;
      }
      case 'ftable': {
        const head = b.head ? `<tr>${b.head.map(h => `<th>${h}</th>`).join('')}</tr>` : '';
        const rows = b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
        return `<table class="ftable">${head}${rows}</table>`;
      }
      case 'steps': {
        const its = b.items.map(s => `<div class="step">${s}</div>`).join('');
        return `<div class="steps">${its}</div>`;
      }
      case 'example': {
        const lvl = b.level || 'medio';
        const sid = 'sol_' + Math.random().toString(36).slice(2, 9);
        return `<div class="example">
          <div class="ex-h">📝 ${b.title || 'Ejemplo'}<span class="lvl lvl-${lvl}">${lvl}</span></div>
          <div class="ex-body">
            ${b.body || ''}
            <div class="sol-toggle" onclick="App.toggleSol('${sid}', this)">▸ Ver solución</div>
            <div class="sol-body" id="${sid}">${b.dcl ? `<div class="dcl-wrap"><div class="dcl-lbl">📐 Diagrama de cuerpo libre — apréndelo a dibujar</div>${b.dcl}</div>` : ''}${b.solution || ''}</div>
          </div></div>`;
      }
      default: return '';
    }
  }

  // ---------- DASHBOARD ----------
  function goHome() {
    touchStreak();
    const total = totalLessons(), done = doneCount();
    const pct = total ? Math.round(done / total * 100) : 0;
    const blocks = {};
    CONTENT.units.forEach(u => { (blocks[u.block] = blocks[u.block] || []).push(u); });

    let html = `
      <div class="welcome-card">
        <div><div class="u">Prueba 2 · Dinámica FIS1514 · <em>acceso completo</em></div>
        <div class="sub">Tu camino al 5+ en el Prueba 2 · este viernes</div></div>
        <div class="acc">A tu medida</div>
      </div>
      <div class="hero">
        <h1>domina el <span class="grad">Prueba 2</span></h1>
        <p class="lead">Newton, energía y trabajo (con MAS), e impulso y momentum. Nueve unidades ordenadas por lo que más cae, con enunciados reales de pruebas y solución paso a paso. Una a la vez.</p>
      </div>
      <div class="progress-box">
        <div class="progress-head"><span>Progreso del curso</span><span><b>${done}</b> de ${total} lecciones · ${pct}%</span></div>
        <div class="bar"><i style="width:${pct}%"></i></div>
      </div>`;

    for (const [bk, list] of Object.entries(CONTENT.blocks)) {
      const us = blocks[bk] || [];
      if (!us.length) continue;
      html += `<div class="block-label">${list.label}</div><div class="block-sub">${list.sub}</div><div class="units">`;
      us.forEach(u => {
        const d = unitDone(u), n = u.lessons.length, p = n ? Math.round(d / n * 100) : 0;
        const badge = u.badge ? `<span class="pill ${u.badge.cls}">${u.badge.text}</span>` : '';
        html += `<button class="unit prio-${u.prio}" onclick="App.openUnit('${u.id}')">
          <div class="unit-ico">${u.icon}</div>
          <div>
            <div class="unit-tag">${u.tag}</div>
            <div class="unit-title">${u.title} ${badge}</div>
            <div class="unit-desc">${u.desc}</div>
            <div class="unit-meta">
              <span>${d}/${n} lecciones · ${u.flashcards ? u.flashcards.length : 0} tarjetas</span>
              <span class="barmini"><i style="width:${p}%"></i></span>
            </div>
          </div></button>`;
      });
      html += `</div>`;
    }

    const nota = notaAvg();
    html += `<div class="stats">
      <div class="stat"><div class="v" style="color:var(--green)">${nota ? nota.toFixed(1) : '—'}</div><div class="l">Nota promedio</div></div>
      <div class="stat"><div class="v" style="color:var(--amber)">${S.maxStreak || 0}</div><div class="l">Racha máxima</div></div>
      <div class="stat"><div class="v">${done}</div><div class="l">Lecciones completas</div></div>
    </div>`;

    view().innerHTML = html;
    updateTopbar();
    window.scrollTo(0, 0);
    typeset();
  }

  // ---------- UNIT ----------
  let cur = { unit: null, lesson: 0, tab: 'lec' };
  function openUnit(uid, tab) {
    const u = CONTENT.units.find(x => x.id === uid);
    if (!u) return;
    cur = { unit: u, lesson: firstUnseen(u), tab: tab || 'lec' };
    renderUnit();
  }
  function firstUnseen(u) {
    const i = u.lessons.findIndex(l => !S.done[l.id]);
    return i < 0 ? 0 : i;
  }
  function setTab(tab) { cur.tab = tab; renderUnit(); }

  function renderUnit() {
    const u = cur.unit;
    let body = '';
    const tabs = `<div class="tabs">
      <button class="tab ${cur.tab === 'lec' ? 'active' : ''}" onclick="App.setTab('lec')">📖 Lecciones</button>
      <button class="tab ${cur.tab === 'fc' ? 'active' : ''}" onclick="App.setTab('fc')">🎴 Tarjetas</button>
      <button class="tab ${cur.tab === 'quiz' ? 'active' : ''}" onclick="App.setTab('quiz')">✅ Quiz</button>
    </div>`;

    if (cur.tab === 'lec') body = renderLessons();
    else if (cur.tab === 'fc') body = renderFlash();
    else body = renderQuiz();

    view().innerHTML = `<div class="back-btn" onclick="App.goHome()">← Volver al inicio</div>
      <div class="crumb">${u.tag}</div>
      <h2 style="margin-bottom:14px">${u.icon} ${u.title}</h2>
      ${tabs}${body}`;
    updateTopbar(); window.scrollTo(0, 0); typeset();
    bindFlash();
  }

  function renderLessons() {
    const u = cur.unit, L = u.lessons[cur.lesson];
    const nav = u.lessons.map((l, i) =>
      `<a class="${i === cur.lesson ? 'active' : ''} ${S.done[l.id] ? 'done' : ''}" onclick="App.gotoLesson(${i})"><span class="dot"></span>${l.title}</a>`
    ).join('');
    const doneBtn = S.done[L.id]
      ? `<button class="btn btn-ghost" onclick="App.markLesson(false)">✓ Completada — desmarcar</button>`
      : `<button class="btn btn-primary" onclick="App.markLesson(true)">Marcar como completada</button>`;
    const prev = cur.lesson > 0 ? `<button class="btn" onclick="App.gotoLesson(${cur.lesson - 1})">← ${u.lessons[cur.lesson - 1].title}</button>` : `<button class="btn" onclick="App.goHome()">← Inicio</button>`;
    const next = cur.lesson < u.lessons.length - 1 ? `<button class="btn" onclick="App.gotoLesson(${cur.lesson + 1})">${u.lessons[cur.lesson + 1].title} →</button>` : `<button class="btn btn-primary" onclick="App.setTab('quiz')">Ir al Quiz →</button>`;

    return `<div class="lesson-layout">
      <nav class="lesson-nav"><div class="navh">${u.lessons.length} lecciones</div>${nav}</nav>
      <div class="content">
        <div class="crumb">Lección ${cur.lesson + 1} de ${u.lessons.length}</div>
        <h2>${L.title}</h2>
        ${renderBlocks(L.blocks)}
        <div style="margin-top:24px">${doneBtn}</div>
        <div class="nav-foot">${prev}${next}</div>
      </div></div>`;
  }
  function gotoLesson(i) { cur.lesson = i; renderUnit(); }
  function markLesson(v) {
    const L = cur.unit.lessons[cur.lesson];
    S.done[L.id] = v; save();
    if (v) { touchStreak(); toast('¡Lección completada! 🎉'); if (cur.lesson < cur.unit.lessons.length - 1) cur.lesson++; }
    renderUnit();
  }

  // ---------- FLASHCARDS ----------
  let fcIdx = 0;
  function renderFlash() {
    const u = cur.unit;
    if (!u.flashcards || !u.flashcards.length) return `<p class="muted">Esta unidad no tiene tarjetas.</p>`;
    fcIdx = 0;
    return `<p class="muted" style="margin-bottom:6px">Toca la tarjeta para girarla. Recórrelas hasta que respondas todas sin dudar.</p>
      <div class="fc-stage"><div class="fc" id="fcCard" onclick="App.flip()">
        <div class="fc-face fc-front"><div class="lbl">Pregunta · <span id="fcN"></span></div><div class="fc-q" id="fcQ"></div></div>
        <div class="fc-face fc-back"><div class="lbl">Respuesta</div><div class="fc-a" id="fcA"></div></div>
      </div></div>
      <div class="fc-controls">
        <button class="btn" onclick="App.fcMove(-1)">← Anterior</button>
        <span class="fc-count" id="fcCount"></span>
        <button class="btn" onclick="App.fcMove(1)">Siguiente →</button>
      </div>`;
  }
  function bindFlash() { if (cur.tab === 'fc' && cur.unit.flashcards && cur.unit.flashcards.length) showFc(); }
  function showFc() {
    const fc = cur.unit.flashcards[fcIdx];
    const card = document.getElementById('fcCard'); if (!card) return;
    card.classList.remove('flipped');
    document.getElementById('fcQ').innerHTML = fc.q;
    document.getElementById('fcA').innerHTML = fc.a;
    document.getElementById('fcN').textContent = `${fcIdx + 1}/${cur.unit.flashcards.length}`;
    document.getElementById('fcCount').textContent = `${fcIdx + 1} / ${cur.unit.flashcards.length}`;
    typeset();
  }
  function flip() { document.getElementById('fcCard').classList.toggle('flipped'); }
  function fcMove(d) {
    const n = cur.unit.flashcards.length;
    fcIdx = (fcIdx + d + n) % n; showFc();
  }

  // ---------- QUIZ ----------
  function renderQuiz() {
    const u = cur.unit;
    if (!u.quiz || !u.quiz.length) return `<p class="muted">Esta unidad no tiene quiz.</p>`;
    const typeName = { alt: 'Alternativas', vf: 'Verdadero / Falso', comp: 'Comprensión' };
    let html = `<p class="muted" style="margin-bottom:4px">${u.quiz.length} preguntas. Se guarda tu mejor intento y cuenta para tu nota promedio.</p>`;
    u.quiz.forEach((q, qi) => {
      const opts = q.opts.map((o, oi) =>
        `<button class="opt" onclick="App.answer('${u.id}',${qi},${oi})" id="opt_${qi}_${oi}"><span class="mark">${String.fromCharCode(65 + oi)}</span><span>${o}</span></button>`
      ).join('');
      html += `<div class="quiz" id="quiz_${qi}">
        <div class="q-tag"><span class="q-type ${q.type}">${typeName[q.type] || q.type}</span> Pregunta ${qi + 1}</div>
        <div class="q-text">${q.q}</div>
        <div class="opts">${opts}</div>
        <div class="q-explain" id="exp_${qi}"><b>Explicación.</b> ${q.explain}</div>
      </div>`;
    });
    html += `<div class="nav-foot"><button class="btn" onclick="App.goHome()">← Inicio</button><button class="btn btn-primary" onclick="App.setTab('lec')">Repasar lecciones</button></div>`;
    // reset transient answer state for this unit render
    quizState = {};
    return html;
  }
  let quizState = {};
  function answer(uid, qi, oi) {
    if (quizState[qi] != null) return; // ya respondida
    const u = cur.unit, q = u.quiz[qi];
    quizState[qi] = oi;
    const correct = q.answer;
    document.querySelectorAll(`#quiz_${qi} .opt`).forEach((b, i) => {
      b.disabled = true;
      if (i === correct) b.classList.add('correct');
      else if (i === oi) b.classList.add('wrong');
    });
    document.getElementById(`exp_${qi}`).classList.add('show');
    // guardar resultado agregado de la unidad
    recordQuiz(uid, u.quiz);
    typeset();
    if (oi === correct) toast('¡Correcto! ✅'); else toast('Revisa la explicación');
  }
  function recordQuiz(uid, quiz) {
    let correct = 0, answered = 0;
    quiz.forEach((q, i) => { if (quizState[i] != null) { answered++; if (quizState[i] === q.answer) correct++; } });
    const prev = S.quiz[uid] || { correct: 0, total: 0 };
    // guardamos el mejor desempeño proporcional sobre lo respondido
    if (answered === quiz.length) {
      if (correct / quiz.length >= (prev.total ? prev.correct / prev.total : 0)) {
        S.quiz[uid] = { correct, total: quiz.length };
      }
      touchStreak();
    } else {
      // intento parcial: no degradar el mejor
      if (!prev.total) S.quiz[uid] = { correct, total: answered };
    }
    save(); updateTopbar();
  }

  // ---------- UI helpers ----------
  function toggleSol(id, el) {
    const b = document.getElementById(id);
    b.classList.toggle('open');
    el.innerHTML = b.classList.contains('open') ? '▾ Ocultar solución' : '▸ Ver solución';
    if (b.classList.contains('open')) typeset();
  }
  function updateTopbar() {
    document.getElementById('streakNum').textContent = S.streak || 0;
    const nota = notaAvg();
    document.getElementById('notaNum').textContent = nota ? nota.toFixed(1) : '—';
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('examen_theme', next);
  }
  function resetAll() {
    if (!confirm('¿Reiniciar todo tu progreso (lecciones, quizzes, racha)? Esto no se puede deshacer.')) return;
    S = fresh(); save(); toast('Progreso reiniciado'); goHome();
  }

  // ---------- init ----------
  function init() {
    const t = localStorage.getItem('examen_theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
    goHome();
  }

  return { init, goHome, openUnit, setTab, gotoLesson, markLesson, flip, fcMove, answer, toggleSol, toggleTheme, resetAll };
})();

document.addEventListener('DOMContentLoaded', App.init);
