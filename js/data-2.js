// UNIDADE 2 — Simple Present
// Fontes: assets/2.1- Simple Present 1.pdf (worksheets) + assets/2.2- Simple Present 2.pdf (teoria)
window.COURSE.push({
  id: "u2",
  title: "Simple Present",
  desc: "Afirmativa, negativa, perguntas e advérbios de frequência",
  icon: "☀️",
  color: "#58cc02",
  lessons: [
    {
      id: "u2l1",
      title: "Afirmativa & ortografia",
      desc: "work/works, -es, -ies • hábitos e fatos",
      icon: "✍️",
      theory: [
        {
          h: "Quando usar o Simple Present?",
          body: `<p>A doc lista 3 usos:</p>
<ol>
<li><b>Ações repetidas / hábitos</b> (hobby, evento diário):<br><span class="en">I play tennis.</span> • <span class="en">She always forgets her keys.</span></li>
<li><b>Fatos e generalizações</b> (era verdade, é verdade e sempre será):<br><span class="en">Cats like milk.</span> • <span class="en">California is in the U.S.A.</span></li>
<li><b>Fato presente</b> (não confundir com ação acontecendo agora!):<br><span class="en">I am here now.</span> • <span class="en">He needs help right now.</span></li>
</ol>`
        },
        {
          h: "Conjugação",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>To be</th><th>Outros verbos</th></tr>
<tr><td>I</td><td>am</td><td>work / have</td></tr>
<tr><td>You</td><td>are</td><td>work / have</td></tr>
<tr><td><b>He / She / It</b></td><td>is</td><td><b>works / has</b></td></tr>
<tr><td>We / You / They</td><td>are</td><td>work / have</td></tr>
</table></div>
<p>A regra de ouro: só a <b>3ª pessoa do singular</b> (he/she/it) muda — ganha <b>-s</b>. E <b>have</b> vira <b>has</b>.</p>
<div class="tip">💡 Verbos modais (can, should, could, would, might, must) <b>nunca mudam</b>: he can, she should…</div>`
        },
        {
          h: "Ortografia na 3ª pessoa",
          body: `<p>Direto da doc:</p>
<ul>
<li>Verbo termina em <b>s, x, sh, ch ou o</b> → adiciona <b>-es</b>:<br>kiss→<span class="en">kisses</span>, relax→<span class="en">relaxes</span>, wash→<span class="en">washes</span>, watch→<span class="en">watches</span>, go→<span class="en">goes</span></li>
<li>Termina em <b>consoante + y</b> → tira o y, adiciona <b>-ies</b>:<br>study→<span class="en">studies</span>, carry→<span class="en">carries</span></li>
<li>Termina em <b>vogal + y</b> → só adiciona <b>-s</b>:<br>play→<span class="en">plays</span></li>
</ul>
<div class="warn">⚠️ Keywords que gritam "Simple Present": always, never, sometimes, usually, often, seldom, rarely, every day/week/month…</div>`
        }
      ],
      ex: [
        { t: "choice", q: "I ___ breakfast at 7:00 every morning.", opts: ["have","has","having"], a: 0, why: "Com I o verbo fica na forma base: have. (\"every morning\" = hábito → simple present)" },
        { t: "choice", q: "He always ___ a suit to work.", opts: ["wear","wears","wearing"], a: 1, why: "He/She/It ganha -s: wear → wears." },
        { t: "type", q: "The teacher ___ (stand) at the front of the classroom.", a: ["stands"], why: "The teacher = he/she → stand + s = stands." },
        { t: "type", q: "He ___ (brush) his teeth three times a day.", a: ["brushes"], why: "Termina em -sh → ganha -es: brushes." },
        { t: "choice", q: "We usually ___ our groceries on the weekend.", opts: ["buys","buying","buy"], a: 2, why: "We usa a forma base: buy." },
        { t: "choice", q: "He ___ a meeting every morning.", opts: ["have","haves","has"], a: 2, why: "have é irregular na 3ª pessoa: he has." },
        { t: "type", q: "She often ___ (make) chicken for dinner.", a: ["makes"], why: "She → make + s = makes." },
        { t: "choice", q: "They ___ the bus to school every day.", opts: ["takes","take","taking"], a: 1, why: "They usa a forma base: take." },
        { t: "choice", q: "We often ___ television in the evenings.", opts: ["watches","watch"], a: 1, why: "We usa a forma base: watch." },
        { t: "type", q: "He ___ (listen) to the radio on his way to work.", a: ["listens"], why: "He → listen + s = listens." },
        { t: "type", q: "The teacher ___ (speak) three languages.", a: ["speaks"], why: "The teacher (he/she) → speaks." },
        { t: "type", q: "A mechanic ___ (fix) cars.", a: ["fixes"], why: "Termina em -x → ganha -es: fixes. (generalização = simple present)" },
        { t: "type", q: "She ___ (wash) the dishes after dinner.", a: ["washes"], why: "Termina em -sh → washes." },
        { t: "choice", q: "They ___ coffee every morning.", opts: ["drinks","drink"], a: 1, why: "They usa a forma base: drink." },
        { t: "type", q: "Ortografia: study → \"He ___ English.\"", a: ["studies"], why: "Consoante + y → tira o y e adiciona -ies: studies." },
        { t: "type", q: "Ortografia: go → \"She ___ to work early.\"", a: ["goes"], why: "Termina em -o → ganha -es: goes." },
        { t: "type", q: "Ortografia: play → \"He ___ tennis.\"", a: ["plays"], why: "Vogal + y → só adiciona -s: plays." }
      ]
    },
    {
      id: "u2l2",
      title: "Negativa",
      desc: "don't / doesn't + verbo base",
      icon: "🚫",
      theory: [
        {
          h: "Como negar no Simple Present",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>To be</th><th>Outros verbos</th></tr>
<tr><td>I</td><td>am not</td><td><b>don't</b> have</td></tr>
<tr><td>You</td><td>are not / aren't</td><td><b>don't</b> have</td></tr>
<tr><td><b>He / She / It</b></td><td>is not / isn't</td><td><b>doesn't</b> have</td></tr>
<tr><td>We / You / They</td><td>are not / aren't</td><td><b>don't</b> have</td></tr>
</table></div>
<p>Exemplo da doc: <span class="en">She is Japanese. She <b>doesn't speak</b> French.</span></p>
<div class="warn">⚠️ Com <b>doesn't</b>, o verbo principal volta pra forma base — o -s vai embora:<br><s>"He doesn't works"</s> ❌ → <b>"He doesn't work"</b> ✅. O -s já está no doesn't!</div>
<div class="tip">💡 Modais negam sozinhos, sem don't/doesn't: can't, shouldn't, couldn't, wouldn't, mustn't.</div>`
        }
      ],
      ex: [
        { t: "choice", q: "I ___ any dinner because I am not hungry.", opts: ["don't want","doesn't want","not want"], a: 0, why: "I → don't + verbo base." },
        { t: "choice", q: "Jerry and Beth are strangers. They ___ each other.", opts: ["doesn't know","don't know","don't knows"], a: 1, why: "They → don't know (verbo na forma base)." },
        { t: "type", q: "We ___ (not / go) to school on the weekend.", a: ["don't go","do not go"], why: "We → don't go." },
        { t: "choice", q: "Mrs. Smith wants a divorce. She ___ her husband anymore.", opts: ["don't love","doesn't loves","doesn't love"], a: 2, why: "She → doesn't + love (sem -s no verbo!)." },
        { t: "choice", q: "Turtles ___ quickly.", opts: ["doesn't move","don't move"], a: 1, why: "Turtles = they → don't move." },
        { t: "type", q: "Children ___ (not / drink) coffee.", a: ["don't drink","do not drink"], why: "Children = they → don't drink." },
        { t: "choice", q: "You ___ jeans to a wedding.", opts: ["don't wear","doesn't wear","not wear"], a: 0, why: "You → don't wear." },
        { t: "choice", q: "Poor people ___ a lot of money.", opts: ["doesn't have","don't has","don't have"], a: 2, why: "People = they → don't have." },
        { t: "type", q: "It's warm today. You ___ (not / need) to wear a coat.", a: ["don't need","do not need"], why: "You → don't need." },
        { t: "choice", q: "Jessica is very healthy. She ___ cigarettes.", opts: ["don't smoke","doesn't smoke","doesn't smokes"], a: 1, why: "She → doesn't smoke (verbo base)." },
        { t: "choice", q: "The students are from China. They ___ English.", opts: ["doesn't speak","don't speak"], a: 1, why: "They → don't speak." },
        { t: "choice", q: "The shoe store ___ hats.", opts: ["don't sell","doesn't sells","doesn't sell"], a: 2, why: "The store = it → doesn't sell." },
        { t: "type", q: "That restaurant ___ (not / serve) breakfast.", a: ["doesn't serve","does not serve"], why: "The restaurant = it → doesn't serve." },
        { t: "choice", q: "The children ___ early on the weekend.", opts: ["don't get up","doesn't get up","don't gets up"], a: 0, why: "The children = they → don't get up." },
        { t: "order", q: "Monte a negativa: \"Ele não trabalha aos domingos.\"", words: ["He","doesn't","work","on","Sundays"], extra: ["don't","works"], why: "He → doesn't + work na forma base." }
      ]
    },
    {
      id: "u2l3",
      title: "Perguntas",
      desc: "Do/Does + short answers + wh-questions",
      icon: "❓",
      theory: [
        {
          h: "Yes/No questions",
          body: `<p>Fórmula: <b>Do/Does + sujeito + verbo base?</b></p>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>To be</th><th>Outros verbos</th></tr>
<tr><td>I / You</td><td>Am I? / Are you?</td><td><b>Do</b> I have? / <b>Do</b> you have?</td></tr>
<tr><td><b>He / She / It</b></td><td>Is he?</td><td><b>Does</b> he have?</td></tr>
<tr><td>We / You / They</td><td>Are we?</td><td><b>Do</b> we have?</td></tr>
</table></div>
<p>Exemplo da doc:</p>
<p><span class="en">Do you wake up early every day?<br>— Yes, I do.</span></p>
<p>Short answers usam só o auxiliar: <b>Yes, I do / No, he doesn't / Yes, they do…</b></p>
<div class="warn">⚠️ Igual à negativa: com <b>Does</b>, o verbo fica na forma base. <s>"Does he takes…?"</s> ❌ → <b>"Does he take…?"</b> ✅</div>`
        },
        {
          h: "Information questions (wh-questions)",
          body: `<p>Usa as question words <b>who, what, where, when, why, how many</b> ANTES do do/does:</p>
<p><span class="en"><b>Where does</b> he live?<br>— He lives in an apartment on Main Street.</span></p>
<ul>
<li><b>Who</b> → quem • <span class="en">Who does she live with?</span></li>
<li><b>What</b> → o quê • <span class="en">What does he want for dinner?</span></li>
<li><b>Where</b> → onde • <span class="en">Where do they eat lunch?</span></li>
<li><b>When</b> → quando • <span class="en">When do you go to bed?</span></li>
<li><b>Why</b> → por quê • <span class="en">Why is she tired?</span></li>
<li><b>How many</b> → quantos • <span class="en">How many children do they have?</span></li>
</ul>`
        }
      ],
      ex: [
        { t: "order", q: "Monte a pergunta: (ele pega o ônibus para a escola?)", words: ["Does","he","take","the","bus","to","school","?"], extra: ["Do","takes"], why: "He → Does + verbo base (take, sem -s)." },
        { t: "choice", q: "___ they live in a big city? — No, they don't.", opts: ["Does","Do","Is"], a: 1, why: "They → Do." },
        { t: "choice", q: "Do you like to play tennis? — Yes, we ___.", opts: ["like","do","does"], a: 1, why: "Short answer usa só o auxiliar: Yes, we do." },
        { t: "choice", q: "___ they watch TV a lot? — No, they don't.", opts: ["Does","Are","Do"], a: 2, why: "They → Do." },
        { t: "choice", q: "___ he live in an apartment?", opts: ["Do","Is","Does"], a: 2, why: "He → Does." },
        { t: "choice", q: "Do the students work hard? — Yes, they ___.", opts: ["do","work","does"], a: 0, why: "Short answer: Yes, they do." },
        { t: "choice", q: "___ she eat in the cafeteria? — No, she doesn't.", opts: ["Do","Does","Is"], a: 1, why: "She → Does." },
        { t: "type", q: "___ you speak French? (auxiliar)", a: ["do"], why: "You → Do you speak French?" },
        { t: "order", q: "Monte a pergunta: (onde ele mora?)", words: ["Where","does","he","live","?"], extra: ["lives","do"], why: "Question word + does + he + verbo base." },
        { t: "choice", q: "___ children do they have? — They have three children.", opts: ["How many","What","Where"], a: 0, why: "Resposta é quantidade (three) → How many." },
        { t: "choice", q: "How many languages ___ he speak? — He speaks four languages.", opts: ["do","does","is"], a: 1, why: "He → does (e o verbo speak fica na forma base)." },
        { t: "choice", q: "___ does she live with? — With her roommate.", opts: ["Where","When","Who"], a: 2, why: "Resposta é uma pessoa (roommate) → Who." },
        { t: "choice", q: "Where ___ they eat lunch every day? — In the cafeteria.", opts: ["does","do","are"], a: 1, why: "They → do." },
        { t: "order", q: "Monte a pergunta: (quando você vai dormir?)", words: ["When","do","you","go","to","bed","?"], extra: ["does"], why: "You → do. \"I go to bed at 11:00\" responde When." },
        { t: "choice", q: "___ doesn't she want to go to a movie? — Because she is very tired.", opts: ["What","Why","Who"], a: 1, why: "Resposta com \"because\" → pergunta com Why." },
        { t: "choice", q: "___ do they eat for breakfast? — Eggs.", opts: ["What","How many","When"], a: 0, why: "Resposta é uma coisa (eggs) → What." },
        { t: "choice", q: "___ does he want for dinner? — Steak.", opts: ["Where","When","What"], a: 2, why: "Resposta é uma coisa (steak) → What." }
      ]
    },
    {
      id: "u2l4",
      title: "Frequência & futuro",
      desc: "always → never • horários fixos",
      icon: "🕐",
      theory: [
        {
          h: "Advérbios de frequência",
          body: `<p>A escada da frequência (100% → 0%):</p>
<div class="tbl-wrap"><table class="tbl">
<tr><td><b>always</b></td><td>sempre (100%)</td></tr>
<tr><td><b>usually</b></td><td>geralmente</td></tr>
<tr><td><b>often</b></td><td>frequentemente</td></tr>
<tr><td><b>sometimes</b></td><td>às vezes</td></tr>
<tr><td><b>seldom / rarely</b></td><td>raramente</td></tr>
<tr><td><b>never</b></td><td>nunca (0%)</td></tr>
</table></div>
<p>Eles vêm antes do verbo principal: <span class="en">I <b>never</b> drink coffee before I go to bed.</span></p>
<p>Outras keywords da doc: normally, generally, frequently, regularly, occasionally, hardly ever, every week, every month, once in a while, once in a blue moon…</p>`
        },
        {
          h: "Simple Present como FUTURO",
          body: `<p>Da doc: usamos o simple present para falar de eventos futuros quando são <b>fatos fixos</b> — horários, cronogramas, calendários (time-table, schedule):</p>
<ul>
<li><span class="en">The plane <b>arrives</b> at 6pm tomorrow.</span></li>
<li><span class="en">The restaurant <b>opens</b> at 7:30 tonight.</span></li>
<li><span class="en">Next Thursday at 2:00, there <b>is</b> an English exam.</span></li>
<li><span class="en">The plane <b>leaves</b> in ten minutes.</span></li>
</ul>
<div class="tip">💡 Também usamos simple present depois de <b>when / as soon as / until</b> em frases de futuro:<br><span class="en">I'll retire when I <b>am</b> 70.</span> (NÃO "when I will be 70")<br><span class="en">Call me as soon as you <b>arrive</b>.</span></div>`
        }
      ],
      ex: [
        { t: "choice", q: "I never ___ coffee before I go to bed.", opts: ["drinks","drink","drinking"], a: 1, why: "I → forma base: drink. O advérbio (never) não muda a conjugação." },
        { t: "type", q: "She always ___ (help) her mother with the housework.", a: ["helps"], why: "She → helps. Advérbio antes do verbo principal." },
        { t: "choice", q: "Her husband never ___ the laundry.", opts: ["do","does","doing"], a: 1, why: "Her husband = he → does." },
        { t: "choice", q: "They usually ___ the bus to school.", opts: ["takes","taking","take"], a: 2, why: "They → take." },
        { t: "type", q: "We seldom ___ (eat) dinner in a restaurant.", a: ["eat"], why: "We → forma base: eat. Seldom = raramente." },
        { t: "choice", q: "They rarely ___ to different countries.", opts: ["travels","travel"], a: 1, why: "They → travel." },
        { t: "type", q: "She usually ___ (shop) at the supermarket near her home.", a: ["shops"], why: "She → shops." },
        { t: "choice", q: "We sometimes ___ cards on the weekend.", opts: ["play","plays"], a: 0, why: "We → play." },
        { t: "type", q: "It often ___ (rain) in April.", a: ["rains"], why: "It → rains." },
        { t: "choice", q: "Teenagers seldom ___ their parents.", opts: ["listens to","listen to"], a: 1, why: "Teenagers = they → listen to." },
        { t: "choice", q: "Qual advérbio significa \"às vezes\"?", opts: ["seldom","always","sometimes"], a: 2, why: "sometimes = às vezes. seldom = raramente, always = sempre." },
        { t: "choice", q: "The plane ___ at 6pm tomorrow. (horário fixo)", opts: ["arrives","will arriving","arriving"], a: 0, why: "Horário/cronograma fixo → simple present, mesmo sendo futuro." },
        { t: "choice", q: "The restaurant ___ at 7:30 tonight.", opts: ["open","opens","opening"], a: 1, why: "The restaurant = it → opens. Horário fixo → simple present." },
        { t: "choice", q: "I'll retire when I ___ 70.", opts: ["will be","am","be"], a: 1, why: "Depois de when (em frase de futuro) usa simple present: when I am 70." },
        { t: "order", q: "Monte a frase: \"O avião sai em dez minutos.\"", words: ["The","plane","leaves","in","ten","minutes"], extra: ["leave"], why: "The plane = it → leaves. Horário fixo → simple present." },
        { t: "choice", q: "Call me as soon as you ___.", opts: ["will arrive","arrives","arrive"], a: 2, why: "Depois de as soon as → simple present (you arrive)." }
      ]
    }
  ]
});
