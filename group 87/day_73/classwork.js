// Higher Order Function-არის ისეთი ფუნქცია რომელიც ერთ-ერთ არგუმენტად იღებს სხვა ფუნქციას და აბრუნებს შედეგს იმ ფუნქციის გამოყენებით

const sumOfNums = (arr) =>{
    let sum=0
    for (let i of arr){
        sum+=i
    }
    return sum
}

const avg = (sum,nums)=>{
    return sum(nums) / nums.length
}

console.log(avg(sumOfNums,[1,2,3,4,5]))



// forEach()-იყენებს გადაცემულ ფუნქციას გამოყენებული მნიშვნელობის თითოეულ ელემენტზე

// 1

function number(num1){
    console.log(num1+1)
}

let nums = [1,2,3,4]

nums.forEach(number)


// 2

function numPlusTwo(num2){
    console.log(num2+2)
}

nums.forEach(numPlusTwo)


// map()-ასრულებს გადაცემულ ფუნქციას გადაცემული მნიშვნელობის თითოეულ ელემენტზე და აბრუნებს ამ ახალი ელემენტებით შექმნილ სიას

let array = [1,2,3,4,5,6]
function squareNum(num3){
    return num3*num3
}
let newArray = array.map(squareNum)
console.log(newArray)



// .filter()-სიიდან ქმნის ახალ სიას იმ ელემენტებით რომლებიც გაივლიან გადაცემულ ფუნქციაში მოცემულ პირობას

let array2 = ["a",1,2,"i","3",4]
function noNum(val){
    return typeof val === "string"
}
let newArray2 = array2.filter(noNum)
console.log(newArray2)