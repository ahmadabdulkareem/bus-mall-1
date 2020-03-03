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
var l;
var c;
var r;
var totalClick = 0;

function render() {

    leftProduct = product[Math.floor(Math.random() * (product.length))];
    centerProduct = product[Math.floor(Math.random() * (product.length))];
    rightProduct = product[Math.floor(Math.random() * (product.length))];


    //    selected.push(leftProduct,centerProduct,rightProduct);
    while (leftProduct.imgPath === rightProduct.imgPath || leftProduct.imgPath === centerProduct.imgPath || rightProduct.imgPath === centerProduct.imgPath) {


        leftProduct = product[Math.floor(Math.random() * (product.length))];
        centerProduct = product[Math.floor(Math.random() * (product.length))];
        rightProduct = product[Math.floor(Math.random() * (product.length))];
    }
    if (totalClick > 0 && (leftProduct.imgPath === l || leftProduct.imgPath === r || leftProduct.imgPath === c || rightProduct.imgPath === l || rightProduct.imgPath === r || rightProduct.imgPath === c || centerProduct.imgPath === l || centerProduct.imgPath === r || centerProduct.imgPath === c)) {
        render();
    }
    l = leftProduct.imgPath;
    c = centerProduct.imgPath;
    r = rightProduct.imgPath;
    leftImg.setAttribute('src', l);
    rightImg.setAttribute('src', r);
    centerImg.setAttribute('src', c);}

render();


var timeclicked = [];
var timesView = [];
var total = 25;

imgSec.addEventListener('click', handleClick);
function handleClick(event) {
    // console.log(event.target);
    if (totalClick < total) {
        if (event.target.id === 'leftImg') {
            leftProduct.numberOfClicks++;
            // console.log(leftProduct, "left");
        }
        else if (event.target.id === 'centerImg') {
            centerProduct.numberOfClicks++;
            // console.log(centerProduct, "center");
        }
        else if (event.target.id === 'rightImg') {
            rightProduct.numberOfClicks++;
            // console.log(rightProduct, "right");
        }

        totalClick++;
        // console.log(product);

        leftProduct.numberOfShowen++;
        rightProduct.numberOfShowen++;
        centerProduct.numberOfShowen++;
        render();
        console.log(l, " ", r, " ", c);
        console.log(totalClick);
    }
    else {
        imgSec.removeEventListener('click', handleClick);
        leftProduct.numberOfShowen++;
        rightProduct.numberOfShowen++;
        centerProduct.numberOfShowen++;
        pageInfo();
        for (var i = 0; i < 20; i++) {
            timeclicked[i] = product[i].numberOfClicks;
        }

        for (var i = 0; i < 20; i++) {
            timesView[i] = product[i].numberOfShowen;
        }
        // console.log(timeclicked);
        drawingCanvas();
        var sum = 0;
        for (var i = 0; i < 20; i++) {
            sum = sum + product[i].numberOfShowen;
        }
        // console.log(sum);
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

var names = [];
for (var i = 0; i < 20; i++) {
    names[i] = product[i].productName;
}


// console.log(timeclicked);
function drawingCanvas() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: '# votes',
                data: timeclicked,
                backgroundColor: [

                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 159, 64)'


                ],
                borderColor: [

                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001'

                ],
                borderWidth: 1
            }, {
                label: '# viwes',
                data: timesView,
                backgroundColor: [

                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)',
                    'rgb(255, 1, 64)'

                ],
                borderColor: [

                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001',
                    '#001'
                ],
                borderWidth: 1
            }




            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
// console.log(product);
// console.log(product.length);