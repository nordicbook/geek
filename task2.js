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
    constructor() {
        this.inCart = [];
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
}

let product = new Product(3, 'Телик', '/img/telek.jpg', 14500);
let product2 = new Product(2, 'Утюг', '/img/iron.jpg', 3500);
let cart = new Cart();
cart.addToCart(product);
cart.addToCart(product);
cart.addToCart(product2);
console.log(cart.inCart);
console.log(cart.cartTotalPieces());
console.log(cart.cartTotalPrice());

console.log(cart.removeFromCart(product2));
console.log(cart.inCart);