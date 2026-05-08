import { addProduct,cart } from "./helper.js"


const products = Array.from(document.getElementsByClassName("card"))






products.forEach(product => {
    const button = product.querySelector("button")

    button.addEventListener("click",()=>{
        addProduct(product)
    })
})

