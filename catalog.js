// ПРодолжить работу с интернет-магазином 
// Реализовать объекты товаров

class Product {
    constructor(id, name, image, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.amount = 1;
    }
}

class Cart {
    constructor(block) {
        this.inCart = [];
        this.block = document.querySelector(block);
    }

    addToCart(product) {
        let productIsset = this.inCart.find((value) => {
            return value.id === product.id;
        });

        productIsset ? productIsset.amount++ : this.inCart.push(product);
    }
    removeFromCart(product) {
        let productTodelete = this.inCart.find((value) => {
            return value.id === product.id;
        });
        
        if (productTodelete) {
            let productIndex = this.inCart.indexOf(productTodelete);
            this.inCart.splice(productIndex, productIndex);
            return productTodelete;
        } else {
            console.log('Такого товара нет в корзине');
            return null;
        };
    }
    cartTotalPieces() {
        if (!this.inCart) {return 0}

        let result = this.inCart.reduce((amount, product) => {
            return amount += product.amount;
        }, 0);

        return result;
    }
    cartTotalPrice() {
        if (!this.inCart) {return 0}

        let result = this.inCart.reduce((amount, product) => {
            return amount += product.price;
        }, 0);
        
        return result;
    }
    refresh() {
        let content;
        if (this.inCart.length) {
            content = `В корзине ${this.cartTotalPieces()} товаров на сумму ${this.cartTotalPrice()} руб.`;
        } else {
            content = `В корзине нет товаров`;
        }
        this.block.innerHTML = content;
    }
}

class Catalog {
    constructor(block, products, cart) {
        this.products = products;
        this.block = document.querySelector(block);
        this.cart = cart;
    }
    createCatalog() {
        this.products.forEach(product => {
            let item = this.createCard(product);
            this.block.append(item);
        });
    }
    createCard(product) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${product.price} руб.</div>
        `;

        let addToCartButton = document.createElement('button');
        addToCartButton.id = product.id;
        addToCartButton.textContent = 'в корзину';

        addToCartButton.addEventListener('click', () => {
            this.cart.addToCart(product);
            cart.refresh();
            console.log(this.cart);
        });

        card.append(addToCartButton);

        return card;
    }
    init() {
        this.createCatalog();
    }
}


let products = [
    new Product(1, 'Телик', '/images/telek.jpg', 14500),
    new Product(2, 'Утюг', '/images/iron.jpg', 3500),
    new Product(3, 'Холодильник', '/images/fridgh.jpg', 30000),
    new Product(4, 'Весы', '/images/weight.jpg', 2200),
    new Product(5, 'Тостер', '/images/toaster.jpg', 3800),
    new Product(6, 'Монитор', '/images/monitor.jpg', 19900),
];

let cart = new Cart('#cart');
let catalog = new Catalog('#catalog', products, cart);
catalog.createCatalog();
