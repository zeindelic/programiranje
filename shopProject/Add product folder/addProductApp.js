
const home = document.querySelector('#home')
const form = document.querySelector('#form')
const title = document.querySelector('#inputTitle')
const price = document.querySelector('#inputPrice')
const description = document.querySelector('#inputDescription')
const image = document.querySelector('#inputImage')
const category = document.querySelector('#inputCategory')
home.onclick = () => {
    location.href = `http://127.0.0.1:5500/shopProject/index.html`;
}

form.addEventListener('submit', async function (e) {
    e.preventDefault();





console.log(title.value);
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: title.value,
                price: price.value,
                description: description.value,
                category: category.value
            }
        )
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
    

   
})

