let cart = []

const addProduct = (element) =>{
    let currentProduct ={
        name: element.querySelector("h3").textContent,
        price: element.querySelector(".price").textContent,
        category: element.querySelector(".category").textContent,
        image: element.querySelector("img"),
        quantity:1
    }

    const exists = cart.find(product => product.name === currentProduct.name)
    if (exists){
        exists.quantity++
    }
    else{
        cart.push(currentProduct)
    }
}

export {addProduct,cart}