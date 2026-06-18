let users = [{
    name:"",
    email:"",
    password:""
}]
const form = document.getElementById("register")
function sumbit(e){
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const info = {
        name,
        email,
        password
    }
    if (users.some((value)=>{
        return info.email === value.email
    })){
        
        alert("Same email was found in the system,try new one")
    }
    else{
        users.push(info)
    }
    e.target.reset()
    console.log(users)
}



form.onsubmit = sumbit

const login = document.getElementById("login")

function exists(e){
    e.preventDefault()

    const loginemail = e.target.email.value
    const loginpassword = e.target.password.value

    const logininfo={
        loginemail,
        loginpassword
    }

    if (users.some((value)=>{
        return value.email===logininfo.loginemail && value.password === logininfo.loginpassword
    })){
        alert("Logged in was successfull")
    }
    else{
        alert("User's information was invalid,try again")
    }
    e.target.reset()
}

login.onsubmit = exists