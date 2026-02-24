$folder = Resolve-Path ".." # Root project folder

# ===================== LEVEL 0 =====================
$f = Join-Path $folder 'level-0.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>O Início</h1>', '<h1>Hello .NET</h1>')
$c = $c.Replace('<p class="level-desc">Prepare seu ambiente e escreva seu primeiro código.</p>', '<p class="level-desc">Instale o .NET SDK e escreva seu primeiro programa em C#.</p>')
$c = $c.Replace('class="lesson-title">O que é C?</span>', 'class="lesson-title">O que é C#?</span>')
$c = $c.Replace('class="lesson-title">Onde C é usado?</span>', 'class="lesson-title">Onde C# é usado?</span>')
$c = $c.Replace('class="lesson-title">Instalando o GCC</span>', 'class="lesson-title">Instalando o .NET SDK</span>')
$c = $c.Replace('class="lesson-title">Primeiro arquivo .c</span>', 'class="lesson-title">Primeiro projeto .NET</span>')
$c = $c.Replace('class="lesson-title">A função main()</span>', 'class="lesson-title">O método Main()</span>')
$c = $c.Replace('class="lesson-title">#include e bibliotecas</span>', 'class="lesson-title">using e namespaces</span>')
$c = $c.Replace('class="lesson-title">Hello World</span>', 'class="lesson-title">Hello World</span>')
$c = $c.Replace('class="lesson-title">Comentários</span>', 'class="lesson-title">Comentários</span>')
$c = $c.Replace('class="lesson-title">Erros vs Warnings</span>', 'class="lesson-title">Erros vs Warnings</span>')
$c = $c.Replace('class="lesson-title">Boas Práticas</span>', 'class="lesson-title">Boas Práticas em C#</span>')
$c = $c.Replace('Próximo: Variáveis', 'Próximo: Tipos e Variáveis')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-0.html"

# ===================== LEVEL 1 =====================
$f = Join-Path $folder 'level-1.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>Variáveis</h1>', '<h1>Tipos e Variáveis</h1>')
$c = $c.Replace('<p class="level-desc">Tipos de dados, constantes e operadores em C.</p>', '<p class="level-desc">Tipos de dados, var, conversões e operadores em C#.</p>')
# Generic fallback for level-desc if different text
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">Tipos de dados, var, conversões e operadores em C#.</p>'
$c = $c.Replace('class="lesson-title">O que é uma variável?</span>', 'class="lesson-title">O que é uma variável?</span>')
$c = $c.Replace('class="lesson-title">Tipos inteiros</span>', 'class="lesson-title">Tipos inteiros</span>')
$c = $c.Replace('class="lesson-title">Tipos decimais</span>', 'class="lesson-title">Tipos decimais</span>')
$c = $c.Replace('class="lesson-title">Char e String</span>', 'class="lesson-title">Char e string</span>')
$c = $c.Replace('class="lesson-title">Tipo bool</span>', 'class="lesson-title">Tipo bool</span>')
$c = $c.Replace('class="lesson-title">Operadores Aritméticos</span>', 'class="lesson-title">var e inferência de tipo</span>')
$c = $c.Replace('class="lesson-title">Operadores de Comparação</span>', 'class="lesson-title">Constantes e readonly</span>')
$c = $c.Replace('class="lesson-title">Operadores Lógicos</span>', 'class="lesson-title">Operadores aritméticos</span>')
$c = $c.Replace('class="lesson-title">Conversão de Tipos</span>', 'class="lesson-title">Conversão de tipos</span>')
$c = $c.Replace('class="lesson-title">Constantes e #define</span>', 'class="lesson-title">Interpolação de strings</span>')
$c = $c.Replace('Próximo: Entrada &amp; Saída', 'Próximo: Console I/O')
$c = $c.Replace('Próximo: Entrada & Saída', 'Próximo: Console I/O')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-1.html"

# ===================== LEVEL 2 =====================
$f = Join-Path $folder 'level-2.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>Entrada &amp; Saída</h1>', '<h1>Console I/O</h1>')
$c = $c.Replace('<h1>Entrada & Saída</h1>', '<h1>Console I/O</h1>')
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">Console.WriteLine, ReadLine, formatação e métodos de string.</p>'
$c = $c.Replace('class="lesson-title">printf()</span>', 'class="lesson-title">Console.WriteLine</span>')
$c = $c.Replace('class="lesson-title">Sequências de Escape</span>', 'class="lesson-title">Interpolação e formatação</span>')
$c = $c.Replace('class="lesson-title">scanf()</span>', 'class="lesson-title">Console.ReadLine</span>')
$c = $c.Replace('class="lesson-title">Lendo Strings</span>', 'class="lesson-title">Convertendo entrada</span>')
$c = $c.Replace('class="lesson-title">Formatação de Saída</span>', 'class="lesson-title">Sequências de escape</span>')
$c = $c.Replace('class="lesson-title">Trabalhando com Char</span>', 'class="lesson-title">String Methods</span>')
$c = $c.Replace('class="lesson-title">fprintf() e stderr</span>', 'class="lesson-title">Formatação numérica</span>')
$c = $c.Replace('class="lesson-title">getchar() e putchar()</span>', 'class="lesson-title">StringBuilder</span>')
$c = $c.Replace('class="lesson-title">Buffer de Entrada</span>', 'class="lesson-title">Cores no Console</span>')
$c = $c.Replace('class="lesson-title">🎯 Projeto: IMC</span>', 'class="lesson-title">🎯 Projeto: Calculadora</span>')
$c = $c.Replace('Próximo: Controle de Fluxo', 'Próximo: Controle de Fluxo')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-2.html"

# ===================== LEVEL 3 =====================
$f = Join-Path $folder 'level-3.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">if, else, switch com pattern matching, ternário e nullable.</p>'
$c = $c.Replace('class="lesson-title">Operadores de Comparação</span>', 'class="lesson-title">Operadores relacionais</span>')
$c = $c.Replace('class="lesson-title">Operadores Lógicos</span>', 'class="lesson-title">Operadores lógicos</span>')
$c = $c.Replace('class="lesson-title">if e else</span>', 'class="lesson-title">Estrutura if</span>')
$c = $c.Replace('class="lesson-title">else if</span>', 'class="lesson-title">if-else</span>')
$c = $c.Replace('class="lesson-title">switch-case</span>', 'class="lesson-title">else if encadeado</span>')
$c = $c.Replace('class="lesson-title">Operador Ternário</span>', 'class="lesson-title">Operador ternário</span>')
$c = $c.Replace('class="lesson-title">Expressões Lógicas</span>', 'class="lesson-title">switch clássico</span>')
$c = $c.Replace('class="lesson-title">Precedência de Operadores</span>', 'class="lesson-title">switch com pattern matching</span>')
$c = $c.Replace('class="lesson-title">goto (e por que evitar)</span>', 'class="lesson-title">Nullable e operador ??</span>')
$c = $c.Replace('class="lesson-title">🎯 Projeto: Calculadora</span>', 'class="lesson-title">🎯 Projeto: Jogo de Adivinhação</span>')
$c = $c.Replace('Próximo: Loops', 'Próximo: Loops & Arrays')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-3.html"

# ===================== LEVEL 4 =====================
$f = Join-Path $folder 'level-4.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>Loops</h1>', '<h1>Loops &amp; Arrays</h1>')
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">for, while, foreach, arrays e propriedades de coleções.</p>'
$c = $c.Replace('class="lesson-title">while</span>', 'class="lesson-title">while</span>')
$c = $c.Replace('class="lesson-title">do-while</span>', 'class="lesson-title">do-while</span>')
$c = $c.Replace('class="lesson-title">for</span>', 'class="lesson-title">for clássico</span>')
$c = $c.Replace('class="lesson-title">break e continue</span>', 'class="lesson-title">foreach</span>')
$c = $c.Replace('class="lesson-title">Arrays</span>', 'class="lesson-title">break e continue</span>')
$c = $c.Replace('class="lesson-title">Arrays Multidimensionais</span>', 'class="lesson-title">Arrays</span>')
$c = $c.Replace('class="lesson-title">Strings e Arrays de Char</span>', 'class="lesson-title">Array multidimensional</span>')
$c = $c.Replace('class="lesson-title">Funções de String</span>', 'class="lesson-title">Propriedades de Array</span>')
$c = $c.Replace('class="lesson-title">Manipulação de Strings</span>', 'class="lesson-title">Strings como arrays</span>')
$c = $c.Replace('class="lesson-title">🎯 Projeto: Tabuada</span>', 'class="lesson-title">🎯 Projeto: Tabuada Formatada</span>')
$c = $c.Replace('Próximo: Funções', 'Próximo: Métodos & Classes')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-4.html"

# ===================== LEVEL 5 =====================
$f = Join-Path $folder 'level-5.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>Funções</h1>', '<h1>Métodos &amp; Classes Intro</h1>')
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">Métodos, parâmetros, sobrecarga, recursão e introdução a classes.</p>'
$c = $c.Replace('class="lesson-title">Declaração de Funções</span>', 'class="lesson-title">O que são métodos?</span>')
$c = $c.Replace('class="lesson-title">Parâmetros e Argumentos</span>', 'class="lesson-title">Métodos void</span>')
$c = $c.Replace('class="lesson-title">Retorno de Valores</span>', 'class="lesson-title">Métodos com retorno</span>')
$c = $c.Replace('class="lesson-title">Escopo de Variáveis</span>', 'class="lesson-title">Parâmetros e ref/out</span>')
$c = $c.Replace('class="lesson-title">Variáveis Estáticas</span>', 'class="lesson-title">Parâmetros opcionais</span>')
$c = $c.Replace('class="lesson-title">Recursão</span>', 'class="lesson-title">Sobrecarga de métodos</span>')
$c = $c.Replace('class="lesson-title">Passagem por Referência</span>', 'class="lesson-title">Recursão</span>')
$c = $c.Replace('class="lesson-title">Ponteiros para Funções</span>', 'class="lesson-title">O que é uma Classe?</span>')
$c = $c.Replace('class="lesson-title">Funções Variádicas</span>', 'class="lesson-title">Atributos e Construtores</span>')
$c = $c.Replace('class="lesson-title">🎯 Projeto: Calculadora Modular</span>', 'class="lesson-title">🎯 Projeto: Biblioteca MathHelper</span>')
$c = $c.Replace('Próximo: Ponteiros', 'Próximo: POO — Objetos')
$c = $c.Replace('Próximo: Ponteiros &amp; Memória', 'Próximo: POO — Objetos')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-5.html"

# ===================== LEVEL 6 =====================
$f = Join-Path $folder 'level-6.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>Ponteiros &amp; Memória</h1>', '<h1>POO — O Poder dos Objetos</h1>')
$c = $c.Replace('<h1>Ponteiros & Memória</h1>', '<h1>POO — O Poder dos Objetos</h1>')
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">Classes, objetos, propriedades, encapsulamento e composição.</p>'
$c = $c.Replace('class="lesson-title">O que são Ponteiros?</span>', 'class="lesson-title">Classe vs Objeto</span>')
$c = $c.Replace('class="lesson-title">Endereços de Memória</span>', 'class="lesson-title">Construtores</span>')
$c = $c.Replace('class="lesson-title">Dereferenciação</span>', 'class="lesson-title">Propriedades (get/set)</span>')
$c = $c.Replace('class="lesson-title">Ponteiros e Arrays</span>', 'class="lesson-title">Encapsulamento</span>')
$c = $c.Replace('class="lesson-title">Aritmética de Ponteiros</span>', 'class="lesson-title">Métodos de instância</span>')
$c = $c.Replace('class="lesson-title">Alocação Dinâmica</span>', 'class="lesson-title">A palavra-chave this</span>')
$c = $c.Replace('class="lesson-title">malloc e free</span>', 'class="lesson-title">static</span>')
$c = $c.Replace('class="lesson-title">Ponteiros para Ponteiros</span>', 'class="lesson-title">Composição</span>')
$c = $c.Replace('class="lesson-title">Memory Leaks</span>', 'class="lesson-title">Sobrescrevendo ToString()</span>')
$c = $c.Replace('class="lesson-title">🏆 Projeto Boss: Alocador</span>', 'class="lesson-title">🏆 Projeto Boss: Sistema de Cadastro</span>')
$c = $c.Replace('Próximo: Structs', 'Próximo: Herança & Interfaces')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-6.html"

# ===================== LEVEL 7 =====================
$f = Join-Path $folder 'level-7.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>Structs</h1>', '<h1>Herança &amp; Interfaces</h1>')
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">Herança, polimorfismo, classes abstratas e interfaces em C#.</p>'
$c = $c.Replace('class="lesson-title">O que são Structs?</span>', 'class="lesson-title">O que é Herança?</span>')
$c = $c.Replace('class="lesson-title">Definindo uma Struct</span>', 'class="lesson-title">Classe base e derivada</span>')
$c = $c.Replace('class="lesson-title">Acessando Campos</span>', 'class="lesson-title">override e virtual</span>')
$c = $c.Replace('class="lesson-title">Structs e Ponteiros</span>', 'class="lesson-title">Classe abstrata</span>')
$c = $c.Replace('class="lesson-title">typedef</span>', 'class="lesson-title">Polimorfismo</span>')
$c = $c.Replace('class="lesson-title">Structs Aninhadas</span>', 'class="lesson-title">O que é Interface?</span>')
$c = $c.Replace('class="lesson-title">Unions</span>', 'class="lesson-title">Implementando Interface</span>')
$c = $c.Replace('class="lesson-title">Enums</span>', 'class="lesson-title">Múltiplas interfaces</span>')
$c = $c.Replace('class="lesson-title">Structs vs Arrays</span>', 'class="lesson-title">is e as (type checking)</span>')
$c = $c.Replace('class="lesson-title">🎯 Projeto: Cadastro</span>', 'class="lesson-title">🎯 Projeto: Zoológico</span>')
$c = $c.Replace('Próximo: Arquivos', 'Próximo: Coleções & LINQ')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-7.html"

# ===================== LEVEL 8 =====================
$f = Join-Path $folder 'level-8.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>Arquivos</h1>', '<h1>Coleções &amp; LINQ</h1>')
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">List, Dictionary, LINQ, lambdas e generics em C#.</p>'
$c = $c.Replace('class="lesson-title">Introdução a Arquivos</span>', 'class="lesson-title">List&lt;T&gt;</span>')
$c = $c.Replace('class="lesson-title">fopen() e fclose()</span>', 'class="lesson-title">Dictionary&lt;K,V&gt;</span>')
$c = $c.Replace('class="lesson-title">Escrevendo em Arquivos</span>', 'class="lesson-title">Stack e Queue</span>')
$c = $c.Replace('class="lesson-title">Lendo de Arquivos</span>', 'class="lesson-title">Intro ao LINQ</span>')
$c = $c.Replace('class="lesson-title">Modos de Abertura</span>', 'class="lesson-title">LINQ: Filtrar e Ordenar</span>')
$c = $c.Replace('class="lesson-title">Arquivos Binários</span>', 'class="lesson-title">LINQ: Sintaxe de query</span>')
$c = $c.Replace('class="lesson-title">fseek() e ftell()</span>', 'class="lesson-title">Lambda expressions</span>')
$c = $c.Replace('class="lesson-title">fprintf() e fscanf()</span>', 'class="lesson-title">Delegates e Action/Func</span>')
$c = $c.Replace('class="lesson-title">Tratamento de Erros</span>', 'class="lesson-title">Generics básico</span>')
$c = $c.Replace('class="lesson-title">🎯 Projeto: Logger</span>', 'class="lesson-title">🎯 Projeto: Gerenciador de Tarefas</span>')
$c = $c.Replace('Próximo: Linked Lists', 'Próximo: Async & Projeto Final')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-8.html"

# ===================== LEVEL 9 =====================
$f = Join-Path $folder 'level-9.html'
$c = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
$c = $c.Replace('<h1>Linked Lists</h1>', '<h1>Async, Arquivos &amp; Projeto Final</h1>')
$c = $c -replace '<p class="level-desc">.*?</p>', '<p class="level-desc">Exceções, async/await, File I/O, JSON e projeto integrador.</p>'
$c = $c.Replace('class="lesson-title">O que são Linked Lists?</span>', 'class="lesson-title">Exceções e try-catch</span>')
$c = $c.Replace('class="lesson-title">Struct do Nó</span>', 'class="lesson-title">throw e exceções custom</span>')
$c = $c.Replace('class="lesson-title">Inserindo no Início</span>', 'class="lesson-title">File.ReadAllText e WriteAllText</span>')
$c = $c.Replace('class="lesson-title">Inserindo no Final</span>', 'class="lesson-title">StreamReader e StreamWriter</span>')
$c = $c.Replace('class="lesson-title">Percorrendo a Lista</span>', 'class="lesson-title">Serialização JSON</span>')
$c = $c.Replace('class="lesson-title">Buscando Elementos</span>', 'class="lesson-title">O que é async/await?</span>')
$c = $c.Replace('class="lesson-title">Removendo Elementos</span>', 'class="lesson-title">Métodos async</span>')
$c = $c.Replace('class="lesson-title">Lista Duplamente Encadeada</span>', 'class="lesson-title">HttpClient básico</span>')
$c = $c.Replace('class="lesson-title">Liberando Memória</span>', 'class="lesson-title">Enums e Records</span>')
$c = $c.Replace('class="lesson-title">🏆 Projeto Master: Gerenciador</span>', 'class="lesson-title">🏆 Projeto Final: App Completo</span>')
[System.IO.File]::WriteAllText($f, $c, [System.Text.Encoding]::UTF8)
Write-Host "Updated: level-9.html"

Write-Host "`nAll level HTML files updated!"
