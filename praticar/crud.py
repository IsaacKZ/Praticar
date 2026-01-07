"""
arquivo python pra eu tentar fazer crud sozinho (sem inteligencia artificial)
tentarei fazer um gerenciamento de notas de um aluno, depois avançarei para uma turma.
"""
aluno_notas = []

def ver_notas():
    print('\n-- NOTAS --')
    for i in range(len(aluno_notas)):
        print(f'{i+1}° - {aluno_notas[i]}')
    menu()

def adicionar_nota():
    nota = int(input("Adicione uma nova nota: "))
    if 0 <= nota <= 10: # se a nota for válida prossegue
        aluno_notas.append(nota)
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
    escolha = int(input(f"Escolha uma nota para atualizar: \n {ver_notas()}"))
    for i in range(len(aluno_notas)):
        print()
        if escolha == aluno_notas[escolha]:
            aluno_notas[escolha] = int(input("Digite a nova nota: "))
            print("Nota atualizada caraio!!!")
    menu()

def menu():
    print('\n--- MENU ---')
    try:
        print('1 - Ver notas')
        print('2 - Adicionar nota')
        print('3 - Atualizar nota')
        print('4 - Encerrar')
        escolha = int(input('Escolha uma opção (número): '))

        if escolha == 1:
            ver_notas()

        elif escolha == 2:
            adicionar_nota()

        elif escolha == 3:
            atualizar_nota()

        elif escolha == 4:
            return

    except ValueError:
        print('Opção inválida!')
        return menu()

menu()
