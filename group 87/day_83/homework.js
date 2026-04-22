class book{
    constructor(title,author,year){
        this.title = title,
        this.author = author,
        this.year = year
    }

    getSummary(){
        console.log(`წიგნი ${this.title} დაწერილია ${this.author} ის მიერ ${this.year} წელს`)
    }

    getAge(){
        console.log(2026-this.year)
    }
}

const Hello = new book("Hello","Jack",2000)
console.log(Hello)
Hello.getSummary()
Hello.getAge()


class rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    get area() {
        console.log(this._width * this._height)
    }

    get perimeter() {
        console.log(2 * (this._width + this._height))
    }

    set width(val) {
        if (val <= 0) {
            console.log("ახალი სიგანე ნაკლები იყო ან უდრიდა 0 ს.ახალი მნიშვნელობა გახდა 1")
            this._width = 1
        } else {
            this._width = val
        }
    }

    set height(val) {
        if (val <= 0) {
            console.log("ახალი სიმაღლე ნაკლები იყო ან უდრიდა 0 ს.ახალი მნიშვნელობა გახდა 1")
            this._height = 1
        } else {
            this._height = val
        }
    }

}



const rect = new rectangle(0,10)

rect.area
rect.perimeter
console.log(rect)



class user{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this._password = password
    }

    get password(){
        console.log("********")
    }

    set password(val){
        if (val.length<8){
            console.log("პაროლი ზედმეტად მოკლეა,ამიტომ ის არ შეიცვალა")
        }
        else{
            this._password=val
        }
    }

    set changeEmail(val){
        if (val.includes("@")){
            this.email=val
        }
        else{
            console.log("შემოიყვანე სწორი ემაილი")
        }
    }
}

const Nick = new user("Nick","nick123@gmail.com","12345678")
Nick.password
Nick.password = "1234567"
Nick.changeEmail = "nick12gmail.com"
console.log(Nick)