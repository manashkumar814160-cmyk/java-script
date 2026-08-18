const products = [
    { id: 1, name: "T-Shirt", price: 499 },
    { id: 2, name: "Shoes", price: 1499 },
    { id: 3, name: "Watch", price: 999 },
    { id: 4, name: "Jeans", price: 1299 }
];

let cart = [];

function showProducts() {
    console.log("===== PRODUCTS =====");

    products.forEach(product => {
        console.log(
            `${product.id}. ${product.name} - ₹${product.price}`
        );
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);

    if (!product) {
        console.log("Product not found!");
        return;
    }

    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    console.log(`${product.name} added to cart.`);
}

function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);

    if (index === -1) {
        console.log("Item not found in cart.");
        return;
    }

    console.log(`${cart[index].name} removed from cart.`);
    cart.splice(index, 1);
}

function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);

    if (item) {
        item.quantity++;
        console.log(`${item.name} quantity: ${item.quantity}`);
    }
}

function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);

    if (!item) return;

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        removeFromCart(id);
    }
}

function showCart() {
    console.log("\n===== SHOPPING CART =====");

    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;

        console.log(
            `${item.name} | ₹${item.price} x ${item.quantity} = ₹${itemTotal}`
        );

        total += itemTotal;
    });

    console.log("-------------------------");
    console.log(`Total: ₹${total}`);
}

function checkout() {
    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    let total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    console.log(`Order placed successfully!`);
    console.log(`Amount Paid: ₹${total}`);

    cart = [];
}


// Testing the shopping cart

showProducts();

addToCart(1);
addToCart(2);
addToCart(1);

showCart();

increaseQuantity(2);
showCart();

decreaseQuantity(1);
showCart();

removeFromCart(2);
showCart();

checkout();
showCart();