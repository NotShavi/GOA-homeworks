import fetchData from "../utils/api.js";


const div = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("Cart")) || []

const addToCart = (element) => {
    let currentProduct = {
        name: element.title,
        price: element.price,
        image: element.image.src,
        quantity: 1
    }

    const exists = cart.find(product => product.name === currentProduct.name)

    if (exists) {
        exists.quantity++
    } else {
        cart.push(currentProduct)
    }

    localStorage.setItem("Cart", JSON.stringify(cart))
}

export { addToCart, cart }


const renderData = async () => {
    const data = await fetchData('https://fakestoreapi.com/products')

    data.forEach(product => {

        const productDiv = document.createElement("div")
        productDiv.className = "product"
        productDiv.innerHTML = `
        <img src=${product.image}>
        <h3>Product name: ${product.title}</h3>
        <p>Category: ${product.category} </p>
        <p>${product.description}</p>
        <p>${product.price}$</p>
        <button class="add">Add To Cart</button>
        `
        div.appendChild(productDiv)



        const button = productDiv.querySelector(".add");
        button.addEventListener("click", () => {
            addToCart(product)
        })
    });

}

renderData()