const plus=document.getElementById("plus")
const minus=document.getElementById("min")
const paragraph=document.getElementById("num")
const restart=document.getElementById("reset")
let count=0

const decrement = ()=>{
    count--
    if (paragraph.innerHTML==="0"){
        count=0
    }
    paragraph.innerHTML=count
}


const increment = ()=>{
    count++
    paragraph.innerHTML=count
}


minus.onclick=decrement
plus.onclick=increment
restart.onclick=()=>{
    count=0
    paragraph.innerHTML=count
}