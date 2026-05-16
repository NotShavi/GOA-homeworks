const form = document.querySelector("form")
const div = document.getElementById("usersdiv")


async function getData(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}


function render(user){
    if (user.status==="404"){

    
        div.innerHTML = ""
        const newdiv = document.createElement("div")
        newdiv.innerHTML = `
        <h1 style="color:red;">User not found</h1>
        `
         div.appendChild(newdiv)
    }
    else{

    
        div.innerHTML = ""
        const newdiv = document.createElement("div")
        newdiv.innerHTML = `
        <h3>${user.login}</h3>
        <img src="${user.avatar_url}" width="100px" heigth="100px">
        <br>
        <b>Followers:${user.followers}</b>
        <br>
        <i>Total repositories:${user.public_repos}</i>
        `
         div.appendChild(newdiv)
    }
        
    
    
}

form.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const name = form.user.value
    const userdata = await getData(`https://api.github.com/users/${name}`)
    console.log(userdata)
    render(userdata)
    e.target.reset()
})




