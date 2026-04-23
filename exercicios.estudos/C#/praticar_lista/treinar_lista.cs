// arquivo pra eu treinar lista em C#

List<string> pessoas = new List<string>(); // declarando variavel lista
bool rodando = true;

void listar_pessoas() { // Mostrar todas as pessoas na lista
    try
    {
        {
            for (int i = 0; i < pessoas.Count; i++)
            {
                Console.WriteLine($"{i + 1} - {pessoas[i]}");
            }
        }
    }
    catch (Exception.erro)
    {
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }
}

int selecionar_pessoa()
{
    listar_pessoas();
    int pos = int.Parse(Console.ReadLine()!);
    return pos;
}

void adicionar_pessoas()  // adicionar pessoas na lista 
{
    try
    {
        Console.WriteLine("Digite o nome da proxima pessoa a ser adicionada:"); // adicionando nomes na lista
        string nova_pessoa = Console.ReadLine()!;
        pessoas.Add(nova_pessoa);
        Console.WriteLine("Pessoa adicionada com sucesso! Lista atualizada:");
        listar_pessoas();
    }
    catch (Exception.erro)
    {
        Console.WriteLine(erro.Message);
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }
}

void remover_pessoas() { // Remover pessoas da lista
    try
    {
        Console.WriteLine("Digite o número da pessoa que deseja remover: ");
        int pos = selecionar_pessoa();

        if (pos > pessoas.Count || pos < 1)
        {
            Console.WriteLine("Erro! Retornando ao menu...");
            return;
        }
        else
        {
            pessoas.RemoveAt(pos - 1);
            Console.WriteLine("Pessoa removida com sucesso! Lista Atualizada: ");
            listar_pessoas();
        }
    }
    catch (Exception.erro)
    {
        Console.WriteLine(erro.Message);
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }
}

void modificar_pessoa() { // Modificar uma pessoa existente na lista{ try
    try
    {
        int pos = selecionar_pessoa();
        Console.WriteLine("Escolha o número da pessoa que deseja alterar");
        if (pos > pessoas.Count || pos < 1)
        {
            Console.WriteLine("Erro! Retornando ao menu...");
            return;
        }

    else
    {
        Console.WriteLine("Digite o novo nome da pessoa: (Digite 0 para cancelar) ");
        string novo_nome = Console.ReadLine()!;

        if (novo_nome != "0")
        {
            pessoas[pos - 1] = novo_nome!;
            Console.WriteLine("Pessoa modificada com sucesso!");
        }
        else
        {
            Console.WriteLine("Retornando ao menu...");
            return;
        }
    }
}

void menu() // Menu para escolher o que fazer
{
    Console.WriteLine("--- MENU ---");
    Console.WriteLine("1 - Adicionar pessoas");
    Console.WriteLine("2 - Remover pessoas");
    Console.WriteLine("3 - Modificar pessoas");
    Console.WriteLine("4 - Listar pessoas");
    Console.WriteLine("5 - Sair do programa");
    int escolha = int.Parse(Console.ReadLine()!);

        switch (escolha)
        {
            case 1:
                adicionar_pessoas();
                break;

            case 2:
                remover_pessoas();
                break;

            case 3:
                modificar_pessoa();
                break;

            case 4:
                listar_pessoas();
                break;

            case 5:
                rodando = false;
                break;
        }
    }
    catch (Exception.erro)
    {
        Console.WriteLine(erro.Message);
        Console.WriteLine("Erro! Retornando ao menu...");
        return;
    }
}

while (rodando == true)
{
    menu();
}