# Gerador de PDF de Orçamento

## O QUE É
Site para o Dalmir (pai do Isaac) gerar orçamentos em PDF. Ele presta diversos serviços. Não é técnico — a interface pode ser bonita, mas não pode ser complicada de usar.

## STACK
- HTML/CSS/JS (vanilla)
- jsPDF para gerar o PDF
- Sem backend

## FUNCIONALIDADES
- Campo: nome do cliente
- Adicionar serviços (descrição + valor)
- Lista de itens com opção de remover
- Total calculado automaticamente
- Botão gerar PDF

## REGRAS PARA IA

### ANTES de fazer qualquer coisa:
1. Leia este README inteiro
2. Entenda o contexto do projeto
3. Se tiver dúvida, pergunte

### DEPOIS de fazer alterações:
1. Atualize este README se algo mudou (stack, funcionalidades, decisões)
2. Registre decisões importantes na seção HISTÓRICO

### PRIORIDADES:
1. Simplicidade > Funcionalidades extras
2. Mobile-friendly (Dalmir pode usar pelo celular)

## ESTRUTURA
```
├── README.md
├── index.html
├── style.css
└── script.js
```

## HISTÓRICO
| Data | O que mudou |
|------|-------------|
| 2025-12-23 | Projeto criado. Definida stack e funcionalidades básicas. |
| 2025-12-27 | Corrigido bug na geração de PDF. O construtor jsPDF não estava sendo acessado corretamente. |
| 2025-12-27 | Novo layout do PDF: descrição ocupa largura total, valor aparece abaixo em negrito. Textos longos quebram automaticamente. |

