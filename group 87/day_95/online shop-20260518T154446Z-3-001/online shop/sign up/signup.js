import User from "../utils/Factory.js";
import { getLocal, setLocal } from "../utils/localstorage.js";
const form =  document.querySelector("form");


const users = getLocal("users") || []

const signUp = (e) =>{
    e.preventDefault()

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = new User(firstname,lastname,email,password);

    if(password.length < 8){
        return alert("Passwor should be minimum 8 characters")
    }

    if(users.some(user => user.email === email)){
        return alert("User with this email already exists")
    }


    users.push(newUser);
    setLocal("users",users)
    window.location.href = "../login/login.html"
    
}


form.addEventListener("submit",signUp)
