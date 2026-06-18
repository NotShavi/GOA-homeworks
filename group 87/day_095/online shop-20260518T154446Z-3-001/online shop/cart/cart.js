const body = document.body;
const cartdiv = document.getElementById("cart");

const render = () => {
    const cart = JSON.parse(localStorage.getItem("Cart")) || [];

    cartdiv.innerHTML = "";

    if (cart.length === 0) {
        const empty = document.createElement("h3");
        empty.textContent = "Cart is empty";
        empty.id = "empty";
        cartdiv.appendChild(empty);
        return;
    }

    let sum = 0;

    cart.forEach(product => {
        sum += product.price * product.quantity;

        const productdiv = document.createElement("div");
        productdiv.className = "productdivs";
        productdiv.innerHTML = `
            <img src="${product.image}">
            <h3>Product's name: ${product.name}</h3>
            <b>Product's price: $${product.price}</b>
            <i>Quantity: ${product.quantity}</i>
            <h4>Full price: $${product.price * product.quantity}</h4>
            <hr>
        `;

        cartdiv.appendChild(productdiv);
    });

    const full = document.createElement("h2");
    full.textContent = `Full price of your cart is: $${sum}`;
    cartdiv.appendChild(full);

    const pay = document.createElement("button");
    pay.textContent = "Pay for the items";

    const clear = document.createElement("button");
    clear.textContent = "Clear the cart";

    clear.addEventListener("click", () => {
        localStorage.removeItem("Cart");
        location.reload();
    });
    pay.addEventListener("click",()=>{
        // localStorage.clear()
        // location.reload()
        let message = document.createElement("div")
        message.id = "message"
        let purchase = document.createElement("h3")
        purchase.id = "purchased"
        purchase.innerHTML = "Your purchased items:"
        message.appendChild(purchase)
        let insidemessage = document.createElement("div")
        insidemessage.id = "messagediv"
        message.appendChild(insidemessage)
        let exit = document.createElement("button")
        exit.textContent = "X"
        exit.id = "exit"
        exit.addEventListener("click",()=>{
            localStorage.removeItem("Cart")
            localStorage.clear()
            location.reload()
        })
        message.appendChild(exit)
        JSON.parse(localStorage.getItem("Cart")).forEach(product => {
            sum = 0
            const productdivs = document.createElement("div")
            productdivs.className = "productdivs2"
            productdivs.innerHTML = `
                <img src="${product.image}" class="messageimg">
                <div class="insideproduct">
                <h3>Product's name:${product.name}</h3>
                <b>Product's price:$${product.price}</b>
                <i>Quantity:${product.quantity}</i>
                </div>  
            `
            
            
            insidemessage.appendChild(productdivs)
            
            body.appendChild(message)
            console.log(sum)
        })
    })
    cartdiv.appendChild(pay);
    cartdiv.appendChild(clear);
};

render();