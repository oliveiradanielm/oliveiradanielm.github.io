const products = [
    {
        title: "Pronova Coffee Stories Special Fruity",
        description: "Café em grãos com melhor custo benefício.",
        link: "https://amzn.to/45IuE8V",
        highlight: true
    },
    {
        title: "Orfeu Café Clássico em Grãos, 100% Arabica, Torra Média, 1kg",
        description: "Opção de café com uma das melhores avaliações no site.",
        link: "https://amzn.to/4t9uD81"
    },
    {
        title: "Galápagos, The Mind, Jogo de Cartas",
        description: "Casual para Amigos, 2 a 4 jogadores, 15 minutos por partida.",
        link: "https://amzn.to/4qQnOGK"
    },
    {
        title: "Escova de Limpeza Multiuso para Tênis",
        description: "Escova de Limpeza Multiuso com Reservatório E Dispenser, Escovinha Cerdas Duplas, Limpa tenis, sapato, roupa, sofa, calçados, uso liquido detergente sabao, Modelo Premium.",
        link: "https://amzn.to/4anrwlj"
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
