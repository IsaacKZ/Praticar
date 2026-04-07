bool rodar = true;

// Converte quilometros para metros.
void distancia() { // Função de conversão (distância)
    try {
        Console.WriteLine("Digite um valor em KM's");
        double quilometros = double.Parse(Console.ReadLine()!);
        double metros = (quilometros * 1000);
        Console.WriteLine($"O valor de {quilometros} em metros é: {metros}");
}   catch (FormatException) { // Tratamento de exceção
        Console.WriteLine("Erro ao converter! Caractere inválido!");
    }
    catch (Exception erro) {
        Console.WriteLine(erro.Message);
    }
}

// Converte celsius para fahrenheit e kelvin.
void temperatura() { // Função de conversão (temperatura)
    try {
        Console.WriteLine("Digite uma temperatura em Celsius");
        double celsius = double.Parse(Console.ReadLine()!);
        double fahrenheit = (celsius * 1.8 + 32);
        double kelvin = (celsius + 273.15);
        Console.WriteLine($"O valor de {celsius} em celsius para fahrenheit é {fahrenheit}");
        Console.WriteLine($"O valor de {celsius} em celsius para Kelvin é {kelvin}");
}   catch (FormatException) { // Tratamento de exceção
        Console.WriteLine("Erro ao converter! Caractere inválido!");
    }
    catch (Exception erro) {
        Console.WriteLine(erro.Message);
    }
}

// Converte gramas para outras unidades de massa.
void peso() {
    try {
        Console.WriteLine("Digite o peso em gramas");
        double gramas = double.Parse(Console.ReadLine()!);
        double quilogramas = (gramas / 1000);
        double libras = (gramas / 453.592);
        double toneladas = (quilogramas / 1000);
        Console.WriteLine($"O valor de gramas ({gramas}) em quilogramas é: {quilogramas:F2}");
        Console.WriteLine($"O valor de gramas ({gramas}) em libras é: {libras:F2}");
        Console.WriteLine($"O valor de gramas ({gramas}) em toneladas é: {toneladas:F2}");
}   catch (FormatException) { // Tratamento de exceção
        Console.WriteLine("Erro ao converter! Caractere inválido!");
    }
    catch (Exception erro) {
        Console.WriteLine(erro.Message);
    }
}


// Converte velocidade entre m/s e km/h.
void velocidade() {
    try {
        Console.WriteLine("A velocidade para ser convertida é em metros/s ou km/h?");
        Console.WriteLine("1 - Metros por Segundo");
        Console.WriteLine("2 - Quilometros por hora");
        int escolha = int.Parse(Console.ReadLine()!);

        if (escolha == 1) {
            Console.WriteLine("Digite a velocidade! (metros/s)");
            double velocidade = double.Parse(Console.ReadLine()!);
            Console.WriteLine($"Sua velocidade em km/h é {(velocidade * 3.6)}!!");
        } else if (escolha == 2) {
            Console.WriteLine("Digite a velocidade! (Km/h)");
            double velocidade = double.Parse(Console.ReadLine()!);
            Console.WriteLine($"Sua velocidade em metros/s é {(velocidade / 3.6)}!!");
        } else {
            Console.WriteLine("Opção inválida! Escolha 1 ou 2.");
        }
    } catch (FormatException) {
        Console.WriteLine("Erro ao converter! Caractere inválido!");
    } catch (Exception erro) {
        Console.WriteLine(erro.Message);
    }
}


// Exibe o menu principal e chama a função escolhida.
void menu() { // Menu
    try {
        Console.WriteLine("Escolha uma função!\n");
        Console.WriteLine("0 - Sair do programa");
        Console.WriteLine("1 - Conversor de distâncias");
        Console.WriteLine("2 - Conversor de temperatura");
        Console.WriteLine("3 - Conversor de peso");
        Console.WriteLine("4 - Conversor de velocidade");
        Console.WriteLine("Escolha um (Use apenas número");
        int escolha = int.Parse(Console.ReadLine()!);

        switch (escolha) {

            case 0:
                rodar = false;
                break;

            case 1:
                distancia();
                break;

            case 2:
                temperatura();
                break;

            case 3:
                peso();
                break;

            case 4:
                velocidade();
                break;

            default:
                Console.WriteLine("Algo deu errado! Tente novamente!");
                break;
        }
    } catch (FormatException) {
        Console.WriteLine("Erro ao converter! Caractere inválido!");
    } catch (Exception erro) {
        Console.WriteLine(erro.Message);
    }
}


while (rodar == true) { // Sempre chama o menu quando sai das funções
    // Mantém o programa ativo até o usuário escolher sair.
    menu();
}