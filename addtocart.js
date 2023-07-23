let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [{
        id: 1,
        name: 'Biriyani',
        image: 'indian1.png',
        price: 120000,
        nature: { type: 'indian' }

    },
    {
        id: 2,
        name: 'Spicy Biriyani',
        image: 'italian3.png',
        price: 120000,
        nature: { type: 'italian' }

    },
    {
        id: 3,
        name: 'Dosa',
        image: 'indian5.png',
        price: 220000,
        nature: { type: 'indian' }

    },
    {
        id: 4,
        name: 'vada',
        image: 'italian4.jpg',
        price: 123000,
        nature: { type: 'italian' }

    },
    {
        id: 5,
        name: 'Masaal dosa',
        image: 'indian7.png',
        price: 320000,
        nature: { type: 'indian' }

    },
    {
        id: 6,
        name: 'dhal rice',
        image: 'italian6.jpg',
        price: 120000,
        nature: { type: 'italian' }

    },
    {
        id: 7,
        name: 'dhal rice',
        image: 'indian4.png',
        price: 120000,
        nature: { type: 'indian' }

    },
    {
        id: 8,
        name: 'PRODUCT NAME 2',
        image: 'italian7.jpg',
        price: 120000,
        nature: { type: 'italian' }

    },
    {
        id: 9,
        name: 'PRODUCT NAME 3',
        image: 'indian6.png',
        price: 220000,
        nature: { type: 'indian' }

    },
    {
        id: 10,
        name: 'PRODUCT NAME 4',
        image: 'italian8.jpg',
        price: 123000,
        nature: { type: 'italian' }

    },
    {
        id: 11,
        name: 'PRODUCT NAME 5',
        image: 'indian9.jpg',
        price: 320000,
        nature: { type: 'indian' }

    },
    {
        id: 12,
        name: 'PRODUCT NAME 6',
        image: 'italian10.jpg',
        price: 120000,
        nature: { type: 'italian' }

    }
];
let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
