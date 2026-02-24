// ===== ESTADO DA APLICAÇÃO =====
let itens = [];

// ===== ELEMENTOS DO DOM =====
const clienteNome = document.getElementById('cliente-nome');
const itemDescricao = document.getElementById('item-descricao');
const itemValor = document.getElementById('item-valor');
const btnAdicionar = document.getElementById('btn-adicionar');
const btnGerar = document.getElementById('btn-gerar');
const itemsList = document.getElementById('items-list');
const emptyMessage = document.getElementById('empty-message');
const totalSection = document.getElementById('total-section');
const totalValue = document.getElementById('total-value');

// ===== FUNÇÕES UTILITÁRIAS =====
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function calcularTotal() {
    return itens.reduce((acc, item) => acc + item.valor, 0);
}

function atualizarInterface() {
    // Limpar lista
    itemsList.innerHTML = '';

    if (itens.length === 0) {
        itemsList.innerHTML = `
            <div class="empty-state">
                <i class='bx bx-package'></i>
                <p>Nenhum serviço</p>
            </div>
        `;
        totalSection.style.display = 'none';
        return;
    }

    // Renderizar itens
    itens.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'item';
        itemEl.innerHTML = `
            <div class="item-info">
                <div class="item-descricao">${item.descricao}</div>
                <div class="item-valor">${formatarMoeda(item.valor)}</div>
            </div>
            <div class="item-actions">
                <button class="btn btn-edit" onclick="editarItem(${index})" title="Editar">
                    <i class='bx bx-edit'></i>
                </button>
                <button class="btn btn-remove" onclick="removerItem(${index})" title="Remover">
                    <i class='bx bx-trash'></i>
                </button>
            </div>
        `;
        itemsList.appendChild(itemEl);
    });

    // Atualizar total
    totalSection.style.display = 'block';
    totalValue.textContent = formatarMoeda(calcularTotal());
}

// ===== FUNÇÕES PRINCIPAIS =====
function adicionarItem() {
    const descricao = itemDescricao.value.trim();
    const valor = parseFloat(itemValor.value);

    // Validação
    if (!descricao) {
        itemDescricao.focus();
        return;
    }

    if (isNaN(valor) || valor <= 0) {
        itemValor.focus();
        return;
    }

    // Adicionar item
    itens.push({ descricao, valor });

    // Limpar campos
    itemDescricao.value = '';
    itemValor.value = '';
    itemDescricao.focus();

    // Atualizar interface
    atualizarInterface();
}

function removerItem(index) {
    itens.splice(index, 1);
    atualizarInterface();
}

function editarItem(index) {
    // Pegar dados do item
    const item = itens[index];

    // Preencher os campos
    itemDescricao.value = item.descricao;
    itemValor.value = item.valor;

    // Remover o item da lista
    itens.splice(index, 1);
    atualizarInterface();

    // Focar no campo de descrição
    itemDescricao.focus();
}

function gerarPDF() {
    const nome = clienteNome.value.trim() || 'Cliente não informado';

    if (itens.length === 0) {
        alert('Adicione pelo menos um item ao orçamento.');
        return;
    }

    // Inicializar jsPDF (compatível com diferentes versões)
    const jsPDFConstructor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;

    if (!jsPDFConstructor) {
        alert('Erro: Biblioteca jsPDF não encontrada. Recarregue a página.');
        return;
    }

    const doc = new jsPDFConstructor();

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let y = 30;

    // Título
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('ORÇAMENTO', pageWidth / 2, y, { align: 'center' });
    y += 10;

    // Nome do prestador
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Dalmir José Zoccatelli', pageWidth / 2, y, { align: 'center' });
    y += 15;

    // Data
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    doc.text(`Data: ${dataAtual}`, pageWidth - margin, 20, { align: 'right' });

    // Cliente
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Cliente:', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.text(nome, margin + 25, y);
    y += 20;

    // Linha separadora
    doc.setDrawColor(180);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5;

    // Configurações da tabela
    const tableWidth = pageWidth - (margin * 2);
    const descColWidth = tableWidth * 0.7;  // 70% para descrição
    const valorColWidth = tableWidth * 0.3;  // 30% para valor
    const rowPadding = 8;
    const fontSize = 11;
    const lineHeight = 5;

    // Cabeçalho da tabela
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, y, tableWidth, 12, 'F');
    doc.setDrawColor(200);
    doc.rect(margin, y, tableWidth, 12, 'S');

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(80);
    doc.text('DESCRIÇÃO DO SERVIÇO', margin + 5, y + 8);
    doc.text('VALOR', margin + descColWidth + (valorColWidth / 2), y + 8, { align: 'center' });
    doc.setTextColor(0);
    y += 12;

    // Linhas da tabela
    doc.setFontSize(fontSize);

    itens.forEach((item, index) => {
        // Calcular altura necessária para a descrição
        doc.setFont('helvetica', 'normal');
        const linhasDesc = doc.splitTextToSize(item.descricao, descColWidth - 10);
        const alturaTexto = linhasDesc.length * lineHeight;
        const alturaLinha = Math.max(alturaTexto + (rowPadding * 2), 18);

        // Fundo alternado
        if (index % 2 === 1) {
            doc.setFillColor(250, 250, 250);
            doc.rect(margin, y, tableWidth, alturaLinha, 'F');
        }

        // Borda da linha
        doc.setDrawColor(220);
        doc.rect(margin, y, tableWidth, alturaLinha, 'S');

        // Linha vertical separando colunas
        doc.line(margin + descColWidth, y, margin + descColWidth, y + alturaLinha);

        // Descrição
        doc.setFont('helvetica', 'normal');
        let textY = y + rowPadding + 3;
        linhasDesc.forEach(linha => {
            doc.text(linha, margin + 5, textY);
            textY += lineHeight;
        });

        // Valor (centralizado verticalmente na célula)
        doc.setFont('helvetica', 'bold');
        const valorY = y + (alturaLinha / 2) + 3;
        doc.text(formatarMoeda(item.valor), margin + descColWidth + (valorColWidth / 2), valorY, { align: 'center' });

        y += alturaLinha;
    });

    y += 10;

    // Total
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL:', margin, y);
    doc.text(formatarMoeda(calcularTotal()), pageWidth - margin, y, { align: 'right' });

    // Salvar
    const nomeArquivo = `orcamento_${nome.replace(/\s+/g, '_').toLowerCase()}_${dataAtual.replace(/\//g, '-')}.pdf`;
    doc.save(nomeArquivo);
}

// ===== EVENT LISTENERS =====
btnAdicionar.addEventListener('click', adicionarItem);
btnGerar.addEventListener('click', gerarPDF);

// Enter para adicionar item
itemValor.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarItem();
    }
});

itemDescricao.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        itemValor.focus();
    }
});
