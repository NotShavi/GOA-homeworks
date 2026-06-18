// v1

const h1 = document.getElementById("main-title")
const button = document.getElementById("main-button")

button.onclick = () =>{
    h1.innerHTML = "ტექსტი წარმატებით შეიცვალა!"
}


// v2

const h1v2 = document.querySelector("h1")
const buttonv2 = document.querySelector("button")

buttonv2.onclick = () =>{
    h1v2.innerHTML = "ტექსტი წარმატებით შეიცვალა!"
}



const ul = document.getElementById("my-list")
let li = ""

for (let i=1;i<6;i++){
    li = document.createElement("li")
    li.innerHTML = `ელემენტი: ${i}`
    ul.appendChild(li)
}




const paragraphs = document.getElementsByClassName("text-item")
const colors = ["red","blue","green"]

let index = 0
let temp = 0

for (let i of paragraphs){
    i.style.color=colors[index]
    index++
}



const timer = document.getElementById("timer")
const start = document.getElementById("start")
let num = 0
function interval(){
    setInterval(()=>{
        num++
        timer.innerHTML = num
    },1000)
}



start.onclick = interval

const colors2 = ["red","blue","green"]
const div = document.getElementById("box")
let index2 = -1
setInterval(()=>{
    index2++
    if (index2 > colors2.length-1) {
        index2 = 0
    }
    div.style.backgroundColor = colors2[index2]
},2000)