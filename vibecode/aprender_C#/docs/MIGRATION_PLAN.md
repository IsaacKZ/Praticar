# 🔄 PLANO DE MIGRAÇÃO: VibeCode_C → VibeCode_C#

> **Data:** 23/02/2026  
> **Objetivo:** Converter a plataforma educacional de C para C#  
> **Modelo de planejamento:** Claude Opus 4.6 Thinking  
> **Modelo de implementação:** Claude Sonnet 4.6 Thinking  

---

## 📋 VISÃO GERAL

### O que muda
| Aspecto | VibeCode_C (Atual) | VibeCode_C# (Novo) |
|---|---|---|
| **Linguagem ensinada** | C (procedural) | C# (orientada a objetos) |
| **Branding** | VibeCode_C | VibeCode_C# |
| **Cor primária** | Verde neon `#00ff9d` | Roxo/Violeta `#7B2FFF` |
| **Cor secundária** | Roxo `#bd00ff` | Ciano `#00D4FF` |
| **Filosofia** | Memória manual, ponteiros | POO, Garbage Collection, LINQ |
| **Ferramenta** | GCC (compilador) | .NET SDK (runtime + compilador) |
| **Comando compilação** | `gcc main.c -o main` | `dotnet run` |
| **Total de aulas** | 100 (10 níveis × 10) | 100 (10 níveis × 10) |

### O que NÃO muda
- Estrutura de arquivos HTML (10 levels + index + recursos)
- Sistema de gamificação (XP, conquistas, confetes)
- Layout e componentes visuais (modals, cards, etc.)
- Sistema de quizzes e desafios (fill-in-the-blank)
- Tema claro/escuro
- Responsividade

---

## 🎨 FASE 1: IDENTIDADE VISUAL (style.css)

### 1.1 — Atualizar variáveis CSS `:root`

```css
/* ANTES (C - verde neon) */
--primary: #00ff9d;
--primary-dim: rgba(0, 255, 157, 0.15);
--secondary: #bd00ff;
--secondary-dim: rgba(189, 0, 255, 0.15);

/* DEPOIS (C# - roxo vibrante) */
--primary: #7B2FFF;
--primary-dim: rgba(123, 47, 255, 0.15);
--secondary: #00D4FF;
--secondary-dim: rgba(0, 212, 255, 0.15);
--accent: #A855F7;
--success: #22C55E;
```

**Justificativa:** O roxo é a cor oficial do ecossistema .NET/C#. O ciano complementa bem e diferencia visualmente do projeto anterior.

### 1.2 — Atualizar comentário do cabeçalho

```css
/* ANTES */
/* VIBECODE_C - LEARN C STYLESHEET */

/* DEPOIS */
/* VIBECODE_C# - LEARN C# STYLESHEET */
```

### 1.3 — Atualizar gradientes do background glow

```css
/* ANTES */
background: radial-gradient(circle, rgba(0, 255, 157, 0.08) 0%, transparent 60%);
background: radial-gradient(circle, rgba(189, 0, 255, 0.06) 0%, transparent 60%);

/* DEPOIS */
background: radial-gradient(circle, rgba(123, 47, 255, 0.08) 0%, transparent 60%);
background: radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 60%);
```

### 1.4 — Atualizar box-shadows com cores novas
Buscar todas as ocorrências de `rgba(0, 255, 157` e `rgba(189, 0, 255` e substituir pelas novas cores.

---

## 📄 FASE 2: HTML — PÁGINAS (13 arquivos)

### 2.1 — Mudanças globais em TODOS os HTMLs

Em todos os 13 arquivos HTML (.html), fazer search-and-replace:

| Buscar | Substituir por |
|---|---|
| `VibeCode_C` | `VibeCode_C#` |
| `Vibe<span>Code</span>_C` | `Vibe<span>Code</span>_C#` |
| `Aprenda C` | `Aprenda C#` |
| `Aprenda C do zero` | `Aprenda C# do zero` |
| `Feito com ☕ e muito <code>printf</code>` | `Feito com ☕ e muito <code>Console.WriteLine</code>` |
| `Learn C` | `Learn C#` |

### 2.2 — index.html — Mudanças específicas

#### Hero Section
```html
<!-- ANTES -->
<h1>Aprenda <span class="highlight">C</span> na pura vibe.</h1>
<p class="tagline">Do zero aos ponteiros. 100 aulas práticas. Sem enrolação.</p>

<!-- DEPOIS -->
<h1>Aprenda <span class="highlight">C#</span> na pura vibe.</h1>
<p class="tagline">Do zero ao LINQ. 100 aulas práticas. Sem enrolação.</p>
```

#### Restructurar os Níveis (Cards)
Os títulos e descrições dos cards precisam mudar:

| Level | Título Atual (C) | Novo Título (C#) | Nova Descrição |
|---|---|---|---|
| 0 | O Início | Hello .NET | Instale o .NET SDK e escreva seu primeiro programa. |
| 1 | Variáveis | Tipos e Variáveis | Tipos de dados, var, conversões e operadores. |
| 2 | Entrada & Saída | Console I/O | Console.WriteLine, ReadLine e formatação. |
| 3 | Controle de Fluxo | Controle de Fluxo | if, else, switch (pattern matching) e ternário. |
| 4 | Loops | Loops & Arrays | for, while, foreach e arrays. |
| 5 | Funções | Métodos & Classes Intro | Métodos, parâmetros, retorno e sua primeira classe. |
| 6 | Ponteiros & Memória (**BOSS**) | POO — O Poder dos Objetos (**BOSS**) | Classes, objetos, construtores e encapsulamento. |
| 7 | Structs | Herança & Interfaces | Herança, polimorfismo e interfaces. |
| 8 | Arquivos | Coleções & LINQ | List, Dictionary, foreach e consultas LINQ. |
| 9 | Linked Lists (**MASTER**) | Async, Arquivos & Projeto Final (**MASTER**) | async/await, File I/O e projeto integrador. |

#### Recursos (manter a seção, trocar conteúdo depois)
Manter os 3 cards de recursos (Glossário, Cheat Sheet, Erros Comuns).

### 2.3 — level-0.html a level-9.html

Para cada arquivo de level:
1. Atualizar o `<title>` com o novo nome do level
2. Atualizar o `<meta description>`
3. Atualizar `<h1>`, `<p class="level-desc">` e badges
4. Atualizar os títulos das 10 lições no `<div class="lessons-container">`
5. Atualizar a navegação inferior (Próximo: nome correto)

### 2.4 — recursos.html — Reescrever completamente

O glossário, cheat sheet e erros comuns precisam ser 100% C#.

---

## ⚙️ FASE 3: JAVASCRIPT — CONTEÚDO (script.js)

**Este é o maior trabalho.** O `script.js` tem ~2000 linhas e contém TODO o conteúdo textual.

### 3.1 — Reescrever `lessonsData` (100 lições)

Cada lição tem: `title`, `body` (HTML), `code` (código exemplo), `output` (saída esperada).

---

#### LEVEL 0: HELLO .NET (Fundação)

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 0.1 | O que é C#? | História (Anders Hejlsberg, 2000), uso moderno (web, games, desktop, mobile) |
| 0.2 | Onde C# é usado? | Unity, ASP.NET, Blazor, Xamarin/MAUI, Azure |
| 0.3 | Instalando o .NET SDK | Download do .NET 9 SDK, verificar com `dotnet --version` |
| 0.4 | Primeiro projeto | `dotnet new console -n MeuApp`, estrutura de pastas |
| 0.5 | O método Main() | `static void Main(string[] args)` e top-level statements |
| 0.6 | using e namespaces | `using System;`, conceito de namespaces |
| 0.7 | Hello World | `Console.WriteLine("Hello, World!");` |
| 0.8 | Comentários | `//`, `/* */`, `///` (XML docs) |
| 0.9 | Erros vs Warnings | Erros de compilação, warnings, analyzer |
| 0.10 | Boas Práticas | PascalCase, indentação, organização |

#### LEVEL 1: TIPOS E VARIÁVEIS

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 1.1 | O que é uma variável? | Caixinha na memória (mesmo conceito, sintaxe C#) |
| 1.2 | Tipos inteiros | `int`, `short`, `long`, `byte` |
| 1.3 | Tipos decimais | `float`, `double`, `decimal` (novo! para dinheiro) |
| 1.4 | Caracteres e strings | `char` vs `string` (string é um tipo de primeira classe!) |
| 1.5 | Tipo bool | `true`/`false` (não existe em C puro) |
| 1.6 | var e inferência | Palavra-chave `var`, quando usar |
| 1.7 | Constantes | `const` e `readonly` |
| 1.8 | Operadores aritméticos | `+`, `-`, `*`, `/`, `%` (mesmo que C) |
| 1.9 | Conversão de tipos | Casting explícito, `Convert.ToInt32()`, `int.Parse()` |
| 1.10 | Interpolação de strings | `$"Olá, {nome}! Idade: {idade}"` (super poder do C#) |

#### LEVEL 2: CONSOLE I/O

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 2.1 | Console.WriteLine | Escrever na tela, diferença Write vs WriteLine |
| 2.2 | Interpolação e formato | `$"{valor:C2}"`, `$"{data:dd/MM/yyyy}"` |
| 2.3 | Console.ReadLine | Ler entrada do usuário (sempre retorna string!) |
| 2.4 | Convertendo entrada | `int.Parse()`, `int.TryParse()`, `Convert.To...` |
| 2.5 | Sequências de escape | `\n`, `\t`, `\\`, `\"`, `@"verbatim"` |
| 2.6 | String Methods | `.ToUpper()`, `.ToLower()`, `.Trim()`, `.Contains()` |
| 2.7 | Formatação numérica | Moeda, percentual, dígitos: `"C"`, `"P"`, `"N2"` |
| 2.8 | StringBuilder | Para concatenação eficiente em loops |
| 2.9 | Cores no Console | `Console.ForegroundColor`, `Console.BackgroundColor` |
| 2.10 | 🎯 Projeto: Calculadora | Calculadora com menu e cores no console |

#### LEVEL 3: CONTROLE DE FLUXO

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 3.1 | Operadores relacionais | `==`, `!=`, `>`, `<`, `>=`, `<=` (idêntico a C) |
| 3.2 | Operadores lógicos | `&&`, `||`, `!` (idêntico a C) |
| 3.3 | Estrutura if | Mesma sintaxe que C |
| 3.4 | if-else | Mesma sintaxe que C |
| 3.5 | else if encadeado | Mesma sintaxe que C |
| 3.6 | Operador ternário | `condição ? valorTrue : valorFalse` |
| 3.7 | switch clássico | `switch/case/break/default` |
| 3.8 | switch com pattern matching | `switch` com `when`, type patterns (C# moderno!) |
| 3.9 | Nullable e ?? | `int?`, operador `??` (null-coalescing) |
| 3.10 | 🎯 Projeto: Jogo de Adivinhação | `Random`, loop com if/else, feedback "maior/menor" |

#### LEVEL 4: LOOPS & ARRAYS

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 4.1 | while | Mesma sintaxe que C |
| 4.2 | do-while | Mesma sintaxe que C |
| 4.3 | for clássico | Mesma sintaxe que C |
| 4.4 | foreach | `foreach (var item in lista)` — NOVO e essencial! |
| 4.5 | break e continue | Idêntico a C |
| 4.6 | Arrays | `int[] nums = new int[5];`, `int[] nums = {1,2,3};` |
| 4.7 | Array multidimensional | `int[,] matriz = new int[3,3];` |
| 4.8 | Propriedades de Array | `.Length`, `Array.Sort()`, `Array.Reverse()` |
| 4.9 | Strings como arrays | `string[i]`, iteração por chars |
| 4.10 | 🎯 Projeto: Tabuada Formatada | Tabuada com `foreach` e formatação alinhada |

#### LEVEL 5: MÉTODOS & CLASSES INTRO

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 5.1 | O que são métodos? | Funções dentro de classes |
| 5.2 | Métodos void | `static void Saudar()` |
| 5.3 | Métodos com retorno | `static int Soma(int a, int b)` |
| 5.4 | Parâmetros | Passagem por valor, `ref`, `out` |
| 5.5 | Parâmetros opcionais | `void Log(string msg, int level = 1)` |
| 5.6 | Sobrecarga (overload) | Mesmo nome, parâmetros diferentes |
| 5.7 | Recursão | Fatorial, fibonacci (idêntico conceito) |
| 5.8 | O que é uma Classe? | Blueprint para objetos, `class Pessoa {}` |
| 5.9 | Atributos e Construtor | `public string Nome;`, `public Pessoa(string nome)` |
| 5.10 | 🎯 Projeto: Biblioteca Math | Classe `MathHelper` com métodos estáticos |

#### LEVEL 6: POO — O PODER DOS OBJETOS (**BOSS**)

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 6.1 | Classe vs Objeto | A diferença entre o molde e a peça |
| 6.2 | Construtores | `public Carro(string marca, int ano)` |
| 6.3 | Propriedades (get/set) | `public string Nome { get; set; }` — auto-properties |
| 6.4 | Encapsulamento | `private`, `public`, `protected`, `internal` |
| 6.5 | Métodos de instância | `meuCarro.Ligar()` vs `Math.Abs()` |
| 6.6 | this | Referência ao objeto atual |
| 6.7 | static | Membros da classe vs membros da instância |
| 6.8 | Composição | Objeto dentro de objeto (`Carro` tem `Motor`) |
| 6.9 | ToString() | Sobrescrever para representação textual |
| 6.10 | 🏆 Projeto: Sistema de Cadastro | CRUD simples com classes e lista de objetos |

#### LEVEL 7: HERANÇA & INTERFACES

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 7.1 | O que é Herança? | `class Cachorro : Animal` |
| 7.2 | Classe base e derivada | `base.Metodo()`, construtores em cadeia |
| 7.3 | override e virtual | `virtual void Falar()`, `override void Falar()` |
| 7.4 | Classe abstrata | `abstract class Forma`, métodos sem corpo |
| 7.5 | Polimorfismo | `Animal animal = new Cachorro();` |
| 7.6 | O que é Interface? | `interface IVoador { void Voar(); }` |
| 7.7 | Implementando Interface | `class Pato : Animal, IVoador` |
| 7.8 | Múltiplas interfaces | Uma classe, vários contratos |
| 7.9 | is e as (type checking) | `if (animal is Cachorro c)` pattern matching |
| 7.10 | 🎯 Projeto: Zoológico | Hierarquia de animais com polimorfismo |

#### LEVEL 8: COLEÇÕES & LINQ

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 8.1 | List\<T\> | `List<string> nomes = new();`, `.Add()`, `.Remove()` |
| 8.2 | Dictionary\<K,V\> | `Dictionary<string, int> estoque = new();` |
| 8.3 | Stack e Queue | LIFO e FIFO |
| 8.4 | Intro ao LINQ | `using System.Linq;`, `.Where()`, `.Select()` |
| 8.5 | LINQ: Filtrar e Ordenar | `.OrderBy()`, `.First()`, `.Any()` |
| 8.6 | LINQ: Sintaxe de query | `from p in pessoas where p.Idade > 18 select p` |
| 8.7 | Lambda expressions | `x => x * 2`, `(a, b) => a + b` |
| 8.8 | Delegates e Action/Func | `Action<string>`, `Func<int, int, int>` |
| 8.9 | Generics básico | `class Caixa<T> { public T Valor; }` |
| 8.10 | 🎯 Projeto: Gerenciador de Tarefas | CRUD com List + LINQ para filtrar tarefas |

#### LEVEL 9: ASYNC, ARQUIVOS & PROJETO FINAL (**MASTER**)

| Aula | Título | Conteúdo-Chave |
|---|---|---|
| 9.1 | Exceções e try-catch | `try { } catch (Exception ex) { }` |
| 9.2 | throw e exceções custom | `class SaldoInsuficienteException : Exception` |
| 9.3 | File.ReadAllText / WriteAllText | I/O simples com `System.IO` |
| 9.4 | StreamReader e StreamWriter | Leitura/Escrita com streams |
| 9.5 | Serialização JSON | `System.Text.Json`, `JsonSerializer.Serialize()` |
| 9.6 | O que é async/await? | Conceito de assincronismo, por que importa |
| 9.7 | Métodos async | `async Task<string> BuscarDados()` |
| 9.8 | HttpClient básico | Fazer requisição HTTP e ler JSON |
| 9.9 | Enums e Records | `enum Status {}`, `record Pessoa(string Nome, int Idade)` |
| 9.10 | 🏆 Projeto Final: App Completo | Aplicação console que lê API + salva em JSON + LINQ |

---

### 3.2 — Reescrever `QUIZ_DATA` (10 quizzes × 5 perguntas = 50 perguntas)

Cada quiz tem 5 perguntas de múltipla escolha. Reescrever todas para C#.

**Exemplo do novo Quiz Level 0:**
```javascript
0: [
    { q: "Quem criou o C#?", opts: ["Dennis Ritchie", "Anders Hejlsberg", "Guido van Rossum", "James Gosling"], ans: 1 },
    { q: "O que o comando 'dotnet run' faz?", opts: ["Edita código", "Compila e executa", "Instala pacotes", "Debugga"], ans: 1 },
    { q: "Como escrever na tela em C#?", opts: ["printf()", "System.out.print()", "Console.WriteLine()", "echo()"], ans: 2 },
    { q: "Qual a extensão de arquivos C#?", opts: [".c", ".cpp", ".cs", ".csharp"], ans: 2 },
    { q: "Tudo em C# vive dentro de:", opts: ["Funções", "Classes", "Módulos", "Pacotes"], ans: 1 }
]
```

### 3.3 — Reescrever `CHALLENGES` (10 desafios fill-in-the-blank)

**Exemplo do novo Challenge Level 0:**
```javascript
0: {
    title: "Seu Primeiro Programa",
    desc: "Complete o código para imprimir 'Hello, World!'",
    code: `___1___.___2___("Hello, World!");`,
    blanks: { "1": "Console", "2": "WriteLine" },
    output: "Hello, World!"
}
```

### 3.4 — Atualizar constantes e labels

```javascript
// ANTES
const STORAGE_KEY = 'vibecode_progress';

// DEPOIS  
const STORAGE_KEY = 'vibecode_csharp_progress';
```

**IMPORTANTE:** Trocar TODAS as chaves de localStorage para evitar conflito com o progresso salvo do curso de C:
- `vibecode_progress` → `vibecode_csharp_progress`
- `vibecode_xp` → `vibecode_csharp_xp`
- `vibecode_achievements` → `vibecode_csharp_achievements`
- `vibecode_theme` → `vibecode_csharp_theme` (ou manter compartilhado)
- `vibecode_challenges` → `vibecode_csharp_challenges`

### 3.5 — Atualizar conquistas (ACHIEVEMENTS)

```javascript
// ANTES
{ id: 'boss_slayer', name: 'Boss Slayer', desc: 'Complete o Level 6', icon: '💀' }

// DEPOIS
{ id: 'boss_slayer', name: 'OOP Master', desc: 'Complete o Level 6 (POO)', icon: '🏗️' }
```

### 3.6 — Atualizar o Editor de Código

No modal do editor, trocar:
- Código default de `#include <stdio.h>` para `Console.WriteLine("Hello!");`
- Label do arquivo de `main.c` para `Program.cs`
- Simulador de compilação: trocar `gcc main.c` por `dotnet run`
- A função `runCode()` precisa ser adaptada para parsear `Console.WriteLine()` em vez de `printf()`

```javascript
// ANTES (linha 1836-1849)
output.textContent = '$ gcc main.c -o programa\n$ ./programa\n';
const printfMatch = code.match(/printf\s*\(\s*"([^"]*)"/g);

// DEPOIS
output.textContent = '$ dotnet run\n';
const writeLineMatch = code.match(/Console\.Write(?:Line)?\s*\(\s*"([^"]*)"/g);
```

### 3.7 — Atualizar navegação de levels

```javascript
// ANTES (linha 1617)
for (let l = 0; l <= 6; l++)

// DEPOIS (cobrir todos os 10 levels)
for (let l = 0; l <= 9; l++)
```

### 3.8 — Atualizar progresso global

```javascript
// ANTES (linha 1544)
const percentage = (completedCount / 70) * 100;

// DEPOIS (100 aulas no total)
const percentage = (completedCount / 100) * 100;
```

**NOTA:** O projeto original de C já tem levels 7-9 mas a função `getLessonOrder()` e `updateAllProgressUI()` só cobrem até o level 6. Isso é um bug existente que será corrigido na migração.

---

## 📄 FASE 4: RECURSOS (recursos.html)

### 4.1 — Glossário C#

| Termo | Definição |
|---|---|
| Classe | Blueprint para criar objetos |
| Objeto | Instância de uma classe |
| Método | Função que pertence a uma classe |
| Propriedade | Atributo com get/set |
| Namespace | Agrupamento lógico de classes |
| Herança | Classe filha herda da classe pai |
| Interface | Contrato que define métodos obrigatórios |
| LINQ | Language Integrated Query — consultas em coleções |
| async/await | Programação assíncrona |
| List\<T\> | Coleção genérica dinâmica |
| NuGet | Gerenciador de pacotes do .NET |
| var | Inferência de tipo pelo compilador |
| null | Ausência de valor/referência |
| Exception | Erro em tempo de execução |
| delegate | Referência a um método |

### 4.2 — Cheat Sheet C#

Blocos para: Estrutura Básica, Tipos de Dados, Console I/O, Operadores, Controle de Fluxo, Loops, Métodos, Classes, LINQ, Async.

### 4.3 — Erros Comuns C#

| Erro | Explicação |
|---|---|
| ❌ `NullReferenceException` | Tentou acessar membro de objeto null |
| ❌ `=` vs `==` | `=` atribui, `==` compara |
| ❌ `ReadLine()` retorna string | Precisa converter: `int.Parse(Console.ReadLine())` |
| ❌ Esqueceu `new` | `List<int> lista;` sem `new()` → null |
| ❌ `IndexOutOfRangeException` | Acessou índice fora do array |
| ❌ Esqueceu `override` | Método na classe filha não sobrescreve sem `override` |
| ❌ Esqueceu `await` | Chamar método `async` sem `await` |
| ❌ Divisão inteira | `5/2 = 2`, não `2.5` — use `5.0/2` |
| ❌ Esqueceu `break` no switch | Cada case precisa de `break` ou `return` |
| ❌ Case-sensitive | `Console` ≠ `console` |

---

## 🔧 FASE 5: CORREÇÕES TÉCNICAS

### 5.1 — Corrigir bug de navegação (levels 7-9)

A função `getLessonOrder()` na linha 1617 itera `l <= 6`, mas existem levels 7, 8 e 9.

```javascript
// CORRIGIR PARA:
for (let l = 0; l <= 9; l++)
```

### 5.2 — Corrigir `updateAllProgressUI()`

Linha 1551: `for (let level = 0; level <= 6; level++)` deve ser `<= 9`.

### 5.3 — Trocar `card-progress-text` nos HTMLs

Os `data-level` nos HTMLs de level 7-9 já existem, mas confirmar consistência.

---

## 📋 ORDEM DE EXECUÇÃO RECOMENDADA

A implementação deve seguir esta ordem para minimizar quebras:

### Sprint 1: Base Visual
1. ☐ Atualizar `style.css` (cores, branding)
2. ☐ Atualizar branding em todos os HTMLs (search-replace global)

### Sprint 2: Estrutura dos Levels
3. ☐ Atualizar `index.html` (títulos dos levels, hero, descrições)
4. ☐ Atualizar cada `level-X.html` (títulos das 10 lições de cada)

### Sprint 3: Conteúdo Principal (o mais longo)
5. ☐ Reescrever `lessonsData` no `script.js` — Levels 0 a 4
6. ☐ Reescrever `lessonsData` no `script.js` — Levels 5 a 9

### Sprint 4: Interatividade
7. ☐ Reescrever `QUIZ_DATA` (50 perguntas)
8. ☐ Reescrever `CHALLENGES` (10 desafios)
9. ☐ Atualizar sistema do editor (trocar printf parser por Console.WriteLine parser)

### Sprint 5: Finalização
10. ☐ Reescrever `recursos.html` (glossário, cheat sheet, erros comuns)
11. ☐ Atualizar `ACHIEVEMENTS`
12. ☐ Corrigir bugs (navegação levels 7-9, progresso global)
13. ☐ Atualizar chaves de localStorage
14. ☐ Testar tudo no navegador (abrir com Live Server)

---

## ⚠️ NOTAS IMPORTANTES PARA A IMPLEMENTAÇÃO

1. **Não apagar o `index_old.html`.** Ele é backup e não afeta nada.
2. **O `script.js` é o crítico.** São ~1100 linhas de conteúdo (lessonsData) + ~270 linhas de quizzes/challenges + ~600 linhas de lógica. A lógica (últimas 600 linhas) tem poucas mudanças; o conteúdo precisa ser reescrito inteiro.
3. **Manter a estrutura de IDs das lições** (`0.1`, `0.2`, ..., `9.10`). Toda a lógica de progresso, XP e navegação depende dessa nomenclatura.
4. **O editor de código é um simulador.** Ele não executa C nem vai executar C#. Ele apenas parseia `Console.WriteLine("texto")` e exibe o texto como output. Manter simples.
5. **Tudo é client-side.** Não existe backend. Progresso é salvo em `localStorage`.

---

## 📏 MÉTRICAS DO PROJETO

| Métrica | Valor |
|---|---|
| Arquivos a modificar | 15 |
| Lições a reescrever | 100 |
| Perguntas de quiz | 50 |
| Desafios de código | 10 |
| Linhas estimadas de mudança | ~1800 |
| Complexidade | Alta (conteúdo) / Baixa (código) |
