let users = JSON.parse(localStorage.getItem("Users")) || []
const form = document.querySelector("form")
const body = document.querySelector("body")

class user{
    constructor(name,lastname,email){
        this.name = name,
        this.lastname = lastname,
        this.email = email
    }
}

function submit(e){
    e.preventDefault()
    const name = e.target.name.value
    const lastname = e.target.lastname.value
    const email = e.target.email.value
    const info = new user(name,lastname,email)
    if (users.some((value)=>{
        return info.email === value.email
    })){
        alert("Same email was found in the system,try new one")
        e.target.reset()
        return;
    }
    else{
        users.push(info)
        let div = document.createElement("div")
        div.id = "pop"
        body.appendChild(div)
        let div2 = document.createElement("div")
        div2.id = "popdiv"
        div.appendChild(div2)
        let img = document.createElement("img")
        img.id = "popimg"
        img.src = "assets/images/icon-success-check.svg"
        div2.appendChild(img)
        let h3 = document.createElement("h3")
        h3.id = "poph3"
        h3.innerHTML = "Message Sent!"
        div2.appendChild(h3)
        let text = document.createElement("p")
        text.id = "poptext"
        text.innerHTML = "Thanks for completing the form. We'll be in touch soon!"
        div.appendChild(text)
        let button = document.createElement("button")
        button.innerHTML = "X"
        button.id = "popbutton"
        button.style.background="transparent"
        button.style.border = 0
        button.style.fontSize = "18px"
        div2.append(button)
        button.addEventListener("click",() => {
        div.remove()
        })
    }
    e.target.reset()
    localStorage.setItem("Users",JSON.stringify(users))
}

form.addEventListener("submit",submit)