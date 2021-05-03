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
            return amount += product.price * product.amount;
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
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${product.price} руб.</div>
        `;

        let image = this.createImageBlock(product);
        card.prepend(image);

        let addToCartButton = this.createAddToCartButton(product);
        card.append(addToCartButton);

        return card;
    }
    createImageBlock(product) {
        let image = document.createElement('img');
        image.setAttribute('src', product.image[0]);
        image.setAttribute('alt', product.name);
        image.classList.add('product-image');
        
        if (product.image.length > 1) {
            image.addEventListener('click', () => {
                let gallery = new PopupGallery(product.image);
                console.log(gallery);
                gallery.init();
            });
        }

        return image;
    }

    createAddToCartButton(product) {
        let addToCartButton = document.createElement('button');
        addToCartButton.id = product.id;
        addToCartButton.textContent = 'в корзину';

        addToCartButton.addEventListener('click', () => {
            this.cart.addToCart(product);
            cart.refresh();
            console.log(this.cart);
        });
        return addToCartButton;
    }
    init() {
        this.createCatalog();
    }
}


class Gallery {
    constructor(images) {
        this.id = 'gallery';
        this.curSlide = 0;
        this.images = images;
    }
    createRows() {
        if (this.images.length > 1) {
            let lRow = this.addRow('left');
            let rRow = this.addRow('right');
            let parent = document.querySelector('#gallery'); 
            parent.append(lRow);
            parent.append(rRow);
        }
    }
    addRow(direction) {
        let row = document.createElement('div');
        row.classList.add('gallery-row');
        row.classList.add(direction);

        row.addEventListener('click', () => {
            if (row.classList.contains('right')) {
                if (this.curSlide < this.images.length - 1) {
                    this.curSlide++; 
                    this.slider.style.left = this.curSlide * -100 + '%';
                }
            } else {
                if (this.curSlide > 0) {
                    this.curSlide--; 
                    this.slider.style.left = this.curSlide * -100 + '%';
                }
            }      
        });

        return row;
    }
    createSlider() {
        let slider = document.createElement('div');
        slider.classList.add('slider');
        this.images.forEach(image => {
            slider.append(this.createSlide(image));
        });

        let galleryBox = this.parent.querySelector('#gallery');
        galleryBox.append(slider);
        this.slider = slider;
    }

    createSlide(image) {
        let slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url(${image})`;
        return slide;
    }
    initCloseElements() {
        let closeEls = document.querySelectorAll('.close-gallery');
        closeEls.forEach(element => {
            element.addEventListener('click', () => {
                this.destruct();
            });
        })
    }
    destruct() {
        this.parent.remove();
    }
    init() {
        this.createParent();
        this.gallery = document.querySelector(this.id);
        this.createSlider();
        this.createRows();
        this.initCloseElements();
    }
}

class PopupGallery extends Gallery {
    constructor(images) {
        super(images);
    }
    createParent() {
        let parent = document.createElement('div');
        parent.classList.add('gallery-box');
        parent.innerHTML = `
            <div class="gallery-center">
                <div class="close close-gallery">X</div>
                <div id="gallery"></div>
            </div>
        `;
        this.parent = parent;
        document.body.append(parent);
    }
}


let products = [
    new Product(1, 'Телик', 
    [
        '/images/products/telek/telek.jpg',
        '/images/products/telek/10022198b1.jpg',
        '/images/products/telek/10022198b3.jpg',
        '/images/products/telek/10022198b5.jpg',
        '/images/products/telek/10022198b6.jpg'
    ], 
    14500),
    new Product(2, 'Утюг', [
        '/images/products/iron/iron.jpg',
        '/images/products/iron/20037985b21.jpg',
        '/images/products/iron/20037985b22.jpg',
        '/images/products/iron/20037985b23.jpg'
    ], 3500),
    new Product(3, 'Холодильник', [
        '/images/products/fridgh/fridgh.jpg',
        '/images/products/fridgh/20069366b1.jpg',
        '/images/products/fridgh/20069366b2.jpg',
        '/images/products/fridgh/20069366b3.jpg',
    ], 30000),
    new Product(4, 'Весы', [
        '/images/products/weight/weight.jpg'
    ], 2200),
    new Product(5, 'Тостер', [
        '/images/products/toaster/toaster.jpg',
        '/images/products/toaster/20070541b.jpg',
        '/images/products/toaster/20070541b1.jpg',
        '/images/products/toaster/20070541b2.jpg'
    ], 3800),
    new Product(6, 'Монитор', [
        '/images/products/monitor/monitor.jpg',
        '/images/products/monitor/30050968b1.jpg',
        '/images/products/monitor/30050968b3.jpg',
        '/images/products/monitor/30050968b4.jpg',
        '/images/products/monitor/30050968b5.jpg',
        '/images/products/monitor/30050968b6.jpg'
    ], 19900),
];

let cart = new Cart('#cart');
let catalog = new Catalog('#catalog', products, cart);
catalog.createCatalog();
