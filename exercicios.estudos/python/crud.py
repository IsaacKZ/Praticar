"""
arquivo python pra eu tentar fazer crud sozinho (utilizando IA como ASSISTENTE apenas)
tentarei fazer um gerenciamento de notas de um aluno, depois avançarei para uma turma.
objetivo atual: aprender POO para aprimoração do código
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

def adicionar_aluno():
    aluno = {}
    aluno["nome"] = input("Digite o nome do novo aluno: ").strip()
    if aluno["nome"] == "":
        print("Nome inválido! Tente novamente.")
        return
    aluno["notas"] = []
    turma.append(aluno)

def escolher_aluno():
    try:
        if len(turma) >= 1:
            ver_turma()
            escolha = int(input("Escolha o aluno! (número)"))
            return escolha - 1 # -1 pois index de python começa em 0
        else:
            print("Ops! Não há nenhum aluno!")
            return
    except ValueError:
            print("Valor inválido!")
    except IndexError:
            print("Aluno não existe!")

def remover_aluno():
    try:
        escolha = escolher_aluno()
        if escolha is None:
            return
        confirmacao = input("Tem certeza que deseja remover esse aluno? S/N").upper()
        if confirmacao == "S":
            turma.pop(escolha)
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
        escolha = escolher_aluno()
        if escolha is None:
            return
        nome_novo = input("Digite o novo nome do aluno!").strip()
        turma[escolha]["nome"] = nome_novo
    except ValueError:
        print("Valor inválido!")
    except IndexError:
        print("Aluno inexistente!")

def adicionar_nota():
    try:
        aluno_escolhido = escolher_aluno()
        if aluno_escolhido is None:
            return
        nota = float(input("Adicione uma nova nota: "))
        if 0 <= nota <= 10: # se a nota for válida prossegue
            notas = turma[aluno_escolhido]["notas"]
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
        aluno_escolhido = escolher_aluno()
        if aluno_escolhido is None:
            return
        print(turma[aluno_escolhido]["notas"])
        escolha = int(input(f"Escolha uma nota para atualizar: \n"))
        nova_nota = float(input("Digite a nova nota: "))
        if nova_nota >= 0 and nova_nota <= 10:
            nota = turma[aluno_escolhido]["notas"]
            nota[escolha - 1] = nova_nota
            print("Nota atualizada! \n") 
    except ValueError:
        print("Valor inválido!")
    except IndexError:
        print("Nota inexistente!")

def excluir_nota():
    try:
        aluno_escolhido = escolher_aluno()
        if aluno_escolhido is None:
            return
        print(f"Notas do aluno {turma[aluno_escolhido]['nome']}: {turma[aluno_escolhido]['notas']}")
        escolha = int(input(f"Escolha uma nota para excluir: \n"))
        notas = turma[aluno_escolhido]["notas"]
        notas.pop(escolha - 1) # -1 pois index do python começa em 0
        print(f"Nota excluída! \n")
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
                adicionar_aluno()
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