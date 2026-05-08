
let cart = JSON.parse(localStorage.getItem("Cart")) || []

const addProduct = (element) => {
    let currentProduct = {
        name: element.querySelector("h3").textContent,
        price: Number(element.querySelector(".price").textContent.replace("$", "")),
        image: element.querySelector("img").src,
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

export { addProduct, cart }