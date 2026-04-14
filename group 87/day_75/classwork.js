// new-გვეხმარება ფუნქციით ობიექტის შექმნაში.ფუნქციით ვამატებთ ინფორმაციას ობიექტში რომელიც თვითონ ფუნქციაა და შემდეგ new keyword ს ვიყენებთ იმისთვის რომ პროგრამამ ეს ფუნქცია აღითქვას ობიექტად
function info(name,lastname,age,city,group,speed){
    this.name=name
    this.lastname=lastname
    this.age=age
    this.city=city
    this.group=group
    this.speed=speed
}

const andria=new info("Andria","Shavidze","15","Tbilisi",87,3)
console.log(andria)


// this-გამოიყენება ობიქეტებში,ხშირად მაშინ როდესაც ობიექტში ვქმნით ფუნქციას და გვინდა იმ ფუნქციაში ის ინფორმაცია გამოვიყენოთ რაც იმავე ობიექტში გვაქვს

const information = {
    name : "Andria",
    age : 15,
    fullInfo(){
        return `${this.name} is ${this.age} years old`
    }
}

console.log(information.fullInfo())

