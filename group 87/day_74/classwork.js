let nums = [1,2,3,4,5,6,7,8,9,10]
let nums7 = nums.map(num=> num*7)
console.log(nums7)

const sports = ["Football","Basketball","Tennis","Rugbi","Soccer"]
let sports2 = sports.forEach((name,index)=>{
    console.log(`Sport name:${name} and index:${index}`)
})

const nums2 = [12,23,4,3512,435,234,6,786,943,5465,765,25,453,65,24,19,5,3,10,11]
let evenIndexNums2 = nums2.filter((name,index)=>{
    if (index%2===0){
        return name
    }
})
console.log(evenIndexNums2)

// reduce-არის მეთოდი რომელიც გვეხმარება მასივის ერთ შედეგამდე დაყვანაში
// accumulator-ცვლადი სადაც გროვდება თითოეული შედეგი

let fiveNum = [4,21,6,4,99]
let sumFiveNum = fiveNum.reduce((accumulator,number)=>{
    return accumulator+=number
},0)
console.log(sumFiveNum)


const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Strawberry", category: "Fruit" },
  { name: "Spinach", category: "Vegetable" }
];

let orderedProducts = items.reduce((accumulator,value)=>{
    const cat=value.category
    if (!accumulator[cat]){
        accumulator[cat]=[]
    }
    accumulator[cat].push(value.name)
    return accumulator
},{})
console.log(orderedProducts)