// CRUD de uma biblioteca. estou fazendo isso para me acostumar com C# e aprender POO mais profundamente.

class Livro {
    public int id;
    public string? titulo; // o "?" é para assumir o risco do valor ser nulo. 
    public string? autor; // porque caso não haja o "?", o compilador irá ficar alertando o possível erro (valor ser nulo)
    public string? genero;
    public bool disponivel;
}

class Emprestimo {
    public int idLivro;
    public DateTime dataEmprestimo;
    public DateTime dataDevolucao;
    public double multa;
}

List<Livro> livros = new List<Livro>();

int id = 1; // definição de id inicial

void adicionar_livro() {

    Console.WriteLine("Digite o nome do livro: ");
    string titulo = Console.ReadLine()!; // "!" para informar ao compilador que estou ciente do possivel "Null"
    Console.WriteLine("Digite o autor do livro: ");
    string autor = Console.ReadLine()!;
    Console.WriteLine("Digite o genero do livro: ");
    string genero = Console.ReadLine()!;
    var livro = new Livro(); // adicionando um MAIS um livro na Classe Livro
    livro.titulo = titulo; // atribuindo atributos do objeto
    livro.autor = autor;
    livro.genero = genero;
    livro.disponivel = true;
    livro.id = id;
        
    id++; // Adiciona "1" ao id para o proximo livro sempre ter um id diferente e maior do que o anterior

    livros.Add(livro); // adiciona na Lista
    Console.WriteLine("Livro adicionado");
}

void listar_livros() {
    foreach (var livro in livros) {
        Console.WriteLine($"{livro.id} - {livro.titulo}");
    }
}

void remover_livro() {
    listar_livros();
    Console.WriteLine("Escolha um livro para remover (0 para cancelar)");
        int escolha = int.Parse(Console.ReadLine());

        if (escolha == 0) {
            return;
        }

        else if (escolha >= 1) {
            livros.RemoveAt(escolha);
        }

        else {
            Console.WriteLine("Opção indisponível");
            return;
        }
    }
