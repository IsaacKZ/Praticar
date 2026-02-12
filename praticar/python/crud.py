"""
arquivo python pra eu tentar fazer crud sozinho (sem inteligencia artificial)
tentarei fazer um gerenciamento de notas de um aluno, depois avançarei para uma turma.
"""

aluno_notas = []
turma = []

def add_aluno():
    aluno = {}
    aluno["notas"] = []
    aluno["nome"] = input("Digite o nome do novo aluno: ")
    turma.append(aluno)

def ver_turma(): # mostra as notas
    if len(turma) > 0:
        print('\n-- NOTAS --')
        for i in range(len(turma)):
            print(f'{i+1}° - {turma[i]}')
    else:
        print("Nenhuma nota existente!")

def adicionar_nota():
    try:
        print(f"DEBUG: Tamanho da turma = {len(turma)}")  # adiciona essa linha
        if len(turma) == 0:
            print("Ops! Não há nenhum aluno!")
            return
        elif len(turma) >= 1:
            ver_turma()
            aluno_escolhido = int(input("Escolha o aluno que quer adicionar uma nota: "))
            nota = float(input("Adicione uma nova nota: "))
            if 0 <= nota <= 10: # se a nota for válida prossegue
                notas = turma[aluno_escolhido]["notas"]
                notas.append(nota) # add nota na lista
                print("Nota adicionada com sucesso!")
            else:
                print('nota inválida! tente novamente')
    except ValueError:
        print("Valor inválido!")

def atualizar_nota():
    ver_turma()
    try:
        escolha = int(input(f"Escolha uma nota para atualizar: \n"))
        nova_nota = float(input("Digite a nova nota: ")) # -1 pois index de python começa em 0
        if nova_nota >= 0 and nova_nota <= 10:
            aluno_notas[escolha - 1] = nova_nota
        print("Nota atualizada! \n") 
    except ValueError:
        print("Valor inválido!")
    except IndexError:
        print("Nota inexistente!")

def excluir_nota():
    ver_turma()
    try:
        escolha = int(input(f"Escolha uma nota para excluir: \n"))
        print(f"Nota {aluno_notas[escolha - 1]} excluída! \n")
        aluno_notas.pop(escolha - 1) # -1 pois index de python começa em 0
    except ValueError:
        print("Valor inválido!")
    except IndexError:
        print("Valor inexistente!")

def menu():
    while True:
        print('\n--- MENU ---')
        try:
            print('1 - Ver notas')
            print('2 - Adicionar nota')
            print('3 - Atualizar nota')
            print('4 - Excluir nota')
            print('5 - Encerrar')
            escolha = int(input('Escolha uma opção (número): '))

            if escolha == 1:
                ver_turma()

            elif escolha == 2:
                adicionar_nota()

            elif escolha == 3:
                atualizar_nota()

            elif escolha == 4:
                excluir_nota()

            elif escolha == 5:
                break

            else:
                print("Opção inválida!")
    
        except ValueError:
            print('Opção inválida!')

menu()