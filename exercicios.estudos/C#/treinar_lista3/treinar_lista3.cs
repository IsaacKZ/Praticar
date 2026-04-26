// arquivo para treinar "List" (tambem um pouco de POO)
// Se trata de um Menu de tarefas
class Program {

static bool rodar = true;
static List<Tarefa> tarefas = new List<Tarefa>();

static void Main() {
while (rodar == true) {
    menu();
    }
}

static void adicionar_tarefa() { // atribuindo variáveis para adicionar a lista
    Console.WriteLine("Digite o nome da tarefa!");
    var tarefa_nome = Console.ReadLine();
    Console.WriteLine("Digite a prioridade da tarefa! (entre 1 e 5)");
    var tarefa_prioridade = int.Parse(Console.ReadLine());
    Console.WriteLine("Digite a descrição da tarefa!");
    var tarefa_desc = Console.ReadLine();

    if (tarefa_nome != "" && tarefa_desc != "" && tarefa_prioridade >= 1 && tarefa_prioridade <= 5) { // validação de campos
        Tarefa nova_tarefa = new Tarefa(); // cria espaço na memoria para adicionar uma nova tarefa
        nova_tarefa.nome = tarefa_nome;
        nova_tarefa.prioridade = tarefa_prioridade;
        nova_tarefa.descricao = tarefa_desc;
        tarefas.Add(nova_tarefa); // adiciona as tarefas na lista
}   else {
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }
}

static void listar_tarefas() {
    Console.WriteLine("--- Tarefas ---");
    int i = 1;
    foreach (Tarefa tarefa in tarefas) { // loop "for" simplificado
        Console.WriteLine($"{i} - Nome - {tarefa.nome} | Prioridade - {tarefa.prioridade} | Concluida - {tarefa.concluida}");
        Console.WriteLine($"Descrição - {tarefa.descricao}");
        Console.WriteLine("------------");
        i++;
    }
}

static int selecionar_tarefa() {
    listar_tarefas();
    Console.WriteLine("Digite o número da tarefa que deseja selecionar: ");
        int pos = int.Parse(Console.ReadLine()!) - 1; // "- 1" pois index começa em 0
        return pos; // salva a variavel
}

static void excluir_tarefa() {
    int pos = selecionar_tarefa();

    if (pos >= 0 && pos < tarefas.Count) {
    tarefas.RemoveAt(pos);
    }

    else {
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }
}

static void concluir_tarefa() {
    int pos = selecionar_tarefa();

    if (pos >= 0 && pos < tarefas.Count) {
    tarefas[pos].concluida = true;
    }

    else {
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }
}

static void modificar_tarefa() {
    int pos = selecionar_tarefa();

    if (pos >= 0 && pos < tarefas.Count) {
        Console.WriteLine("O que deseja modificar?");
        Console.WriteLine("1 - Nome");
        Console.WriteLine("2 - Descrição");
        Console.WriteLine("3 - Prioridade");
        int escolha = int.Parse(Console.ReadLine()!);

        switch (escolha) {
            case 1:
                Console.WriteLine("Digite o novo nome: ");
                string novo_nome = Console.ReadLine()!;
                tarefas[pos].nome = novo_nome;
                break;
            
            case 2:
                Console.WriteLine("Digite a nova descrição: ");
                string nova_desc = Console.ReadLine()!;
                tarefas[pos].descricao = nova_desc;
                break;

            case 3:
                Console.WriteLine("Digite a nova prioridade: ");
                int nova_prioridade = int.Parse(Console.ReadLine()!);
                tarefas[pos].prioridade = nova_prioridade;
                break;

            default:
                Console.WriteLine("Erro! Retornando ao menu...");
                break;
        }
    }

    else {
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }
}

static void menu() {
    Console.WriteLine("--- MENU ---");
    Console.WriteLine("1 - Adicionar tarefa");
    Console.WriteLine("2 - Excluir tarefa");
    Console.WriteLine("3 - Modificar tarefa");
    Console.WriteLine("4 - Marcar tarefa como concluída");
    Console.WriteLine("5 - Listar tarefas");
    Console.WriteLine("6 - Encerrar programa");
    int escolha = int.Parse(Console.ReadLine());

    switch (escolha) {
        case 1:
            adicionar_tarefa();
            break;
        case 2:
            excluir_tarefa();
            break;
        case 3:
            modificar_tarefa();
            break;
        case 4:
            concluir_tarefa();
            break;
        case 5:
            listar_tarefas();
            break;
        case 6:
            rodar = false;
            break;
        default:
            Console.WriteLine("Erro! Retornando ao menu...");
            return;
    }
}

class Tarefa {
    public string? nome;
    public int prioridade;
    public string? descricao;
    public bool concluida;
    }
}