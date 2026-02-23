"""
arquivo python pra eu tentar fazer crud sozinho (sem inteligencia artificial)
tentarei fazer um gerenciamento de notas de um aluno, depois avançarei para uma turma.
"""

turma = []

def ver_turma(): # mostra as notas
    if len(turma) > 0:
        print('\n-- NOTAS --')
        for i in range(len(turma)):
            nome = turma[i]['nome']
            notas = turma[i]['notas']
            print(f'{i+1}° - {nome} | Notas: {notas}')
    else:
        print("\nNenhuma nota existente!")

def add_aluno():
    aluno = {}
    aluno["nome"] = input("Digite o nome do novo aluno: ")
    aluno["notas"] = []
    turma.append(aluno)

def remover_aluno():
    try:
        if len(turma) >= 1:
            ver_turma()
            escolha = int(input("Escolha qual aluno deseja remover?"))
            confirmacao = input("Tem certeza que deseja remover esse aluno? S/N").upper()
            if confirmacao == "S":
                if escolha >= 1:
                    turma.pop(escolha - 1)
                    print("Aluno excluido com sucesso!")
                    return
            elif confirmacao == "N":
                return
            else:
                print("Resposta inválida!")
    except ValueError:
        print("Valor inválido")
    except IndexError:
        print("Aluno inexistente!")

def atualizar_aluno():
    try:
        if len(turma) >= 1:
            ver_turma()
            escolha = int(input("Qual aluno deseja atualizar o nome? (número)"))
            nome_novo = input("Digite o novo nome do aluno!")
            turma[escolha - 1]["nome"] = nome_novo
    except ValueError:
        print("Valor inválido!")
    except IndexError:
        print("Aluno inexistente!")

def adicionar_nota():
    try:
        if len(turma) == 0:
            print("Ops! Não há nenhum aluno!")
            return
        elif len(turma) >= 1:
            ver_turma()
            aluno_escolhido = int(input("Escolha o aluno que quer adicionar uma nota: "))
            nota = float(input("Adicione uma nova nota: "))
            if 0 <= nota <= 10: # se a nota for válida prossegue
                notas = turma[aluno_escolhido - 1]["notas"]
                notas.append(nota) # add nota na lista
                print("Nota adicionada com sucesso!")
            else:
                print('nota inválida! tente novamente')
    except ValueError:
        print("Valor inválido!")
    except IndexError:
        print("Aluno inexistente!") 

def atualizar_nota():
    try:
        if len(turma) == 0:

            print("Ops! Não há nenhum aluno!")
        elif len(turma) >= 1:
            ver_turma()
            aluno_escolhido = int(input("Escolha o aluno que quer atualizar uma nota: "))
            print(turma[aluno_escolhido - 1]["notas"])
            escolha = int(input(f"Escolha uma nota para atualizar: \n"))
            nova_nota = float(input("Digite a nova nota: "))
            if nova_nota >= 0 and nova_nota <= 10:
                nota = turma[aluno_escolhido - 1]["notas"]
                nota[escolha - 1] = nova_nota
                print("Nota atualizada! \n") 
    except ValueError:
        print("Valor inválido!")
    except IndexError:
        print("Nota inexistente!")

def excluir_nota():
    try:
        if len(turma) == 0:

            print("Ops! Não há nenhum aluno!")
        elif len(turma) >= 1:
            ver_turma()
            aluno_escolhido = int(input("Escolha o aluno que quer atualizar uma nota: "))
            print("Notas do aluno " , turma[aluno_escolhido - 1])
            print(turma[aluno_escolhido - 1]["notas"])
            escolha = int(input(f"Escolha uma nota para excluir: \n"))
            notas = turma[aluno_escolhido - 1]["notas"]
            notas.pop(escolha - 1) # -1 pois index de python começa em 0
            print(f"Nota excluída! \n")
        else:
            print("Nenhuma nota existente!")
            return
    except ValueError:
        print("Valor inválido!")
    except IndexError:
        print("Valor inexistente!")

def menu():
    while True:
        print('\n--- MENU ---')
        try:
            print('1 - Ver nomes e notas')
            print('2 - Adicionar aluno')
            print('3 - Remover aluno')
            print('4 - Atualizar Aluno')
            print('5 - Adicionar nota')
            print('6 - Atualizar nota')
            print('7 - Excluir nota')
            print('8 - Encerrar programa')
            escolha = int(input('Escolha uma opção (número): '))

            if escolha == 1:
                ver_turma()
            elif escolha == 2:
                add_aluno()
            elif escolha == 3:
                remover_aluno()
            elif escolha == 4:
                atualizar_aluno()
            elif escolha == 5:
                adicionar_nota()
            elif escolha == 6:
                atualizar_nota()
            elif escolha == 7:
                excluir_nota()
            elif escolha == 8:
                break
            else:
                print("Opção inválida!")

        except ValueError:
            print('Opção inválida!')

menu()