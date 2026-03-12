class Alunos:
    def __init__(self, nome, nota, turma):
        self.nome = nome
        self.nota = nota
        self.turma = turma

    def aprovado(self):
        if self.nota >= 6:
            print(f" Aluno {self.nome} foi aprovado com nota {self.nota}!!")

eu = Alunos("Isaac", 7, "3.5") # atribuindo atributos
eu.aprovado() # chamando função

class Estudante(Alunos):
    def __init__(self, nome, nota, turma):
        super().__init__(nome, nota, turma) # <- para não precisar repetir os 3 atributos

    def onde(self):
        print(f"O aluno {self.nome} esta na turma {self.turma}")

turma = Estudante("Isaac", 7, "3.5")
turma.onde() # chamando função