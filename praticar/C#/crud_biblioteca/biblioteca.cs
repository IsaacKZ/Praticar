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

void adicionarLivro() {

}