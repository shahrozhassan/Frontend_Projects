const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
    {
        id:1,
        title :"Air Force",
        price: 199,
        colors:[
            {code: "black",
            img: "./Img/air.png"
        },
        {
            code :"darkblue",
            img : "./Img/air2.png"
        } 
        ]
    },
    {
        id : 2,
        title :"Air Jordan",
        price :149,
        colors :[
            {
                code : "lightgray",
                img : "./Img/jordan.png"
            },
            {
                code :"green",
                img : "./Img/jordan2.png"
            }
        ]
    },
    {
        id : 3,
        title : "Blazzer",
        price :109,
        colors: [
            {
                code :"lightgray",
                img :"./Img/blazer.png"
            },
            {
                code:"green",
                img : "./Img/blazer2.png"
            }
        ]
    },
    {
        id : 4,
        title : "Crater",
        price : 129,
        colors : [
            {
                code : "black",
                img : "./Img/crater.png"
            },
            {
                code : "green",
                img : "./Img/crater2.png"
            }
        ]
    },
    {
        id : 5,
        title :"Hippie",
        price : 99,
        colors : [
            {
                code: "gray",
                img : "./Img/hippie.png"
            },
            {
                code : "black",
                img : "./Img/hippie2.png"
            }
        ]
    }
];

let choosenProduct = products[0];
const currentProductImgage = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
    //change the current product
    choosenProduct = products[index];

    //change text of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImgage.src =choosenProduct.colors[0].img;

    //assign new color
    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
});
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImgage.src = choosenProduct.colors[index].img;
  });
});

currentProductSize.forEach((size,index)=>{
    size.addEventListener('click',()=>{
        currentProductSize.forEach((size,index)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});