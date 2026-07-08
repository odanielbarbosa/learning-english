# Study English 🦉

App de estudo de inglês estilo Duolingo — **100% offline**, sem servidor e sem instalar nada. Todo o conteúdo é gerado a partir dos PDFs da pasta `assets/`.

**🌐 Acesse online:** https://odanielbarbosa.github.io/learning-english/

## Como usar

Duas formas (funcionam igual — o progresso fica salvo no navegador de cada uma):

- **Online:** abra o link acima (GitHub Pages).
- **Offline:** dê dois cliques no `index.html` (funciona em `file://`, sem internet).

> Publicado via **GitHub Pages** (branch `main`, pasta raiz). Cada `git push` na `main` republica o site automaticamente.

| Fonte (`assets/`) | Conteúdo |
|---|---|
| `1- Subject Pronoun, Object pronoun & Possessives Explanation.pdf` | Unidade 1 — Pronomes & Possessivos |
| `2.1- Simple Present 1.pdf` (worksheets ESL Library) | Exercícios das Unidades 2 e 3 |
| `2.2- Simple Present 2.pdf` (guia ILAB de tempos verbais) | Teoria das Unidades 2 a 7 |

## O que tem

- **7 níveis / 16 lições / ~200 exercícios**, **na mesma ordem das docs**: Pronomes & Possessivos → Simple Present → Present Progressive → Simple Past & Past Progressive → Present Perfect → Past Perfect → Futuro
- Home em formato de **níveis** — um por tela, navegando pelo próximo/anterior com setas (ou pelos dots); ao concluir um nível, aparece o botão "Próximo nível →"
- Cada lição: **teoria primeiro** (resumo das docs, com tabelas) → **exercícios na ordem exata das worksheets**, com correção na hora e explicação do porquê
- 4 tipos de exercício: múltipla escolha, digitar, montar a frase e ligar pares
- Exercício errado **volta a aparecer** até você acertar (estilo Duolingo)
- **Tema claro/escuro** (botão 🌙/☀️), começa no escuro
- **Prática mista** (15 exercícios aleatórios) após concluir a primeira lição

## 📊 Tela de progresso

Botão **"Ver progresso"** na home abre um dashboard com sua evolução:

- **Cartões**: XP total, lições concluídas, precisão geral e sequência de dias (streak)
- **Evolução do XP** — XP acumulado ao longo das sessões
- **Precisão por sessão** — % de acertos de primeira em cada lição
- **Atividade** — respostas por dia nos últimos 14 dias
- **Domínio por unidade** — precisão de 1ª tentativa em cada tema
- **Sessões recentes** — tabela do histórico

## Banco de dados (JSON, offline)

O progresso é salvo automaticamente num **banco JSON no `localStorage`** do navegador. Ele grava o *processo* de estudo:

- `xp`, `lessons` — pontuação e melhor nota por lição
- `sessions` — cada lição/prática concluída (quando, precisão, XP, duração)
- `events` — **1 registro por resposta** (timestamp, unidade, tipo, acertou?, de primeira?)

Como é offline, o navegador não escreve arquivos sozinho — então há **Exportar / Importar db.json**:

- **⬇️ Exportar db.json** — baixa um backup do seu banco (para guardar ou levar a outro PC)
- **⬆️ Importar db.json** — restaura um backup
- **🗑️ Zerar** — apaga tudo (exporte antes!)

Veja o formato em [`db.example.json`](db.example.json).

## Estrutura

```
index.html      → página única do app (+ script que aplica o tema)
styles.css      → visual (tema claro/escuro via variáveis CSS)
js/app.js       → motor: navegação, exercícios, XP, banco de dados, dashboard
js/data-*.js    → conteúdo das unidades (teoria + exercícios)
db.example.json → exemplo do formato do banco
```

Para adicionar/editar conteúdo, mexa nos `js/data-*.js`. Formato dos exercícios:

```js
{ t: "choice", q: "He ___ a suit.", opts: ["wear","wears"], a: 1, why: "explicação" }
{ t: "type",   q: "She ___ (make) dinner.", a: ["makes"], why: "..." }
{ t: "order",  q: "Monte:", words: ["Does","he","work","?"], extra: ["Do"], why: "..." }
{ t: "pairs",  q: "Ligue:", pairs: [["I","me"],["he","him"]], why: "..." }
```
