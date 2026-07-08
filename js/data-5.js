// UNIDADES 5 e 6 — Present Perfect (+ Progressive) e Past Perfect (+ Progressive)
// Fonte: assets/2.2- Simple Present 2.pdf (p.6-10)
window.COURSE.push({
  id: "u5",
  title: "Present Perfect",
  desc: "have/has + past participle • have been -ing",
  icon: "🔗",
  color: "#00cd9c",
  lessons: [
    {
      id: "u5l1",
      title: "Present Perfect",
      desc: "I have worked / She has gone",
      icon: "🌉",
      theory: [
        {
          h: "Forma: [to have + past participle]",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>Afirmativa</th><th>Negativa</th><th>Pergunta</th></tr>
<tr><td>I</td><td><b>have</b> worked</td><td>haven't worked</td><td>Have I worked?</td></tr>
<tr><td>He/She/It</td><td><b>has</b> worked</td><td>hasn't worked</td><td>Has he worked?</td></tr>
<tr><td>We/You/They</td><td><b>have</b> worked</td><td>haven't worked</td><td>Have they worked?</td></tr>
</table></div>
<p>Irregulares usam o particípio próprio: go → <span class="en">gone</span>, see → <span class="en">seen</span>, break → <span class="en">broken</span>, lose → <span class="en">lost</span>.</p>`
        },
        {
          h: "Quando usar?",
          body: `<ol>
<li><b>Ação no passado SEM tempo específico</b> (o tempo não importa ou não se sabe):<br><span class="en">I have seen that movie twenty times.</span> • <span class="en">I have been to France.</span></li>
<li><b>Ação que começou no passado e continua até agora:</b><br><span class="en">I have had a cold for two weeks.</span> • <span class="en">She has been in England for six months.</span></li>
<li><b>Ação passada com efeito no presente:</b><br><span class="en">She's lost her keys.</span> (efeito: está sem as chaves agora) • <span class="en">He's broken his finger.</span></li>
</ol>
<div class="tip">💡 Keywords: <b>just, already, since, for, up to now, so far, never, ever, not…yet</b>.<br><b>for</b> + duração (for two weeks) • <b>since</b> + ponto de partida (since 2015).</div>`
        },
        {
          h: "Been × Gone (destaque da doc)",
          body: `<div class="warn">
<p><span class="en">He has <b>been</b> to England.</span> → foi e <b>já voltou</b> (não está mais lá)</p>
<p><span class="en">He has <b>gone</b> to England.</span> → foi e <b>ainda está lá</b></p>
</div>
<p>Os dois são present perfect de "ir", mas contam histórias diferentes. 😉</p>`
        }
      ],
      ex: [
        { t: "choice", q: "I ___ that movie twenty times.", opts: ["have seen","have saw","seen"], a: 0, why: "have + particípio (seen). Quantas vezes, sem tempo específico → present perfect." },
        { t: "choice", q: "She ___ in England for six months.", opts: ["have been","has been","is been"], a: 1, why: "She → has been. Começou no passado e continua." },
        { t: "choice", q: "I have had a cold ___ two weeks.", opts: ["since","ago","for"], a: 2, why: "for + duração (two weeks)." },
        { t: "choice", q: "I have worked here ___ 2015.", opts: ["for","since","ago"], a: 1, why: "since + ponto de partida (2015)." },
        { t: "choice", q: "She's ___ her keys. She can't open the door.", opts: ["lost","lose","losing"], a: 0, why: "'s = has → has lost. Efeito no presente: está trancada fora." },
        { t: "choice", q: "He has ___ to England. He is back home now.", opts: ["gone","been"], a: 1, why: "Voltou → been (foi e não está mais lá)." },
        { t: "choice", q: "He has ___ to England. He is still there.", opts: ["gone","been"], a: 0, why: "Ainda está lá → gone." },
        { t: "type", q: "They ___ (work) here for five years. (present perfect)", a: ["have worked"], why: "They → have + worked." },
        { t: "choice", q: "___ you ever been to France?", opts: ["Have","Has","Did"], a: 0, why: "You → Have. \"ever\" é keyword de present perfect." },
        { t: "choice", q: "He ___ his finger.", opts: ["has broke","has broken","have broken"], a: 1, why: "He → has + particípio broken." },
        { t: "choice", q: "I haven't finished ___.", opts: ["already","yet","since"], a: 1, why: "not…yet → \"ainda não\": I haven't finished yet." },
        { t: "choice", q: "Qual frase indica que ela AINDA está na Inglaterra?", opts: ["She has been to England.","She has gone to England."], a: 1, why: "gone = foi e permanece lá; been = foi e voltou." }
      ]
    },
    {
      id: "u5l2",
      title: "Present Perfect Progressive",
      desc: "have/has been + -ing (duração)",
      icon: "⏳",
      theory: [
        {
          h: "Forma: [to have + been + verbo-ing]",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>Afirmativa</th><th>Negativa</th><th>Pergunta</th></tr>
<tr><td>I</td><td>have <b>been</b> working</td><td>haven't been working</td><td>Have I been working?</td></tr>
<tr><td>He/She/It</td><td>has <b>been</b> working</td><td>hasn't been working</td><td>Has he been working?</td></tr>
<tr><td>We/You/They</td><td>have <b>been</b> working</td><td>haven't been working</td><td>Have they been working?</td></tr>
</table></div>
<p>Uso (da doc): ação que <b>começou no passado e continua até agora</b>, com ênfase na <b>DURAÇÃO</b> — quanto tempo a ação vem acontecendo. Só com verbos de ação (contínuos).</p>
<ul>
<li><span class="en">They have been talking for a long time.</span></li>
<li><span class="en">She has been working at the company for five years.</span></li>
</ul>
<div class="tip">💡 Keywords: <b>up to now, for a long time, all day</b>.</div>`
        }
      ],
      ex: [
        { t: "choice", q: "They ___ for a long time.", opts: ["have been talking","have talking","are been talking"], a: 0, why: "have + been + verbo-ing." },
        { t: "type", q: "She ___ (work) at the company for five years. (com ênfase na duração)", a: ["has been working"], why: "She → has been working." },
        { t: "choice", q: "Have you ___ working all day?", opts: ["be","been","being"], a: 1, why: "Pergunta: Have + sujeito + been + -ing." },
        { t: "choice", q: "He ___ been studying up to now.", opts: ["have","is","has"], a: 2, why: "He → has been studying." },
        { t: "choice", q: "Qual frase ENFATIZA a duração da ação?", opts: ["She has been working here for five years.","She works here."], a: 0, why: "O perfect progressive destaca há quanto tempo a ação acontece." },
        { t: "choice", q: "We ___ been talking all day.", opts: ["has","have","are"], a: 1, why: "We → have been talking." }
      ]
    }
  ]
});

window.COURSE.push({
  id: "u6",
  title: "Past Perfect",
  desc: "had + past participle — o passado antes do passado",
  icon: "🕰️",
  color: "#a56644",
  lessons: [
    {
      id: "u6l1",
      title: "Past Perfect",
      desc: "I had worked / He had gone",
      icon: "⏮️",
      theory: [
        {
          h: "Forma: [had + past participle] — \"past before past\"",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>Afirmativa</th><th>Negativa</th><th>Pergunta</th></tr>
<tr><td>I</td><td><b>had</b> worked / gone</td><td>hadn't worked</td><td>Had I worked?</td></tr>
<tr><td>He/She/It</td><td><b>had</b> worked / gone</td><td>hadn't worked</td><td>Had he worked?</td></tr>
<tr><td>We/You/They</td><td><b>had</b> worked / gone</td><td>hadn't worked</td><td>Had they worked?</td></tr>
</table></div>
<p><b>had</b> para todo mundo — sem exceção de pessoa.</p>`
        },
        {
          h: "Quando usar?",
          body: `<ol>
<li><b>Ação completada ANTES de outra ação no passado</b> (o passado do passado):<br><span class="en">I did not have any money because I <b>had lost</b> my wallet.</span> (primeiro perdeu, depois ficou sem dinheiro)<br><span class="en">Norton <b>had eaten</b> breakfast when he left for work.</span></li>
<li><b>Duração antes de algo no passado:</b><br><span class="en">He <b>had had</b> that car for ten years when it broke down.</span><br><span class="en">By the time Alex finished his studies, he <b>had been</b> in London for eight years.</span></li>
</ol>
<div class="tip">💡 Na linha do tempo: had worked (1º) → simple past (2º) → agora. Aparece junto de uma ação em simple past.</div>`
        }
      ],
      ex: [
        { t: "choice", q: "I did not have any money because I ___ my wallet.", opts: ["had lost","have lost","lose"], a: 0, why: "Perder a carteira veio ANTES de estar sem dinheiro → past perfect." },
        { t: "choice", q: "Norton ___ breakfast when he left for work.", opts: ["has eaten","had eaten","eats"], a: 1, why: "Comeu antes de sair → had eaten." },
        { t: "type", q: "He ___ (have) that car for ten years when it broke down.", a: ["had had"], why: "had (auxiliar) + had (particípio de have) = had had. Estranho mas correto!" },
        { t: "choice", q: "By the time Alex finished his studies, he ___ in London for eight years.", opts: ["has been","was been","had been"], a: 2, why: "Duração antes de um momento passado → had been." },
        { t: "choice", q: "\"Norton had eaten breakfast when he left for work.\" — O que aconteceu PRIMEIRO?", opts: ["had eaten (comeu)","left (saiu)"], a: 0, why: "O past perfect marca a ação mais antiga: primeiro comeu, depois saiu." },
        { t: "choice", q: "___ he worked there before?", opts: ["Has","Did had","Had"], a: 2, why: "Pergunta do past perfect: Had + sujeito + particípio." },
        { t: "choice", q: "She ___ finished when I arrived.", opts: ["hadn't","hasn't","didn't had"], a: 0, why: "Negativa: hadn't + particípio." }
      ]
    },
    {
      id: "u6l2",
      title: "Past Perfect Progressive",
      desc: "had been + -ing (duração/causa no passado)",
      icon: "🌀",
      theory: [
        {
          h: "Forma: [had + been + verbo-ing]",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th>Pronome</th><th>Afirmativa</th><th>Negativa</th><th>Pergunta</th></tr>
<tr><td>Todos (I, he, we…)</td><td><b>had been</b> working</td><td>hadn't been working</td><td>Had I been working?</td></tr>
</table></div>
<p>A doc lista 2 usos:</p>
<ol>
<li><b>Duração antes de algo no passado:</b><br><span class="en">They had been walking for over an hour when Tony arrived.</span><br><span class="en">She had been working at that company for ten years when it went out of business.</span></li>
<li><b>Causa de algo no passado:</b><br><span class="en">Jason was tired because he had been jogging.</span><br><span class="en">Sam gained weight because he had been overeating.</span></li>
</ol>`
        }
      ],
      ex: [
        { t: "choice", q: "They ___ for over an hour when Tony arrived.", opts: ["had been walking","have been walking","walked been"], a: 0, why: "Duração antes de um evento passado → had been walking." },
        { t: "choice", q: "Jason was tired because he ___.", opts: ["has been jogging","had been jogging","is jogging"], a: 1, why: "Causa de algo no passado → had been jogging." },
        { t: "type", q: "Sam gained weight because he ___ (overeat). (past perfect progressive)", a: ["had been overeating"], why: "Causa no passado → had been overeating." },
        { t: "choice", q: "She ___ working at that company for ten years when it went out of business.", opts: ["has been","was been","had been"], a: 2, why: "Duração antes do fechamento (passado) → had been working." },
        { t: "choice", q: "Had they ___ walking for an hour?", opts: ["been","be","being"], a: 0, why: "Had + sujeito + been + -ing." }
      ]
    }
  ]
});
