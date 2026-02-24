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
