class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    sayHi(){
        console.log(this.name)
    }
    agePlustwo(){
        console.log(this.age*2)
    }
}

let john = new User("John",5)
john.sayHi()
john.agePlustwo()
console.log(john)



function User2(name){
    this.name = name
}

User2.prototype.sayHi2 = () =>{
    console.log(this.name)
}

let nick = new User2("Nick")
nick.sayHi2()

console.log(nick.name)