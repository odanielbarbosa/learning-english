// UNIDADE 4 — Simple Past & Past Progressive
// Fonte: assets/2.2- Simple Present 2.pdf (p.4-6)
window.COURSE.push({
  id: "u4",
  title: "Simple Past & Past Progressive",
  desc: "worked, saw, was/were • was working",
  icon: "⏪",
  color: "#ff9600",
  lessons: [
    {
      id: "u4l1",
      title: "Simple Past",
      desc: "verbo + ed, irregulares, didn't, Did…?",
      icon: "📅",
      theory: [
        {
          h: "Forma: [verbo + ed] ou irregular",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>To be</th><th>Irregular (see)</th><th>Regular</th></tr>
<tr><td>I</td><td>was</td><td>saw</td><td>worked / lived</td></tr>
<tr><td>He/She/It</td><td>was</td><td>saw</td><td>worked / lived</td></tr>
<tr><td>We/You/They</td><td><b>were</b></td><td>saw</td><td>worked / lived</td></tr>
</table></div>
<p>Regras de ortografia da doc:</p>
<ul>
<li><b>Consoante + y</b> → tira o y, adiciona <b>-ied</b>: study → <span class="en">studied</span></li>
<li><b>Vogal + y</b> → só <b>-ed</b>: play → <span class="en">played</span></li>
</ul>
<p>No passado o verbo <b>não muda por pessoa</b> (exceto was/were): I worked, he worked, they worked.</p>`
        },
        {
          h: "Negativa e perguntas",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th></th><th>Negativa</th><th>Pergunta</th></tr>
<tr><td>Verbos comuns</td><td><b>didn't</b> work / <b>didn't</b> see</td><td><b>Did</b> I live…?</td></tr>
<tr><td>To be</td><td>wasn't / weren't</td><td>Was I…? Were they…?</td></tr>
</table></div>
<div class="warn">⚠️ Da doc, em maiúsculas mesmo: verbo to be, modais e CAN <b>NÃO usam did/didn't</b>! E <b>can</b> vira <b>could</b> no passado.</div>
<p>Question words (why, where, when, what, how, who, how often, how old…) vêm <b>antes</b> do auxiliar: <span class="en">Where <b>did</b> you live?</span></p>
<p>Depois de did/didn't o verbo volta pra forma base: <s>"Did you worked?"</s> ❌ → <b>"Did you work?"</b> ✅</p>`
        },
        {
          h: "Quando usar?",
          body: `<ol>
<li><b>Ações que começaram e terminaram em tempo específico no passado</b> (ou série de ações completas):<br><span class="en">I saw a movie yesterday.</span><br><span class="en">I finished work, walked on the beach, and found a nice place to swim.</span></li>
<li><b>Fatos e generalizações do passado:</b><br><span class="en">She didn't like tomatoes before.</span><br><span class="en">People paid much more to make cell phone calls in the past.</span></li>
</ol>
<div class="tip">💡 Keywords: <b>yesterday, ago, in 2015, on Tuesday, at 2 pm, when I was younger, last month/week/year</b> — tudo que marca um tempo específico no passado.</div>`
        }
      ],
      ex: [
        { t: "choice", q: "I ___ a movie yesterday.", opts: ["see","saw","seen"], a: 1, why: "see é irregular: passado = saw. \"yesterday\" pede simple past." },
        { t: "type", q: "Passado de study: \"I ___ English last year.\"", a: ["studied"], why: "Consoante + y → -ied: studied." },
        { t: "type", q: "Passado de play: \"He ___ tennis on Tuesday.\"", a: ["played"], why: "Vogal + y → só -ed: played." },
        { t: "choice", q: "She ___ tomatoes before.", opts: ["didn't liked","didn't like","doesn't liked"], a: 1, why: "didn't + verbo base: didn't like." },
        { t: "choice", q: "People ___ much more to make cell phone calls in the past.", opts: ["paid","payed","pay"], a: 0, why: "pay é irregular: paid. Fato do passado → simple past." },
        { t: "type", q: "I ___ (work) yesterday.", a: ["worked"], why: "Regular: work + ed = worked." },
        { t: "choice", q: "___ you live in London in 2015?", opts: ["Did","Do","Were"], a: 0, why: "Pergunta no passado com verbo comum → Did + verbo base." },
        { t: "choice", q: "Where ___ he live when he was younger?", opts: ["does","was","did"], a: 2, why: "Question word + did + verbo base." },
        { t: "choice", q: "I ___ at home last night.", opts: ["was","were","did be"], a: 0, why: "I → was. To be não usa did!" },
        { t: "choice", q: "They ___ happy yesterday.", opts: ["was","were","did be"], a: 1, why: "They → were." },
        { t: "choice", q: "He ___ swim when he was young.", opts: ["canned","did can","could"], a: 2, why: "Da doc: CAN vira COULD no passado — nunca \"did can\"." },
        { t: "order", q: "Monte a pergunta: (você trabalhou semana passada?)", words: ["Did","you","work","last","week","?"], extra: ["worked","Do"], why: "Did + you + verbo base (work, não worked)." },
        { t: "choice", q: "I finished work, ___ on the beach, and found a nice place to swim.", opts: ["walk","walked","was walk"], a: 1, why: "Série de ações completas no passado → tudo em simple past: finished, walked, found." },
        { t: "choice", q: "They ___ at school on Tuesday.", opts: ["didn't be","wasn't","weren't"], a: 2, why: "They + to be negativo → weren't (sem didn't)." }
      ]
    },
    {
      id: "u4l2",
      title: "Past Progressive",
      desc: "was/were + -ing • while, when, suddenly",
      icon: "🎬",
      theory: [
        {
          h: "Forma: [was/were + verbo-ing]",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>Afirmativa</th><th>Negativa</th><th>Pergunta</th></tr>
<tr><td>I</td><td><b>was</b> working</td><td>wasn't working</td><td>Was I working?</td></tr>
<tr><td>He/She/It</td><td><b>was</b> working</td><td>wasn't working</td><td>Was he working?</td></tr>
<tr><td>We/You/They</td><td><b>were</b> working</td><td>weren't working</td><td>Were they working?</td></tr>
</table></div>`
        },
        {
          h: "Quando usar?",
          body: `<p>A doc lista 4 usos:</p>
<ol>
<li><b>Ação no meio de outra ação:</b><br><span class="en">I was watching TV <b>when</b> she called.</span><br><span class="en">She was washing the dishes when <b>suddenly</b> she heard a loud noise.</span></li>
<li><b>Ação em momento específico do passado:</b><br><span class="en">Last night at 6 pm, I was eating dinner.</span></li>
<li><b>Ações paralelas:</b><br><span class="en">I was studying <b>while</b> he was making dinner.</span></li>
<li><b>Repetição + irritação no passado</b> (always/constantly):<br><span class="en">They were always complaining.</span></li>
</ol>
<div class="tip">💡 Keywords: <b>suddenly, while, when</b>. A ação longa fica no progressive; a interrupção curta, no simple past.</div>`
        }
      ],
      ex: [
        { t: "choice", q: "I ___ TV when she called.", opts: ["was watching","watched","am watching"], a: 0, why: "Ação longa interrompida → past progressive: was watching. A interrupção (called) fica no simple past." },
        { t: "type", q: "She ___ (wash) the dishes when suddenly she heard a loud noise.", a: ["was washing"], why: "She → was washing." },
        { t: "choice", q: "Last night at 6 pm, I ___ dinner.", opts: ["ate","was eating","eat"], a: 1, why: "Ação em momento específico do passado → was eating." },
        { t: "choice", q: "I was studying ___ he was making dinner.", opts: ["when","because","while"], a: 2, why: "Duas ações paralelas → while." },
        { t: "type", q: "I ___ (clean) my house yesterday in the afternoon.", a: ["was cleaning"], why: "Ação em progresso em momento do passado → was cleaning." },
        { t: "choice", q: "I wasn't paying attention while I ___ the letter.", opts: ["was writing","wrote","am writing"], a: 0, why: "Ações paralelas com while → was writing." },
        { t: "choice", q: "They ___ always complaining. That used to annoy me.", opts: ["was","are","were"], a: 2, why: "They → were. Repetição + irritação no passado." },
        { t: "order", q: "Monte a pergunta: (ele estava trabalhando às 6?)", words: ["Was","he","working","at","6","pm","?"], extra: ["Were","Did"], why: "He → Was + he + verbo-ing." },
        { t: "choice", q: "I was watching TV ___ she called. (interrupção)", opts: ["while","when","suddenly"], a: 1, why: "Interrupção pontual → when. While é para ações paralelas." },
        { t: "choice", q: "We ___ working at midnight.", opts: ["weren't","wasn't","didn't"], a: 0, why: "We → weren't + verbo-ing." },
        { t: "choice", q: "Qual frase está correta?", opts: ["He was constantly talking; I wished he would shut up.","He did constantly talking.","He were constantly talking."], a: 0, why: "He → was + talking. Exemplo direto da doc (repetição/irritação)." }
      ]
    }
  ]
});
