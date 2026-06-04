try{
    sayHello()
}
catch{
    console.log("სამწუხაროდ, ასეთი ფუნქცია არ არსებობს!")
}


function checkAge(age){
    if (age<18){
        throw Error("წვდომა აკრძალულია: მომხმარებელი არასრულწლოვანია!")
    }
    else{
        console.log("წვდომა დაშვებულია")
    }
}

try{
    checkAge(17)
}catch{
    console.log("წვდომა აკრძალულია: მომხმარებელი არასრულწლოვანია")
}