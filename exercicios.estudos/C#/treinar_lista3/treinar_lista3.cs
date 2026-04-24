// arquivo para treinar "List" (tambem um pouco de POO)
// Menu de tarefas
static List<Tarefa> tarefas = new List<Tarefa>();

static void adicionar_tarefa() { // atribuindo variáveis para adicionar a lista
    Console.WriteLine("Digite o nome da tarefa!");
    var tarefa_nome = Console.ReadLine();
    Console.WriteLine("Digite a prioridade da tarefa!");
    var tarefa_prioridade = int.Parse(Console.ReadLine());
    Console.WriteLine("Digite a descrição da tarefa!");
    var tarefa_desc = Console.ReadLine();

    if (tarefa_nome != "" && tarefa_desc != "" && tarefa_prioridade >= 1 && tarefa_prioridade <= 3) { // validação de campos
        Tarefa nova_tarefa = new Tarefa(); // cria espaço na memoria para adicionar uma nova tarefa
        nova_tarefa.nome = tarefa_nome;
        nova_tarefa.prioridade = tarefa_prioridade;
        nova_tarefa.descricao = tarefa_desc;
        tarefas.Add(nova_tarefa); // adiciona as tarefas na lista
}   else {
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }

static void listar_tarefas() {
    Console.WriteLine("--- Tarefas ---");
    foreach (Tarefa item in tarefas) { // loop "for" simplificado
        Console.WriteLine($"Nome - {tarefa.nome} | Prioridade - {tarefa.prioridade} | Concluida - {tarefa.concluida}");
        Console.WriteLine($"Descrição - {tarefa.descricao}");
        Console.WriteLine("------------");
    }
}

static void selecionar_tarefa() {
    listar_tarefas();
    Console.WriteLine("Digite o número da tarefa que deseja selecionar: ");
        int pos = int.Parse(Console.ReadLine()!) - 1; // "- 1" pois index começa em 0
        return pos; // salva a variavel
}

static void excluir_tarefa() {
    int pos = selecionar_tarefa();

    if (pos >= 0 && pos <= tarefas.Count) {
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

static void menu() {
    // terminar depois
}

while (true) {
    menu();
    }
}

class Tarefa {
    public string? nome;
    public int prioridade; // 1 até 3 (menor = maior prioridade)
    public string? descricao;
    public bool concluida;
}

