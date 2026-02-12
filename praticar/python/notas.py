notas = [9, 2, 6, 5.9, 8]
notas_recuperacao = []
menor = notas[0] # indeterminado
soma = 0 # indeterminado
maior = notas[0] # indeterminado
recuperacao = 0
passou = 0

for nota in notas:
    soma = soma + nota
    if nota > maior:
        maior = nota
    if nota < menor:
        menor = nota
    if nota > 10 or nota < 0:
        print(ValueError)
    elif nota >= 6:
        print(f"Passou! Sua nota: {nota}")
        passou = passou + 1
    elif nota < 6:
        print(f"Recuperação. Sua nota: {nota}")
        recuperacao = recuperacao + 1
        notas_recuperacao.append(nota)

media = soma / len(notas)

print(media, maior, menor)
print(f"Total de pessoas em recuoeração: {recuperacao}")
print(f"Total de pessoas que passou: {passou}")
print(f"Notas dos que ficaram em recuperação: \n{notas_recuperacao}")
