// UNIDADE 3 — Present Progressive (Present Continuous)
// Fontes: assets/2.1 (worksheets p.5-6) + assets/2.2 (teoria p.3)
window.COURSE.push({
  id: "u3",
  title: "Present Progressive",
  desc: "to be + verbo-ing — ações acontecendo agora",
  icon: "🏃",
  color: "#ce82ff",
  lessons: [
    {
      id: "u3l1",
      title: "Forma & usos",
      desc: "am/is/are + -ing",
      icon: "⚡",
      theory: [
        {
          h: "A fórmula: [to be + verbo-ing]",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>Afirmativa</th><th>Negativa</th><th>Pergunta</th></tr>
<tr><td>I</td><td><b>am</b> working</td><td><b>am not</b> working</td><td><b>Am</b> I working?</td></tr>
<tr><td>He/She/It</td><td><b>is</b> working</td><td><b>isn't</b> working</td><td><b>Is</b> he working?</td></tr>
<tr><td>We/You/They</td><td><b>are</b> working</td><td><b>aren't</b> working</td><td><b>Are</b> they working?</td></tr>
</table></div>
<p>O verbo to be é o motor: conjugou o <b>am/is/are</b> certo, o resto é só colocar <b>-ing</b>.</p>`
        },
        {
          h: "Quando usar?",
          body: `<p>A doc lista 4 usos:</p>
<ol>
<li><b>Ações acontecendo AGORA:</b><br><span class="en">You are learning English now.</span> • <span class="en">I am standing and you are sitting.</span></li>
<li><b>Ações longas em progresso</b> (não necessariamente neste segundo):<br><span class="en">I am reading a very interesting book.</span></li>
<li><b>Repetição + irritação</b> com always/constantly:<br><span class="en">They're always complaining, that annoys me.</span></li>
<li><b>Futuro:</b> planos e compromissos já combinados:<br><span class="en">We are having a party next week.</span> • <span class="en">I'm flying to New York tomorrow morning.</span></li>
</ol>
<div class="tip">💡 Keywords: <b>now, look!, listen!, right now, currently, at the moment</b>, at present, nowadays, these days…</div>`
        }
      ],
      ex: [
        { t: "choice", q: "It is a beautiful day. The sun ___.", opts: ["shines","is shining","shining"], a: 1, why: "Acontecendo agora → is + shining." },
        { t: "type", q: "Mother is busy now. She ___ (make) dinner.", a: ["is making"], why: "Agora (now) → is making." },
        { t: "choice", q: "Father is in the garage. He ___ the car.", opts: ["is fixing","fixes","fixing"], a: 0, why: "Ação em progresso → is fixing." },
        { t: "type", q: "The students are in the classroom. They ___ (listen) to their teacher.", a: ["are listening"], why: "They → are listening." },
        { t: "choice", q: "The baby is in her crib. She ___.", opts: ["sleeps","is sleeping","sleeping"], a: 1, why: "Acontecendo agora → is sleeping." },
        { t: "type", q: "Ellie is in her bedroom. She ___ (study) for her exam.", a: ["is studying"], why: "She → is studying (study mantém o y antes do -ing)." },
        { t: "choice", q: "Claire and Bob are at a party. They ___.", opts: ["is dancing","dance","are dancing"], a: 2, why: "They → are dancing." },
        { t: "choice", q: "You should take your umbrella. It ___.", opts: ["is raining","rains","rain"], a: 0, why: "Está chovendo agora → is raining." },
        { t: "type", q: "Anna is going to a wedding. She ___ (wear) a beautiful dress.", a: ["is wearing"], why: "She → is wearing." },
        { t: "type", q: "The floor is dirty. Andrea ___ (wash) it.", a: ["is washing"], why: "Andrea (she) → is washing." },
        { t: "choice", q: "Mark is at the supermarket. He ___ groceries.", opts: ["buys","is buying","buying"], a: 1, why: "Ação em progresso → is buying." },
        { t: "choice", q: "It is 12:00. The children ___ lunch.", opts: ["is eating","eats","are eating"], a: 2, why: "The children = they → are eating." },
        { t: "choice", q: "Brenda has a bad cold. She ___.", opts: ["is sneezing","sneezes","sneezing"], a: 0, why: "Acontecendo agora → is sneezing." },
        { t: "type", q: "The students are in the library. They ___ (read).", a: ["are reading"], why: "They → are reading." },
        { t: "choice", q: "The pilot ___ his airplane.", opts: ["is flying","flies","fly"], a: 0, why: "Ação em progresso → is flying." }
      ]
    },
    {
      id: "u3l2",
      title: "Negativa & Simple vs Progressive",
      desc: "isn't/aren't -ing • quando usar cada um",
      icon: "⚖️",
      theory: [
        {
          h: "Negativa + afirmativa em pares",
          body: `<p>Exemplo da doc:</p>
<p><span class="en">Mary <b>isn't wearing</b> a blue dress. <b>She's wearing</b> a black dress.</span></p>
<p>Negativa = <b>am not / isn't / aren't + verbo-ing</b>. Muito usada para corrigir uma informação e dar a certa em seguida.</p>`
        },
        {
          h: "Simple Present × Present Progressive",
          body: `<p>O duelo mais importante deste nível:</p>
<div class="tbl-wrap"><table class="tbl">
<tr><th></th><th>Simple Present</th><th>Present Progressive</th></tr>
<tr><td><b>Quando</b></td><td>hábito, rotina, fato</td><td>agora, em progresso</td></tr>
<tr><td><b>Keywords</b></td><td>always, never, every day, usually</td><td>now, right now, at the moment, look!, listen!</td></tr>
<tr><td><b>Exemplo</b></td><td><span class="en">She studies English every day.</span></td><td><span class="en">She is studying English right now.</span></td></tr>
</table></div>
<div class="warn">⚠️ Da doc: "fato presente" usa simple present, NÃO progressive:<br><span class="en">I am here now. / He needs help right now.</span> — mesmo com "now", são fatos/estados, não ações.</div>`
        }
      ],
      ex: [
        { t: "choice", q: "Peter ___ mathematics. He is studying history.", opts: ["isn't studying","doesn't study","not studying"], a: 0, why: "Par negativa→afirmativa no progressive: isn't studying." },
        { t: "type", q: "The boys aren't playing soccer. They ___ (play) hockey.", a: ["are playing"], why: "Afirmativa do par: are playing." },
        { t: "choice", q: "I ___ coffee. I'm drinking tea. (agora)", opts: ["am not drinking","don't drink","isn't drinking"], a: 0, why: "I → am not drinking." },
        { t: "type", q: "She isn't writing a letter to her grandmother. She ___ (write) a letter to her aunt.", a: ["is writing"], why: "She → is writing." },
        { t: "choice", q: "We ___ a new car. We're buying a used car. (agora)", opts: ["don't buy","aren't buying","isn't buying"], a: 1, why: "We → aren't buying." },
        { t: "choice", q: "I ___ fish for dinner. I'm cooking steak. (agora)", opts: ["am not cooking","don't cook","isn't cooking"], a: 0, why: "I → am not cooking." },
        { t: "type", q: "She ___ (not / watch) sports on TV. She's watching a movie.", a: ["isn't watching","is not watching"], why: "She → isn't watching." },
        { t: "choice", q: "The tourists ___ Chinese. They're speaking Japanese.", opts: ["isn't speaking","don't speaking","aren't speaking"], a: 2, why: "The tourists = they → aren't speaking." },
        { t: "choice", q: "He ___ a cigarette. He's smoking a pipe.", opts: ["isn't smoking","aren't smoking","doesn't smoking"], a: 0, why: "He → isn't smoking." },
        { t: "type", q: "She ___ (not / wash) the dishes. She's washing the clothes.", a: ["isn't washing","is not washing"], why: "She → isn't washing." },
        { t: "choice", q: "They ___ to classical music. They're listening to rock music.", opts: ["aren't listening","don't listen","isn't listening"], a: 0, why: "They → aren't listening." },
        { t: "choice", q: "We ___ to Hawaii for our vacation. We're going to Mexico.", opts: ["isn't going","aren't going","don't going"], a: 1, why: "We → aren't going." },
        { t: "choice", q: "I usually ___ tea, but today I ___ coffee.", opts: ["drink / am drinking","am drinking / drink","drinks / is drinking"], a: 0, why: "usually = hábito (simple) • today/agora = progressive." },
        { t: "choice", q: "Look! It ___.", opts: ["rains","is raining","rain"], a: 1, why: "\"Look!\" é keyword de progressive → is raining." },
        { t: "choice", q: "She ___ English every day.", opts: ["is studying","studies","studying"], a: 1, why: "every day = hábito → simple present: studies." },
        { t: "choice", q: "She ___ English right now.", opts: ["studies","study","is studying"], a: 2, why: "right now = agora → is studying." },
        { t: "choice", q: "They're always ___! That annoys me.", opts: ["complain","complaining","complains"], a: 1, why: "Repetição + irritação → progressive: are always complaining." },
        { t: "choice", q: "We ___ a party next week. (já está tudo combinado)", opts: ["are having","have","has"], a: 0, why: "Plano/compromisso já combinado → progressive como futuro." },
        { t: "choice", q: "I am here now. — Por que é simple present?", opts: ["Porque é um fato/estado presente","Porque \"now\" sempre pede simple","Está errado, deveria ser progressive"], a: 0, why: "Fato presente usa simple present — não é uma ação em andamento (regra 3 da doc)." }
      ]
    }
  ]
});
