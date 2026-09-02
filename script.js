const products = [
    {
        title: "Kit 4 Pacotes Café Especial em Grãos Coffee",
        description: "Café em grãos de excelente qualidade",
        link: "https://link.amazon/B09vbZB4T",
        highlight: true
        
    },
    {
        title: "Bravo Café - Tenor em Grãos 500G",
        description: "Café em grãos com melhor custo benefício.",
        link: "https://link.amazon/B03saquRX",
        highlight: true
    },
    {
        title: "Orfeu Café Clássico em Grãos, 100% Arabica, Torra Média, 1kg",
        description: "Opção de café com uma das melhores avaliações no site.",
        link: "https://link.amazon/B04CN8UKu"
    },
    {
        title: "Galápagos, The Mind, Jogo de Cartas",
        description: "Casual para Amigos, 2 a 4 jogadores, 15 minutos por partida.",
        link: "https://link.amazon/B04y3TRNL"
    },
    {
        title: "Escova de Limpeza Multiuso para Tênis",
        description: "Escova de Limpeza Multiuso com Reservatório E Dispenser, Escovinha Cerdas Duplas, Limpa tenis, sapato, roupa, sofa, calçados, uso liquido detergente sabao, Modelo Premium.",
        link: "https://link.amazon/B07GRY7p9"
    }
];

const productList = document.getElementById('product-list');

function renderProducts() {
    productList.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('a');
        card.href = product.link;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        
        const highlightClass = product.highlight ? 'highlight' : '';
        card.className = `card ${highlightClass}`;

        card.innerHTML = `
            <div class="card-title">${product.title}</div>
            <div class="card-desc">${product.description}</div>
        `;

        productList.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);
