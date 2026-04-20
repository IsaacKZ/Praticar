// treinar lista 2 (e um pouco de POO)
class MoldeProduto {
    public string nome;
    public int quantidade;
    public float preco;
}
class Program {

    static void Main(string[] args) {
        menu();
    }

    static List<MoldeProduto> lista_compras = new List<MoldeProduto>();

    static void adicionar_item() {
        MoldeProduto item = new MoldeProduto();
        Console.WriteLine("Digite o nome do produto: ");
        item.nome = Console.ReadLine()!;
        Console.WriteLine("Digite o preço (por produto): ");
        item.preco = float.Parse(Console.ReadLine()!);
        Console.WriteLine("Digite a quantidade do produto: ");
        item.quantidade = int.Parse(Console.ReadLine()!);

        lista_compras.Add(item);

        Console.WriteLine("Retornando ao menu...");
        menu();
    }

    static void listar_item() {
        int i = 1;
        foreach (MoldeProduto item in lista_compras) {
            Console.WriteLine($"Produto número {i}");
            Console.WriteLine("Nome: " + item.nome);
            Console.WriteLine("Quantidade: " + item.quantidade);
            Console.WriteLine("Preço: " + item.preco);
            Console.WriteLine();
            i++;
        }
    }

    static int selecionar_item() {
        listar_item();
        Console.WriteLine("Digite o número do item que deseja selecionar: ");
        int pos = int.Parse(Console.ReadLine()!) - 1;
        return pos;
    }

    static void remover_item() {
        int pos = selecionar_item();
        lista_compras.RemoveAt(pos);
        Console.WriteLine("Retornando ao menu...");
        menu();
    }

    static void menu() {
        Console.WriteLine("--- MENU ---");
        Console.WriteLine("1 - Adicionar item ao carrinho");
        Console.WriteLine("2 - Remover item");
        Console.WriteLine("3 - Encerrar programa");
        int escolha = int.Parse(Console.ReadLine()!);

        if (escolha == 1) {
            adicionar_item();
        }
        else if (escolha == 2) {
            remover_item();
        }
        else {
            return;
        }
    }
}