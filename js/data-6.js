// UNIDADE 7 — (Not So) Simple Future
// Fonte: assets/2.2- Simple Present 2.pdf (p.10-13)
window.COURSE.push({
  id: "u7",
  title: "Futuro",
  desc: "will, be going to, may/might • progressive & perfect",
  icon: "🚀",
  color: "#ff4b4b",
  lessons: [
    {
      id: "u7l1",
      title: "Will & Be going to",
      desc: "as 5 formas de falar do futuro",
      icon: "🔮",
      theory: [
        {
          h: "Forma 1: WILL [will + verbo base]",
          body: `<p>A doc lista 5 usos do will:</p>
<ol>
<li><b>Previsões</b> (achamos que vai acontecer):<br><span class="en">He will be a good doctor.</span> • <span class="en">I believe they will win this match.</span></li>
<li><b>Decisões instantâneas</b> (tomadas na hora da fala):<br><span class="en">A: "We don't have sugar." B: "I'll buy some then."</span></li>
<li><b>Promessas e recusas:</b><br><span class="en">I will help you, but I <b>won't</b> lend you any money.</span> (won't = will not)</li>
<li><b>Ofertas e sugestões:</b><br><span class="en">I will carry your bag / <b>Shall</b> I carry your bag?</span> • <span class="en">Shall we eat out today?</span></li>
<li><b>Pedidos</b> (ocasionalmente):<br><span class="en">Will you open the door please?</span></li>
</ol>`
        },
        {
          h: "Forma 2: BE GOING TO [am/is/are + going to + verbo]",
          body: `<ol>
<li><b>Previsões com evidência presente</b> (você VÊ que vai acontecer):<br><span class="en">Slow down! We are going to have an accident!</span><br><span class="en">Look at the clouds, it's going to rain.</span></li>
<li><b>Decisões tomadas ANTES</b> (intenções/planos):<br><span class="en">Are you going to watch the game tonight?</span></li>
</ol>
<div class="tip">💡 Resumo do duelo: decidiu <b>agora</b> = will • decidiu <b>antes</b> / tem evidência = going to.</div>`
        },
        {
          h: "Formas 3, 4 e 5",
          body: `<p><b>Forma 3 — Present Progressive:</b> planos já combinados/agendados:<br><span class="en">We are having a party next week.</span> • <span class="en">I'm flying to New York tomorrow morning.</span></p>
<p><b>Forma 4 — Simple Present:</b> horários fixos e time clauses:<br><span class="en">The airplane leaves at four o'clock.</span> • <span class="en">I'll retire when I am 70.</span></p>
<p><b>Forma 5 — MAY / MIGHT:</b> possibilidades futuras (incerteza):<br><span class="en">I might go to the party tomorrow, I'm not sure.</span> • <span class="en">Temperatures might drop next week.</span></p>
<div class="tip">💡 Keywords do futuro: <b>tomorrow, next week/month/year, in x days/weeks/months/years</b>.</div>`
        }
      ],
      ex: [
        { t: "choice", q: "He ___ be a good doctor. (previsão)", opts: ["will","is going","wills"], a: 0, why: "Previsão/opinião → will + verbo base." },
        { t: "choice", q: "A: \"We don't have sugar.\" B: \"I ___ some then.\"", opts: ["am going to buy","'ll buy","buy"], a: 1, why: "Decisão tomada na hora da fala → will ('ll buy)." },
        { t: "choice", q: "Look at the clouds! It ___ rain.", opts: ["will","might not","is going to"], a: 2, why: "Previsão com evidência presente (as nuvens) → is going to." },
        { t: "choice", q: "I will help you, but I ___ lend you any money.", opts: ["won't","willn't","don't will"], a: 0, why: "Recusa → won't (= will not)." },
        { t: "choice", q: "Slow down! We ___ have an accident!", opts: ["will","are going to","going to"], a: 1, why: "Evidência presente (velocidade alta) → are going to." },
        { t: "choice", q: "___ I carry your bag? (oferta)", opts: ["Will you","Shall","Am"], a: 1, why: "Oferta → Shall I…?" },
        { t: "choice", q: "___ you open the door please? (pedido)", opts: ["Shall","Am","Will"], a: 2, why: "Pedido → Will you…?" },
        { t: "choice", q: "I ___ go to the party tomorrow, I'm not sure.", opts: ["might","will","am going to"], a: 0, why: "\"I'm not sure\" = possibilidade → might." },
        { t: "choice", q: "The airplane ___ at four o'clock.", opts: ["will leaves","leaves","leaving"], a: 1, why: "Horário fixo → simple present (Forma 4)." },
        { t: "choice", q: "We ___ a party next week. (tudo já combinado)", opts: ["will have","have","are having"], a: 2, why: "Plano já arranjado → present progressive (Forma 3)." },
        { t: "choice", q: "Temperatures ___ drop next week. (possibilidade)", opts: ["are might","might","mights"], a: 1, why: "Possibilidade futura → might + verbo base." },
        { t: "order", q: "Monte a frase: \"Vou voar para NY amanhã de manhã.\" (plano combinado)", words: ["I'm","flying","to","New","York","tomorrow","morning"], extra: ["will","fly"], why: "Arranjo definido → present progressive: I'm flying." },
        { t: "choice", q: "Are you ___ watch the game tonight? (plano)", opts: ["going to","will","might"], a: 0, why: "Decisão tomada antes / plano → be going to." }
      ]
    },
    {
      id: "u7l2",
      title: "Future Progressive & Perfect",
      desc: "will be -ing • will have + participle",
      icon: "🛸",
      theory: [
        {
          h: "Future Progressive",
          body: `<p>Forma: <b>will be + verbo-ing</b> ou <b>am/is/are going to be + verbo-ing</b></p>
<ol>
<li><b>Ação em progresso em certo momento do futuro:</b><br><span class="en">We will be driving through the desert tonight at midnight.</span><br><span class="en">He's going to be staying at the Madison hotel.</span></li>
<li><b>Ação futura que acontece porque normalmente acontece:</b><br><span class="en">I will be sleeping when he arrives tonight.</span><br><span class="en">I'm going to be studying in the afternoon.</span></li>
</ol>
<div class="tip">💡 Keywords: <b>this time</b> (tomorrow / next week / next month / next year).</div>`
        },
        {
          h: "Future Perfect (+ Progressive)",
          body: `<p><b>Future Perfect</b> — will have + past participle: ação que <b>já terá acontecido</b> antes de certo momento futuro:</p>
<ul>
<li><span class="en">By next November, I will have received a promotion.</span></li>
<li><span class="en">I'm going to have finished this test by three o'clock.</span></li>
<li>Duração: <span class="en">I will have been in London for six months by the time I finish my course.</span></li>
</ul>
<p><b>Future Perfect Progressive</b> — will have been + verbo-ing: mesma ideia, com ênfase na duração:</p>
<ul>
<li><span class="en">They will have been talking for over an hour by the time Thomas arrives.</span></li>
</ul>
<div class="tip">💡 Keywords: <b>by the time…, by the end of…</b></div>`
        }
      ],
      ex: [
        { t: "choice", q: "We ___ through the desert tonight at midnight.", opts: ["will be driving","will drove","are driven"], a: 0, why: "Ação em progresso em momento futuro → will be + -ing." },
        { t: "choice", q: "I ___ when he arrives tonight. (é meu horário normal de sono)", opts: ["will have slept","will be sleeping","sleep"], a: 1, why: "Ação futura que normalmente acontece → will be sleeping." },
        { t: "choice", q: "By next November, I ___ a promotion.", opts: ["will be receiving","will have received","receive"], a: 1, why: "Já terá acontecido antes de um momento futuro (by…) → will have received." },
        { t: "choice", q: "I'm going to ___ finished this test by three o'clock.", opts: ["have","has","be"], a: 0, why: "going to + have + particípio = future perfect." },
        { t: "choice", q: "I will have been in London for six months ___ I finish my course.", opts: ["while","since","by the time"], a: 2, why: "Keyword do future perfect: by the time." },
        { t: "choice", q: "They ___ for over an hour by the time Thomas arrives.", opts: ["will have been talking","will be talk","have talked"], a: 0, why: "Duração até um momento futuro → will have been + -ing." },
        { t: "choice", q: "He's going to ___ staying at the Madison hotel.", opts: ["been","be","being"], a: 1, why: "going to be + -ing = future progressive." },
        { t: "type", q: "She is going to have been ___ (work) at that company for ten years when it finally closes down.", a: ["working"], why: "future perfect progressive: going to have been + working." }
      ]
    }
  ]
});
