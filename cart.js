const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
let total = 0;

// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(listItem);
    total += item.price;
});

// Update total price
totalPriceElement.textContent = total.toFixed(3);