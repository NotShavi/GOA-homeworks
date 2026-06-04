import { getLocal, setLocal } from "../utils/localstorage.js";


const users = getLocal("users") || [];
const form = document.querySelector("form");

const logIn = (e) =>{
    e.preventDefault()

    const email = form.email.value;
    const password = form.password.value;

    const currentUser = {
        email,
        password
    }
    if(users.some(user => user.email === email && user.password === password)){
        alert("Successfully logged in!")
        setLocal("currentUser", currentUser)
        window.location.href = "../products/products.html"


    }else{
        return alert("Invalid email or password!")
    }
}


form.addEventListener("submit",logIn)

