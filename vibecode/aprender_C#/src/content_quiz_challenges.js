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
