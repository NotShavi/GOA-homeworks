let isSuccess = false


let newPromise = new Promise((resolve,reject)=>{
    if (isSuccess){
        resolve("შესრულდა წარმატებით!")
    }
    else{
        reject("მოხდა შეცდომა!")
    }
})

newPromise.then((data)=>{console.log(data)}).catch((data)=>{console.log(data)})


function sayHello(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("გამარჯობა, სამყარო!")
        },2000)
    }).then((data)=>{console.log(data)})
}

sayHello()


function checkNumber(num){
    return new Promise((resolve,reject)=>{
        if (num>10){
            resolve("რიცხვი ვალიდურია")
        }
        else{
            reject("რიცხვი ძალიან პატარაა")
        }
    }).then((data)=>{console.log(data)}).catch((data)=>{console.log(data)})
}

checkNumber(5)
checkNumber(11)

function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({ name: "გიორგი", age: 25 })
        },1500)
    }).then((data)=>{console.log(data.name)})
}

getUserData()