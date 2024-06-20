function addOrder(productId) {
    const product = document.querySelector(`.product[data-id="${productId}"]`);
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.getAttribute('data-price'));

    const cartItem = document.querySelector(`#cart-items li[data-id="${productId}"]`);
    if (cartItem) {
        const quantityElement = cartItem.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
    } else {
        const cartItems = document.getElementById('cart-items');
        const li = document.createElement('li');
        li.setAttribute('data-id', productId);
        li.innerHTML = `${productName} - ₱${productPrice.toFixed(2)} QTY: <span class="quantity">1</span>`;
        cartItems.appendChild(li);
    }

    updateTotal();
}

function subtractOrder(productId) {
    const cartItem = document.querySelector(`#cart-items li[data-id="${productId}"]`);
    if (cartItem) {
        const quantityElement = cartItem.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        } else {
            cartItem.remove();
        }
    }

    updateTotal();
}

function updateTotal() {
    let total = 0;
    const cartItems = document.querySelectorAll('#cart-items li');
    cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.textContent.match(/₱(\d+\.\d+)/)[1]);
        total += quantity * price;
    });
    document.getElementById('total-price').textContent = total.toFixed(2);
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('add')) {
        const productId = parseInt(event.target.parentElement.getAttribute('data-id'));
        addOrder(productId);
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('minus')) {
        const productId = parseInt(event.target.parentElement.getAttribute('data-id'));
        subtractOrder(productId);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('confirm-order').addEventListener('click', () => {
    });
});

function hasItemsInCart() {
    const cartItems = document.querySelectorAll('#cart-items li');
    return cartItems.length > 0;
}

function handleConfirmOrder() {
    if (hasItemsInCart()) {
        window.location.href = '../fill-up-form/fill-up.html';
    } else {
        alert('Please add items to your order before confirming.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('confirm-order').addEventListener('click', handleConfirmOrder);
});
