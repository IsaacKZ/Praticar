class Animal:
    def __init__(self, porte, raca, cor):
        self.porte = porte
        self.raca = raca
        self.cor = cor

def mostrar_info(self):
    print("Informações dos animais:")
    print(f"Porte: {self.porte}")
    print(f"Raça: {self.raca}")
    print(f"Cor: {self.cor}")

# criando objeto da classe
katy = Animal(porte = "Pequeno", raca = "Vira lata", cor = "Preto")
jorge = Animal(porte = "Grande", raca = "Golden Retriever", cor = "Dourado esbranquiçado")

mostrar_info(jorge)