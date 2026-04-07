// CRUD de uma biblioteca. estou fazendo isso para me acostumar com C# e aprender POO mais profundamente.

class Livro {
    public int id;
    public string? titulo;
    public string? autor;
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