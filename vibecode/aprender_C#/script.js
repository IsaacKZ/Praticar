// ===================================================
// VIBECODE_C# - LEARN C# JAVASCRIPT
// Full lesson content and functionality
// ===================================================

// ==================== LESSON DATA ====================
const lessonsData = {
    // ========== LEVEL 0: HELLO .NET ==========
    '0.1': {
        title: "O que é C#?",
        body: `<p>C# (pronuncia-se <strong>"C Sharp"</strong>) é uma linguagem criada pela Microsoft em <strong>2000</strong>, projetada por Anders Hejlsberg. É uma linguagem moderna, orientada a objetos e fortemente tipada.</p>
        <p>Por que aprender C#?</p>
        <ul>
            <li><strong>Versátil:</strong> Web, desktop, mobile, games (Unity), cloud (Azure).</li>
            <li><strong>Produtiva:</strong> Sintaxe limpa, LINQ, async/await e muitos recursos modernos.</li>
            <li><strong>Mercado:</strong> Uma das linguagens mais demandadas no mercado de trabalho.</li>
            <li><strong>Ecossistema:</strong> .NET é uma plataforma madura, gratuita e open-source.</li>
        </ul>`,
        code: `// C# é usada para criar:
// - Jogos com Unity (80% dos jogos mobile!)
// - APIs web com ASP.NET Core
// - Apps mobile com MAUI
// - Sites interativos com Blazor
// - Automações com Azure Functions`,
        output: ""
    },
    '0.2': {
        title: "Onde C# é usado?",
        body: `<p>C# está em <strong>todo lugar</strong> — e o ecossistema .NET só cresce:</p>
        <ul>
            <li><strong>Games:</strong> Unity é o motor de jogos mais popular do mundo. C# é sua linguagem nativa.</li>
            <li><strong>Web Backend:</strong> ASP.NET Core é um dos frameworks web mais rápidos do planeta.</li>
            <li><strong>Desktop:</strong> WPF e WinForms para apps Windows. MAUI para apps cross-platform.</li>
            <li><strong>Cloud:</strong> Azure Functions, serviços serverless e microsserviços com C#.</li>
            <li><strong>IA/ML:</strong> ML.NET permite machine learning diretamente em C#.</li>
        </ul>`,
        code: `// Exemplos de softwares famosos em C#:
//
// Jogo:    Cuphead, Hollow Knight, Among Us
// Editor:  Visual Studio, Rider
// App:     Stack Overflow (backend C#)
// Cloud:   Microsoft Azure (parcialmente C#)`,
        output: ""
    },
    '0.3': {
        title: "Instalando o .NET SDK",
        body: `<p>Para programar em C#, você precisa do <strong>.NET SDK</strong> (Software Development Kit).</p>
        <p><strong>Passo a passo:</strong></p>
        <ol>
            <li>Acesse <code>dotnet.microsoft.com/download</code></li>
            <li>Baixe o <strong>.NET 9 SDK</strong> (versão mais recente LTS)</li>
            <li>Instale seguindo o assistente</li>
            <li>Abra o terminal e verifique: <code>dotnet --version</code></li>
        </ol>
        <p>O SDK inclui o compilador, o runtime e a CLI (interface de linha de comando) do .NET.</p>`,
        code: `// No terminal, após instalar:
// $ dotnet --version
// 9.0.100

// Para criar um projeto:
// $ dotnet new console -n MeuApp

// Para rodar:
// $ cd MeuApp
// $ dotnet run`,
        output: "9.0.100"
    },
    '0.4': {
        title: "Primeiro projeto .NET",
        body: `<p>O comando <code>dotnet new console</code> cria um projeto de console C#.</p>
        <p><strong>Estrutura do projeto criado:</strong></p>
        <ul>
            <li><code>Program.cs</code> — seu código principal</li>
            <li><code>MeuApp.csproj</code> — configurações do projeto (como package.json)</li>
            <li><code>bin/</code> — arquivos compilados (gerado automaticamente)</li>
            <li><code>obj/</code> — arquivos temporários (gerado automaticamente)</li>
        </ul>
        <p>Em C# moderno (.NET 6+), você pode usar <strong>top-level statements</strong> — sem necessidade de classe ou método Main!</p>`,
        code: `// Program.cs com top-level statements (moderno):
Console.WriteLine("Meu primeiro programa!");

// OU com a sintaxe clássica:
// class Program {
//     static void Main(string[] args) {
//         Console.WriteLine("Olá!");
//     }
// }`,
        output: "Meu primeiro programa!"
    },
    '0.5': {
        title: "O método Main()",
        body: `<p>O <code>Main()</code> é o ponto de entrada de todo programa C#. É onde a execução começa.</p>
        <p>Em versões modernas do .NET (6+), você pode escrever código diretamente no arquivo sem declarar <code>Main</code> explicitamente — isso se chama <strong>top-level statements</strong>.</p>
        <p>Os dois estilos são válidos:</p>`,
        code: `// Estilo moderno (top-level) - .NET 6+
Console.WriteLine("Olá do estilo moderno!");

// ---

// Estilo clássico
class Program {
    static void Main(string[] args) {
        Console.WriteLine("Olá do estilo clássico!");
        Console.WriteLine("args.Length = " + args.Length);
    }
}`,
        output: "Olá do estilo moderno!"
    },
    '0.6': {
        title: "using e namespaces",
        body: `<p>Um <strong>namespace</strong> é um contêiner que organiza classes e tipos relacionados.</p>
        <p>A diretiva <code>using</code> importa um namespace, tornando suas classes disponíveis sem precisar escrever o nome completo.</p>`,
        code: `// Sem using: precisaria escrever o nome completo
System.Console.WriteLine("Verboso!");

// Com using (padrão):
using System;
Console.WriteLine("Muito melhor!");

// Namespace próprio:
namespace MeuProjeto {
    class MinhaClasse {
        // código aqui
    }
}`,
        output: "Muito melhor!"
    },
    '0.7': {
        title: "Hello World",
        body: `<p>O clássico Hello World em C# é simples e elegante:</p>
        <p><code>Console</code> é uma classe do namespace <code>System</code> que representa o terminal.</p>
        <ul>
            <li><code>Console.WriteLine()</code> — escreve e pula linha</li>
            <li><code>Console.Write()</code> — escreve sem pular linha</li>
        </ul>`,
        code: `// Hello World em C#
Console.WriteLine("Hello, World!");
Console.WriteLine("Bem-vindo ao C#!");
Console.Write("Sem ");
Console.Write("pular linha!");`,
        output: "Hello, World!\nBem-vindo ao C#!\nSem pular linha!"
    },
    '0.8': {
        title: "Comentários",
        body: `<p>Comentários são trechos de código ignorados pelo compilador. Usados para documentar e explicar o código.</p>
        <p>C# tem três tipos:</p>
        <ul>
            <li><code>//</code> — comentário de linha (igual ao C)</li>
            <li><code>/* */</code> — comentário de bloco</li>
            <li><code>///</code> — comentário XML (documentação oficial, aparece no IntelliSense!)</li>
        </ul>`,
        code: `// Comentário de linha

/* Comentário
   de múltiplas linhas */

/// <summary>
/// Este é um comentário XML.
/// Aparece como documentação no editor!
/// </summary>
void MinhaFuncao() { }

Console.WriteLine("Comentários não afetam o código!");`,
        output: "Comentários não afetam o código!"
    },
    '0.9': {
        title: "Erros vs Warnings",
        body: `<p>O compilador C# é rigoroso e muito útil. Ele detecta problemas antes de rodar o programa.</p>
        <ul>
            <li><strong>Erro (Error):</strong> Impede a compilação. Deve ser corrigido. Ex: variável não declarada.</li>
            <li><strong>Warning:</strong> O código compila, mas há algo suspeito. Ex: variável declarada mas nunca usada.</li>
            <li><strong>Analyzer:</strong> Sugestões de boas práticas do Roslyn (compilador C#).</li>
        </ul>`,
        code: `// ERRO: variável não declarada
// Console.WriteLine(x); // CS0103: 'x' não existe

// WARNING: variável não usada
int y = 5; // CS0219: valor atribuído mas nunca lido

// CORRETO:
int z = 10;
Console.WriteLine(z);`,
        output: "10"
    },
    '0.10': {
        title: "Boas Práticas em C#",
        body: `<p>C# tem convenções de nomenclatura bem definidas:</p>
        <ul>
            <li><strong>PascalCase:</strong> Classes, métodos, propriedades → <code>MinhaClasse</code>, <code>CalcularSoma()</code></li>
            <li><strong>camelCase:</strong> Variáveis locais, parâmetros → <code>minhaVariavel</code>, <code>nomeUsuario</code></li>
            <li><strong>UPPER_CASE:</strong> Constantes → <code>MAX_SIZE</code> (menos comum, prefira PascalCase)</li>
            <li><strong>_camelCase:</strong> Campos privados → <code>_nomeInterno</code></li>
        </ul>`,
        code: `// Boas práticas C#
const int MaxTentativas = 3;    // PascalCase para const

string nomeUsuario = "Ana";     // camelCase
int idadeUsuario = 25;

// Interpolação de string (C# moderno!)
Console.WriteLine($"Olá, {nomeUsuario}! Você tem {idadeUsuario} anos.");`,
        output: "Olá, Ana! Você tem 25 anos."
    },

    // ========== LEVEL 1: TIPOS E VARIÁVEIS ==========
    '1.1': {
        title: "O que é uma variável?",
        body: `<p>Uma variável é um <strong>espaço na memória</strong> com um nome para guardar dados temporariamente.</p>
        <p>Em C#, toda variável tem um <strong>tipo</strong> definido — o compilador garante que você não misture tipos por acidente.</p>
        <p>Sintaxe: <code>tipo nomeDaVariavel = valor;</code></p>`,
        code: `// Declarando variáveis em C#
int quantidade = 10;
string nome = "Maria";
double preco = 9.99;
bool ativo = true;

Console.WriteLine(quantidade);
Console.WriteLine(nome);
Console.WriteLine(preco);
Console.WriteLine(ativo);`,
        output: "10\nMaria\n9,99\nTrue"
    },
    '1.2': {
        title: "Tipos inteiros",
        body: `<p>C# tem vários tipos para números inteiros, com tamanhos e limites diferentes:</p>
        <ul>
            <li><code>byte</code> — 0 a 255 (1 byte)</li>
            <li><code>short</code> — -32.768 a 32.767 (2 bytes)</li>
            <li><code>int</code> — -2 bilhões a 2 bilhões (4 bytes) ← mais usado</li>
            <li><code>long</code> — números gigantescos (8 bytes)</li>
        </ul>`,
        code: `byte b = 255;
short s = 32000;
int i = 2_000_000;    // _ para legibilidade!
long l = 9_000_000_000L;

Console.WriteLine($"byte: {b}");
Console.WriteLine($"short: {s}");
Console.WriteLine($"int: {i}");
Console.WriteLine($"long: {l}");`,
        output: "byte: 255\nshort: 32000\nint: 2000000\nlong: 9000000000"
    },
    '1.3': {
        title: "Tipos decimais",
        body: `<p>Para números com casas decimais, C# oferece três tipos:</p>
        <ul>
            <li><code>float</code> — precisão simples (~7 dígitos). Use sufixo <code>f</code></li>
            <li><code>double</code> — precisão dupla (~15 dígitos). Padrão para decimais.</li>
            <li><code>decimal</code> — alta precisão (28 dígitos). Use para <strong>dinheiro!</strong> Sufixo <code>m</code></li>
        </ul>`,
        code: `float f = 3.14f;
double d = 3.14159265358979;
decimal preco = 99.99m;  // Para dinheiro!

Console.WriteLine($"float:   {f}");
Console.WriteLine($"double:  {d}");
Console.WriteLine($"decimal: {preco:C2}");  // Formato moeda`,
        output: "float:   3.14\ndouble:  3.14159265358979\ndecimal: R$ 99,99"
    },
    '1.4': {
        title: "Char e string",
        body: `<p>Em C#, <code>string</code> é um tipo de primeira classe — muito mais poderoso que em C!</p>
        <ul>
            <li><code>char</code> — um único caractere Unicode. Use aspas simples: <code>'A'</code></li>
            <li><code>string</code> — sequência de chars. Use aspas duplas: <code>"Olá"</code>. Tem dezenas de métodos!</li>
        </ul>
        <p>Strings em C# são <strong>imutáveis</strong> — cada operação cria uma nova string.</p>`,
        code: `char letra = 'A';
string nome = "C Sharp";

Console.WriteLine(letra);
Console.WriteLine(nome.Length);        // Comprimento
Console.WriteLine(nome.ToUpper());     // Maiúsculas
Console.WriteLine(nome.Contains("#")); // Contém?
Console.WriteLine(nome[0]);            // Primeiro char`,
        output: "A\n7\nC SHARP\nTrue\nC"
    },
    '1.5': {
        title: "Tipo bool",
        body: `<p>O tipo <code>bool</code> armazena apenas dois valores: <code>true</code> ou <code>false</code>.</p>
        <p>É fundamental para controle de fluxo (condições, loops).</p>
        <p>Diferente de C, em C# <strong>não existe conversão implícita</strong> de int para bool! <code>if (1)</code> dá erro.</p>`,
        code: `bool aprovado = true;
bool reprovado = false;

Console.WriteLine(aprovado);
Console.WriteLine(!aprovado);          // Negação
Console.WriteLine(aprovado && true);   // E lógico
Console.WriteLine(reprovado || true);  // OU lógico

int nota = 8;
bool passou = nota >= 7;
Console.WriteLine($"Passou: {passou}");`,
        output: "True\nFalse\nTrue\nTrue\nPassou: True"
    },
    '1.6': {
        title: "var e inferência de tipo",
        body: `<p>A palavra-chave <code>var</code> permite que o compilador <strong>infira o tipo</strong> automaticamente com base no valor atribuído.</p>
        <p>O tipo ainda é estático — o compilador sabe qual é. Apenas você não precisa escrever.</p>
        <p>Use <code>var</code> quando o tipo é óbvio pelo valor. Evite quando deixa o código confuso.</p>`,
        code: `var idade = 25;           // int
var nome = "Maria";       // string
var pi = 3.14;            // double
var ativo = true;         // bool

Console.WriteLine(idade.GetType().Name);
Console.WriteLine(nome.GetType().Name);
Console.WriteLine(pi.GetType().Name);

// Útil com tipos longos:
var lista = new System.Collections.Generic.List<string>();`,
        output: "Int32\nString\nDouble"
    },
    '1.7': {
        title: "Constantes e readonly",
        body: `<p>Para valores que nunca mudam, use <code>const</code> ou <code>readonly</code>.</p>
        <ul>
            <li><code>const</code> — valor definido em <strong>tempo de compilação</strong>. Não pode ser mudado jamais.</li>
            <li><code>readonly</code> — valor definido em <strong>tempo de execução</strong>, mas só pode ser atribuído uma vez (no construtor).</li>
        </ul>`,
        code: `const double PI = 3.14159265358979;
const int MAX_TENTATIVAS = 3;

Console.WriteLine($"PI = {PI}");
Console.WriteLine($"Máx tentativas: {MAX_TENTATIVAS}");

// ERRO se tentar mudar:
// PI = 3; // CS0131: lado esquerdo de atribuição inválido`,
        output: "PI = 3.14159265358979\nMáx tentativas: 3"
    },
    '1.8': {
        title: "Operadores aritméticos",
        body: `<p>Os operadores aritméticos em C# são os mesmos do C:</p>
        <ul>
            <li><code>+</code> adição, <code>-</code> subtração, <code>*</code> multiplicação</li>
            <li><code>/</code> divisão (inteira se ambos forem int!)</li>
            <li><code>%</code> módulo (resto da divisão)</li>
            <li><code>++</code> incremento, <code>--</code> decremento</li>
        </ul>`,
        code: `int a = 10, b = 3;

Console.WriteLine($"a + b = {a + b}");
Console.WriteLine($"a - b = {a - b}");
Console.WriteLine($"a * b = {a * b}");
Console.WriteLine($"a / b = {a / b}");  // Divisão inteira!
Console.WriteLine($"a % b = {a % b}");

double x = 10.0 / 3;  // Agora é decimal
Console.WriteLine($"10.0 / 3 = {x:F2}");`,
        output: "a + b = 13\na - b = 7\na * b = 30\na / b = 3\na % b = 1\n10.0 / 3 = 3,33"
    },
    '1.9': {
        title: "Conversão de tipos",
        body: `<p>Em C#, conversões de tipo podem ser <strong>implícitas</strong> (automáticas, sem perda) ou <strong>explícitas</strong> (cast, com possível perda).</p>
        <ul>
            <li><code>(tipo)valor</code> — cast explícito</li>
            <li><code>int.Parse("10")</code> — converte string para int</li>
            <li><code>int.TryParse()</code> — converte sem exceção (mais seguro!)</li>
            <li><code>Convert.ToInt32()</code> — conversão genérica</li>
        </ul>`,
        code: `// Implícita (sem perda de dados)
int i = 100;
double d = i;      // int -> double ok!

// Explícita (possível perda)
double pi = 3.99;
int truncado = (int)pi;  // perde .99!
Console.WriteLine(truncado);  // 3

// De string para número
string texto = "42";
int numero = int.Parse(texto);
Console.WriteLine(numero + 8);  // 50`,
        output: "3\n50"
    },
    '1.10': {
        title: "Interpolação de strings",
        body: `<p>A interpolação de strings com <code>$""</code> é um dos recursos mais amados do C#!</p>
        <p>Você pode usar expressões C# diretamente dentro da string usando <code>{}</code>.</p>
        <p>Também permite formatação inline: <code>{valor:formato}</code></p>`,
        code: `string nome = "Ana";
int idade = 25;
double salario = 5000.50;

// Interpolação básica
Console.WriteLine($"Nome: {nome}, Idade: {idade}");

// Com expressões
Console.WriteLine($"Ano de nascimento: {2024 - idade}");

// Com formatação
Console.WriteLine($"Salário: {salario:C2}");
Console.WriteLine($"Altura: {1.75:F1}m");

// Verbatim + interpolação
Console.WriteLine($@"Pasta: C:\Users\{nome}");`,
        output: "Nome: Ana, Idade: 25\nAno de nascimento: 1999\nSalário: R$ 5.000,50\nAltura: 1,8m\nPasta: C:\\Users\\Ana"
    },

    // ========== LEVEL 2: CONSOLE I/O ==========
    '2.1': {
        title: "Console.WriteLine",
        body: `<p>A classe <code>Console</code> é a porta de entrada para interação com o terminal em C#.</p>
        <ul>
            <li><code>Console.WriteLine()</code> — escreve e adiciona nova linha no final</li>
            <li><code>Console.Write()</code> — escreve sem nova linha</li>
            <li><code>Console.WriteLine()</code> sem argumento — apenas pula uma linha</li>
        </ul>`,
        code: `Console.WriteLine("Linha 1");
Console.WriteLine("Linha 2");
Console.Write("Sem ");
Console.Write("quebra ");
Console.WriteLine("de linha");
Console.WriteLine();  // Linha em branco
Console.WriteLine("Após linha em branco");`,
        output: "Linha 1\nLinha 2\nSem quebra de linha\n\nApós linha em branco"
    },
    '2.2': {
        title: "Interpolação e formatação",
        body: `<p>C# oferece várias formas de formatar saída:</p>
        <ul>
            <li><strong>Interpolação:</strong> <code>$"Olá, {nome}!"</code></li>
            <li><strong>Composite formatting:</strong> <code>string.Format("{0}, {1}", a, b)</code></li>
            <li><strong>Especificadores:</strong> <code>:C</code> moeda, <code>:N2</code> número, <code>:P</code> percentual</li>
        </ul>`,
        code: `double valor = 1234.567;
double pct = 0.856;

Console.WriteLine($"{valor:C2}");    // Moeda
Console.WriteLine($"{valor:N2}");    // Número com sep.
Console.WriteLine($"{valor:F2}");    // Fixo 2 casas
Console.WriteLine($"{pct:P1}");      // Percentual
Console.WriteLine($"{valor:E2}");    // Científica`,
        output: "R$ 1.234,57\n1.234,57\n1234,57\n85,6%\n1,23E+003"
    },
    '2.3': {
        title: "Console.ReadLine",
        body: `<p><code>Console.ReadLine()</code> lê uma linha digitada pelo usuário e retorna uma <code>string</code>.</p>
        <p><strong>IMPORTANTE:</strong> Sempre retorna <code>string</code>. Para usar como número, é preciso converter!</p>`,
        code: `Console.Write("Digite seu nome: ");
string nome = Console.ReadLine();  // Lê como string
Console.WriteLine($"Olá, {nome}!");

Console.Write("Digite sua idade: ");
string entrada = Console.ReadLine();
int idade = int.Parse(entrada);    // Converte!
Console.WriteLine($"Em 10 anos você terá {idade + 10}.");`,
        output: "Digite seu nome: [aguarda entrada]\nOlá, [nome]!\nDigite sua idade: [aguarda entrada]\nEm 10 anos você terá [idade+10]."
    },
    '2.4': {
        title: "Convertendo entrada",
        body: `<p>Como <code>ReadLine()</code> sempre retorna string, precisamos converter. Há duas formas principais:</p>
        <ul>
            <li><code>int.Parse(str)</code> — converte, mas lança exceção se inválido</li>
            <li><code>int.TryParse(str, out i)</code> — tenta converter, retorna bool. <strong>Mais seguro!</strong></li>
        </ul>`,
        code: `// Método seguro com TryParse
Console.Write("Digite um número: ");
string entrada = Console.ReadLine() ?? "0";

if (int.TryParse(entrada, out int numero)) {
    Console.WriteLine($"Número válido: {numero}");
    Console.WriteLine($"Dobro: {numero * 2}");
} else {
    Console.WriteLine("Isso não é um número!");
}`,
        output: "Número válido: 42\nDobro: 84"
    },
    '2.5': {
        title: "Sequências de escape",
        body: `<p>Sequências de escape permitem inserir caracteres especiais em strings:</p>
        <ul>
            <li><code>\\n</code> — nova linha</li>
            <li><code>\\t</code> — tabulação</li>
            <li><code>\\\\</code> — barra invertida</li>
            <li><code>\\"</code> — aspas duplas</li>
        </ul>
        <p>Use <code>@"..."</code> (string verbatim) para escrever caminhos sem escapes!</p>`,
        code: `Console.WriteLine("Linha 1\nLinha 2");
Console.WriteLine("Col1\tCol2\tCol3");
Console.WriteLine("Ela disse: \"Olá!\"");

// String verbatim - sem escapes
string caminho = @"C:\Users\Ana\Desktop\arquivo.txt";
Console.WriteLine(caminho);`,
        output: "Linha 1\nLinha 2\nCol1\tCol2\tCol3\nEla disse: \"Olá!\"\nC:\\Users\\Ana\\Desktop\\arquivo.txt"
    },
    '2.6': {
        title: "String Methods",
        body: `<p>O tipo <code>string</code> em C# tem dezenas de métodos úteis:</p>`,
        code: `string s = "  Hello, C# World!  ";

Console.WriteLine(s.Trim());           // Remove espaços
Console.WriteLine(s.ToUpper());        // Maiúsculas
Console.WriteLine(s.ToLower());        // Minúsculas
Console.WriteLine(s.Contains("C#"));  // Contém?
Console.WriteLine(s.Replace("C#", ".NET")); // Substituir
Console.WriteLine(s.Trim().StartsWith("He")); // Começa com?
Console.WriteLine(s.Trim().Length);   // Comprimento`,
        output: "Hello, C# World!\n  HELLO, C# WORLD!  \n  hello, c# world!  \nTrue\n  Hello, .NET World!  \nTrue\n17"
    },
    '2.7': {
        title: "Formatação numérica",
        body: `<p>C# tem um sistema poderoso de <strong>format strings</strong> para números:</p>
        <ul>
            <li><code>C</code> ou <code>C2</code> — moeda (<strong>Currency</strong>)</li>
            <li><code>N2</code> — número com separadores (<strong>Number</strong>)</li>
            <li><code>F2</code> — ponto fixo (<strong>Fixed</strong>)</li>
            <li><code>P1</code> — percentual (<strong>Percent</strong>)</li>
            <li><code>D5</code> — inteiro com zeros à esquerda</li>
        </ul>`,
        code: `int codigo = 42;
double preco = 1999.9;
double taxa = 0.0795;

Console.WriteLine($"Código: {codigo:D6}");   // 000042
Console.WriteLine($"Preço: {preco:C2}");    // R$ 1.999,90
Console.WriteLine($"Taxa: {taxa:P2}");      // 7,95%
Console.WriteLine($"Valor: {preco:N0}");    // 2.000`,
        output: "Código: 000042\nPreço: R$ 1.999,90\nTaxa: 7,95%\nValor: 2.000"
    },
    '2.8': {
        title: "StringBuilder",
        body: `<p>Strings em C# são <strong>imutáveis</strong>. Ao concatenar strings em loop, você cria muitos objetos desnecessários.</p>
        <p><code>StringBuilder</code> resolve isso: ele mutável e eficiente para construir strings grandes.</p>`,
        code: `using System.Text;

// Ineficiente para muitas concatenações:
// string s = "";
// for (int i = 0; i < 1000; i++) s += i; // cria 1000 strings!

// Eficiente:
var sb = new StringBuilder();
sb.Append("C#");
sb.Append(" é ");
sb.AppendLine("incrível!");
sb.Append($"Versão: {9}");

Console.WriteLine(sb.ToString());`,
        output: "C# é incrível!\nVersão: 9"
    },
    '2.9': {
        title: "Cores no Console",
        body: `<p>Você pode colorir a saída do terminal usando <code>Console.ForegroundColor</code> e <code>Console.BackgroundColor</code>.</p>
        <p>Use <code>Console.ResetColor()</code> para voltar às cores padrão!</p>`,
        code: `Console.ForegroundColor = ConsoleColor.Cyan;
Console.WriteLine("Texto em ciano!");

Console.ForegroundColor = ConsoleColor.Yellow;
Console.WriteLine("Texto em amarelo!");

Console.BackgroundColor = ConsoleColor.DarkBlue;
Console.ForegroundColor = ConsoleColor.White;
Console.WriteLine("Fundo azul, texto branco");

Console.ResetColor();
Console.WriteLine("Cores restauradas.");`,
        output: "Texto em ciano!\nTexto em amarelo!\nFundo azul, texto branco\nCores restauradas."
    },
    '2.10': {
        title: "🎯 Projeto: Calculadora",
        body: `<p>Construa uma calculadora de console com menu interativo!</p>
        <p><strong>O projeto usa:</strong></p>
        <ul>
            <li>Console.WriteLine / ReadLine para I/O</li>
            <li>int.TryParse para leitura segura</li>
            <li>Interpolação de string para saída formatada</li>
            <li>switch para o menu</li>
        </ul>`,
        code: `Console.WriteLine("=== CALCULADORA C# ===");
Console.Write("Primeiro número: ");
double a = double.Parse(Console.ReadLine());
Console.Write("Segundo número: ");
double b = double.Parse(Console.ReadLine());
Console.Write("Operação (+, -, *, /): ");
char op = Console.ReadLine()[0];

double resultado = op switch {
    '+' => a + b,
    '-' => a - b,
    '*' => a * b,
    '/' => b != 0 ? a / b : double.NaN,
    _ => double.NaN
};

Console.WriteLine($"Resultado: {resultado:N2}");`,
        output: "=== CALCULADORA C# ===\nResultado: 15,00"
    },

    // ========== LEVEL 3: CONTROLE DE FLUXO ==========
    '3.1': {
        title: "Operadores relacionais",
        body: `<p>Operadores relacionais comparam dois valores e retornam <code>bool</code>:</p>
        <ul>
            <li><code>==</code> igual a</li>
            <li><code>!=</code> diferente de</li>
            <li><code>&gt;</code> maior que, <code>&lt;</code> menor que</li>
            <li><code>&gt;=</code> maior ou igual, <code>&lt;=</code> menor ou igual</li>
        </ul>`,
        code: `int a = 10, b = 20;

Console.WriteLine(a == b);   // False
Console.WriteLine(a != b);   // True
Console.WriteLine(a < b);    // True
Console.WriteLine(a >= 10);  // True

// Com strings (== compara conteúdo em C#!)
string s1 = "olá";
string s2 = "olá";
Console.WriteLine(s1 == s2); // True (diferente do C!)`,
        output: "False\nTrue\nTrue\nTrue\nTrue"
    },
    '3.2': {
        title: "Operadores lógicos",
        body: `<p>Combinam condições booleanas:</p>
        <ul>
            <li><code>&&</code> — E lógico (ambos verdadeiros)</li>
            <li><code>||</code> — OU lógico (pelo menos um verdadeiro)</li>
            <li><code>!</code> — NÃO lógico (inverte)</li>
        </ul>
        <p>C# usa <strong>short-circuit evaluation</strong>: se o primeiro operando do <code>&&</code> é false, o segundo nem é avaliado.</p>`,
        code: `bool chuva = true;
bool guarda_chuva = false;

Console.WriteLine(chuva && guarda_chuva);  // False
Console.WriteLine(chuva || guarda_chuva);  // True
Console.WriteLine(!chuva);                 // False

int nota = 75;
bool aprovado = nota >= 60 && nota <= 100;
Console.WriteLine($"Aprovado: {aprovado}");`,
        output: "False\nTrue\nFalse\nAprovado: True"
    },
    '3.3': {
        title: "Estrutura if",
        body: `<p>O <code>if</code> executa um bloco de código apenas se a condição for <code>true</code>.</p>
        <p>Em C#, a condição <strong>deve ser booleana</strong> — <code>if (1)</code> é erro de compilação!</p>`,
        code: `int temperatura = 35;

if (temperatura > 30) {
    Console.WriteLine("Está quente!");
    Console.WriteLine("Beba água.");
}

// if em uma linha (sem chaves, apenas 1 comando)
if (temperatura > 40)
    Console.WriteLine("Alerta de calor extremo!");

Console.WriteLine("Programa continua...");`,
        output: "Está quente!\nBeba água.\nPrograma continua..."
    },
    '3.4': {
        title: "if-else",
        body: `<p>O bloco <code>else</code> executa quando a condição do <code>if</code> é <code>false</code>.</p>`,
        code: `int hora = 14;

if (hora < 12) {
    Console.WriteLine("Bom dia!");
} else {
    Console.WriteLine("Boa tarde ou noite!");
}

bool logado = false;
if (logado) {
    Console.WriteLine("Bem-vindo de volta!");
} else {
    Console.WriteLine("Por favor, faça login.");
}`,
        output: "Boa tarde ou noite!\nPor favor, faça login."
    },
    '3.5': {
        title: "else if encadeado",
        body: `<p>Use <code>else if</code> para verificar múltiplas condições em sequência.</p>
        <p>Apenas o primeiro bloco cuja condição for verdadeira será executado.</p>`,
        code: `int nota = 75;

if (nota >= 90) {
    Console.WriteLine("A — Excelente!");
} else if (nota >= 80) {
    Console.WriteLine("B — Bom!");
} else if (nota >= 70) {
    Console.WriteLine("C — Regular");
} else if (nota >= 60) {
    Console.WriteLine("D — Mínimo");
} else {
    Console.WriteLine("F — Reprovado");
}`,
        output: "C — Regular"
    },
    '3.6': {
        title: "Operador ternário",
        body: `<p>O operador ternário é um <code>if-else</code> em uma linha:</p>
        <p><code>condição ? valorSeTrue : valorSeFalse</code></p>`,
        code: `int idade = 20;
string categoria = idade >= 18 ? "Adulto" : "Menor";
Console.WriteLine(categoria);

int a = 15, b = 8;
int maior = a > b ? a : b;
Console.WriteLine($"Maior: {maior}");

// Ternários aninhados (use com moderação!)
int nota = 85;
string conceito = nota >= 90 ? "A" : nota >= 70 ? "B" : "C";
Console.WriteLine($"Conceito: {conceito}");`,
        output: "Adulto\nMaior: 15\nConceito: B"
    },
    '3.7': {
        title: "switch clássico",
        body: `<p>O <code>switch</code> compara uma variável com múltiplos valores possíveis.</p>
        <p><strong>Atenção:</strong> Em C#, o fall-through automático não existe — cada case precisa de <code>break</code>, <code>return</code> ou <code>goto</code>.</p>`,
        code: `int diaSemana = 3;

switch (diaSemana) {
    case 1:
        Console.WriteLine("Segunda-feira");
        break;
    case 2:
        Console.WriteLine("Terça-feira");
        break;
    case 3:
        Console.WriteLine("Quarta-feira");
        break;
    case 6:
    case 7:
        Console.WriteLine("Fim de semana!");
        break;
    default:
        Console.WriteLine("Dia inválido");
        break;
}`,
        output: "Quarta-feira"
    },
    '3.8': {
        title: "switch com pattern matching",
        body: `<p>C# moderno tem um <code>switch expression</code> muito mais poderoso, com <strong>pattern matching</strong>!</p>
        <p>Usa a sintaxe <code>=></code> e retorna um valor diretamente.</p>`,
        code: `int nota = 85;

string conceito = nota switch {
    >= 90 => "A — Excelente",
    >= 80 => "B — Bom",
    >= 70 => "C — Regular",
    >= 60 => "D — Mínimo",
    _     => "F — Reprovado"   // _ é o "default"
};

Console.WriteLine(conceito);

// Com tipo:
object valor = 3.14;
string tipo = valor switch {
    int i    => $"Inteiro: {i}",
    double d => $"Double: {d}",
    string s => $"String: {s}",
    _        => "Outro tipo"
};
Console.WriteLine(tipo);`,
        output: "B — Bom\nDouble: 3,14"
    },
    '3.9': {
        title: "Nullable e operador ??",
        body: `<p>Em C#, tipos de valor (int, bool, etc.) não podem ser <code>null</code> por padrão. Para permitir null, use <code>?</code>:</p>
        <p><code>int? numero = null;</code></p>
        <p>O operador <code>??</code> (<strong>null-coalescing</strong>) retorna o valor da esquerda se não for null, ou o valor da direita se for null.</p>`,
        code: `int? idade = null;
Console.WriteLine(idade.HasValue);  // False
Console.WriteLine(idade ?? 0);      // 0 (padrão)

idade = 25;
Console.WriteLine(idade.HasValue);  // True
Console.WriteLine(idade ?? 0);      // 25

string? nome = null;
string exibir = nome ?? "Usuário Anônimo";
Console.WriteLine(exibir);`,
        output: "False\n0\nTrue\n25\nUsuário Anônimo"
    },
    '3.10': {
        title: "🎯 Projeto: Jogo de Adivinhação",
        body: `<p>Crie um jogo onde o usuário tenta adivinhar um número entre 1 e 100!</p>
        <ul>
            <li>Use <code>Random</code> para gerar o número secreto</li>
            <li>Use <code>int.TryParse</code> para ler tentativas</li>
            <li>Dê feedback "maior" ou "menor" a cada tentativa</li>
        </ul>`,
        code: `var random = new Random();
int secreto = random.Next(1, 101);  // 1 a 100
int tentativas = 0;

while (true) {
    Console.Write("Adivinhe (1-100): ");
    if (!int.TryParse(Console.ReadLine(), out int palpite)) continue;

    tentativas++;
    if (palpite < secreto)
        Console.WriteLine("Maior!");
    else if (palpite > secreto)
        Console.WriteLine("Menor!");
    else {
        Console.WriteLine($"Acertou em {tentativas} tentativas!");
        break;
    }
}`,
        output: "Adivinhe (1-100): [aguarda]\nMaior!\nAdivinhe (1-100): [aguarda]\nAcertou em 2 tentativas!"
    },

    // ========== LEVEL 4: LOOPS & ARRAYS ==========
    '4.1': {
        title: "while",
        body: `<p>O <code>while</code> repete um bloco enquanto a condição for <code>true</code>.</p>
        <p>A condição é verificada <strong>antes</strong> de cada iteração — se já for false no início, o bloco nunca executa.</p>`,
        code: `int contador = 1;

while (contador <= 5) {
    Console.Write(contador + " ");
    contador++;
}
Console.WriteLine();

// Exemplo real: validação de entrada
int numero = -1;
while (numero < 0) {
    Console.Write("Digite um número positivo: ");
    int.TryParse(Console.ReadLine(), out numero);
}
Console.WriteLine($"Válido: {numero}");`,
        output: "1 2 3 4 5 \nVálido: 7"
    },
    '4.2': {
        title: "do-while",
        body: `<p>O <code>do-while</code> executa o bloco <strong>pelo menos uma vez</strong>, depois verifica a condição.</p>
        <p>Útil para menus e validações onde você precisa executar antes de verificar.</p>`,
        code: `int opcao;

do {
    Console.WriteLine("Menu:");
    Console.WriteLine("1 - Jogar");
    Console.WriteLine("2 - Sair");
    Console.Write("Opção: ");
    int.TryParse(Console.ReadLine(), out opcao);

    if (opcao == 1)
        Console.WriteLine("Iniciando jogo...\n");

} while (opcao != 2);

Console.WriteLine("Até logo!");`,
        output: "Menu:\n1 - Jogar\n2 - Sair\nOpção: [aguarda]\nAté logo!"
    },
    '4.3': {
        title: "for clássico",
        body: `<p>O <code>for</code> é ideal quando você sabe quantas vezes quer repetir.</p>
        <p>Estrutura: <code>for (inicio; condição; passo)</code></p>`,
        code: `// Contando de 1 a 5
for (int i = 1; i <= 5; i++) {
    Console.Write(i + " ");
}
Console.WriteLine();

// Contando de trás para frente
for (int i = 5; i >= 1; i--) {
    Console.Write(i + " ");
}
Console.WriteLine();

// Pulando de 2 em 2
for (int i = 0; i <= 10; i += 2) {
    Console.Write(i + " ");
}`,
        output: "1 2 3 4 5 \n5 4 3 2 1 \n0 2 4 6 8 10 "
    },
    '4.4': {
        title: "foreach",
        body: `<p>O <code>foreach</code> é o loop mais usado em C#! Itera sobre cada elemento de uma coleção sem precisar de índice.</p>
        <p>Funciona com arrays, listas, strings, e qualquer coleção que implemente <code>IEnumerable</code>.</p>`,
        code: `string[] frutas = { "Maçã", "Banana", "Morango", "Uva" };

foreach (string fruta in frutas) {
    Console.WriteLine($"Fruta: {fruta}");
}

// Com string (itera sobre chars)
string palavra = "C#";
foreach (char c in palavra) {
    Console.Write(c + " ");
}`,
        output: "Fruta: Maçã\nFruta: Banana\nFruta: Morango\nFruta: Uva\nC # "
    },
    '4.5': {
        title: "break e continue",
        body: `<p>Controlam o fluxo dentro de loops:</p>
        <ul>
            <li><code>break</code> — sai imediatamente do loop</li>
            <li><code>continue</code> — pula para a próxima iteração</li>
        </ul>`,
        code: `// break: para no primeiro par divisível por 7
for (int i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        Console.WriteLine($"Primeiro múltiplo de 7: {i}");
        break;
    }
}

// continue: imprime só números ímpares
Console.Write("Ímpares: ");
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;  // Pula pares
    Console.Write(i + " ");
}`,
        output: "Primeiro múltiplo de 7: 7\nÍmpares: 1 3 5 7 9 "
    },
    '4.6': {
        title: "Arrays",
        body: `<p>Arrays armazenam múltiplos valores do mesmo tipo em sequência. O índice começa em <code>0</code>.</p>
        <p>Em C#, arrays têm tamanho <strong>fixo</strong> após a criação. Para listas dinâmicas, use <code>List&lt;T&gt;</code> (Level 8).</p>`,
        code: `// Declaração e inicialização
int[] numeros = { 10, 20, 30, 40, 50 };
string[] nomes = new string[3];  // Vazio, tamanho 3

nomes[0] = "Ana";
nomes[1] = "Bruno";
nomes[2] = "Carol";

Console.WriteLine(numeros[0]);       // 10
Console.WriteLine(numeros.Length);   // 5
Console.WriteLine(nomes[1]);         // Bruno

// foreach
foreach (int n in numeros) Console.Write(n + " ");`,
        output: "10\n5\nBruno\n10 20 30 40 50 "
    },
    '4.7': {
        title: "Array multidimensional",
        body: `<p>C# suporta arrays multidimensionais para representar tabelas, matrizes, etc.</p>`,
        code: `// Matriz 3x3
int[,] matriz = {
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};

// Acessar elemento [linha, coluna]
Console.WriteLine(matriz[1, 2]);  // 6

// Iterar com for aninhado
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        Console.Write($"{matriz[i,j]} ");
    }
    Console.WriteLine();
}`,
        output: "6\n1 2 3 \n4 5 6 \n7 8 9 "
    },
    '4.8': {
        title: "Propriedades de Array",
        body: `<p>Arrays em C# têm propriedades e a classe <code>Array</code> oferece métodos úteis:</p>`,
        code: `int[] nums = { 5, 2, 8, 1, 9, 3 };

Console.WriteLine($"Length: {nums.Length}");

// Ordenar
Array.Sort(nums);
Console.Write("Ordenado: ");
foreach (int n in nums) Console.Write(n + " ");
Console.WriteLine();

// Inverter
Array.Reverse(nums);
Console.Write("Invertido: ");
foreach (int n in nums) Console.Write(n + " ");
Console.WriteLine();

// Buscar (após Sort)
Array.Sort(nums);
int idx = Array.BinarySearch(nums, 5);
Console.WriteLine($"Índice do 5: {idx}");`,
        output: "Length: 6\nOrdenado: 1 2 3 5 8 9 \nInvertido: 9 8 5 3 2 1 \nÍndice do 5: 3"
    },
    '4.9': {
        title: "Strings como arrays",
        body: `<p>Strings em C# podem ser tratadas como arrays de chars!</p>
        <p>Você pode acessar caracteres individuais e iterar sobre a string.</p>`,
        code: `string frase = "Hello, C#!";

// Acessar por índice
Console.WriteLine(frase[0]);      // H
Console.WriteLine(frase[7]);      // C

// Comprimento
Console.WriteLine(frase.Length);  // 10

// Iterar com foreach
int vogais = 0;
foreach (char c in frase) {
    if ("aeiouAEIOU".Contains(c)) vogais++;
}
Console.WriteLine($"Vogais: {vogais}");

// Converter para array de chars
char[] chars = frase.ToCharArray();
Array.Reverse(chars);
Console.WriteLine(new string(chars));`,
        output: "H\nC\n10\nVogais: 2\n!#C ,olleH"
    },
    '4.10': {
        title: "🎯 Projeto: Tabuada Formatada",
        body: `<p>Crie uma tabuada completa com formatação alinhada usando loops e <code>foreach</code>!</p>`,
        code: `Console.Write("Tabuada de qual número? ");
int.TryParse(Console.ReadLine(), out int n);

Console.WriteLine($"\n=== Tabuada do {n} ===");
for (int i = 1; i <= 10; i++) {
    int resultado = n * i;
    Console.WriteLine($"{n,2} x {i,2} = {resultado,3}");
}`,
        output: "=== Tabuada do 7 ===\n 7 x  1 =   7\n 7 x  2 =  14\n 7 x  3 =  21\n 7 x  4 =  28\n 7 x  5 =  35\n 7 x  6 =  42\n 7 x  7 =  49\n 7 x  8 =  56\n 7 x  9 =  63\n 7 x 10 =  70"
    },
    // ========== LEVEL 5: MÉTODOS & CLASSES INTRO ==========
    '5.1': {
        title: "O que são métodos?",
        body: `<p>Métodos são blocos de código reutilizáveis que pertencem a uma classe. São o equivalente às "funções" em C.</p>
        <p>Todo método em C# vive dentro de uma classe. Em top-level statements, métodos locais são declarados diretamente.</p>`,
        code: `// Método local (top-level statements)
void Saudar() {
    Console.WriteLine("Olá! Bem-vindo ao C#!");
}

// Chamando o método
Saudar();
Saudar();
Saudar();`,
        output: "Olá! Bem-vindo ao C#!\nOlá! Bem-vindo ao C#!\nOlá! Bem-vindo ao C#!"
    },
    '5.2': {
        title: "Métodos void",
        body: `<p>Métodos <code>void</code> executam uma ação mas <strong>não retornam valor</strong>.</p>`,
        code: `void ExibirSeparador(char caractere, int quantidade) {
    Console.WriteLine(new string(caractere, quantidade));
}

void ExibirTitulo(string titulo) {
    ExibirSeparador('=', 30);
    Console.WriteLine($"  {titulo}");
    ExibirSeparador('=', 30);
}

ExibirTitulo("Sistema C#");`,
        output: "==============================\n  Sistema C#\n=============================="
    },
    '5.3': {
        title: "Métodos com retorno",
        body: `<p>Métodos com retorno produzem um valor usando a palavra-chave <code>return</code>.</p>`,
        code: `int Soma(int a, int b) {
    return a + b;
}

double Potencia(double base_, int exp) {
    double resultado = 1;
    for (int i = 0; i < exp; i++) resultado *= base_;
    return resultado;
}

bool EhPar(int n) => n % 2 == 0;  // Expression body!

Console.WriteLine(Soma(5, 3));
Console.WriteLine(Potencia(2, 10));
Console.WriteLine(EhPar(7));`,
        output: "8\n1024\nFalse"
    },
    '5.4': {
        title: "Parâmetros e ref/out",
        body: `<p>Por padrão, parâmetros são passados <strong>por valor</strong> (cópia). Para passar por referência, use <code>ref</code> ou <code>out</code>.</p>
        <ul>
            <li><code>ref</code> — passa por referência, variável deve ser inicializada antes</li>
            <li><code>out</code> — pass por referência, método deve atribuir um valor</li>
        </ul>`,
        code: `void Dobrar(ref int valor) {
    valor *= 2;
}

bool TentarDividir(int a, int b, out double resultado) {
    if (b == 0) { resultado = 0; return false; }
    resultado = (double)a / b;
    return true;
}

int x = 5;
Dobrar(ref x);
Console.WriteLine(x);  // 10

if (TentarDividir(10, 3, out double r))
    Console.WriteLine($"Resultado: {r:F2}");`,
        output: "10\nResultado: 3,33"
    },
    '5.5': {
        title: "Parâmetros opcionais",
        body: `<p>Parâmetros com valores padrão são opcionais na chamada do método.</p>`,
        code: `void Log(string mensagem, string nivel = "INFO", bool timestamp = false) {
    string prefixo = timestamp ? "[12:30] " : "";
    Console.WriteLine($"{prefixo}[{nivel}] {mensagem}");
}

Log("Sistema iniciado");
Log("Erro encontrado", "ERROR");
Log("Debug info", "DEBUG", true);`,
        output: "[INFO] Sistema iniciado\n[ERROR] Erro encontrado\n[12:30] [DEBUG] Debug info"
    },
    '5.6': {
        title: "Sobrecarga de métodos",
        body: `<p>Sobrecarga (<em>overloading</em>) permite ter múltiplos métodos com o mesmo nome, mas parâmetros diferentes.</p>`,
        code: `int Somar(int a, int b) => a + b;
double Somar(double a, double b) => a + b;
int Somar(int a, int b, int c) => a + b + c;
string Somar(string a, string b) => a + b;

Console.WriteLine(Somar(2, 3));
Console.WriteLine(Somar(2.5, 3.7));
Console.WriteLine(Somar(1, 2, 3));
Console.WriteLine(Somar("C", "#"));`,
        output: "5\n6,2\n6\nC#"
    },
    '5.7': {
        title: "Recursão",
        body: `<p>Um método é recursivo quando chama a si mesmo. Todo método recursivo precisa de um caso base para parar.</p>`,
        code: `int Fatorial(int n) {
    if (n <= 1) return 1;       // Caso base
    return n * Fatorial(n - 1); // Caso recursivo
}

int Fibonacci(int n) {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

Console.WriteLine($"5! = {Fatorial(5)}");
Console.WriteLine($"Fib(8) = {Fibonacci(8)}");`,
        output: "5! = 120\nFib(8) = 21"
    },
    '5.8': {
        title: "O que é uma Classe?",
        body: `<p>Uma <strong>classe</strong> é um molde (blueprint) para criar objetos. Ela define:</p>
        <ul>
            <li><strong>Atributos</strong> — dados que o objeto guarda (campos/propriedades)</li>
            <li><strong>Comportamentos</strong> — o que o objeto pode fazer (métodos)</li>
        </ul>
        <p>Em C#, <strong>tudo vive dentro de classes</strong>. Mesmo em top-level statements, o compilador cria uma classe implicitamente.</p>`,
        code: `class Carro {
    public string Marca;
    public int Ano;
    public double Velocidade;

    public void Acelerar(double kmh) {
        Velocidade += kmh;
    }

    public void Exibir() {
        Console.WriteLine($"{Marca} ({Ano}) - {Velocidade} km/h");
    }
}`,
        output: ""
    },
    '5.9': {
        title: "Atributos e Construtores",
        body: `<p>O <strong>construtor</strong> é um método especial chamado quando um objeto é criado com <code>new</code>. Mesmo nome da classe, sem retorno.</p>`,
        code: `class Pessoa {
    public string Nome;
    public int Idade;

    // Construtor
    public Pessoa(string nome, int idade) {
        Nome = nome;
        Idade = idade;
    }

    public void Apresentar() {
        Console.WriteLine($"Olá, sou {Nome} e tenho {Idade} anos.");
    }
}

var p1 = new Pessoa("Ana", 25);
var p2 = new Pessoa("Bruno", 30);
p1.Apresentar();
p2.Apresentar();`,
        output: "Olá, sou Ana e tenho 25 anos.\nOlá, sou Bruno e tenho 30 anos."
    },
    '5.10': {
        title: "🎯 Projeto: Biblioteca MathHelper",
        body: `<p>Crie uma classe estática <code>MathHelper</code> com métodos matemáticos úteis!</p>`,
        code: `class MathHelper {
    public static bool EhPrimo(int n) {
        if (n < 2) return false;
        for (int i = 2; i * i <= n; i++)
            if (n % i == 0) return false;
        return true;
    }

    public static int Fatorial(int n) =>
        n <= 1 ? 1 : n * Fatorial(n - 1);

    public static double Potencia(double b, int e) =>
        e == 0 ? 1 : b * Potencia(b, e - 1);
}

Console.WriteLine(MathHelper.EhPrimo(13));
Console.WriteLine(MathHelper.Fatorial(6));
Console.WriteLine(MathHelper.Potencia(2, 8));`,
        output: "True\n720\n256"
    },

    // ========== LEVEL 6: POO — O PODER DOS OBJETOS (BOSS) ==========
    '6.1': {
        title: "Classe vs Objeto",
        body: `<p>A <strong>classe</strong> é o molde. O <strong>objeto</strong> é a peça criada a partir do molde.</p>
        <ul>
            <li>Classe <code>Carro</code> → objetos: <code>fusca</code>, <code>gol</code>, <code>civic</code></li>
            <li>Classe <code>Pessoa</code> → objetos: <code>ana</code>, <code>bruno</code></li>
        </ul>
        <p>Cada objeto tem seus próprios dados, mas compartilham os mesmos métodos definidos na classe.</p>`,
        code: `class Cachorro {
    public string Nome;
    public string Raca;

    public void Latir() {
        Console.WriteLine($"{Nome}: Au Au!");
    }
}

var rex = new Cachorro { Nome = "Rex", Raca = "Pastor" };
var ted = new Cachorro { Nome = "Ted", Raca = "Poodle" };

rex.Latir();
ted.Latir();
Console.WriteLine($"{rex.Nome} é um {rex.Raca}");`,
        output: "Rex: Au Au!\nTed: Au Au!\nRex é um Pastor"
    },
    '6.2': {
        title: "Construtores",
        body: `<p>Construtores inicializam o objeto. Você pode ter múltiplos construtores (sobrecarga).</p>`,
        code: `class Produto {
    public string Nome;
    public double Preco;
    public int Estoque;

    public Produto(string nome, double preco) {
        Nome = nome;
        Preco = preco;
        Estoque = 0;
    }

    public Produto(string nome, double preco, int estoque) {
        Nome = nome;
        Preco = preco;
        Estoque = estoque;
    }
}

var p1 = new Produto("Caneta", 2.50);
var p2 = new Produto("Caderno", 15.90, 50);
Console.WriteLine($"{p1.Nome} - Estoque: {p1.Estoque}");
Console.WriteLine($"{p2.Nome} - Estoque: {p2.Estoque}");`,
        output: "Caneta - Estoque: 0\nCaderno - Estoque: 50"
    },
    '6.3': {
        title: "Propriedades (get/set)",
        body: `<p>Propriedades são a forma correta de expor dados em C#. Combinam campo + getter + setter com validação.</p>`,
        code: `class Temperatura {
    private double _celsius;

    public double Celsius {
        get => _celsius;
        set {
            if (value < -273.15)
                throw new ArgumentException("Abaixo do zero absoluto!");
            _celsius = value;
        }
    }

    public double Fahrenheit => _celsius * 9 / 5 + 32;

    // Auto-property (sem lógica extra)
    public string Unidade { get; set; } = "°C";
}

var t = new Temperatura();
t.Celsius = 100;
Console.WriteLine($"{t.Celsius}{t.Unidade}");
Console.WriteLine($"{t.Fahrenheit}°F");`,
        output: "100°C\n212°F"
    },
    '6.4': {
        title: "Encapsulamento",
        body: `<p>Encapsulamento esconde detalhes internos, expondo apenas o necessário.</p>
        <ul>
            <li><code>public</code> — acessível de qualquer lugar</li>
            <li><code>private</code> — só dentro da própria classe</li>
            <li><code>protected</code> — classe + subclasses</li>
            <li><code>internal</code> — só dentro do mesmo assembly</li>
        </ul>`,
        code: `class ContaBancaria {
    private double _saldo = 0;

    public double Saldo => _saldo;  // Só leitura externa

    public void Depositar(double valor) {
        if (valor <= 0) throw new ArgumentException("Valor inválido");
        _saldo += valor;
        Console.WriteLine($"Depósito: R\${valor: F2
}.Saldo: R\${ _saldo: F2 } ");
    }

    public bool Sacar(double valor) {
    if (valor > _saldo) { Console.WriteLine("Saldo insuficiente!"); return false; }
    _saldo -= valor;
    Console.WriteLine($"Saque: R\${valor:F2}. Saldo: R\${_saldo:F2}");
    return true;
}
}

var conta = new ContaBancaria();
conta.Depositar(500);
conta.Sacar(200);
conta.Sacar(400); `,
        output: "Depósito: R$500,00. Saldo: R$500,00\nSaque: R$200,00. Saldo: R$300,00\nSaldo insuficiente!"
    },
    '6.5': {
        title: "Métodos de instância",
        body: `< p > Métodos de instância operam sobre os dados do objeto específico.São chamados em um objeto.</p > `,
        code: `class Circulo {
    public double Raio;

    public Circulo(double raio) { Raio = raio; }

    public double Area() => Math.PI * Raio * Raio;
    public double Perimetro() => 2 * Math.PI * Raio;
    public bool MaiorQue(Circulo outro) => Raio > outro.Raio;
}

var c1 = new Circulo(5);
var c2 = new Circulo(3);
Console.WriteLine($"Área: {c1.Area():F2}");
Console.WriteLine($"Perímetro: {c1.Perimetro():F2}");
Console.WriteLine($"c1 maior que c2: {c1.MaiorQue(c2)}"); `,
        output: "Área: 78,54\nPerímetro: 31,42\nc1 maior que c2: True"
    },
    '6.6': {
        title: "A palavra-chave this",
        body: `< p > <code>this</code> é uma referência ao objeto atual.Útil quando há ambiguidade entre parâmetros e campos.</p > `,
        code: `class Retangulo {
    public double Largura;
    public double Altura;

    public Retangulo(double largura, double altura) {
        this.Largura = largura;  // this.Largura = campo
        this.Altura = altura;    // altura = parâmetro
    }

    public double Area() => Largura * Altura;

    // this() chama outro construtor da mesma classe
    public Retangulo(double lado): this(lado, lado) { }
}

var r = new Retangulo(4, 5);
var q = new Retangulo(3);     // Quadrado
Console.WriteLine($"Área retângulo: {r.Area()}");
Console.WriteLine($"Área quadrado: {q.Area()}"); `,
        output: "Área retângulo: 20\nÁrea quadrado: 9"
    },
    '6.7': {
        title: "static",
        body: `< p > Membros < code > static</code > pertencem à < strong > classe</strong >, não a um objeto específico.</p > `,
        code: `class Contador {
    private static int _total = 0;  // Compartilhado entre todos!
    public int Id;

    public Contador() {
        _total++;
        Id = _total;
    }

    public static int Total => _total;
}

var c1 = new Contador();
var c2 = new Contador();
var c3 = new Contador();

Console.WriteLine($"Total de contadores: {Contador.Total}");
Console.WriteLine($"IDs: {c1.Id}, {c2.Id}, {c3.Id}");

// Math é uma classe plenamente estática
Console.WriteLine(Math.Abs(-42));
Console.WriteLine(Math.Sqrt(16)); `,
        output: "Total de contadores: 3\nIDs: 1, 2, 3\n42\n4"
    },
    '6.8': {
        title: "Composição",
        body: `< p > Composição é quando um objeto < strong > contém</strong > outros objetos.Forma uma relação "tem um".</p > `,
        code: `class Motor {
    public int Cavalos;
    public bool Ligado;

    public Motor(int cv) { Cavalos = cv; }
    public void Ligar() { Ligado = true; Console.WriteLine("Vrum!"); }
}

class Carro {
    public string Marca;
    public Motor Motor;  // Carro "tem um" Motor

    public Carro(string marca, int cv) {
        Marca = marca;
        Motor = new Motor(cv);
    }

    public void Ligar() {
        Console.Write($"{Marca}: ");
        Motor.Ligar();
    }
}

var carro = new Carro("Ferrari", 710);
carro.Ligar();
Console.WriteLine($"Ligado: {carro.Motor.Ligado}"); `,
        output: "Ferrari: Vrum!\nLigado: True"
    },
    '6.9': {
        title: "Sobrescrevendo ToString()",
        body: `< p > Todo objeto em C# herda o método < code > ToString()</code > de < code > object</code >.Você pode sobrescrever para uma representação significativa.</p > `,
        code: `class Ponto {
    public int X, Y;

    public Ponto(int x, int y) { X = x; Y = y; }

    public override string ToString() => $"({X}, {Y})";
}

var p = new Ponto(3, 7);
Console.WriteLine(p);                    // Chama ToString() automaticamente
Console.WriteLine($"Ponto: {p}");        // Interpolação também
Console.WriteLine("Ponto: " + p);       // Concatenação também`,
        output: "(3, 7)\nPonto: (3, 7)\nPonto: (3, 7)"
    },
    '6.10': {
        title: "🏆 Projeto Boss: Sistema de Cadastro",
        body: `<p>Crie um CRUD simples de alunos usando POO!</p>`,
        code: `class Aluno {
    public int Id { get; set; }
    public string Nome { get; set; }
    public double Nota { get; set; }
    public bool Aprovado => Nota >= 7;

    public override string ToString() =>
        $"[{Id}] {Nome} - Nota: {Nota:F1} ({(Aprovado ? "Aprovado" : "Reprovado")})";
}

var alunos = new System.Collections.Generic.List<Aluno> {
    new Aluno { Id = 1, Nome = "Ana Silva", Nota = 8.5 },
    new Aluno { Id = 2, Nome = "Bruno Costa", Nota = 5.0 },
    new Aluno { Id = 3, Nome = "Carol Lima", Nota = 9.2 }
};

Console.WriteLine("=== Cadastro de Alunos ===");
foreach (var a in alunos) Console.WriteLine(a);`,
        output: "=== Cadastro de Alunos ===\n[1] Ana Silva - Nota: 8,5 (Aprovado)\n[2] Bruno Costa - Nota: 5,0 (Reprovado)\n[3] Carol Lima - Nota: 9,2 (Aprovado)"
    },

    // ========== LEVEL 7: HERANÇA & INTERFACES ==========
    '7.1': {
        title: "O que é Herança?",
        body: `<p>Herança permite que uma classe <strong>filha</strong> herde atributos e métodos de uma classe <strong>pai</strong>.</p>
        <p>Sintaxe: <code>class Filho : Pai { }</code></p>`,
        code: `class Animal {
    public string Nome;
    public void Respirar() => Console.WriteLine($"{Nome} está respirando.");
}

class Cachorro : Animal {
    public void Latir() => Console.WriteLine($"{Nome}: Au Au!");
}

class Gato : Animal {
    public void Miar() => Console.WriteLine($"{Nome}: Miau!");
}

var dog = new Cachorro { Nome = "Rex" };
var cat = new Gato { Nome = "Mimi" };

dog.Respirar();  // Herdado de Animal
dog.Latir();
cat.Miar();`,
        output: "Rex está respirando.\nRex: Au Au!\nMimi: Miau!"
    },
    '7.2': {
        title: "Classe base e derivada",
        body: `<p>A classe filha pode chamar o construtor da classe pai usando <code>: base()</code>.</p>`,
        code: `class Veiculo {
    public string Marca;
    public int Ano;

    public Veiculo(string marca, int ano) {
        Marca = marca;
        Ano = ano;
    }

    public virtual void Info() =>
        Console.WriteLine($"{Marca} ({Ano})");
}

class Moto : Veiculo {
    public int Cilindradas;

    public Moto(string marca, int ano, int cc)
        : base(marca, ano) {
        Cilindradas = cc;
    }

    public override void Info() =>
        Console.WriteLine($"{Marca} ({Ano}) - {Cilindradas}cc");
}

var m = new Moto("Honda", 2023, 600);
m.Info();`,
        output: "Honda (2023) - 600cc"
    },
    '7.3': {
        title: "override e virtual",
        body: `<p>Para que uma classe filha possa substituir um método da pai, o método pai deve ser <code>virtual</code> e o da filha deve usar <code>override</code>.</p>`,
        code: `class Forma {
    public virtual double Area() => 0;
    public virtual string Nome() => "Forma";
}

class Circulo : Forma {
    public double Raio;
    public Circulo(double r) { Raio = r; }

    public override double Area() => Math.PI * Raio * Raio;
    public override string Nome() => "Círculo";
}

class Quadrado : Forma {
    public double Lado;
    public Quadrado(double l) { Lado = l; }

    public override double Area() => Lado * Lado;
    public override string Nome() => "Quadrado";
}

Forma[] formas = { new Circulo(5), new Quadrado(4) };
foreach (var f in formas)
    Console.WriteLine($"{f.Nome()}: {f.Area():F2}");`,
        output: "Círculo: 78,54\nQuadrado: 16,00"
    },
    '7.4': {
        title: "Classe abstrata",
        body: `<p>Uma classe <code>abstract</code> não pode ser instanciada. Serve como base obrigatória. Métodos <code>abstract</code> devem ser implementados pelas filhas.</p>`,
        code: `abstract class Funcionario {
    public string Nome;
    public abstract double CalcularSalario();  // Obrigatório implementar!

    public void ExibirInfo() {
        Console.WriteLine($"{Nome}: R{CalcularSalario():F2}");
    }
}

class Horista : Funcionario {
    public double HorasTrabalhadas, ValorHora;

    public override double CalcularSalario() =>
    HorasTrabalhadas * ValorHora;
}

class Mensalista : Funcionario {
    public double SalarioMensal;

    public override double CalcularSalario() => SalarioMensal;
}

var h = new Horista { Nome = "Ana", HorasTrabalhadas = 160, ValorHora = 25 };
var m = new Mensalista { Nome = "Bruno", SalarioMensal = 5000 };
h.ExibirInfo();
m.ExibirInfo(); `,
        output: "Ana: R$4.000,00\nBruno: R$5.000,00"
    },
    '7.5': {
        title: "Polimorfismo",
        body: `< p > Polimorfismo permite tratar objetos de tipos diferentes de forma uniforme através da classe base.</p > `,
        code: `abstract class Animal {
    public string Nome;
    public abstract void FazerSom();
}

class Cachorro : Animal {
    public override void FazerSom() => Console.WriteLine($"{Nome}: Au au!");
}

class Gato : Animal {
    public override void FazerSom() => Console.WriteLine($"{Nome}: Miau!");
}

class Pato : Animal {
    public override void FazerSom() => Console.WriteLine($"{Nome}: Quack!");
}

// Polimorfismo: array de Animal, cada um faz som diferente
Animal[] animais = {
    new Cachorro { Nome = "Rex" },
new Gato { Nome = "Mimi" },
new Pato { Nome = "Donald" }
};

foreach(var a in animais) a.FazerSom(); `,
        output: "Rex: Au au!\nMimi: Miau!\nDonald: Quack!"
    },
    '7.6': {
        title: "O que é Interface?",
        body: `< p > Uma < strong > interface</strong > define um < strong > contrato</strong >: lista de métodos que qualquer classe que a implementar deve ter.</p >
    <p>Diferente de classe abstrata: interface não tem implementação (salvo default methods no C# 8+), e uma classe pode implementar <strong>várias</strong> interfaces.</p>`,
        code: `interface IVoador {
    void Voar();
    double AltitudMaxima { get; }
}

interface IMovel {
    void Mover(double dx, double dy);
}

class Aviao : IVoador, IMovel {
    public double AltitudMaxima => 12000;

    public void Voar() =>
    Console.WriteLine($"Voando até {AltitudMaxima}m!");

    public void Mover(double dx, double dy) =>
    Console.WriteLine($"Movendo: ({dx}, {dy})");
}

var aviao = new Aviao();
aviao.Voar();
aviao.Mover(500, 0); `,
        output: "Voando até 12000m!\nMovendo: (500, 0)"
    },
    '7.7': {
        title: "Implementando Interface",
        body: `< p > Uma classe implementa uma interface colocando o nome dela após < code >:</code >.Deve implementar < strong > todos</strong > os membros da interface.</p > `,
        code: `interface IImprimivel {
    void Imprimir();
    string FormatoSaida { get; }
}

class Relatorio : IImprimivel {
    public string Titulo;
    public string FormatoSaida => "PDF";

    public void Imprimir() {
        Console.WriteLine($"Imprimindo: {Titulo} como {FormatoSaida}");
    }
}

class Nota : IImprimivel {
    public string FormatoSaida => "TXT";

    public void Imprimir() {
        Console.WriteLine($"Exportando nota como {FormatoSaida}");
    }
}

IImprimivel[] docs = { new Relatorio { Titulo = "Vendas Q1" }, new Nota() };
foreach(var d in docs) d.Imprimir(); `,
        output: "Imprimindo: Vendas Q1 como PDF\nExportando nota como TXT"
    },
    '7.8': {
        title: "Múltiplas interfaces",
        body: `< p > Uma classe pode implementar várias interfaces ao mesmo tempo, combinando contratos.</p > `,
        code: `interface ISalvavel {
    void Salvar();
}

interface ICarregavel {
    void Carregar();
}

interface IExportavel {
    void Exportar(string formato);
}

class Documento : ISalvavel, ICarregavel, IExportavel {
    public string Nome;

    public void Salvar() => Console.WriteLine($"{Nome} salvo!");
    public void Carregar() => Console.WriteLine($"{Nome} carregado!");
    public void Exportar(string f) => Console.WriteLine($"{Nome} exportado como {f}");
}

var doc = new Documento { Nome = "Relatório" };
doc.Salvar();
doc.Exportar("PDF"); `,
        output: "Relatório salvo!\nRelatório exportado como PDF"
    },
    '7.9': {
        title: "is e as (type checking)",
        body: `< p > Para verificar e converter tipos em runtime:</p >
    <ul>
        <li><code>is</code> — verifica o tipo, com pattern matching</li>
        <li><code>as</code> — tenta converter (retorna null se falhar)</li>
    </ul>`,
        code: `class Animal { public string Nome; }
class Cachorro : Animal { public void Latir() => Console.WriteLine("Au!"); }
class Gato : Animal { public void Miar() => Console.WriteLine("Miau!"); }

Animal[] animais = { new Cachorro { Nome = "Rex" }, new Gato { Nome = "Tom" } };

foreach(var a in animais) {
    if (a is Cachorro c) {
        Console.Write($"{c.Nome}: ");
        c.Latir();
    } else if (a is Gato g) {
        Console.Write($"{g.Nome}: ");
        g.Miar();
    }
} `,
        output: "Rex: Au!\nTom: Miau!"
    },
    '7.10': {
        title: "🎯 Projeto: Zoológico",
        body: `< p > Crie uma hierarquia de animais com polimorfismo e interfaces!</p > `,
        code: `interface IAmestrado {
    void FazerTruque();
}

abstract class Animal {
    public string Nome { get; set; }
    public abstract string FazerSom();
}

class Leao : Animal {
    public override string FazerSom() => "ROAAR!";
}

class Golfinho : Animal, IAmestrado {
    public override string FazerSom() => "Eeeee!";
    public void FazerTruque() => Console.WriteLine($"{Nome} pulou pelo aro!");
}

Animal[] zoo = { new Leao { Nome = "Simba" }, new Golfinho { Nome = "Nemo" } };
foreach(var a in zoo) {
    Console.WriteLine($"{a.Nome}: {a.FazerSom()}");
    if (a is IAmestrado t) t.FazerTruque();
} `,
        output: "Simba: ROAAR!\nNemo: Eeeee!\nNemo pulou pelo aro!"
    },

    // ========== LEVEL 8: COLEÇÕES & LINQ ==========
    '8.1': {
        title: "List<T>",
        body: `< p > <code>List&lt;T&gt;</code> é uma lista dinâmica — cresce e encolhe conforme necessário.É a coleção mais usada em C#!</p > `,
        code: `using System.Collections.Generic;

var nomes = new List < string > ();
nomes.Add("Ana");
nomes.Add("Bruno");
nomes.Add("Carol");
nomes.Insert(1, "Diego");  // Insere na posição 1

Console.WriteLine($"Total: {nomes.Count}");
foreach(var n in nomes) Console.WriteLine(n);

nomes.Remove("Bruno");
Console.WriteLine($"Após remover Bruno: {nomes.Count}");
Console.WriteLine($"Contém Carol: {nomes.Contains("Carol")}"); `,
        output: "Total: 4\nAna\nDiego\nBruno\nCarol\nApós remover Bruno: 3\nContém Carol: True"
    },
    '8.2': {
        title: "Dictionary<K,V>",
        body: `< p > <code>Dictionary&lt;K,V&gt;</code> armazena pares chave - valor para busca rápida por chave(O(1) em média).</p > `,
        code: `var estoque = new Dictionary < string, int> ();
estoque["Maçã"] = 50;
estoque["Banana"] = 30;
estoque["Uva"] = 0;

estoque["Maçã"] += 10;  // Atualizar

Console.WriteLine($"Maçãs: {estoque["Maçã"]}");

// Verificar antes de acessar
if (estoque.TryGetValue("Laranja", out int qtd))
    Console.WriteLine($"Laranjas: {qtd}");
else
    Console.WriteLine("Laranja não encontrada!");

foreach(var item in estoque)
Console.WriteLine($"{item.Key}: {item.Value}un"); `,
        output: "Maçãs: 60\nLaranja não encontrada!\nMaçã: 60un\nBanana: 30un\nUva: 0un"
    },
    '8.3': {
        title: "Stack e Queue",
        body: `< p > Coleções especializadas para padrões LIFO e FIFO:</p >
    <ul>
        <li><code>Stack&lt;T&gt;</code> — LIFO (último a entrar, primeiro a sair). Ex: histórico de ações.</li>
        <li><code>Queue&lt;T&gt;</code> — FIFO (primeiro a entrar, primeiro a sair). Ex: fila de atendimento.</li>
    </ul>`,
        code: `var pilha = new Stack < string > ();
pilha.Push("Ação 1");
pilha.Push("Ação 2");
pilha.Push("Ação 3");
Console.WriteLine("Desfazer: " + pilha.Pop());  // Ação 3

var fila = new Queue < string > ();
fila.Enqueue("Cliente A");
fila.Enqueue("Cliente B");
fila.Enqueue("Cliente C");
Console.WriteLine("Atendendo: " + fila.Dequeue());  // Cliente A
Console.WriteLine($"Próximo: {fila.Peek()}");        // Cliente B`,
        output: "Desfazer: Ação 3\nAtendendo: Cliente A\nPróximo: Cliente B"
    },
    '8.4': {
        title: "Intro ao LINQ",
        body: `<p>LINQ (<em>Language Integrated Query</em>) permite fazer <strong>consultas em coleções</strong> diretamente em C#, como se fosse SQL!</p>`,
        code: `using System.Linq;

var numeros = new List<int> { 5, 2, 8, 1, 9, 3, 7, 4, 6 };

// Filtrar pares
var pares = numeros.Where(n => n % 2 == 0);
Console.Write("Pares: ");
foreach (var n in pares) Console.Write(n + " ");

// Ordenar
var ordenados = numeros.OrderBy(n => n);
Console.Write("\nOrdenados: ");
foreach (var n in ordenados) Console.Write(n + " ");`,
        output: "Pares: 2 8 4 6 \nOrdenados: 1 2 3 4 5 6 7 8 9 "
    },
    '8.5': {
        title: "LINQ: Filtrar e Ordenar",
        body: `<p>LINQ tem dezenas de métodos úteis. Os mais usados:</p>`,
        code: `using System.Linq;

var produtos = new List<(string Nome, double Preco)> {
    ("Caneta", 2.50), ("Caderno", 15.90),
    ("Mochila", 89.90), ("Régua", 3.20),
    ("Borracha", 1.50)
};

var baratos = produtos
    .Where(p => p.Preco < 10)
    .OrderBy(p => p.Preco)
    .ToList();

Console.WriteLine("Produtos abaixo de R$10:");
foreach (var p in baratos)
    Console.WriteLine($"  {p.Nome}: R\${p.Preco: F2
} ");

Console.WriteLine($"Mais caro: {produtos.MaxBy(p => p.Preco).Nome}");
Console.WriteLine($"Total: R\${produtos.Sum(p => p.Preco):F2}"); `,
        output: "Produtos abaixo de R$10:\n  Borracha: R$1,50\n  Caneta: R$2,50\n  Régua: R$3,20\nMais caro: Mochila\nTotal: R$113,00"
    },
    '8.6': {
        title: "LINQ: Sintaxe de query",
        body: `< p > Além dos métodos, LINQ tem uma sintaxe de query estilo SQL:</p > `,
        code: `using System.Linq;

var alunos = new List < (string Nome, int Nota)> {
    ("Ana", 85), ("Bruno", 62), ("Carol", 91),
    ("Diego", 45), ("Elena", 78)
};

var aprovados =
    from a in alunos
    where a.Nota >= 70
    orderby a.Nota descending
    select new { a.Nome, a.Nota, Conceito = a.Nota >= 90 ? "A" : "B" };

Console.WriteLine("Aprovados:");
foreach(var a in aprovados)
Console.WriteLine($"  {a.Nome}: {a.Nota} ({a.Conceito})"); `,
        output: "Aprovados:\n  Carol: 91 (A)\n  Ana: 85 (B)\n  Elena: 78 (B)"
    },
    '8.7': {
        title: "Lambda expressions",
        body: `< p > Lambdas são funções anônimas(sem nome) definidas inline com < code >=></code >.</p > `,
        code: `using System.Linq;

// Lambda básica: parâmetro => expressão
var dobrar = (int x) => x * 2;
Console.WriteLine(dobrar(5));

// Com LINQ
var nums = new List < int > { 1, 2, 3, 4, 5 };
var quadrados = nums.Select(x => x * x).ToList();
foreach(var n in quadrados) Console.Write(n + " ");
Console.WriteLine();

// Lambda de múltiplas linhas
var classificar = (int nota) => {
    if (nota >= 90) return "A";
    if (nota >= 70) return "B";
    return "C";
};
Console.WriteLine(classificar(85)); `,
        output: "10\n1 4 9 16 25 \nB"
    },
    '8.8': {
        title: "Delegates e Action/Func",
        body: `< p > Delegates são referências a métodos. < code > Action</code > e < code > Func</code > são delegates prontos:</p >
    <ul>
        <li><code>Action&lt;T&gt;</code> — método que recebe T e retorna void</li>
        <li><code>Func&lt;T, R&gt;</code> — método que recebe T e retorna R</li>
    </ul>`,
        code: `Action < string > log = msg => Console.WriteLine($"[LOG] {msg}");
Func < int, int, int > somar = (a, b) => a + b;
Func < string, bool > ehLongo = s => s.Length > 10;

log("Sistema iniciado");
Console.WriteLine(somar(3, 7));
Console.WriteLine(ehLongo("Olá"));
Console.WriteLine(ehLongo("Uma string grande"));

// Passando como parâmetro
void Processar(List < int > lista, Action < int > acao) {
    foreach(var item in lista) acao(item);
}
Processar(new List < int > { 1, 2, 3}, n => Console.Write(n * n + " ")); `,
        output: "[LOG] Sistema iniciado\n10\nFalse\nTrue\n1 4 9 "
    },
    '8.9': {
        title: "Generics básico",
        body: `< p > Generics permitem criar classes e métodos que funcionam com qualquer tipo, mantendo a segurança de tipo.</p > `,
        code: `class Caixa<T> {
    private T _conteudo;

    public void Guardar(T item) {
        _conteudo = item;
        Console.WriteLine($"Guardando: {item}");
    }

    public T Pegar() {
        Console.WriteLine($"Pegando: {_conteudo}");
        return _conteudo;
    }
}

var caixaInt = new Caixa < int > ();
caixaInt.Guardar(42);
caixaInt.Pegar();

var caixaStr = new Caixa < string > ();
caixaStr.Guardar("C#");
caixaStr.Pegar(); `,
        output: "Guardando: 42\nPegando: 42\nGuardando: C#\nPegando: C#"
    },
    '8.10': {
        title: "🎯 Projeto: Gerenciador de Tarefas",
        body: `< p > CRUD completo de tarefas usando List + LINQ!</p > `,
        code: `using System.Linq;

class Tarefa {
    public int Id { get; set; }
    public string Titulo { get; set; }
    public bool Concluida { get; set; }
    public override string ToString() =>
        $"[{(Concluida ? "X" : " ")}] {Id}. {Titulo}";
}

var tarefas = new List < Tarefa > {
    new() { Id = 1, Titulo = "Aprender C#", Concluida = true },
    new() { Id = 2, Titulo = "Estudar LINQ", Concluida = false },
    new() { Id = 3, Titulo = "Criar projeto", Concluida = false }
};

Console.WriteLine("=== PENDENTES ===");
tarefas.Where(t => !t.Concluida).ToList().ForEach(Console.WriteLine);
Console.WriteLine($"\nTotal: {tarefas.Count} | Feitas: {tarefas.Count(t => t.Concluida)}"); `,
        output: "=== PENDENTES ===\n[ ] 2. Estudar LINQ\n[ ] 3. Criar projeto\n\nTotal: 3 | Feitas: 1"
    },

    // ========== LEVEL 9: ASYNC, ARQUIVOS & PROJETO FINAL (MASTER) ==========
    '9.1': {
        title: "Exceções e try-catch",
        body: `< p > Exceções são erros em tempo de execução.Use < code >try-catch</code > para tratá - los graciosamente.</p > `,
        code: `try {
    int[] nums = { 1, 2, 3 };
    Console.WriteLine(nums[10]);  // IndexOutOfRangeException!
} catch (IndexOutOfRangeException ex) {
    Console.WriteLine($"Erro: {ex.Message}");
} catch (Exception ex) {
    Console.WriteLine($"Erro genérico: {ex.Message}");
} finally {
    Console.WriteLine("Finally sempre executa!");
}

// Divisão por zero
try {
    int resultado = 10 / 0;
} catch (DivideByZeroException) {
    Console.WriteLine("Não pode dividir por zero!");
} `,
        output: "Erro: Index was outside the bounds of the array.\nFinally sempre executa!\nNão pode dividir por zero!"
    },
    '9.2': {
        title: "throw e exceções custom",
        body: `< p > Você pode lançar exceções com < code >throw</code > e criar exceções customizadas herdando de < code > Exception</code >.</p > `,
        code: `class SaldoInsuficienteException : Exception {
    public double SaldoAtual { get; }
    public SaldoInsuficienteException(double saldo)
        : base($"Saldo insuficiente. Disponível: R\${saldo:F2}") {
        SaldoAtual = saldo;
    }
}

void Sacar(double saldo, double valor) {
    if (valor > saldo)
        throw new SaldoInsuficienteException(saldo);
    Console.WriteLine($"Saque de R\${valor:F2} realizado!");
}

try {
    Sacar(100, 200);
} catch (SaldoInsuficienteException ex) {
    Console.WriteLine(ex.Message);
    Console.WriteLine($"Seu saldo: R\${ex.SaldoAtual:F2}");
} `,
        output: "Saldo insuficiente. Disponível: R$100,00\nSeu saldo: R$100,00"
    },
    '9.3': {
        title: "File.ReadAllText e WriteAllText",
        body: `< p > A classe < code > File</code > do namespace < code > System.IO</code > oferece métodos simples para ler e escrever arquivos.</p > `,
        code: `using System.IO;

// Escrever arquivo
string caminho = "dados.txt";
File.WriteAllText(caminho, "Olá, C#!\nSegunda linha.\nTerceira linha.");
Console.WriteLine("Arquivo criado!");

// Ler arquivo completo
string conteudo = File.ReadAllText(caminho);
Console.WriteLine(conteudo);

// Ler como array de linhas
string[] linhas = File.ReadAllLines(caminho);
Console.WriteLine($"Total de linhas: {linhas.Length}"); `,
        output: "Arquivo criado!\nOlá, C#!\nSegunda linha.\nTerceira linha.\nTotal de linhas: 3"
    },
    '9.4': {
        title: "StreamReader e StreamWriter",
        body: `< p > Para arquivos grandes, use Streams — eles leem / escrevem em pedaços sem carregar tudo na memória.</p > `,
        code: `using System.IO;

// Escrevendo com StreamWriter
using(var writer = new StreamWriter("log.txt")) {
    writer.WriteLine("=== LOG DO SISTEMA ===");
writer.WriteLine($"Iniciado: {DateTime.Now}");
writer.WriteLine("Status: OK");
}  // using fecha automaticamente!

// Lendo com StreamReader
using(var reader = new StreamReader("log.txt")) {
    string linha;
while ((linha = reader.ReadLine()) != null) {
    Console.WriteLine(linha);
}
}`,
        output: "=== LOG DO SISTEMA ===\nIniciado: [data/hora]\nStatus: OK"
    },
    '9.5': {
        title: "Serialização JSON",
        body: `< p > C# tem suporte nativo a JSON com < code > System.Text.Json</code > (sem precisar de pacotes externos) !</p > `,
        code: `using System.Text.Json;

class Pessoa {
    public string Nome { get; set; }
    public int Idade { get; set; }
}

// Serializar (objeto -> JSON string)
var p = new Pessoa { Nome = "Ana", Idade = 25 };
string json = JsonSerializer.Serialize(p);
Console.WriteLine(json);

// Deserializar (JSON string -> objeto)
string jsonIncoming = """{"Nome":"Bruno","Idade":30}""";
var p2 = JsonSerializer.Deserialize < Pessoa > (jsonIncoming);
Console.WriteLine($"{p2.Nome} tem {p2.Idade} anos");

// Serializar com indentação
var opts = new JsonSerializerOptions { WriteIndented = true };
Console.WriteLine(JsonSerializer.Serialize(p, opts)); `,
        output: "{\"Nome\":\"Ana\",\"Idade\":25}\nBruno tem 30 anos\n{\n  \"Nome\": \"Ana\",\n  \"Idade\": 25\n}"
    },
    '9.6': {
        title: "O que é async/await?",
        body: `< p > Programação assíncrona permite que o programa continue executando outras tarefas enquanto aguarda operações lentas(I / O, rede, banco de dados).</p >
    <ul>
        <li><code>async</code> — marca um método como assíncrono</li>
        <li><code>await</code> — aguarda a conclusão de uma operação assíncrona sem bloquear a thread</li>
        <li><code>Task</code> — representa uma operação assíncrona em andamento</li>
    </ul>`,
        code: `// Simulando operação lenta
async Task < string > BuscarDados() {
    Console.WriteLine("Iniciando busca...");
    await Task.Delay(1000);  // Simula 1 segundo de I/O
    return "Dados carregados!";
}

// Método principal assíncrono
async Task Main() {
    Console.WriteLine("Antes da busca");
    string resultado = await BuscarDados();
    Console.WriteLine(resultado);
    Console.WriteLine("Após a busca");
}

await Main(); `,
        output: "Antes da busca\nIniciando busca...\nDados carregados!\nApós a busca"
    },
    '9.7': {
        title: "Métodos async",
        body: `< p > Um método < code > async</code > retorna < code > Task</code > (sem valor) ou < code > Task & lt; T & gt;</code > (com valor).</p > `,
        code: `async Task < int > CalcularAsync(int n) {
    await Task.Delay(500);  // Simula processamento
    return n * n;
}

async Task ProcessarVariosAsync() {
    var t1 = CalcularAsync(3);
    var t2 = CalcularAsync(4);
    var t3 = CalcularAsync(5);

    // Executar tudo em paralelo!
    int[] resultados = await Task.WhenAll(t1, t2, t3);

    foreach(var r in resultados)
    Console.WriteLine(r);
}

await ProcessarVariosAsync(); `,
        output: "9\n16\n25"
    },
    '9.8': {
        title: "HttpClient básico",
        body: `< p > <code>HttpClient</code> permite fazer requisições HTTP.Sempre use com < code > async / await</code > !</p > `,
        code: `using System.Net.Http;
using System.Text.Json;

// HttpClient deve ser reutilizado (não recriar a cada requisição)
var client = new HttpClient();

async Task BuscarPokemon(string nome) {
    try {
        string url = $"https://pokeapi.co/api/v2/pokemon/{nome}";
        string json = await client.GetStringAsync(url);

        using var doc = JsonDocument.Parse(json);
        var id = doc.RootElement.GetProperty("id").GetInt32();
        var hp = doc.RootElement
            .GetProperty("stats")[0]
            .GetProperty("base_stat").GetInt32();

        Console.WriteLine($"{nome}: ID={id}, HP={hp}");
    } catch (Exception ex) {
        Console.WriteLine($"Erro: {ex.Message}");
    }
}

await BuscarPokemon("pikachu"); `,
        output: "pikachu: ID=25, HP=35"
    },
    '9.9': {
        title: "Enums e Records",
        body: `< p > Dois recursos modernos e muito úteis do C#:</p >
    <ul>
        <li><code>enum</code> — conjunto de constantes nomeadas</li>
        <li><code>record</code> — tipo imutável por valor, ideal para dados (Value Object)</li>
    </ul>`,
        code: `enum DiaSemana { Segunda, Terca, Quarta, Quinta, Sexta, Sabado, Domingo }
enum Status { Pendente, EmProgresso, Concluido, Cancelado }

// Record: imutável, igualdade por valor, ToString() automático
record Produto(string Nome, double Preco, int Estoque);

var p1 = new Produto("Caneta", 2.50, 100);
var p2 = new Produto("Caneta", 2.50, 100);

Console.WriteLine(p1);               // ToString automático
Console.WriteLine(p1 == p2);         // True! (por valor)

// with: cria cópia com modificação
var p3 = p1 with { Estoque = 50 };
Console.WriteLine(p3);

DiaSemana hoje = DiaSemana.Quarta;
Console.WriteLine(hoje); `,
        output: "Produto { Nome = Caneta, Preco = 2,5, Estoque = 100 }\nTrue\nProduto { Nome = Caneta, Preco = 2,5, Estoque = 50 }\nQuarta"
    },
    '9.10': {
        title: "🏆 Projeto Final: App Completo",
        body: `< p > Você chegou ao projeto final! Combine tudo que aprendeu: async, JSON, LINQ, classes e File I / O.</p > `,
        code: `using System.Text.Json;
using System.Linq;

record Tarefa(int Id, string Titulo, bool Concluida);

class GerenciadorTarefas {
    private List<Tarefa> _tarefas = new ();
    private const string Arquivo = "tarefas.json";

    public void Carregar() {
        if (!File.Exists(Arquivo)) return;
        string json = File.ReadAllText(Arquivo);
        _tarefas = JsonSerializer.Deserialize < List < Tarefa >> (json) ?? new ();
    }

    public void Salvar() {
        string json = JsonSerializer.Serialize(_tarefas, new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(Arquivo, json);
    }

    public void Adicionar(string titulo) {
        int id = _tarefas.Any() ? _tarefas.Max(t => t.Id) + 1 : 1;
        _tarefas.Add(new Tarefa(id, titulo, false));
    }

    public void Listar() {
        var pendentes = _tarefas.Where(t => !t.Concluida);
        foreach(var t in pendentes)
        Console.WriteLine($"[ ] {t.Id}. {t.Titulo}");
    }
}

var app = new GerenciadorTarefas();
app.Adicionar("Estudar C#");
app.Adicionar("Fazer projeto");
app.Listar();
app.Salvar();
Console.WriteLine("Parabéns! Você domina C#!"); `,
        output: "[ ] 1. Estudar C#\n[ ] 2. Fazer projeto\nParabéns! Você domina C#!"
    }
};


// ==================== GLOBAL STATE ====================
let currentLessonId = null;
const STORAGE_KEY = 'vibecode_csharp_progress';
const XP_KEY = 'vibecode_csharp_xp';
const ACHIEVEMENTS_KEY = 'vibecode_csharp_achievements';
const THEME_KEY = 'vibecode_csharp_theme';

const XP_PER_LESSON = 10;
const XP_PER_LEVEL_COMPLETE = 50;

const LEVELS = [
    { name: 'Noob', minXP: 0 },
    { name: 'Iniciante', minXP: 200 },
    { name: 'Aprendiz', minXP: 500 },
    { name: 'Dev Jr', minXP: 1000 },
    { name: 'Dev', minXP: 1600 },
    { name: 'Mestre', minXP: 2200 }
];

const ACHIEVEMENTS = [
    { id: 'first_step', name: 'Primeiro Passo', desc: 'Complete 1 aula', icon: '🎯', check: (p) => Object.keys(p).length >= 1 },
    { id: 'level_0', name: 'Level 0', desc: 'Complete o Level 0', icon: '✅', check: (p) => getLevelProgress(p, 0) === 10 },
    { id: 'level_1', name: 'Level 1', desc: 'Complete o Level 1', icon: '✅', check: (p) => getLevelProgress(p, 1) === 10 },
    { id: 'halfway', name: 'Metade', desc: '50 aulas', icon: '🏃', check: (p) => Object.keys(p).length >= 50 },
    { id: 'boss_slayer', name: 'Boss Slayer', desc: 'Complete o Level 6', icon: '💀', check: (p) => getLevelProgress(p, 6) === 10 },
    { id: 'completionist', name: 'Completionist', desc: '100 aulas', icon: '🏆', check: (p) => Object.keys(p).length >= 100 },
    { id: 'xp_100', name: 'XP Hunter', desc: '100 XP', icon: '⭐', check: (p, xp) => xp >= 100 },
    { id: 'xp_500', name: 'XP Master', desc: '500 XP', icon: '🌟', check: (p, xp) => xp >= 500 }
];

// ==================== QUIZ DATA ====================
const QUIZ_DATA = {
    0: [
        { q: "Quem criou o C#?", opts: ["Dennis Ritchie", "Guido van Rossum", "Anders Hejlsberg", "Linus Torvalds"], ans: 2 },
        { q: "Qual empresa criou o C#?", opts: ["Google", "Apple", "Amazon", "Microsoft"], ans: 3 },
        { q: "O .NET SDK serve para:", opts: ["Editar imagens", "Compilar e rodar C#", "Navegar na web", "Gerenciar banco"], ans: 1 },
        { q: "Como verificar a versão do .NET?", opts: ["dotnet --info", "dotnet --version", "csharp -v", "net version"], ans: 1 },
        { q: "Como escrever no console em C#?", opts: ["print()", "printf()", "Console.WriteLine()", "System.out.println()"], ans: 2 }
    ],
    1: [
        { q: "Qual tipo usar para dinheiro em C#?", opts: ["double", "float", "decimal", "money"], ans: 2 },
        { q: "O que 'var' faz em C#?", opts: ["Cria variável global", "Infere o tipo automaticamente", "Declara variável sem tipo", "Cria constante"], ans: 1 },
        { q: "Sufixo para literal decimal em C#:", opts: ["d", "f", "m", "l"], ans: 2 },
        { q: "Como declarar constante em C#?", opts: ["final", "const", "static readonly", "Tanto const quanto readonly"], ans: 1 },
        { q: "Interpolação de string usa:", opts: ["$\"...\"", "@\"...\"", "#\"...\"", "%\"...\""], ans: 0 }
    ],
    2: [
        { q: "Console.ReadLine() retorna:", opts: ["int", "char", "string", "object"], ans: 2 },
        { q: "int.TryParse() retorna:", opts: ["int", "string", "bool", "void"], ans: 2 },
        { q: "Para não pular linha ao escrever:", opts: ["Console.Write()", "Console.Print()", "Console.Output()", "Console.Inline()"], ans: 0 },
        { q: "O que {valor:C2} faz?", opts: ["Arredonda para 2 casas", "Formata como moeda", "Converte para char", "Comprime string"], ans: 1 },
        { q: "StringBuilder é mais eficiente quando:", opts: ["Lendo arquivos", "Concatenando muitas strings", "Usando LINQ", "Criando objetos"], ans: 1 }
    ],
    3: [
        { q: "Em C#, if(1) é:", opts: ["Válido (true)", "Válido (false)", "Erro de compilação", "Warning"], ans: 2 },
        { q: "O operador ?? é chamado:", opts: ["Ternário", "Null-coalescing", "Elvis operator", "Condicional"], ans: 1 },
        { q: "int? significa:", opts: ["int opcional", "int nullable (pode ser null)", "int negativo", "Erro"], ans: 1 },
        { q: "switch expression usa:", opts: ["case/break", "=> para cada caso", "if/else", "return/goto"], ans: 1 },
        { q: "Qual keyword é o 'default' no switch expression?", opts: ["default", "else", "_ (underscore)", "other"], ans: 2 }
    ],
    4: [
        { q: "foreach funciona com:", opts: ["Só arrays", "Só List<T>", "Qualquer IEnumerable", "Só strings"], ans: 2 },
        { q: "Array.Sort() ordena:", opts: ["Cria novo array", "Modifica in-place", "Retorna lista", "Filtra elementos"], ans: 1 },
        { q: "Índice do primeiro elemento de array:", opts: ["1", "-1", "0", "Depende do tipo"], ans: 2 },
        { q: "Diferença entre for e foreach:", opts: ["For usa índice, foreach itera diretamente", "Foreach é mais lento", "For só funciona com int", "Não há diferença"], ans: 0 },
        { q: "Arrays em C# têm tamanho:", opts: ["Dinâmico", "Fixo após criação", "Máximo de 100", "Definido em runtime"], ans: 1 }
    ],
    5: [
        { q: "Método com arrow (=>) é chamado:", opts: ["Lambda method", "Expression body", "Arrow function", "Inline method"], ans: 1 },
        { q: "Sobrecarga de método é:", opts: ["Mesmo método em classes diferentes", "Mesmo nome, parâmetros diferentes", "Override em subclasse", "Método virtual"], ans: 1 },
        { q: "Parâmetro 'out' deve:", opts: ["Ser inicializado antes da chamada", "Ser atribuído dentro do método", "Ser readonly", "Ser string"], ans: 1 },
        { q: "Construtor em C#:", opts: ["Tem tipo de retorno void", "Tem mesmo nome da classe, sem retorno", "É sempre static", "Só pode ter um por classe"], ans: 1 },
        { q: "Recursão precisa obrigatoriamente de:", opts: ["Loop interno", "Caso base", "Parâmetro ref", "Método static"], ans: 1 }
    ],
    6: [
        { q: "Encapsulamento em C# usa:", opts: ["Classes abstratas", "Modificadores de acesso (public/private)", "Interfaces", "Generics"], ans: 1 },
        { q: "Auto-property é:", opts: ["{ get; set; } sem corpo", "Campo public", "Propriedade static", "Método virtual"], ans: 0 },
        { q: "Membros static pertencem à:", opts: ["Instância do objeto", "Classe (não ao objeto)", "Interface", "Namespace"], ans: 1 },
        { q: "Composição é quando:", opts: ["Classe herda de outra", "Classe contém outro objeto", "Classe implementa interface", "Método chama a si mesmo"], ans: 1 },
        { q: "override ToString() muda:", opts: ["Nome da classe", "Como o objeto é representado como string", "Hashcode", "Comparação"], ans: 1 }
    ],
    7: [
        { q: "Herança usa a sintaxe:", opts: ["class Filho implements Pai", "class Filho extends Pai", "class Filho : Pai", "class Filho(Pai)"], ans: 2 },
        { q: "Classe abstrata:", opts: ["Pode ser instanciada", "Não pode ser instanciada", "Não pode ter métodos", "Não suporta herança"], ans: 1 },
        { q: "Para sobrescever método da pai em C#:", opts: ["Apenas reescrever o método", "Usar override (e pai precisa ser virtual)", "Usar new", "Usar base"], ans: 1 },
        { q: "Interface vs Classe Abstrata:", opts: ["Interface pode ter implementação, abstrata não", "Classe pode implementar várias interfaces", "Ambas podem ser instanciadas", "Não há diferença"], ans: 1 },
        { q: "is keyword em C# verifica:", opts: ["Se variável é null", "Se objeto é de determinado tipo", "Se propriedade existe", "Se interface é implementada"], ans: 1 }
    ],
    8: [
        { q: "List<T> vs Array:", opts: ["Array é mais lento", "List<T> é dinâmico, array tem tamanho fixo", "List não tem índice", "São idênticos"], ans: 1 },
        { q: "Dictionary<K,V>.TryGetValue:", opts: ["Lança exceção se não encontrar", "Retorna false se não encontrar", "Retorna null se não encontrar", "Retorna default(V) via exceção"], ans: 1 },
        { q: "LINQ Where() serve para:", opts: ["Ordenar", "Filtrar elementos", "Somar valores", "Transformar elementos"], ans: 1 },
        { q: "LINQ Select() serve para:", opts: ["Filtrar", "Ordenar decrescente", "Transformar/projetar cada elemento", "Agrupar"], ans: 2 },
        { q: "Lambda em C# usa:", opts: ["->", "=>", "::", "=>() "], ans: 1 }
    ],
    9: [
        { q: "try-catch-finally: finally executa:", opts: ["Só se der exceção", "Só se não der exceção", "Sempre", "Depende do catch"], ans: 2 },
        { q: "async/await serve para:", opts: ["Paralelismo de threads", "Operações assíncronas sem bloquear thread", "Acelerar loops", "Compilação JIT"], ans: 1 },
        { q: "Task<T> representa:", opts: ["Uma thread", "Uma operação assíncrona que retorna T", "Um delegate", "Um timer"], ans: 1 },
        { q: "File.WriteAllText():", opts: ["Adiciona ao final do arquivo", "Sobrescreve o arquivo", "Lê o arquivo", "Cria pasta"], ans: 1 },
        { q: "Record em C# é:", opts: ["Igual a class", "Tipo imutável por valor com igualdade estrutural", "Equivalente a struct", "Apenas sintaxe nova para enum"], ans: 1 }
    ]
};

// ==================== CODE CHALLENGES ====================
const CHALLENGES = {
    0: {
        title: "Seu Primeiro Programa",
        desc: "Complete o código para imprimir 'Hello, C#!'",
        code: `// Complete o código C#
___1___.___2___("Hello, C#!");`,
        blanks: { "1": "Console", "2": "WriteLine" },
        output: "Hello, C#!"
    },
    1: {
        title: "Interpolação de String",
        desc: "Use interpolação de string para exibir nome e idade.",
        code: `string nome = "Ana";
int idade = 25;
Console.WriteLine(___1___"Olá, {___2___}! Você tem {___3___} anos.");`,
        blanks: { "1": "$", "2": "nome", "3": "idade" },
        output: "Olá, Ana! Você tem 25 anos."
    },
    2: {
        title: "TryParse Seguro",
        desc: "Complete a conversão segura de string para int.",
        code: `string entrada = "42";
if (int.___1___(entrada, out int numero)) {
    Console.WriteLine($"Dobro: {numero ___2___ 2}");
}`,
        blanks: { "1": "TryParse", "2": "*" },
        output: "Dobro: 84"
    },
    3: {
        title: "Switch Expression",
        desc: "Complete o switch expression para classificar notas.",
        code: `int nota = 85;
string conceito = nota ___1___ {
    >= 90 ___2___ "A",
    >= 70 => "B",
    _     => "C"
};
Console.WriteLine(conceito);`,
        blanks: { "1": "switch", "2": "=>" },
        output: "B"
    },
    4: {
        title: "LINQ Filtrar",
        desc: "Use LINQ para filtrar apenas números pares.",
        code: `var nums = new List<int> { 1, 2, 3, 4, 5, 6 };
var pares = nums.___1___(n => n % 2 == 0);
foreach (var n in ___2___) Console.Write(n + " ");`,
        blanks: { "1": "Where", "2": "pares" },
        output: "2 4 6 "
    },
    5: {
        title: "Propriedade Auto",
        desc: "Complete a auto-property com getter e setter.",
        code: `class Produto {
    public string Nome { ___1___; ___2___; }
    public double Preco { get; set; }
}
var p = new Produto { Nome = "Caneta", Preco = 2.50 };
Console.WriteLine($"{p.Nome}: R${p.Preco}");`,
        blanks: { "1": "get", "2": "set" },
        output: "Caneta: R$2,5"
    },
    6: {
        title: "Herança",
        desc: "Complete a herança e o override.",
        code: `class Animal {
    public virtual string FazerSom() => "...";
}
class Cachorro : ___1___ {
    public ___2___ string FazerSom() => "Au au!";
}
var d = new Cachorro();
Console.WriteLine(d.FazerSom());`,
        blanks: { "1": "Animal", "2": "override" },
        output: "Au au!"
    },
    7: {
        title: "Exceção Try-Catch",
        desc: "Complete o bloco de tratamento de exceção.",
        code: `___1___ {
    int[] arr = { 1, 2, 3 };
    Console.WriteLine(arr[10]);
} ___2___ (IndexOutOfRangeException ex) {
    Console.WriteLine("Índice inválido!");
}`,
        blanks: { "1": "try", "2": "catch" },
        output: "Índice inválido!"
    },
    8: {
        title: "Arquivo com File",
        desc: "Complete para escrever e ler um arquivo.",
        code: `File.___1___("teste.txt", "C# é incrível!");
string conteudo = File.___2___("teste.txt");
Console.WriteLine(conteudo);`,
        blanks: { "1": "WriteAllText", "2": "ReadAllText" },
        output: "C# é incrível!"
    },
    9: {
        title: "Async/Await",
        desc: "Complete o método assíncrono.",
        code: `___1___ Task<string> BuscarDado() {
    await Task.Delay(100);
    return "Dado carregado!";
}
string resultado = ___2___ BuscarDado();
Console.WriteLine(resultado);`,
        blanks: { "1": "async", "2": "await" },
        output: "Dado carregado!"
    }
};

// Challenge state
let currentChallengeLevel = 0;
let challengeAnswers = {};
const CHALLENGE_KEY = 'vibecode_challenges';
const XP_PER_CHALLENGE = 30;

function getChallengeProgress() {
    return JSON.parse(localStorage.getItem(CHALLENGE_KEY) || '{}');
}

function isChallengeCompleted(level) {
    return getChallengeProgress()[level] === true;
}

function saveChallengeProgress(level) {
    const progress = getChallengeProgress();
    progress[level] = true;
    localStorage.setItem(CHALLENGE_KEY, JSON.stringify(progress));
}


// ==================== XP SYSTEM ====================
function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }

function addXP(amount) {
    const oldLevel = getUserLevel(getXP());
    const newXP = getXP() + amount;
    localStorage.setItem(XP_KEY, newXP.toString());
    const newLevel = getUserLevel(newXP);
    if (newLevel.name !== oldLevel.name) {
        showToast(`🎉 Novo nível: ${newLevel.name} !`);
        triggerConfetti();
    }
    updateXPUI();
}

function getUserLevel(xp) {
    let level = LEVELS[0];
    for (const l of LEVELS) { if (xp >= l.minXP) level = l; }
    return level;
}

function getNextLevelXP(xp) {
    for (const l of LEVELS) { if (xp < l.minXP) return l.minXP - xp; }
    return 0;
}

function updateXPUI() {
    const xp = getXP();
    const level = getUserLevel(xp);
    document.getElementById('xp-amount').textContent = `${xp} XP`;
    document.getElementById('user-level-badge').textContent = level.name;
    document.getElementById('total-xp').textContent = xp;
    document.getElementById('user-level').textContent = level.name;
    document.getElementById('next-level-xp').textContent = getNextLevelXP(xp) || 'MAX';
}

// ==================== ACHIEVEMENTS ====================
function getUnlockedAchievements() { return JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || '[]'); }

function unlockAchievement(id) {
    const unlocked = getUnlockedAchievements();
    if (!unlocked.includes(id)) {
        unlocked.push(id);
        localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(unlocked));
        const ach = ACHIEVEMENTS.find(a => a.id === id);
        if (ach) showToast(`${ach.icon} ${ach.name} !`);
    }
}

function checkAchievements() {
    const progress = getProgress();
    const xp = getXP();
    const unlocked = getUnlockedAchievements();
    for (const ach of ACHIEVEMENTS) {
        if (!unlocked.includes(ach.id) && ach.check(progress, xp)) unlockAchievement(ach.id);
    }
    renderAchievements();
}

function getLevelProgress(progress, level) {
    let count = 0;
    for (let i = 1; i <= 10; i++) { if (progress[`${level}.${i} `]) count++; }
    return count;
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    if (!grid) return;
    const unlocked = getUnlockedAchievements();
    grid.innerHTML = ACHIEVEMENTS.map(ach => `
    < div class="achievement-card ${unlocked.includes(ach.id) ? 'unlocked' : ''}" >
            <div class="icon">${ach.icon}</div>
            <div class="name">${ach.name}</div>
            <div class="desc">${ach.desc}</div>
        </div >
    `).join('');
}

function openAchievements() {
    renderAchievements();
    document.getElementById('achievements-panel').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAchievements() {
    document.getElementById('achievements-panel').classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== CONFETTI ====================
function triggerConfetti() {
    if (typeof confetti !== 'undefined') {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
}

function triggerLevelCompleteConfetti() {
    if (typeof confetti === 'undefined') return;
    const end = Date.now() + 2000;
    (function frame() {
        confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}

// ==================== THEME ====================
function getTheme() { return localStorage.getItem(THEME_KEY) || 'dark'; }

function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    document.body.classList.toggle('light-mode', theme === 'light');
    const icon = document.getElementById('theme-icon');
    if (icon) icon.className = theme === 'light' ? 'bx bx-moon' : 'bx bx-sun';
}

function toggleTheme() { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

// ==================== PROGRESS SYSTEM ====================
function getProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
}

function saveProgress(lessonId) {
    const progress = getProgress();
    const wasNew = !progress[lessonId];
    progress[lessonId] = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

    if (wasNew) {
        addXP(XP_PER_LESSON);
        const [level] = lessonId.split('.');
        if (getLevelProgress(progress, parseInt(level)) === 10) {
            addXP(XP_PER_LEVEL_COMPLETE);
            triggerLevelCompleteConfetti();
            showToast(`🎉 Level ${level} completo! + ${XP_PER_LEVEL_COMPLETE} XP`);
        }
        checkAchievements();
    }
    updateAllProgressUI();
}

function isCompleted(lessonId) { return getProgress()[lessonId] === true; }
function getCompletedCount() { return Object.keys(getProgress()).length; }

// ==================== UI UPDATES ====================
function updateAllProgressUI() {
    const progress = getProgress();
    const completedCount = getCompletedCount();
    const percentage = (completedCount / 100) * 100;

    document.getElementById('global-progress-text').textContent = `${completedCount}/100`;
    document.getElementById('global-progress-ring').setAttribute('stroke-dasharray', `${percentage}, 100`);
    const gpf = document.getElementById('global-progress-fill');
    if (gpf) gpf.style.width = `${percentage}%`;

    for (let level = 0; level <= 9; level++) {
        const levelCompleted = getLevelProgress(progress, level);
        const pt = document.querySelector(`.progress-text[data-level="${level}"]`);
        const pf = document.querySelector(`.fill[data-level="${level}"]`);
        if (pt) pt.textContent = `${levelCompleted}/10`;
        if (pf) pf.style.width = `${(levelCompleted / 10) * 100}%`;
    }

    document.querySelectorAll('.lesson-item').forEach(item => {
        item.classList.toggle('completed', !!progress[item.dataset.lesson]);
    });
    updateXPUI();
}

// ==================== MODAL FUNCTIONS ====================
function openLesson(id) {
    const data = lessonsData[id];
    if (!data) { showToast('Aula em desenvolvimento...'); return; }

    currentLessonId = id;
    document.getElementById('modal-lesson-id').textContent = id;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-body').innerHTML = data.body;
    document.getElementById('modal-code').textContent = data.code;

    const terminalBlock = document.getElementById('terminal-block');
    const terminalOutput = document.getElementById('terminal-output');
    if (data.output) {
        terminalBlock.style.display = 'block';
        terminalOutput.textContent = '$ ./programa\n' + data.output;
    } else {
        terminalBlock.style.display = 'none';
    }

    const completeBtn = document.getElementById('complete-btn');
    if (isCompleted(id)) {
        completeBtn.innerHTML = '<i class="bx bx-check-double"></i> Concluída!';
        completeBtn.classList.add('completed');
    } else {
        completeBtn.innerHTML = '<i class="bx bx-check"></i> Marcar como Concluída';
        completeBtn.classList.remove('completed');
    }

    updateNavButtons();
    document.getElementById('lesson-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('lesson-modal').classList.remove('active');
    document.body.style.overflow = '';
    currentLessonId = null;
}

function completeLesson() {
    if (!currentLessonId || isCompleted(currentLessonId)) return;
    saveProgress(currentLessonId);
    const completeBtn = document.getElementById('complete-btn');
    completeBtn.innerHTML = '<i class="bx bx-check-double"></i> Concluída!';
    completeBtn.classList.add('completed');
    showToast(`Aula concluída! +${XP_PER_LESSON} XP`);
}

// ==================== NAVIGATION ====================
function getLessonOrder() {
    const order = [];
    for (let l = 0; l <= 6; l++) for (let i = 1; i <= 10; i++) order.push(`${l}.${i}`);
    return order;
}

function updateNavButtons() {
    const order = getLessonOrder();
    const idx = order.indexOf(currentLessonId);
    document.getElementById('prev-btn').disabled = idx <= 0;
    document.getElementById('next-btn').disabled = idx >= order.length - 1;
}

function prevLesson() {
    const order = getLessonOrder();
    const idx = order.indexOf(currentLessonId);
    if (idx > 0) openLesson(order[idx - 1]);
}

function nextLesson() {
    const order = getLessonOrder();
    const idx = order.indexOf(currentLessonId);
    if (idx < order.length - 1) openLesson(order[idx + 1]);
}

// ==================== UTILITIES ====================
function copyCode() {
    navigator.clipboard.writeText(document.getElementById('modal-code').textContent)
        .then(() => showToast('Código copiado!'));
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    setTheme(getTheme());
    updateAllProgressUI();
    renderAchievements();

    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => openLesson(item.dataset.lesson));
    });

    document.querySelector('.modal-overlay')?.addEventListener('click', closeModal);
    document.querySelector('.achievements-overlay')?.addEventListener('click', closeAchievements);
    document.querySelector('#quiz-modal .modal-overlay')?.addEventListener('click', closeQuiz);
    document.querySelector('#editor-modal .modal-overlay')?.addEventListener('click', closeEditor);

    document.addEventListener('keydown', (e) => {
        if (document.getElementById('quiz-modal').classList.contains('active')) {
            if (e.key === 'Escape') closeQuiz();
            return;
        }
        if (document.getElementById('editor-modal').classList.contains('active')) {
            if (e.key === 'Escape') closeEditor();
            return;
        }
        if (document.getElementById('achievements-panel').classList.contains('active')) {
            if (e.key === 'Escape') closeAchievements();
            return;
        }
        if (document.getElementById('lesson-modal').classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') prevLesson();
            if (e.key === 'ArrowRight') nextLesson();
        }
    });
});


// ==================== QUIZ SYSTEM ====================
function getQuizProgress() {
    return JSON.parse(localStorage.getItem(QUIZ_KEY) || '{}');
}

function isQuizCompleted(level) {
    return getQuizProgress()[level] === true;
}

function saveQuizProgress(level) {
    const progress = getQuizProgress();
    progress[level] = true;
    localStorage.setItem(QUIZ_KEY, JSON.stringify(progress));
}

function openQuiz(level) {
    currentQuizLevel = level;
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedOption = null;

    document.getElementById('quiz-level-tag').textContent = `Level ${level}`;
    document.getElementById('quiz-result').style.display = 'none';
    document.querySelector('.quiz-body').style.display = 'block';
    document.querySelector('.quiz-progress').style.display = 'flex';
    document.getElementById('quiz-submit-btn').textContent = 'Confirmar';
    document.getElementById('quiz-submit-btn').innerHTML = '<i class="bx bx-check"></i> Confirmar';

    renderQuestion();
    document.getElementById('quiz-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderQuestion() {
    const questions = QUIZ_DATA[currentQuizLevel];
    const q = questions[currentQuestionIndex];

    document.getElementById('quiz-progress-text').textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('quiz-progress-fill').style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    document.getElementById('quiz-question').textContent = q.q;

    const optionsContainer = document.getElementById('quiz-options');
    const letters = ['A', 'B', 'C', 'D'];
    optionsContainer.innerHTML = q.opts.map((opt, i) => `
        <div class="quiz-option" onclick="selectQuizOption(${i})" data-index="${i}">
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt}</span>
        </div>
    `).join('');

    selectedOption = null;
    document.getElementById('quiz-submit-btn').disabled = true;
}

function selectQuizOption(index) {
    document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    document.querySelector(`.quiz-option[data-index="${index}"]`).classList.add('selected');
    selectedOption = index;
    document.getElementById('quiz-submit-btn').disabled = false;
}

function submitQuizAnswer() {
    if (selectedOption === null) return;

    const questions = QUIZ_DATA[currentQuizLevel];
    const correct = questions[currentQuestionIndex].ans;

    // Show correct/wrong
    document.querySelectorAll('.quiz-option').forEach((opt, i) => {
        if (i === correct) opt.classList.add('correct');
        if (i === selectedOption && i !== correct) opt.classList.add('wrong');
    });

    if (selectedOption === correct) quizScore++;

    // Disable further selection
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    // Next question or show results
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            showQuizResult();
        }
    }, 1000);
}

function showQuizResult() {
    const total = QUIZ_DATA[currentQuizLevel].length;
    const passed = quizScore >= Math.ceil(total * 0.6); // 60% to pass

    document.querySelector('.quiz-body').style.display = 'none';
    document.querySelector('.quiz-progress').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    if (passed) {
        document.getElementById('result-icon').textContent = '🎉';
        document.getElementById('result-title').textContent = 'Parabéns!';
        document.getElementById('result-text').textContent = `Você acertou ${quizScore}/${total} perguntas!`;
        document.getElementById('result-xp').textContent = `+${XP_PER_QUIZ} XP`;
        document.getElementById('result-xp').style.display = 'block';

        if (!isQuizCompleted(currentQuizLevel)) {
            saveQuizProgress(currentQuizLevel);
            addXP(XP_PER_QUIZ);
            triggerConfetti();
        }
    } else {
        document.getElementById('result-icon').textContent = '😥';
        document.getElementById('result-title').textContent = 'Quase lá!';
        document.getElementById('result-text').textContent = `Você acertou ${quizScore}/${total}. Precisa de ${Math.ceil(total * 0.6)} para passar.`;
        document.getElementById('result-xp').style.display = 'none';
    }

    document.getElementById('quiz-submit-btn').innerHTML = '<i class="bx bx-x"></i> Fechar';
    document.getElementById('quiz-submit-btn').onclick = closeQuiz;
    document.getElementById('quiz-submit-btn').disabled = false;
}

function closeQuiz() {
    document.getElementById('quiz-modal').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('quiz-submit-btn').onclick = submitQuizAnswer;
}


// ==================== CODE EDITOR ====================
function openEditor() {
    document.getElementById('editor-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEditor() {
    document.getElementById('editor-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function runCode() {
    const code = document.getElementById('code-input').value;
    const output = document.getElementById('editor-output');

    // Simulate compilation
    output.textContent = '$ gcc main.c -o programa\n$ ./programa\n';

    // Simple pattern matching for common outputs
    const printfMatch = code.match(/printf\s*\(\s*"([^"]*)"/g);
    if (printfMatch) {
        const outputs = printfMatch.map(p => {
            let text = p.match(/"([^"]*)"/)[1];
            text = text.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
            return text;
        });
        output.textContent += outputs.join('');
    } else {
        output.textContent += '(sem saída)';
    }

    showToast('Código executado!');
}

// ==================== CODE CHALLENGES ====================
function openChallenge(level) {
    const challenge = CHALLENGES[level];
    if (!challenge) return;

    currentChallengeLevel = level;
    challengeAnswers = {};

    const modal = document.getElementById('challenge-modal');
    if (!modal) return;

    document.getElementById('challenge-title').textContent = challenge.title;
    document.getElementById('challenge-desc').textContent = challenge.desc;
    document.getElementById('challenge-output').textContent = `Saída esperada: ${challenge.output}`;

    // Render code with input fields
    renderChallengeCode(challenge);

    // Reset result
    document.getElementById('challenge-result').style.display = 'none';
    document.getElementById('challenge-submit-btn').disabled = false;
    document.getElementById('challenge-submit-btn').textContent = 'Verificar';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderChallengeCode(challenge) {
    const container = document.getElementById('challenge-code');
    let html = challenge.code;

    // Replace blanks with input fields
    Object.keys(challenge.blanks).forEach(key => {
        const placeholder = `___${key}___`;
        const inputHtml = `<input type="text" class="code-blank" data-blank="${key}" placeholder="?" autocomplete="off" spellcheck="false">`;
        html = html.replace(placeholder, inputHtml);
    });

    container.innerHTML = `<pre><code>${html}</code></pre>`;

    // Add event listeners
    container.querySelectorAll('.code-blank').forEach(input => {
        input.addEventListener('input', (e) => {
            challengeAnswers[e.target.dataset.blank] = e.target.value.trim();
        });
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkChallenge();
        });
    });
}

function checkChallenge() {
    const challenge = CHALLENGES[currentChallengeLevel];
    let allCorrect = true;

    // Check each blank
    Object.keys(challenge.blanks).forEach(key => {
        const expected = challenge.blanks[key].toLowerCase();
        const answer = (challengeAnswers[key] || '').toLowerCase();
        const input = document.querySelector(`.code-blank[data-blank="${key}"]`);

        if (answer === expected) {
            input.classList.add('correct');
            input.classList.remove('wrong');
        } else {
            input.classList.add('wrong');
            input.classList.remove('correct');
            allCorrect = false;
        }
    });

    const result = document.getElementById('challenge-result');
    const resultIcon = document.getElementById('challenge-result-icon');
    const resultTitle = document.getElementById('challenge-result-title');
    const resultXP = document.getElementById('challenge-result-xp');

    result.style.display = 'block';

    if (allCorrect) {
        resultIcon.textContent = '🎉';
        resultTitle.textContent = 'Parabéns! Código correto!';

        if (!isChallengeCompleted(currentChallengeLevel)) {
            addXP(XP_PER_CHALLENGE);
            saveChallengeProgress(currentChallengeLevel);
            resultXP.textContent = `+${XP_PER_CHALLENGE} XP`;
            resultXP.style.display = 'block';
            triggerConfetti();
        } else {
            resultXP.textContent = 'Já completado';
            resultXP.style.display = 'block';
        }

        document.getElementById('challenge-submit-btn').textContent = 'Fechar';
        document.getElementById('challenge-submit-btn').onclick = closeChallenge;
    } else {
        resultIcon.textContent = '❌';
        resultTitle.textContent = 'Algumas respostas estão incorretas...';
        resultXP.style.display = 'none';
    }
}

function closeChallenge() {
    const modal = document.getElementById('challenge-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    // Reset submit button
    const btn = document.getElementById('challenge-submit-btn');
    if (btn) {
        btn.onclick = checkChallenge;
        btn.textContent = 'Verificar';
    }
}
