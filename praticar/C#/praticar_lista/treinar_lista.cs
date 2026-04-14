// arquivo pra eu treinar lista em C#

// adicionando nomes na lista
List<string> pessoas = new List<string>();

for (int i=0; i < 5; i++) {
    Console.WriteLine("Digite o nome da proxima pessoa a ser adicionada:");
    string nova_pessoa = Console.ReadLine()!;
    pessoas.Add(nova_pessoa);
}

for (int i=0; i < pessoas.Count; i++) {
    Console.WriteLine($"{i + 1} - {pessoas[i]}");
}