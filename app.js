document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 },
    ];

    const cart = [];

    function renderProducts() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    function renderCart() {
        const cartList = document.getElementById('cart');
        cartList.innerHTML = '';
        cart.forEach(item => {
            const cartDiv = document.createElement('div');
            cartDiv.className = 'cart-item';
            cartDiv.innerHTML = `
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartList.appendChild(cartDiv);
        });
    }

    window.addToCart = function (id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        renderCart();
    };

    window.removeFromCart = function (id) {
        const index = cart.findIndex(item => item.id === id);
        if (index > -1) {
            cart.splice(index, 1);
            renderCart();
        }
    };

    renderProducts();

    document.getElementById('checkout').addEventListener('click', function () {
        alert('Order processed successfully!');
        cart.length = 0;
        renderCart();
    });
});
