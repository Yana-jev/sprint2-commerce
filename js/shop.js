// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {

let encontrado = false

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {

            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id === id) {
                    
                    cart[j].quantity++;
                    encontrado = true;
                    break;
                }
            }

            // если нет в корзине, то добавдяем +1
            if (!encontrado) {
                let productToAdd = { ...products[i], quantity: 1 };
                cart.push(productToAdd);
            
            }
            break; 
        }
    }
    updateCartCount();
}

// actualizar la cantidad de productos en el carrito
function updateCartCount() {
    const countElement = document.getElementById('count_product');
    if (countElement) {
        // Calcular la cantidad total sumando las cantidades de todos los productos en el carrito
        const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
        countElement.textContent = totalCount;
    }
}


// Exercise 2
function cleanCart() {

cart = [];
console.log("Cart after cleaning:", cart);
updateCartCount()
printCart()

}

// Exercise 3
function calculateTotal() {

    
    // Calculate total price of the cart using the "cartList" array
    let suma = 0;
    for (let i = 0; i < cart.length; i++) {
        suma += cart[i].price * cart[i].quantity;
    }

   
    console.log(suma)
    return suma;
    
}


// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"



    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        if (product.name === 'cooking oil' && product.quantity >= 3) {
            product.subtotalWithDiscount = product.price * product.quantity * 0.80;
        } else if (product.name === 'Instant cupcake mixture' && product.quantity >= 10) {
            product.subtotalWithDiscount = product.price * product.quantity * 0.70;
        } else {
            delete product.subtotalWithDiscount;
        }
    }

}


// Exercise 5
function printCart() {

    applyPromotionsCart()

let listElement = document.getElementById('cart_list');
listElement.innerHTML = '';     
let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let productTotal = product.price * product.quantity;
    if (product.subtotalWithDiscount) {
        productTotal = product.subtotalWithDiscount;
    }
    totalPrice += productTotal;

    listElement.innerHTML += `
        <tr>
            <th scope="row">${product.name}</th>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>$${productTotal.toFixed(2)}</td>
            <td><button class="btn btn-small btn-primary" onclick="removeFromCart(${product.id})">-</button>
            <td>${product.quantity}</td>
            <td><button class="btn btn-small btn-primary" onclick="addToCard(${product.id})">+</button></td>
        </tr>
    `
}

const totalPriceElement = document.getElementById('total_price');
if (totalPriceElement) {
    totalPriceElement.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
} 
}





// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity--;
            if (cart[i].quantity === 0) {
                cart.splice(i, 1);
            }
            break;
        }
}



updateCartCount();
    printCart();
}



function addToCard(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity++;
            break;
        }
    }
    updateCartCount();
    printCart();
}

function open_modal() {
    printCart();
}