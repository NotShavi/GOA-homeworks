let users = JSON.parse(localStorage.getItem("Users")) || []
const form = document.querySelector("form")
const ul = document.querySelector("ul")

function render(){
    ul.innerHTML = ""
    users.forEach((value)=>{
        const li = document.createElement("li")
        li.innerHTML = value.email
        ul.appendChild(li)
    })
}


function submit(e){
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const info = {
        email,
        password
    }
    if (users.some((value)=>{
        return info.email === value.email
    })){
        
        alert("Same email was found in the system,try new one")
        e.target.reset()
        return;
    }
    else{
        users.push(info)
    }
    e.target.reset()
    localStorage.setItem("Users",JSON.stringify(users))
    render()
}
render()

form.addEventListener("submit",submit)