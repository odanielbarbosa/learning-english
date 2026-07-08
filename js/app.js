(function () {
"use strict";

const app = document.getElementById("app");
const STORE = "study-english-v1";
const USER_KEY = "study-english-user";
const USERS = window.USERS || [];
const COURSE = window.COURSE;
let currentUser = null;

// =====================================================
// BANCO DE DADOS (JSON em localStorage) — 100% offline
//   xp       : total acumulado
//   lessons  : { id -> { done, best, attempts, lastPct, lastTs } }
//   sessions : histórico de cada lição/prática concluída
//   events   : o "processo" — 1 registro por resposta dada
// =====================================================
const DB_VERSION = 1;
const MAX_EVENTS = 4000;

function normalizeDB(raw) {
  const d = raw && typeof raw === "object" ? raw : {};
  return {
    v: DB_VERSION,
    xp: Number(d.xp) || 0,
    lessons: d.lessons && typeof d.lessons === "object" ? d.lessons : {},
    sessions: Array.isArray(d.sessions) ? d.sessions : [],
    events: Array.isArray(d.events) ? d.events : []
  };
}
function dbKey() { return STORE + "::" + (currentUser ? currentUser.id : "_none"); }
function loadDB() {
  try { return normalizeDB(JSON.parse(localStorage.getItem(dbKey()) || "{}")); }
  catch (e) { return normalizeDB(null); }
}
let DB = normalizeDB(null); // carregado de verdade no login (banco por usuário)
function saveDB() { if (!currentUser) return; try { localStorage.setItem(dbKey(), JSON.stringify(DB)); } catch (e) {} }

function logEvent(ev) {
  DB.events.push(ev);
  if (DB.events.length > MAX_EVENTS) DB.events = DB.events.slice(-MAX_EVENTS);
  saveDB();
}
function logSession(s) { DB.sessions.push(s); saveDB(); }

// ---------- export / import do db.json ----------
function exportDB() {
  const blob = new Blob([JSON.stringify(DB, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = ymd(Date.now());
  a.href = url; a.download = "db-study-english-" + (currentUser ? currentUser.id + "-" : "") + stamp + ".json";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function importDB(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      DB = normalizeDB(JSON.parse(r.result));
      saveDB();
      alert("Banco importado com sucesso! ✅");
      home();
    } catch (e) { alert("Arquivo inválido. Selecione um db.json exportado por este app."); }
  };
  r.readAsText(file);
}
function pickImportFile() {
  const inp = document.createElement("input");
  inp.type = "file"; inp.accept = "application/json,.json";
  inp.onchange = () => { if (inp.files && inp.files[0]) importDB(inp.files[0]); };
  inp.click();
}
function resetDB() {
  if (!confirm("Apagar TODO o progresso de " + (currentUser ? currentUser.name : "este usuário") + "? (dica: exporte um db.json antes)")) return;
  DB = normalizeDB(null); saveDB(); home();
}

// =====================================================
// HELPERS
// =====================================================
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function norm(s) {
  return String(s).toLowerCase().replace(/[’´`]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?]+$/, "").trim();
}
function gapify(q) { return esc(q).replace(/___/g, '<span class="gap">&nbsp;&nbsp;&nbsp;</span>'); }
function joinSentence(tokens) { return tokens.join(" ").replace(/\s+([?!.,])/g, "$1"); }
function allLessons() {
  const out = [];
  COURSE.forEach(u => u.lessons.forEach(l => out.push({ u, l })));
  return out;
}
function unitById(id) { return COURSE.find(u => u.id === id); }

// datas
function ymd(ts) { const d = new Date(ts); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function dmy(ts) { const d = new Date(ts); return String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0"); }
function hhmm(ts) { const d = new Date(ts); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); }
function niceMax(v) {
  if (!(v > 0)) return 10;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const f = v / pow;
  const nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
  return nf * pow;
}
function computeStreak() {
  const set = new Set(DB.events.map(e => ymd(e.ts)));
  if (!set.size) return 0;
  let n = 0; const d = new Date(); d.setHours(0, 0, 0, 0);
  if (!set.has(ymd(d.getTime()))) d.setDate(d.getDate() - 1);
  while (set.has(ymd(d.getTime()))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

const KIND_LABEL = { choice: "Escolha a opção correta", type: "Digite a resposta", order: "Monte a frase", pairs: "Ligue os pares" };

// ---------- tema ----------
function currentTheme() { return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"; }
function toggleTheme() {
  const t = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("study-english-theme", t);
  const b = document.querySelector(".theme-toggle");
  if (b) { b.textContent = t === "dark" ? "☀️" : "🌙"; b.title = t === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"; }
}

// =====================================================
// LOGIN / USUÁRIOS (valida contra o banco em js/users.js)
// =====================================================
function findUser(input) {
  const q = String(input || "").trim().toLowerCase();
  if (!q) return null;
  return USERS.find(u => u.id.toLowerCase() === q) || null;
}
function login(user) {
  if (!user) return;
  currentUser = user;
  localStorage.setItem(USER_KEY, user.id);
  // adota o progresso legado (feito antes do login) para o dabcruz, uma única vez
  if (user.id === "dabcruz" && !localStorage.getItem(dbKey()) && localStorage.getItem(STORE)) {
    try { localStorage.setItem(dbKey(), localStorage.getItem(STORE)); } catch (e) {}
  }
  DB = loadDB();
  levelIdx = firstUnfinishedLevel();
  home();
}
function logout() {
  currentUser = null;
  localStorage.removeItem(USER_KEY);
  DB = normalizeDB(null);
  loginScreen();
}
function loginScreen() {
  S = null;
  const dark = currentTheme() === "dark";
  app.innerHTML = `
  <div class="login">
    <button class="theme-toggle login-theme" title="${dark ? "Mudar para tema claro" : "Mudar para tema escuro"}">${dark ? "☀️" : "🌙"}</button>
    <div class="login-brand"><span>🦉</span> Study English</div>
    <div class="login-title">Quem é você?</div>
    <div class="login-form">
      <input id="userInput" class="type-input" placeholder="Usuário" autocomplete="off" autocapitalize="off" spellcheck="false">
      <button class="btn" id="loginBtn">Entrar</button>
    </div>
    <div class="login-err" id="loginErr"></div>
  </div>`;

  app.querySelector(".login-theme").addEventListener("click", toggleTheme);
  const inp = app.querySelector("#userInput");
  const err = app.querySelector("#loginErr");
  const doLogin = () => {
    const u = findUser(inp.value);
    if (!u) { err.textContent = "Usuário “" + inp.value.trim() + "” não encontrado. 🤔"; inp.focus(); return; }
    login(u);
  };
  app.querySelector("#loginBtn").addEventListener("click", doLogin);
  inp.addEventListener("keydown", e => { if (e.key === "Enter") doLogin(); });
  inp.focus();
  window.scrollTo(0, 0);
}

// ---------- estado da sessão ----------
let S = null;

// ---------- stepper de níveis (1 nível/tela) ----------
let levelIdx = 0;
let levelAnim = ""; // "r" | "l" para animar a troca de nível
function gotoLevel(i) {
  if (i < 0 || i > COURSE.length - 1 || i === levelIdx) return;
  levelAnim = i > levelIdx ? "r" : "l";
  levelIdx = i;
  home();
}
function firstUnfinishedLevel() {
  for (let i = 0; i < COURSE.length; i++) {
    const allDone = COURSE[i].lessons.every(l => DB.lessons[l.id] && DB.lessons[l.id].done);
    if (!allDone) return i;
  }
  return COURSE.length - 1;
}

// =====================================================
// HOME
// =====================================================
function home() {
  S = null;
  const lessons = allLessons();
  const doneCount = lessons.filter(x => DB.lessons[x.l.id] && DB.lessons[x.l.id].done).length;
  const pct = Math.round((doneCount / lessons.length) * 100);
  const dark = currentTheme() === "dark";

  let html = `
  <div class="topbar">
    <div class="brand"><span>🦉</span> Study English</div>
    <div class="top-right">
      <div class="stats">
        <span class="xp">⭐ ${DB.xp} XP</span>
        <span class="done">✅ ${doneCount}/${lessons.length}</span>
      </div>
      <button class="theme-toggle" title="${dark ? "Mudar para tema claro" : "Mudar para tema escuro"}">${dark ? "☀️" : "🌙"}</button>
    </div>
  </div>
  <div class="user-bar">
    <div class="avatar sm" style="background:${currentUser.color}">${currentUser.avatar}</div>
    <div class="uwrap"><div class="uhi">Olá, ${esc(currentUser.name)}! 👋</div></div>
    <button class="nav-btn" id="logoutBtn">↩︎ Trocar usuário</button>
  </div>
  <div class="course-progress">
    <div class="label">Progresso do curso — ${pct}%</div>
    <div class="bar"><div style="width:${pct}%"></div></div>
  </div>
  <div class="io-row"><button class="nav-btn" id="goProgress">📊 Ver progresso</button></div>
  <div style="height:14px"></div>`;

  if (levelIdx < 0) levelIdx = 0;
  if (levelIdx > COURSE.length - 1) levelIdx = COURSE.length - 1;
  const u = COURSE[levelIdx];
  const total = COURSE.length;
  const unitDone = unit => unit.lessons.every(l => DB.lessons[l.id] && DB.lessons[l.id].done);

  // navegação de nível (setas + dots) — mostra apenas 1 nível por tela
  html += `
  <div class="level-nav">
    <button class="level-arrow" id="prevLvl"${levelIdx === 0 ? " disabled" : ""} title="Nível anterior">←</button>
    <div class="level-meta">
      <div class="k">Nível ${levelIdx + 1} de ${total}</div>
      <div class="v">${u.icon} ${esc(u.title)}</div>
    </div>
    <button class="level-arrow" id="nextLvl"${levelIdx === total - 1 ? " disabled" : ""} title="Próximo nível">→</button>
  </div>
  <div class="level-dots">
    ${COURSE.map((unit, i) => `<button class="level-dot${i === levelIdx ? " cur" : ""}${unitDone(unit) ? " done" : ""}" data-lvl="${i}" title="${esc(unit.title)}"></button>`).join("")}
  </div>

  <div class="level${levelAnim ? " lvl-in-" + levelAnim : ""}">
    <div class="unit">
      <div class="unit-head" style="background:${u.color}">
        <div class="uicon">${u.icon}</div>
        <div><h2>${esc(u.title)}</h2><p>${esc(u.desc)}</p></div>
      </div>`;

  u.lessons.forEach(l => {
    const pr = DB.lessons[l.id];
    const done = pr && pr.done;
    const stars = pr ? (pr.best >= 90 ? "⭐⭐⭐" : pr.best >= 70 ? "⭐⭐" : "⭐") : "";
    html += `
      <div class="lesson${done ? " done" : ""}">
        <div class="licon">${done ? "✅" : l.icon}</div>
        <div class="lesson-info">
          <h3>${esc(l.title)}</h3>
          <p>${esc(l.desc)} · ${l.ex.length} exercícios</p>
          ${pr ? `<div class="best"><span class="stars">${stars}</span> melhor: ${pr.best}%</div>` : ""}
        </div>
        <button class="btn ${done ? "ghost" : ""} small" data-lesson="${l.id}">${done ? "Revisar" : "Começar"}</button>
      </div>`;
  });

  html += `
    </div>`;

  // ao concluir o nível, botão para avançar ao próximo (a "seta" de progressão)
  if (unitDone(u) && levelIdx < total - 1) {
    html += `<div class="level-cta"><button class="btn" id="nextLvlCta">Próximo nível: ${esc(COURSE[levelIdx + 1].title)} →</button></div>`;
  }
  html += `</div>`;
  levelAnim = "";

  if (doneCount > 0) {
    html += `
    <div class="card mix-card" style="margin-top:22px">
      <div class="licon">🎲</div>
      <div class="lesson-info">
        <h3>Prática mista</h3>
        <p>15 exercícios aleatórios de todo o material</p>
      </div>
      <button class="btn blue small" data-mix="1">Praticar</button>
    </div>`;
  }

  html += `
  <div class="io-row">
    <button class="nav-btn" id="expBtn">⬇️ Exportar db.json</button>
    <button class="nav-btn" id="impBtn">⬆️ Importar db.json</button>
    <button class="nav-btn" id="resetBtn">🗑️ Zerar</button>
  </div>
  <div class="io-note">Seu progresso é salvo automaticamente neste navegador (banco JSON em localStorage).<br>
  Use <b>Exportar</b> para gerar um <b>db.json</b> de backup ou levar para outro PC.</div>
  <div class="foot-note">Conteúdo 100% baseado nos seus PDFs da pasta <b>assets</b>. Bons estudos! 💪</div>`;

  app.innerHTML = html;
  app.querySelectorAll("[data-lesson]").forEach(b =>
    b.addEventListener("click", () => {
      const found = allLessons().find(x => x.l.id === b.dataset.lesson);
      openLesson(found.u, found.l);
    })
  );
  const mixBtn = app.querySelector("[data-mix]");
  if (mixBtn) mixBtn.addEventListener("click", startMix);
  app.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
  app.querySelector("#logoutBtn").addEventListener("click", logout);
  app.querySelector("#goProgress").addEventListener("click", progress);
  app.querySelector("#prevLvl").addEventListener("click", () => gotoLevel(levelIdx - 1));
  app.querySelector("#nextLvl").addEventListener("click", () => gotoLevel(levelIdx + 1));
  const cta = app.querySelector("#nextLvlCta");
  if (cta) cta.addEventListener("click", () => gotoLevel(levelIdx + 1));
  app.querySelectorAll("[data-lvl]").forEach(d => d.addEventListener("click", () => gotoLevel(Number(d.dataset.lvl))));
  app.querySelector("#expBtn").addEventListener("click", exportDB);
  app.querySelector("#impBtn").addEventListener("click", pickImportFile);
  app.querySelector("#resetBtn").addEventListener("click", resetDB);
  window.scrollTo(0, 0);
}

// =====================================================
// TELA DE PROGRESSO (segunda tela / dashboard)
// =====================================================
function progress() {
  S = null;
  const sessions = DB.sessions.slice();
  const events = DB.events.slice();
  const lessonsDone = allLessons().filter(x => DB.lessons[x.l.id] && DB.lessons[x.l.id].done).length;

  let html = `
  <div class="dash-head">
    <button class="dash-back" id="back" title="Voltar">←</button>
    <h1>📊 Progresso — ${esc(currentUser.name)}</h1>
    <button class="theme-toggle" title="Tema">${currentTheme() === "dark" ? "☀️" : "🌙"}</button>
  </div>`;

  if (!sessions.length) {
    html += `<div class="empty-note"><div class="big">🌱</div>
      Ainda não há dados de estudo.<br>Conclua uma lição para começar a ver sua evolução aqui!
      <div style="height:20px"></div>
      <button class="btn" id="start">Ir estudar 🚀</button></div>`;
    app.innerHTML = html;
    app.querySelector("#back").onclick = home;
    app.querySelector(".theme-toggle").onclick = () => { toggleTheme(); progress(); };
    app.querySelector("#start").onclick = home;
    return;
  }

  const ftEvents = events.filter(e => e.f);
  const ftCorrect = ftEvents.filter(e => e.c).length;
  const overallAcc = ftEvents.length ? Math.round(100 * ftCorrect / ftEvents.length) : 0;
  const streak = computeStreak();

  // ---- tiles ----
  html += `<div class="tiles">
    <div class="tile a"><div class="v">${DB.xp}</div><div class="k">XP total</div></div>
    <div class="tile b"><div class="v">${lessonsDone}/16</div><div class="k">lições concluídas</div></div>
    <div class="tile c"><div class="v">${overallAcc}%</div><div class="k">precisão geral</div><div class="sub">${ftCorrect} de ${ftEvents.length} de 1ª</div></div>
    <div class="tile d"><div class="v">${streak}</div><div class="k">sequência</div><div class="sub">${streak === 1 ? "dia seguido" : "dias seguidos"}</div></div>
  </div>`;

  // ---- XP acumulado ----
  html += `<div class="panel"><h2>Evolução do XP</h2><div class="psub">XP acumulado ao longo das sessões</div>${buildXpChart(sessions)}</div>`;

  // ---- precisão por sessão ----
  html += `<div class="panel"><h2>Precisão por sessão</h2><div class="psub">% de acertos de primeira em cada lição/prática</div>${buildAccChart(sessions)}</div>`;

  // ---- atividade por dia ----
  html += `<div class="panel"><h2>Atividade (últimos 14 dias)</h2><div class="psub">Respostas dadas por dia</div>${buildDayBars(events)}</div>`;

  // ---- domínio por unidade ----
  const unitBars = buildUnitBars(events);
  if (unitBars) html += `<div class="panel"><h2>Domínio por unidade</h2><div class="psub">Precisão de 1ª tentativa em cada tema</div>${unitBars}</div>`;

  // ---- sessões recentes ----
  html += `<div class="panel"><h2>Sessões recentes</h2><div class="psub">Suas últimas ${Math.min(8, sessions.length)} sessões</div>${buildRecentTable(sessions)}</div>`;

  html += `<div class="io-row">
    <button class="nav-btn" id="expBtn">⬇️ Exportar db.json</button>
    <button class="nav-btn" id="goHome">🏠 Voltar ao curso</button>
  </div><div style="height:24px"></div>`;

  app.innerHTML = html;
  app.querySelector("#back").onclick = home;
  app.querySelector("#goHome").onclick = home;
  app.querySelector("#expBtn").onclick = exportDB;
  app.querySelector(".theme-toggle").onclick = () => { toggleTheme(); progress(); };
  window.scrollTo(0, 0);
}

// ---------- geometria comum dos gráficos SVG ----------
const CW = 320, CH = 150, PADL = 30, PADR = 12, PADT = 12, PADB = 22;
const INW = CW - PADL - PADR, INH = CH - PADT - PADB, BASEY = PADT + INH;
function xAt(i, n) { return n <= 1 ? PADL + INW / 2 : PADL + INW * i / (n - 1); }
function yAt(v, max) { return PADT + INH * (1 - (max ? v / max : 0)); }

function buildXpChart(sessions) {
  // ponto de origem (0) + XP acumulado por sessão
  const pts = [{ v: 0, ts: sessions[0].ts }];
  let run = 0;
  sessions.forEach(s => { run += s.xp; pts.push({ v: run, ts: s.ts }); });
  const n = pts.length, max = niceMax(run);
  const xy = pts.map((p, i) => [xAt(i, n), yAt(p.v, max)]);
  const line = "M " + xy.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L ");
  const area = "M " + xAt(0, n).toFixed(1) + " " + BASEY + " L " +
    xy.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L ") +
    " L " + xAt(n - 1, n).toFixed(1) + " " + BASEY + " Z";
  const dots = xy.slice(1).map((p, i) =>
    `<circle class="c-dot-xp" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="2.5"><title>${esc(sessions[i].title)} · +${sessions[i].xp} XP</title></circle>`).join("");
  return `<svg class="chart" viewBox="0 0 ${CW} ${CH}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="XP acumulado">
    <line class="c-grid" x1="${PADL}" y1="${BASEY}" x2="${CW - PADR}" y2="${BASEY}"/>
    <text class="c-axis" x="${PADL - 4}" y="${BASEY + 3}" text-anchor="end">0</text>
    <text class="c-axis" x="${PADL - 4}" y="${yAt(max, max) + 3}" text-anchor="end">${max}</text>
    <path class="c-area-xp" d="${area}"/>
    <path class="c-line-xp" d="${line}"/>
    ${dots}
    <text class="c-axis" x="${PADL}" y="${CH - 6}" text-anchor="start">${dmy(sessions[0].ts)}</text>
    <text class="c-axis" x="${CW - PADR}" y="${CH - 6}" text-anchor="end">${dmy(sessions[sessions.length - 1].ts)}</text>
    <text class="c-val" x="${xAt(n - 1, n).toFixed(1)}" y="${(yAt(run, max) - 6).toFixed(1)}" text-anchor="end">${run}</text>
  </svg>`;
}

function buildAccChart(sessions) {
  const n = sessions.length;
  const xy = sessions.map((s, i) => [xAt(i, n), yAt(s.pct, 100)]);
  const grid = [0, 50, 100].map(g =>
    `<line class="c-grid" x1="${PADL}" y1="${yAt(g, 100)}" x2="${CW - PADR}" y2="${yAt(g, 100)}"/>
     <text class="c-axis" x="${PADL - 4}" y="${yAt(g, 100) + 3}" text-anchor="end">${g}</text>`).join("");
  let marks;
  if (n === 1) {
    marks = `<circle class="c-dot-acc" cx="${xy[0][0].toFixed(1)}" cy="${xy[0][1].toFixed(1)}" r="4"/>
      <text class="c-val" x="${xy[0][0].toFixed(1)}" y="${(xy[0][1] - 8).toFixed(1)}" text-anchor="middle">${sessions[0].pct}%</text>`;
  } else {
    const line = "M " + xy.map(p => p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" L ");
    const dots = xy.map((p, i) =>
      `<circle class="c-dot-acc" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3"><title>${esc(sessions[i].title)} · ${sessions[i].pct}%</title></circle>`).join("");
    const last = xy[n - 1];
    marks = `<path class="c-line-acc" d="${line}"/>${dots}
      <text class="c-val" x="${last[0].toFixed(1)}" y="${(last[1] - 8).toFixed(1)}" text-anchor="end">${sessions[n - 1].pct}%</text>`;
  }
  return `<svg class="chart" viewBox="0 0 ${CW} ${CH}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Precisão por sessão">
    ${grid}${marks}
    <text class="c-axis" x="${PADL}" y="${CH - 6}" text-anchor="start">${dmy(sessions[0].ts)}</text>
    <text class="c-axis" x="${CW - PADR}" y="${CH - 6}" text-anchor="end">${dmy(sessions[n - 1].ts)}</text>
  </svg>`;
}

function buildDayBars(events) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = [];
  for (let i = 13; i >= 0; i--) { const d = new Date(today); d.setDate(d.getDate() - i); days.push({ ts: d.getTime(), key: ymd(d.getTime()), n: 0 }); }
  const idx = {}; days.forEach(d => idx[d.key] = d);
  events.forEach(e => { const k = ymd(e.ts); if (idx[k]) idx[k].n++; });
  const maxN = Math.max(1, ...days.map(d => d.n));
  const cols = days.map(d => {
    const h = d.n ? Math.max(6, Math.round(d.n / maxN * 100)) : 0;
    return `<div class="day-col${d.n ? "" : " empty"}" title="${dmy(d.ts)} — ${d.n} resposta(s)">
      <div class="day-n">${d.n || ""}</div>
      <div class="day-fill" style="height:${d.n ? h + "%" : "3px"}"></div>
      <div class="day-cap">${String(new Date(d.ts).getDate()).padStart(2, "0")}</div>
    </div>`;
  }).join("");
  return `<div class="day-bars">${cols}</div>`;
}

function buildUnitBars(events) {
  const rows = [];
  COURSE.forEach(u => {
    const ft = events.filter(e => e.u === u.id && e.f);
    if (!ft.length) return;
    const correct = ft.filter(e => e.c).length;
    const pct = Math.round(100 * correct / ft.length);
    rows.push(`<div class="unit-row">
      <div class="un" title="${esc(u.title)}">${u.icon} ${esc(u.title)}</div>
      <div class="unit-track"><div class="unit-fill" style="width:${pct}%;background:${u.color}"></div></div>
      <div class="up">${pct}%</div>
    </div>`);
  });
  return rows.length ? rows.join("") : "";
}

function buildRecentTable(sessions) {
  const rows = sessions.slice(-8).reverse().map(s => {
    const color = s.pct >= 90 ? "var(--green-ink)" : s.pct >= 70 ? "var(--blue)" : "var(--orange)";
    return `<tr>
      <td>${dmy(s.ts)} ${hhmm(s.ts)}</td>
      <td>${esc(s.title)}</td>
      <td class="r-pct" style="color:${color}">${s.pct}%</td>
      <td class="r-xp">+${s.xp}</td>
    </tr>`;
  }).join("");
  return `<div class="tbl-wrap"><table class="rec">
    <thead><tr><th>Quando</th><th>Lição</th><th>Precisão</th><th>XP</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

// =====================================================
// LIÇÃO — teoria
// =====================================================
function openLesson(u, l) {
  const exs = l.ex.map((e, i) => ({ ex: e, key: l.id + ":" + i, theory: l.theory, ltitle: l.title, lid: l.id, uid: u.id }));
  S = {
    unit: u, lesson: l, mode: "lesson", slide: 0, startTs: Date.now(),
    // mantém a ordem original das docs/worksheets (só a prática mista embaralha)
    queue: exs.slice(), total: exs.length, doneCount: 0,
    triedFirst: {}, fails: {}, correctFirst: 0, xp: 0, checked: false
  };
  theorySlide(0);
}

function startMix() {
  const pool = [];
  COURSE.forEach(u => u.lessons.forEach(l =>
    l.ex.forEach((e, i) => pool.push({ ex: e, key: l.id + ":" + i, theory: l.theory, ltitle: l.title, lid: l.id, uid: u.id }))
  ));
  const picked = shuffle(pool).slice(0, 15);
  S = {
    unit: null, lesson: { id: "mix", title: "Prática mista", theory: null }, mode: "mix", startTs: Date.now(),
    queue: picked, total: picked.length, doneCount: 0,
    triedFirst: {}, fails: {}, correctFirst: 0, xp: 0, checked: false
  };
  renderEx();
}

function theorySlide(i) {
  S.slide = i;
  const l = S.lesson;
  const slide = l.theory[i];
  const dots = l.theory.map((_, k) => `<span class="${k === i ? "on" : ""}">●</span>`).join(" ");
  app.innerHTML = `
  <div class="lesson-top">
    <button class="close-x" title="Sair">✕</button>
    <div class="theory" style="flex:1">
      <h1>${S.unit.icon} ${esc(l.title)}</h1>
      <div class="src">${esc(S.unit.title)} · Teoria ${i + 1} de ${l.theory.length}</div>
    </div>
  </div>
  <div class="card theory-slide">
    <h2>${esc(slide.h)}</h2>
    ${slide.body}
  </div>
  <div class="dots">${dots}</div>
  <div class="slide-nav">
    ${i > 0 ? `<button class="btn ghost" id="prev">← Voltar</button>` : `<button class="btn ghost" id="skip">Pular teoria</button>`}
    <button class="btn" id="next">${i < l.theory.length - 1 ? "Continuar" : "Começar exercícios 🚀"}</button>
  </div>`;

  app.querySelector(".close-x").onclick = confirmExit;
  const prev = app.querySelector("#prev");
  if (prev) prev.onclick = () => theorySlide(i - 1);
  const skip = app.querySelector("#skip");
  if (skip) skip.onclick = renderEx;
  app.querySelector("#next").onclick = () => {
    if (i < l.theory.length - 1) theorySlide(i + 1); else renderEx();
  };
  window.scrollTo(0, 0);
}

function confirmExit() {
  if (!S || S.doneCount === 0 || confirm("Sair da lição? O progresso desta sessão será perdido.")) home();
}

// =====================================================
// EXERCÍCIOS
// =====================================================
function renderEx() {
  if (S.queue.length === 0) return finish();
  S.checked = false;
  S.answer = null;
  const item = S.queue[0];
  const ex = item.ex;
  const pct = Math.round((S.doneCount / (S.doneCount + S.queue.length)) * 100);

  let body = "";
  if (ex.t === "choice") {
    body = `<div class="opts">${ex.opts.map((o, k) =>
      `<button class="opt" data-opt="${k}">${esc(o)}</button>`).join("")}</div>`;
  } else if (ex.t === "type") {
    body = `<input class="type-input" id="tin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Digite em inglês…">`;
  } else if (ex.t === "order") {
    if (!S.orderBank) {
      S.orderBank = shuffle(ex.words.concat(ex.extra || []).map((w, k) => ({ w, k })));
      S.orderSel = [];
    }
    const selHtml = S.orderSel.map(k => {
      const b = S.orderBank.find(x => x.k === k);
      return `<button class="chip" data-unpick="${k}">${esc(b.w)}</button>`;
    }).join("");
    const bankHtml = S.orderBank.map(b =>
      `<button class="chip${S.orderSel.includes(b.k) ? " ghosted" : ""}" data-pick="${b.k}">${esc(b.w)}</button>`).join("");
    body = `<div class="order-area">${selHtml || ""}</div><div class="order-bank">${bankHtml}</div>`;
  } else if (ex.t === "pairs") {
    if (!S.pairState) {
      S.pairState = {
        left: shuffle(ex.pairs.map(p => p[0])),
        right: shuffle(ex.pairs.map(p => p[1])),
        selL: null, selR: null, matched: [], mistakes: 0
      };
    }
    const ps = S.pairState;
    body = `<div class="pairs-grid">
      <div style="display:flex;flex-direction:column;gap:10px">${ps.left.map(w =>
        `<button class="pair-btn${ps.matched.includes("L" + w) ? " matched" : ""}${ps.selL === w ? " sel" : ""}" data-pl="${esc(w)}">${esc(w)}</button>`).join("")}</div>
      <div style="display:flex;flex-direction:column;gap:10px">${ps.right.map(w =>
        `<button class="pair-btn${ps.matched.includes("R" + w) ? " matched" : ""}${ps.selR === w ? " sel" : ""}" data-pr="${esc(w)}">${esc(w)}</button>`).join("")}</div>
    </div>`;
  }

  app.innerHTML = `
  <div class="lesson-top">
    <button class="close-x" title="Sair">✕</button>
    <div class="bar"><div style="width:${pct}%"></div></div>
    <div class="hearts">⭐ ${DB.xp + S.xp}</div>
  </div>
  <div class="ex-kind">${KIND_LABEL[ex.t]}</div>
  <div class="ex-q">${gapify(ex.q)}</div>
  ${ex.note ? `<div class="ex-note">${esc(ex.note)}</div>` : ""}
  ${body}
  <div style="height:110px"></div>
  <div class="ex-footer"><div class="ex-footer-inner">
    ${item.theory ? `<button class="btn ghost small" id="theoryBtn">💡 Teoria</button>` : "<span></span>"}
    ${ex.t !== "pairs" ? `<button class="btn" id="check" disabled>Verificar</button>` : `<span style="font-size:13px;color:var(--ink-soft);font-weight:700">Ligue todos os pares para continuar</span>`}
  </div></div>`;

  app.querySelector(".close-x").onclick = confirmExit;
  const tBtn = app.querySelector("#theoryBtn");
  if (tBtn) tBtn.onclick = () => showTheoryModal(item);

  const checkBtn = app.querySelector("#check");

  if (ex.t === "choice") {
    app.querySelectorAll("[data-opt]").forEach(b => b.onclick = () => {
      app.querySelectorAll("[data-opt]").forEach(x => x.classList.remove("sel"));
      b.classList.add("sel");
      S.answer = Number(b.dataset.opt);
      checkBtn.disabled = false;
    });
  } else if (ex.t === "type") {
    const inp = app.querySelector("#tin");
    inp.focus();
    inp.oninput = () => { S.answer = inp.value; checkBtn.disabled = !inp.value.trim(); };
    inp.onkeydown = e => { if (e.key === "Enter" && !checkBtn.disabled && !S.checked) check(); };
  } else if (ex.t === "order") {
    app.querySelectorAll("[data-pick]").forEach(b => b.onclick = () => {
      S.orderSel.push(Number(b.dataset.pick)); renderEx();
    });
    app.querySelectorAll("[data-unpick]").forEach(b => b.onclick = () => {
      S.orderSel = S.orderSel.filter(k => k !== Number(b.dataset.unpick)); renderEx();
    });
    checkBtn.disabled = S.orderSel.length === 0;
  } else if (ex.t === "pairs") {
    bindPairs(item);
  }

  if (checkBtn) checkBtn.onclick = check;
  window.scrollTo(0, 0);
}

function bindPairs(item) {
  const ex = item.ex;
  const ps = S.pairState;
  const tryMatch = () => {
    if (ps.selL == null || ps.selR == null) return;
    const hit = ex.pairs.some(p => p[0] === ps.selL && p[1] === ps.selR);
    if (hit) {
      ps.matched.push("L" + ps.selL, "R" + ps.selR);
      ps.selL = ps.selR = null;
      if (ps.matched.length === ex.pairs.length * 2) {
        const firstTry = ps.mistakes === 0;
        settle(item, true, firstTry);
        return;
      }
      renderEx();
    } else {
      ps.mistakes++;
      const l = app.querySelector(`[data-pl="${CSS.escape(ps.selL)}"]`);
      const r = app.querySelector(`[data-pr="${CSS.escape(ps.selR)}"]`);
      [l, r].forEach(el => el && el.classList.add("shake"));
      ps.selL = ps.selR = null;
      setTimeout(renderEx, 350);
    }
  };
  app.querySelectorAll("[data-pl]").forEach(b => b.onclick = () => { ps.selL = b.dataset.pl; renderEx(); tryMatch(); });
  app.querySelectorAll("[data-pr]").forEach(b => b.onclick = () => { ps.selR = b.dataset.pr; renderEx(); tryMatch(); });
}

function check() {
  if (S.checked) return;
  const item = S.queue[0];
  const ex = item.ex;
  let ok = false;

  if (ex.t === "choice") ok = S.answer === ex.a;
  else if (ex.t === "type") ok = ex.a.map(norm).includes(norm(S.answer || ""));
  else if (ex.t === "order") {
    const chosen = S.orderSel.map(k => S.orderBank.find(x => x.k === k).w);
    ok = chosen.length === ex.words.length && chosen.every((w, i) => w === ex.words[i]);
  }

  if (ex.t === "choice") {
    app.querySelectorAll("[data-opt]").forEach(b => {
      const k = Number(b.dataset.opt);
      if (k === ex.a) b.classList.add("ok");
      else if (k === S.answer && !ok) b.classList.add("bad");
      b.disabled = true;
    });
  } else if (ex.t === "type") {
    const inp = app.querySelector("#tin");
    inp.classList.add(ok ? "ok" : "bad");
    inp.disabled = true;
  }

  settle(item, ok, false);
}

function settle(item, ok, pairsFirstTry) {
  S.checked = true;
  const ex = item.ex;
  const firstAttempt = !S.triedFirst[item.key];
  S.triedFirst[item.key] = true;
  const success = ex.t === "pairs" ? pairsFirstTry : ok;

  // registra o evento (o "processo" da atividade) no banco
  logEvent({ ts: Date.now(), u: item.uid, l: item.lid, t: ex.t, c: success ? 1 : 0, f: firstAttempt ? 1 : 0 });

  let correctText = "";
  if (ex.t === "choice") correctText = ex.opts[ex.a];
  else if (ex.t === "type") correctText = ex.a[0];
  else if (ex.t === "order") correctText = joinSentence(ex.words);

  if (ex.t === "pairs") {
    if (pairsFirstTry && firstAttempt) { S.correctFirst++; S.xp += 10; }
    else S.xp += 5;
    S.queue.shift();
    S.doneCount++;
    showFeedback(pairsFirstTry, ex, "", true);
    return;
  }

  if (ok) {
    if (firstAttempt) { S.correctFirst++; S.xp += 10; }
    else S.xp += 5;
    S.queue.shift();
    S.doneCount++;
  } else {
    S.fails[item.key] = (S.fails[item.key] || 0) + 1;
    S.queue.shift();
    S.doneCount++;
    if (S.fails[item.key] < 3) {
      S.queue.push(Object.assign({}, item));
      S.doneCount--;
    }
  }
  showFeedback(ok, ex, correctText, false);
}

function showFeedback(ok, ex, correctText, isPairs) {
  const old = app.querySelector(".ex-footer");
  if (old) old.remove();
  const fb = document.createElement("div");
  fb.className = "feedback " + (ok ? "good" : "bad");
  fb.innerHTML = `<div class="feedback-inner">
    <div class="fb-text">
      <div class="fb-title">${ok ? (isPairs ? "✅ Todos os pares! Perfeito!" : "✅ Correto!") : (isPairs ? "🔁 Completou, mas com erros no caminho" : "❌ Quase!")}</div>
      ${!ok && correctText ? `<div class="fb-ans">Resposta certa: ${esc(correctText)}</div>` : ""}
      ${ex.why ? `<div class="fb-why">${esc(ex.why)}</div>` : ""}
      ${!ok && !isPairs ? `<div class="fb-why"><i>Esse exercício vai aparecer de novo. 😉</i></div>` : ""}
    </div>
    <button class="btn ${ok ? "" : "red"}" id="cont">Continuar</button>
  </div>`;
  document.body.appendChild(fb);
  const cont = fb.querySelector("#cont");
  cont.focus();
  cont.onclick = () => { fb.remove(); cleanupExState(); renderEx(); };
}

function cleanupExState() { S.orderBank = null; S.orderSel = null; S.pairState = null; }

document.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const cont = document.querySelector(".feedback #cont");
  if (cont) { if (document.activeElement !== cont) cont.click(); return; }
  const chk = document.querySelector("#check");
  if (chk && !chk.disabled && S && !S.checked) chk.click();
});

// =====================================================
// TEORIA (modal durante exercícios)
// =====================================================
function showTheoryModal(item) {
  const bg = document.createElement("div");
  bg.className = "modal-bg";
  bg.innerHTML = `<div class="modal">
    <button class="close-x">✕</button>
    <h1 style="font-size:19px;font-weight:900;margin-bottom:16px">💡 ${esc(item.ltitle)}</h1>
    ${item.theory.map(s => `<div class="theory-slide"><h2>${esc(s.h)}</h2>${s.body}</div>`).join("")}
  </div>`;
  document.body.appendChild(bg);
  bg.querySelector(".close-x").onclick = () => bg.remove();
  bg.onclick = e => { if (e.target === bg) bg.remove(); };
}

// =====================================================
// RESULTADO
// =====================================================
function finish() {
  const pct = Math.round((S.correctFirst / S.total) * 100);
  DB.xp += S.xp;

  if (S.mode === "lesson") {
    const prev = DB.lessons[S.lesson.id] || { best: 0, attempts: 0 };
    DB.lessons[S.lesson.id] = {
      done: true,
      best: Math.max(prev.best || 0, pct),
      attempts: (prev.attempts || 0) + 1,
      lastPct: pct,
      lastTs: Date.now()
    };
  }
  logSession({
    ts: Date.now(), mode: S.mode, l: S.lesson.id, title: S.lesson.title,
    total: S.total, cf: S.correctFirst, pct: pct, xp: S.xp, ms: Date.now() - (S.startTs || Date.now())
  });
  saveDB();

  const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : "💪";
  const msg = pct >= 90 ? "Excelente! Mandou muito!" : pct >= 70 ? "Muito bom! Continue assim!" : "Bom treino! Repetir fixa o conteúdo.";
  const stars = pct >= 90 ? "⭐⭐⭐" : pct >= 70 ? "⭐⭐" : "⭐";

  app.innerHTML = `
  <div class="result">
    <div class="big">${emoji}</div>
    <h1>${esc(S.lesson.title)} — concluída!</h1>
    <p>${msg}</p>
    <div class="medals">
      <div class="medal green"><div class="v">${pct}%</div><div class="k">de primeira</div></div>
      <div class="medal gold"><div class="v">+${S.xp}</div><div class="k">XP</div></div>
      <div class="medal blue"><div class="v">${stars}</div><div class="k">estrelas</div></div>
    </div>
    <div class="btns">
      <button class="btn ghost" id="again">Refazer</button>
      <button class="btn blue" id="prog">📊 Progresso</button>
      <button class="btn" id="home">Continuar 🚀</button>
    </div>
  </div>`;

  const savedMode = S.mode, savedUnit = S.unit, savedLesson = S.lesson;
  app.querySelector("#home").onclick = home;
  app.querySelector("#prog").onclick = progress;
  app.querySelector("#again").onclick = () => {
    if (savedMode === "mix") startMix();
    else openLesson(savedUnit, savedLesson);
  };
  window.scrollTo(0, 0);
}

// go!
(function boot() {
  const saved = localStorage.getItem(USER_KEY);
  const u = saved ? findUser(saved) : null;
  if (u) login(u); else loginScreen();
})();
})();
