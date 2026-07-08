// UNIDADE 1 — Subject Pronoun, Object Pronoun & Possessives
// Fonte: assets/1- Subject Pronoun, Object pronoun & Possessives Explanation.pdf
window.COURSE.push({
  id: "u1",
  title: "Pronomes & Possessivos",
  desc: "Subject pronouns, object pronouns, possessive adjectives & possessive pronouns",
  icon: "👤",
  color: "#1cb0f6",
  lessons: [
    {
      id: "u1l1",
      title: "Subject & Object Pronouns",
      desc: "I/me, he/him, she/her, we/us, they/them",
      icon: "🎯",
      theory: [
        {
          h: "A tabela mestre",
          body: `<p>Tudo desta unidade sai desta tabela. Ela vai te acompanhar nas próximas lições:</p>
<div class="tbl-wrap"><table class="tbl">
<tr><th>Subject</th><th>Object</th><th>Poss. Adjective</th><th>Poss. Pronoun</th></tr>
<tr><td><b>I</b></td><td>me</td><td>my</td><td>mine</td></tr>
<tr><td><b>You</b></td><td>you</td><td>your</td><td>yours</td></tr>
<tr><td><b>He</b></td><td>him</td><td>his</td><td>his</td></tr>
<tr><td><b>She</b></td><td>her</td><td>her</td><td>hers</td></tr>
<tr><td><b>It</b></td><td>it</td><td>its</td><td>—</td></tr>
<tr><td><b>We</b></td><td>us</td><td>our</td><td>ours</td></tr>
<tr><td><b>They</b></td><td>them</td><td>their</td><td>theirs</td></tr>
</table></div>
<p>Nesta lição o foco são as duas primeiras colunas: <b>subject</b> e <b>object pronouns</b>.</p>`
        },
        {
          h: "Subject pronoun → ANTES do verbo",
          body: `<p>A regra da doc: <i>"We use Subject pronouns <b>before the verb</b>."</i></p>
<p>O subject pronoun é quem <b>faz</b> a ação — ele vem antes do verbo:</p>
<ul>
<li><span class="en">She</span> works here. <i>(Ela trabalha aqui)</i></li>
<li><span class="en">They</span> speak English. <i>(Eles falam inglês)</i></li>
<li><span class="en">We</span> study every day. <i>(Nós estudamos todo dia)</i></li>
</ul>
<div class="tip">💡 Pergunte: <b>quem faz a ação?</b> A resposta é o subject pronoun (I, you, he, she, it, we, they).</div>`
        },
        {
          h: "Object pronoun → DEPOIS do verbo",
          body: `<p>A regra da doc: <i>"We use Object pronouns <b>after the verb</b>."</i></p>
<p>O object pronoun é quem <b>recebe</b> a ação — ele vem depois do verbo:</p>
<ul>
<li>I love <span class="en">her</span>. <i>(Eu a amo)</i></li>
<li>Call <span class="en">me</span> tomorrow. <i>(Me ligue amanhã)</i></li>
<li>Can you help <span class="en">us</span>? <i>(Pode nos ajudar?)</i></li>
</ul>
<div class="warn">⚠️ Erro clássico de brasileiro: <s>"I love she"</s> ❌ → <b>"I love her"</b> ✅. Depois do verbo, muda a coluna!</div>`
        }
      ],
      ex: [
        { t: "pairs", q: "Ligue cada subject pronoun ao seu object pronoun:", pairs: [["I","me"],["he","him"],["she","her"],["we","us"],["they","them"]], why: "I→me, he→him, she→her, we→us, they→them. You e it não mudam." },
        { t: "choice", q: "___ is my sister.", opts: ["She","Her","Hers"], a: 0, why: "Antes do verbo (is) usamos subject pronoun: She." },
        { t: "choice", q: "I love ___.", opts: ["she","her","hers"], a: 1, why: "Depois do verbo (love) usamos object pronoun: her." },
        { t: "choice", q: "John is my friend. I see ___ every day.", opts: ["he","his","him"], a: 2, why: "Quem recebe a ação de \"see\" → object pronoun: him." },
        { t: "choice", q: "Maria and I are students. ___ study English.", opts: ["Us","We","Our"], a: 1, why: "\"Maria and I\" = nós fazendo a ação → subject pronoun: We." },
        { t: "choice", q: "This is my dog. ___ is very smart.", opts: ["It","Its","Them"], a: 0, why: "Animal/coisa fazendo a ação (antes do verbo is) → It." },
        { t: "type", q: "Ana is my teacher. I like ___. (ela)", a: ["her"], why: "Depois do verbo like → object pronoun: her." },
        { t: "choice", q: "My parents live far away. I call ___ every week.", opts: ["they","their","them"], a: 2, why: "Quem recebe a ligação → object pronoun: them." },
        { t: "choice", q: "___ am a developer.", opts: ["Me","My","I"], a: 2, why: "Antes do verbo (am) → subject pronoun: I." },
        { t: "order", q: "Monte a frase: \"Ela o ama.\"", words: ["She","loves","him"], extra: ["her","he"], why: "Subject (She) antes do verbo, object (him) depois do verbo." },
        { t: "choice", q: "Can you help ___? We are lost.", opts: ["we","us","our"], a: 1, why: "Depois do verbo help → object pronoun: us." },
        { t: "type", q: "Peter is late. Call ___ now! (ele)", a: ["him"], why: "Depois do verbo call → object pronoun: him." },
        { t: "order", q: "Monte a frase: \"Nós conhecemos eles.\"", words: ["We","know","them"], extra: ["us","they"], why: "We (subject) + know (verbo) + them (object)." }
      ]
    },
    {
      id: "u1l2",
      title: "Possessives",
      desc: "my/mine, your/yours, her/hers, our/ours…",
      icon: "🔑",
      theory: [
        {
          h: "As duas colunas de posse",
          body: `<div class="tbl-wrap"><table class="tbl">
<tr><th></th><th>Poss. Adjective <small>(+ noun)</small></th><th>Poss. Pronoun <small>(sem noun)</small></th></tr>
<tr><td>I</td><td><b>my</b></td><td><b>mine</b></td></tr>
<tr><td>You</td><td><b>your</b></td><td><b>yours</b></td></tr>
<tr><td>He</td><td><b>his</b></td><td><b>his</b></td></tr>
<tr><td>She</td><td><b>her</b></td><td><b>hers</b></td></tr>
<tr><td>It</td><td><b>its</b></td><td>— (não existe)</td></tr>
<tr><td>We</td><td><b>our</b></td><td><b>ours</b></td></tr>
<tr><td>They</td><td><b>their</b></td><td><b>theirs</b></td></tr>
</table></div>
<p>Repare: <b>his</b> é igual nas duas colunas, e <b>it</b> não tem possessive pronoun (o "XXX" da doc).</p>`
        },
        {
          h: "Possessive adjective → vem ANTES de um substantivo",
          body: `<p>A regra da doc: <i>"The possessive adjective comes <b>before a noun</b>."</i> (noun = substantivo)</p>
<ul>
<li><span class="en">My</span> <b>car</b> is red. <i>(meu carro)</i></li>
<li><span class="en">Their</span> <b>house</b> is big. <i>(a casa deles)</i></li>
<li>She lost <span class="en">her</span> <b>keys</b>. <i>(as chaves dela)</i></li>
</ul>
<p>Sempre tem um substantivo logo depois: my <b>car</b>, your <b>phone</b>, our <b>team</b>…</p>`
        },
        {
          h: "Possessive pronoun → NÃO usa substantivo",
          body: `<p>A regra da doc: <i>"The possessive pronoun does <b>not</b> use a noun."</i></p>
<p>Ele substitui "adjetivo + substantivo" inteiro, geralmente no fim da frase:</p>
<ul>
<li>The red car is <span class="en">mine</span>. <i>(= my car)</i></li>
<li>This book is <span class="en">yours</span>. <i>(= your book)</i></li>
<li>The big house is <span class="en">theirs</span>. <i>(= their house)</i></li>
</ul>
<div class="tip">💡 Teste rápido: tem substantivo logo depois? Use <b>my/your/her…</b> Não tem? Use <b>mine/yours/hers…</b></div>`
        }
      ],
      ex: [
        { t: "pairs", q: "Ligue o possessive adjective ao possessive pronoun:", pairs: [["my","mine"],["your","yours"],["her","hers"],["our","ours"],["their","theirs"]], why: "my→mine, your→yours, her→hers, our→ours, their→theirs." },
        { t: "choice", q: "This is ___ book.", opts: ["mine","my","me"], a: 1, why: "Tem substantivo (book) logo depois → possessive adjective: my." },
        { t: "choice", q: "This book is ___.", opts: ["my","me","mine"], a: 2, why: "Sem substantivo depois → possessive pronoun: mine." },
        { t: "choice", q: "___ car is red.", opts: ["Their","Theirs","Them"], a: 0, why: "Antes do substantivo car → Their." },
        { t: "choice", q: "The red car is ___.", opts: ["their","theirs","them"], a: 1, why: "Sem substantivo depois → theirs." },
        { t: "choice", q: "She lost ___ keys.", opts: ["hers","she","her"], a: 2, why: "Antes do substantivo keys → possessive adjective: her." },
        { t: "choice", q: "These keys are ___.", opts: ["her","hers","she"], a: 1, why: "Sem substantivo → possessive pronoun: hers." },
        { t: "choice", q: "The dog ate ___ food.", opts: ["its","it","him"], a: 0, why: "Posse de it (o cachorro) antes do substantivo food → its." },
        { t: "type", q: "That house is ___. (nossa — sem substantivo depois)", a: ["ours"], why: "Sem substantivo → possessive pronoun: ours." },
        { t: "choice", q: "Is this ___ phone?", opts: ["yours","your","you"], a: 1, why: "Antes do substantivo phone → your." },
        { t: "choice", q: "Is this phone ___?", opts: ["your","you","yours"], a: 2, why: "Sem substantivo depois → yours." },
        { t: "choice", q: "Bob is ___ friend.", opts: ["ours","us","our"], a: 2, why: "Antes do substantivo friend → our." },
        { t: "order", q: "Monte a frase: \"A escolha é sua.\"", words: ["The","choice","is","yours"], extra: ["your"], why: "Sem substantivo depois do possessivo → yours." },
        { t: "choice", q: "His name is Carlos. ___ name is Julia.", opts: ["Her","Hers","She"], a: 0, why: "Antes do substantivo name → Her (adjetivo possessivo de she)." }
      ]
    }
  ]
});
