let age=18
age>=18 ? console.log("You are an adult"):
console.log("You are a child")

let num=4
if (num%2===0){
    console.log("Even")
}
else{
    console.log("Odd")
}

let totalPrice=101
let discount=''
if (totalPrice>100){
    discount="20% discount"
    console.log(discount)
}
else{
    discount="No discount"
    console.log(discount)
}

let dayNum=Number(prompt("Enter a number from 1 to 7: "))
switch(dayNum){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Number out of range")
}


let color="yellow"
switch (color){
    case "red":
        console.log("Stop")
        break
    case "yellow":
        console.log("Get ready")
        break
    case "green":
        console.log("You can go now")
        break
    default:
        console.log("Traffic light does not work")
}