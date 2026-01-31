const products = [
    
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
