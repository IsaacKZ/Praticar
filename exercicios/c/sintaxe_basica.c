#include <stdio.h>

int main (void) {

    int metros;
    float km;
    char nome[99];

    // Os "&" representam o endereço de memoria onde aquelas variáveis estão.é necessario para o programa saber onde pegar os dados.
    // as letras que vem depois do "%" representam o tipo de dado que aquela variável é.
    printf("Digite os quilometros:");
    scanf("%f", &km);

    printf("Digite os metros:");
    scanf("%d", &metros);

    printf("Digite o nome da rodovia:");
    scanf("%s", &nome);

    printf("Metros: %d", metros);
    printf("Quilometros: %f", km);
    printf("Via: %99s", nome);

}