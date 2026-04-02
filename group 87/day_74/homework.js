const users = [
  { id: 1, name: "ანი", age: 22, active: true, score: 85 },
  { id: 2, name: "ნიკა", age: 17, active: false, score: 45 },
  { id: 3, name: "მარიამი", age: 25, active: true, score: 92 },
  { id: 4, name: "გიორგი", age: 30, active: true, score: 70 },
  { id: 5, name: "სალომე", age: 16, active: false, score: 55 }
];

users.forEach((name)=>{
    console.log(name.name)
})

users.forEach((name)=>{
    if (name.active===true){
        console.log(name.name)
    }
})

users.forEach((name)=>{
    console.log(`name is:${name.name} and age:${name.age}`)
})

users.forEach((name)=>{
    if (name.score>50){
        name.passed=true
    }
    else{
        name.passed=false
    }
})

console.log(users)


let names = users.map((name)=>{
    return name.name
})

let scorePlusTen = users.map((name)=>{
    return name.score+10
})

let nameAndAge = users.map((name)=>{
    return {
        name : name.name,
        age : name.age
    }
})

let info = users.map((name)=>{
    return `${name.name} - ${name.score} ქულა`
})


let users2 = users.filter((name)=>{
    if (name.age>18){
        return name
    }
})

let users3 = users.filter((name)=>{
    if (name.active===false){
        return name
    }
})

let users4 = users.filter((name)=>{
    if (name.score<80){
        return name
    }
})

let users5 = users.filter((name)=>{
    if (name.name.length>4){
        return name
    }
})

let sumOfScores = users.reduce((accumulator,name)=>{
    accumulator += name.score
    return accumulator
},0)

let avgOfScores = users.reduce((accumulator,name)=>{
    accumulator += name.score
    return accumulator
},0)/users.length

let activeAndInactive = users.reduce((accumulator,name)=>{
    if (name.active===true){
        accumulator.active.push(name.name)
    }
    else{
        accumulator.inactive.push(name.name)
    }
    return accumulator
},{active: [],inactive: []})




console.log(users.some((name)=>{
    return name.age<18
}))

console.log(users.some((name)=>{
    return name.score===100
}))

console.log(users.some((name)=>{
    return name.name==="გიორგი"
}))