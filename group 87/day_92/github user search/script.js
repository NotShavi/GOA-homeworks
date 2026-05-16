const form = document.querySelector('form')
const div = document.getElementById("info")
const body = document.querySelector("body")
const head = document.getElementById("head")
let mode = document.createElement("button")
mode.innerHTML="LIGHT"
mode.style.color = "white"
mode.id = "mode"
head.appendChild(mode)
let bool = true
async function findUser(username){
    const information = await fetch(`https://api.github.com/users/${username}`)
    const information2 = await information.json()
    return information2
}
const alert = document.createElement("h1")
alert.id = "alert"
alert.innerHTML = `User not found`
const newdiv = document.createElement("div")
newdiv.id="infodiv"
function render(user){
    div.innerHTML=""
    newdiv.innerHTML=""
    if (user.status === "404"){
        
        
        
        
         div.appendChild(alert)
         if (div.querySelector("#alert")) {
    alert.style.color = bool ? "white" : "black";
}
    }
    else{
        if (user.bio===null){
            user.bio="This profile has no bio"
        }
        if (user.company===null){
            user.company="No active companies"
        }
        if (user.location===null){
            user.location="No public location"
        }
        if (user.twitter_username===null){
            user.twitter_username="No linked twitter"
        }
        if (div.querySelector("#alert")) {
    alert.style.color = bool ? "white" : "black";
}
        
        newdiv.innerHTML=`
            <div id="image"><img src="${user.avatar_url}" width="60px" height="60px" id="pfp"></div>
            <div id="information">
                <div id="basic">
                    <div id="inbasic">
                        <h3 id="devname">${user.login}</h3>
                        <p id="blue">Type: ${user.type}</p>
                        <p id="bio">${user.bio}</p>
                    </div>
                    <div id="inbasic2">
                        <h4 id="date">Register date: ${user.created_at}</h4>
                    </div>
                </div>
                <div id="diff">
                    <div class="diff">
                        <h5 class="diffh5">Repos</h5>
                        <p class="diffp">${user.public_repos}</p>
                    </div>
                    <div class="diff">
                        <h5 class="diffh5">Followers</h5>
                        <p class="diffp">${user.followers}</p>
                    </div>
                    <div class="diff">
                        <h5 class="diffh5">Following</h5>
                        <p class="diffp">${user.following}</p>
                    </div>
                </div>
                <div id="last">
                    <p class="lastp">Location: ${user.location}</p>
                    <p class="lastp">Twitter Username: ${user.twitter_username}</p>
                    <p class="lastp">Company: ${user.company}</p>
                    <p class="lastp">Url: ${user.url}</p>
                </div>
            </div>
        `
        
        div.appendChild(newdiv)
        if (bool){
        mode.innerHTML="LIGHT"
        mode.style.color = "white"
        form.querySelector("input").style.backgroundColor="#1e2a4a"
        body.querySelector("div").style.backgroundColor="rgb(24, 24, 53)"
        body.querySelector("h2").style.color="white"
        newdiv.style.backgroundColor="#1e2a4a"
        newdiv.querySelector("h3").style.color="white"
        newdiv.querySelector("p").style.color="white"
        newdiv.querySelector("h5").style.color="white"
        newdiv.querySelectorAll(".lastp").forEach(element => {
            element.style.color="white"
        });
        newdiv.querySelector("#blue").style.color="blue"
        newdiv.querySelector("h4").style.color="white"
        newdiv.querySelector("#bio").style.color="gray"
        newdiv.querySelectorAll("h5").forEach(element =>{
            element.style.color="gray"
        })
        newdiv.querySelectorAll(".diffp").forEach(element =>{
            element.style.color="white"
        })
        newdiv.querySelector("#diff").style.backgroundColor="#283761"
        form.querySelector("input").style.color="white"
        
    }
    else{
        
        mode.innerHTML = "DARK"
        mode.style.color = "black"
        form.querySelector("input").style.backgroundColor="white"
        body.querySelector("div").style.backgroundColor="rgb(224, 224, 224)"
        body.querySelector("h2").style.color="black"
        newdiv.style.backgroundColor="white"
        newdiv.querySelector("h3").style.color="black"
        newdiv.querySelectorAll("p").forEach(element =>{
            element.style.color="black"
        })
        newdiv.querySelectorAll("h5").forEach(element =>{
            element.style.color="black"
        })
        
        newdiv.querySelector("h4").style.color="black"
        newdiv.querySelector("#blue").style.color="blue"
        newdiv.querySelector("#diff").style.backgroundColor="rgb(224, 224, 224)"
        form.querySelector("input").style.color="black"
        if (div.querySelector("#alert")) {
    alert.style.color = bool ? "white" : "black";
}
    }
    }
}

form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    const info = await findUser(form.username.value)
    console.log(info)
    render(info)
    e.target.reset()
})
mode.addEventListener("click",(e)=>{
    if (bool){
        bool=false
    }
    else{
        bool=true
    } 
    if (div.querySelector("#alert")) {
    alert.style.color = bool ? "white" : "black";
}   
    if (bool){
        mode.innerHTML="LIGHT"
        mode.style.color = "white"
        form.querySelector("input").style.backgroundColor="#1e2a4a"
        body.querySelector("div").style.backgroundColor="rgb(24, 24, 53)"
        body.querySelector("h2").style.color="white"
        newdiv.style.backgroundColor="#1e2a4a"
        if (newdiv.innerHTML!==""){
            newdiv.querySelector("h3").style.color="white"
        newdiv.querySelector("p").style.color="white"
        newdiv.querySelector("h5").style.color="white"
        newdiv.querySelectorAll(".lastp").forEach(element => {
            element.style.color="white"
        });
        newdiv.querySelector("#blue").style.color="blue"
        newdiv.querySelector("h4").style.color="white"
        newdiv.querySelector("#bio").style.color="gray"
        newdiv.querySelectorAll("h5").forEach(element =>{
            element.style.color="gray"
        })
        newdiv.querySelectorAll(".diffp").forEach(element =>{
            element.style.color="white"
        })
        newdiv.querySelector("#diff").style.backgroundColor="#283761"
        }
        
        form.querySelector("input").style.color="white"
        
    }
    else{
        
        mode.innerHTML = "DARK"
        mode.style.color = "black"
        form.querySelector("input").style.backgroundColor="white"
        body.querySelector("div").style.backgroundColor="rgb(224, 224, 224)"
        body.querySelector("h2").style.color="black"
        newdiv.style.backgroundColor="white"
        if (newdiv.innerHTML!==""){
            newdiv.querySelector("h3").style.color="black"
        newdiv.querySelectorAll("p").forEach(element =>{
            element.style.color="black"
        })
        newdiv.querySelectorAll("h5").forEach(element =>{
            element.style.color="black"
        })
        
        newdiv.querySelector("h4").style.color="black"
        newdiv.querySelector("#blue").style.color="blue"
        newdiv.querySelector("#diff").style.backgroundColor="rgb(224, 224, 224)"
        }
        form.querySelector("input").style.color="black"
        
    }
})