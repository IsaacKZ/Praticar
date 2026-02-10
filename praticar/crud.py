"""
arquivo python pra eu tentar fazer crud sozinho (sem inteligencia artificial)
tentarei fazer um gerenciamento de notas de um aluno, depois avançarei para uma turma.
"""

aluno_notas = []

def ver_notas(): # mostra as notas
    print('\n-- NOTAS --')
    for i in range(len(aluno_notas)):
        print(f'{i+1}° - {aluno_notas[i]}')

def adicionar_nota():
    nota = float(input("Adicione uma nova nota: "))
    if 0 <= nota <= 10: # se a nota for válida prossegue
        aluno_notas.append(nota) # add nota na lista
        print("Nota adicionada com sucesso!")

        print("O que deseja fazer agora?")
        print("1 - Adicionar outra nota")
        print("2 - Voltar ao menu")
        escolha = int(input("Escolha uma opção (número): "))
        if escolha == 1:
            adicionar_nota()
        elif escolha == 2:
            menu()
    else:
        print('nota inválida! tente novamente')
        return adicionar_nota()

def atualizar_nota():
    ver_notas()
    escolha = int(input(f"Escolha uma nota para atualizar: \n"))
    aluno_notas[escolha - 1] = float(input("Digite a nova nota: ")) # -1 pois index de python começa em 0
    print("Nota atualizada!")
    menu()

def excluir_nota():
    ver_notas()
    escolha = int(input(f"Escolha uma nota para excluir: \n"))
    aluno_notas.pop(escolha - 1) # -1 pois index de python começa em 0
    menu()

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
                ver_notas()

            elif escolha == 2:
                adicionar_nota()

            elif escolha == 3:
                atualizar_nota()

            elif escolha == 4:
                excluir_nota()

            elif escolha == 5:
                break

            elif escolha < 0 or (escolha > 5):
                print("Opção inválida!")
    
        except ValueError:
            print('Opção inválida!')

menu()
