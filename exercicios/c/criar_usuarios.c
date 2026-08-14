#include <stdio.h>
#include <string.h>

typedef struct {
    char nome[40];
    char email[50];
    int idade;
} Usuario;

Usuario lista_usuarios[999];

int qtd_usuarios = 0;

void add_usuario() {
    printf("Digite o nome do usuário!");
    scanf("%39s%*c", lista_usuarios[qtd_usuarios].nome);
    printf("Digite o email do usuário!");
    scanf("%49s%*c", lista_usuarios[qtd_usuarios].email);
    printf("Digite a idade do usuário!");
    scanf("%d%*c", &lista_usuarios[qtd_usuarios].idade);
    qtd_usuarios++;
    printf("Usuário cadastrado com sucesso! \n");
};

int main () {

    while (1) {
        int escolha = 0;
        printf("=-----= MENU =-----= \n");
        printf("\n O que deseja fazer? \n");
        printf("1 - Adicionar um novo usuário \n");
        printf("2 - Modificar um usuário existente \n");
        printf("3 - Deletar um usuário \n");
        printf("4 - Encerrar o programa\n");

        scanf("%d%*c", &escolha);

        switch (escolha) { // a ser add ainda
            case 1:
                add_usuario();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            default:
                printf("Opção inválida! Tente novamente...");
        };
    };
    return 0;
};