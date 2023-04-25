const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);
const main = document.querySelector("#main");
const home = document.querySelector('#home')
async function getProductData() {
  let response = await fetch(`https://fakestoreapi.com/products/${id}`);
  let data = await response.json();
  console.log(data);

  function productCardMake() {
    const productInfo = document.createElement('div');
    productInfo.id = 'productInfo'
    const productCard = document.createElement("div");
    productCard.id = "productCard";
    const productTitle = document.createElement("p");
    productTitle.id = "productTitle";
    const productPrice = document.createElement("p");
    productPrice.id = "productPrice";
    const productImg = document.createElement("img");
    productImg.id = "productImg";
    const productDesc = document.createElement("p");
    productDesc.id = "productDesc";

    productDesc.textContent = data.description
    productTitle.textContent = data.title;
    productImg.src = data.image;
    productPrice.textContent = `$${data.price}`;

    productCard.appendChild(productInfo);

    productInfo.appendChild(productTitle);
    productInfo.appendChild(productPrice);   
    productInfo.appendChild(productDesc);
    productCard.appendChild(productImg);

    main.appendChild(productCard);
  }
  productCardMake();
}

home.onclick = () => {
    location.href = `http://127.0.0.1:5500/shopProject/index.html`;
}
getProductData();
