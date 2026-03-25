// 1
for (let i=1;i<21;i++){
    if (i%2==0){
        console.log(i)
    }
}

// 2
let numbers = [4, 8, 15, 16, 23, 42];
let sum=0
for (let i of numbers){
    sum+=i
}
console.log(sum)


// 3
let fruits = ['ვაშლი', 'ბანანი', 'მარწყვი', 'კივი']

for (let i of fruits){
    console.log(`${i} - ${i.length}`)
}


// 4
let word = "პროგრამირება";
for (let i of word){
    console.log(i)
}

// 5
let car={make: "Toyota", model: "Camry", year: 2022}
for (let i in car){
    console.log(`${i}: ${car[i]}`)
}

// 6
let shoppingCart = { პური: 2, რძე: 4, ყველი: 10, კვერცხი: 5 };
let productsum=0
for (let i in shoppingCart){
    productsum+=shoppingCart[i]
}
console.log(productsum)

// 7
let number=10
while (number>1){
    console.log(number)
    number--
}
console.log("გაშვება!")

// 8
let num2=1
while (num2%7!==0 || num2%5!==0){
    num2++
}
console.log(num2)

// 9
let num=0
do{
    num=Math.floor(Math.random() * 6)+1
    console.log(num) 
}while(num!=6)

// 10
let students = [
    { name: 'ანა', score: 85 },
    { name: 'ნიკა', score: 42 },
    { name: 'მარიამი', score: 91 },
    { name: 'ლაშა', score: 38 }
];

for (let i of students){
    if (i['score']>50){
        console.log(i['name'])
    }
}