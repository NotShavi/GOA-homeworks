import carsData from "./cars.js";


const carsdiv = document.getElementById("cars")
const form = document.querySelector("form")
const select = document.querySelector("select")
let newlist = []

function carsRender(li){
    carsdiv.innerHTML = ""
    li.forEach((element) => {
        const cardiv = document.createElement("div")
        cardiv.className = "cardiv"
        cardiv.innerHTML = `
            <img class="carimg" src="${element.image}">
            <b class="bold">Car's brand:${element.brand}</b>
            <b class="bold">Car's model:${element.model}</b>
            <p class="info">Car's price:${element.price}</p>
            <p class="info">Car's year:${element.year}</p>
            <p class="info">Car's fuel:${element.fuel}</p>
        `
        carsdiv.appendChild(cardiv)
    });
}

if (select.value === "All"){
    carsRender(carsData)
}

select.addEventListener("change",()=>{
    if (select.value === "Ford" || select.value === "Mercedes-Benz" || select.value === "Subaru"){
        newlist = carsData.filter((val)=>{return val.brand === select.value})
    }else if (select.value === "All"){
        newlist = carsData
    }else if (select.value === "pricedown"){
        newlist = [...carsData]
        newlist.sort((a, b) => b.price - a.price)
    }else if (select.value === "priceup"){
        newlist = [...carsData]
        newlist.sort((a, b) => a.price - b.price)
    }
    carsRender(newlist)
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    newlist = carsData.filter((val)=>{return val.model.toLowerCase() === form.querySelector("input").value.toLowerCase() || val.brand.toLowerCase() === form.querySelector("input").value.toLowerCase()})
    if (newlist.length > 0){
        carsRender(newlist)
    }else{
        carsdiv.innerHTML=`
                <h2 id="notfound">მითითებული პარამეტრებით ავტომობილი ვერ მოიძებნა</h2>
        `
    } 
    e.target.reset()
})