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
