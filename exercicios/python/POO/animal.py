# POLIMORFISMO

class Animal:
    def __init__(self, nome):
        self.nome = nome

    def barulho(self):
        print(f"fazendo som")

class Cachorro(Animal):
    def __init__(self, nome):
        super().__init__(nome)

    def barulho(self):
        print(f"O cachorro {self.nome} esta latindo!")

class Gato(Animal):
    def __init__(self, nome):
        super().__init__(nome)

    def barulho(self):
        print(f"O gato {self.nome} esta miando!")

cachorro = Cachorro("Jorge")
cachorro.barulho()

gato = Gato("Bolinha")
gato.barulho()