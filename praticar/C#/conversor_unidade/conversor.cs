static void distancia() { // Função de conversão (distância)
    Console.WriteLine("Digite um valor em KM's");
    double quilometros = double.Parse(Console.ReadLine());
    double metros = (quilometros * 1000);
    Console.WriteLine($"O valor de {quilometros} em metros é: {metros}");
}

static void temperatura() { // Função de conversão (temperatura)
    Console.WriteLine("Digite uma temperatura em Celsius");
    double celsius = double.Parse(Console.ReadLine());
    double fahrenheit = (celsius * 1.8 + 32);
    double kelvin = (celsius + 273.15);
    Console.WriteLine($"O valor de {celsius} em celsius para fahrenheit é {fahrenheit}");
    Console.WriteLine($"O valor de {celsius} em celsius para Kelvin é {kelvin}");
}

static void menu() { // Menu
    Console.WriteLine("Escolha uma função!\n");
    Console.Writeline("0 - Sair do programa")
    Console.WriteLine("1 - Conversor de distâncias");
    Console.WriteLine("2 - Conversor de temperatura");
    Console.WriteLine("Escolha um (Use apenas número");
    int escolha = int.Parse(Console.ReadLine());

    switch (escolha) {

        case 0:
            break;

        case 1:
            distancia();
            break;
        
        case 2:
            temperatura();
            break;

        default:
            Console.WriteLine("Algo deu errado! Tente novamente!");
            break;
    }
}

while (true) { // Sempre chama o menu quando sai das funções
    menu();
}