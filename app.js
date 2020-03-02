"use strict";
var product = [];

function Product(productName) {

    this.productName = productName;
    this.imgPath = `img/${this.productName}.jpg`;
    this.numberOfClicks = 0;
    this.numberOfShowen = 0;
    product.push(this);

}

var bag = new Product('bag');
var banana = new Product('banana');
var bathroom = new Product('bathroom');
var boots = new Product('boots');
var breakfast = new Product('breakfast');
var bubblegum = new Product('bubblegum');
var chair = new Product('chair');
var cthulhu = new Product('cthulhu');
var dogDuck = new Product('dog-duck');
var dragon = new Product('dragon');
var pen = new Product('pen');
var petSweep = new Product('pet-sweep');
var scissors = new Product('scissors');
var shark = new Product('shark');
var sweep = new Product('sweep');
var tauntaun = new Product('tauntaun');
var unicorn = new Product('unicorn');
var usb = new Product('usb');
var waterCan = new Product('water-can');
var wineGlass = new Product('wine-glass');

var leftImg = document.getElementById('leftImg');
var rightImg = document.getElementById('rightImg');
var centerImg = document.getElementById('centerImg');
var imgSec = document.getElementById("imgSec");

var leftProduct;
var centerProduct;
var rightProduct;

function render() {

    leftProduct = product[Math.floor(Math.random() * (product.length - 1))];
    centerProduct = product[Math.floor(Math.random() * (product.length - 1))];
    rightProduct = product[Math.floor(Math.random() * (product.length - 1))];

    while (leftProduct.imgPath === rightProduct.imgPath || leftProduct.imgPath === centerProduct.imgPath || rightProduct.imgPath === centerProduct.imgPath) {
        leftProduct = product[Math.floor(Math.random() * (product.length - 1))];
        centerProduct = product[Math.floor(Math.random() * (product.length - 1))];
        rightProduct = product[Math.floor(Math.random() * (product.length - 1))];

    }

    leftImg.setAttribute('src', leftProduct.imgPath);
    rightImg.setAttribute('src', rightProduct.imgPath);
    centerImg.setAttribute('src', centerProduct.imgPath);

    // handleClick();

}
render();



var totalClick = 0;
var total = 25;

imgSec.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.target);
    if (totalClick < total) {
        if (event.target.id === 'leftImg') {
        leftProduct.numberOfClicks++;
            console.log(leftProduct, "left");
        }
        else if (event.target.id === 'centerImg')
        {
        centerProduct.numberOfClicks++;
        console.log(centerProduct, "center");
        }
        else if (event.target.id === 'rightImg') {
        rightProduct.numberOfClicks++;
            console.log(rightProduct, "right");
        }
       
        totalClick++;
        console.log(product);

        leftProduct.numberOfShowen++;
        rightProduct.numberOfShowen++;
        centerProduct.numberOfShowen++;
        render();
    }
    else {
        imgSec.removeEventListener('click', handleClick);
        pageInfo();
        var sum = 0;
        for (var i = 0; i < 20; i++) {
            sum = sum + product[i].numberOfShowen;
        }
        console.log(sum);
    }


}



var info = document.getElementById('info');
var ul1 = document.createElement('ul');
info.appendChild(ul1);
function pageInfo() {
    for (var i = 0; i < product.length; i++) {
        var li1 = document.createElement('li');
        ul1.appendChild(li1);
        li1.textContent = `${product[i].productName} have  ${product[i].numberOfClicks} votes and was shown ${product[i].numberOfShowen}`;

    }
}



// console.log(product);
// console.log(product.length);