// ფუნქცია არის მრავალჯერ გამოყენებადი კოდის ბლოკი
function nums(num1,num2){
    return num1**num2
}
console.log(nums(5,2))

// ჩვეულებრივ და arrow ფუნქციას შორის განსხვავება არის ჩაწერა.arrow ფუნქცია იქმნება ცვლადში => გამოყენებით

const nums2 = (num1,num2)=>{
    return num1**num2
}
console.log(nums2(5,2))