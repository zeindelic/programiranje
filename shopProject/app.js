let shopProduct = [];
let idCounter = "";
const shopMenCategory = document.querySelector("#categoryMen");
const shopWomenCategory = document.querySelector("#categoryWomen");
const shopJeweleryCategory = document.querySelector("#categoryJewelry");
const shopElectronicsCategory = document.querySelector("#categoryElectronics");
const addingProduct = document.querySelector('#addingProduct');
const main = document.querySelector("#main");
const logOutBtn = document.querySelector("#logOut")
async function getShopData(v) {
  let response = await fetch("https://fakestoreapi.com/products/" + v);
  shopMenCategoryButton();
  shopWomenCategoryButton();
  shopJeweleryCategoryButton();
  shopElectronicsCategoryButton();
  let data = await response.json();
  console.log(data);
  shopProduct = data;

  shopMaker();
  console.log(shopProduct);
}
function shopMenCategoryButton() {
  shopMenCategory.onclick = async () => {
    main.innerHTML = "";
    getShopData("category/men's clothing");
  };
}
function shopWomenCategoryButton() {
  shopWomenCategory.onclick = async () => {
    main.innerHTML = "";
    getShopData("category/women's clothing");
  };
}
function shopJeweleryCategoryButton() {
    shopJeweleryCategory.onclick = async () => {
      main.innerHTML = "";
      getShopData("category/jewelery");
    };
  }
  function shopElectronicsCategoryButton() {
    shopElectronicsCategory.onclick = async () => {
      main.innerHTML = "";
      getShopData("category/electronics");
    };
  }

getShopData("");

function shopMaker() {
  shopProduct.forEach((product) => {
    const shopCard = document.createElement("div");
    shopCard.id = "shopCard";
    const shopTitle = document.createElement("p");
    shopTitle.id = "shopTitle";
    const shopPrice = document.createElement("p");
    shopPrice.id = "shopPrice";
    const shopImg = document.createElement("img");
    shopImg.id = "shopImg";
    const shopSeeMore = document.createElement("button");
    shopSeeMore.id = "shopSeeMore";

    shopSeeMore.textContent = "See More";
    shopTitle.textContent = product.title;
    shopImg.src = product.image;
    shopPrice.textContent = `$${product.price}`;

    shopCard.appendChild(shopTitle);
    shopCard.appendChild(shopImg);
    shopCard.appendChild(shopPrice);
    shopCard.appendChild(shopSeeMore);
    main.appendChild(shopCard);
function shopDescriptonButton(shopSeeMore) {
  shopSeeMore.onclick = () => {
    console.log(product)
    idCounter = product.id;
    console.log(idCounter);
    location.href = `http://127.0.0.1:5500/shopProject/description folder/productDescription.html?id=${idCounter}`;
  };
}
    shopDescriptonButton(shopSeeMore,product);
  });
}
home.onclick = () => {
    location.href = `http://127.0.0.1:5500/shopProject/index.html`;
}
addingProduct.onclick = () => {
location.href = `http://127.0.0.1:5500/shopProject/Add%20product%20folder/addProductIndex.html`;
}

logOutBtn.onclick = () =>  {

  sessionStorage.clear()
if (sessionStorage.length === 0) {
  alert("please log in")
  window.location.href = 'http://127.0.0.1:5500/shopProject/loginFolder/loginIndex.html'
  
}
}


console.log(shopProduct);
