const form = document.querySelector("form")
const list = document.querySelector("ol")
let li = []
function addToTheList(e){
    e.preventDefault()
    const element = form.text.value
    if (li.some((value)=>{
        return value === element
    })){
        alert("Task is already in the list")
        e.target.reset()
        return;
    }
    else{
        li.push(element) 
        render()
        console.log(li)
        
    }
   
    e.target.reset()
}


function render(){
    list.innerHTML=""
    li.forEach((value,index)=>{
        let create = document.createElement("li")
        create.innerHTML = `${value} <button onclick="deleteFromLi(${index})">delete</button>`
        list.appendChild(create)
    })
}

function deleteFromLi(index){
    li.splice(index,1)
    render()
}

form.addEventListener("submit",addToTheList)



// localstorage - გვაძლევს საშუალებას ინფორმაცია შევინახოთ ჩვენი მოწყობილობის browser ში სადაც ის მუდმივად იქნება შენახული.ინახავს ინფორმაციას როგორც ობიექტი ანუ key-value პრინციპით