const menu = document.querySelector('.menu-toggle');
const addProduct = document.querySelector('.add');
const deleteProduct = document.querySelector('.delete');
const buyProduct = document.querySelector('.buy-box');
const cart = document.querySelector('.cart');
const notification = document.querySelector('.notification');
const trash = document.querySelector('.trash');
const gallery = document.querySelector('.product-images');
const mainImage = document.querySelector('.main-image');
const lightbox = document.querySelector('.lightbox');
const prevImage = document.querySelector('.prev-image');
const nextImage = document.querySelector('.next-image');
const currentImage = document.querySelector('.current-image');
let counter = 0;
let imageCounter = 1;

menu.addEventListener('click', function () {
    menu.classList.toggle('open')
    document.querySelector('nav').classList.toggle('show');
})

addProduct.addEventListener('click', function () {
    counter++;
    document.querySelector('.buy-product span').textContent = counter;
})

deleteProduct.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
    }
    document.querySelector('.buy-product span').textContent = counter;
})

buyProduct.addEventListener('click', function () {
    if (counter > 0) {
        notification.classList.remove('hidden');
        notification.textContent = counter;
        document.querySelector('.full-cart').classList.remove('hidden');
        document.querySelector('.empty-cart').classList.add('hidden');
        document.querySelector('.num').textContent = counter;
        document.querySelector('.final-price').textContent = `  $${125 * counter}.00`;
    } else {
        notification.classList.add('hidden');
        document.querySelector('.full-cart').classList.add('hidden');
        document.querySelector('.empty-cart').classList.remove('hidden');
    }
})

cart.addEventListener('click', function () {
    document.querySelector('.cart-box').classList.toggle('hidden');
})

trash.addEventListener('click', function () {
    document.querySelector('.full-cart').classList.add('hidden');
    document.querySelector('.empty-cart').classList.remove('hidden');
    notification.classList.add('hidden');
})

let lightboxGallery = gallery.cloneNode(true);
lightboxGallery.classList.add('gallery');
lightbox.append(lightboxGallery);

gallery.querySelectorAll('img').forEach((img, index) => {
    img.addEventListener('click', function () {
        imageCounter = index + 1;
        mainImage.src = `images/image-product-${imageCounter}.jpg`;
    })
})

mainImage.addEventListener('click', function () {
    lightbox.classList.add('open');
    currentImage.src = `images/image-product-${imageCounter}.jpg`;
})

lightbox.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.current-image') && (e.target !== nextImage) && (e.target !== prevImage)) {
        lightbox.classList.remove('open');
    }
})

lightboxGallery.querySelectorAll('img').forEach((img, index) => {
    img.addEventListener('click', function (e) {
        e.stopPropagation();
        imageCounter = index + 1;
        currentImage.src = `images/image-product-${imageCounter}.jpg`;
    })
})

if (window.screen.width < 900) {
    nextImage.addEventListener('click', function () {
        if (imageCounter < 4)
            imageCounter++;
        mainImage.src = `images/image-product-${imageCounter}.jpg`;
    })

    prevImage.addEventListener('click', function () {
        if (imageCounter > 1)
            imageCounter--;
        mainImage.src = `images/image-product-${imageCounter}.jpg`;
    })
} else {
    nextImage.addEventListener('click', function () {
        if (imageCounter < 4)
            imageCounter++;
        currentImage.src = `images/image-product-${imageCounter}.jpg`;
    })
    prevImage.addEventListener('click', function () {
        if (imageCounter > 1)
            imageCounter--;
        currentImage.src = `images/image-product-${imageCounter}.jpg`;
    })
}




