import { addProduct,cart } from "./helper.js"


const products = Array.from(document.getElementsByClassName("card"))
const cartdiv = document.getElementById("cart")



const render = () =>{
    cartdiv.innerHTML = ""
    
    cart.forEach(product => {
        const productdiv = document.createElement("div")
        productdiv.className = "productdivs"
        productdiv.innerHTML = `
            <img src="${product.image.src}"
            <br>
            <h3>Products name:${product.name}</h3>
            <p>Products category:${product.category}</p>
            <b>Products price:${product.price}</b>
            <br>
            <i>Quantity:${product.quantity}</i>
            <hr>        
        `
        cartdiv.appendChild(productdiv)
    })
    
}


products.forEach(product => {
    const button = product.querySelector("button")

    button.addEventListener("click",()=>{
        addProduct(product)
        render()
    })
})