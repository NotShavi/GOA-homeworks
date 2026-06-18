class book{
    constructor(title,author){
        this.title = title
        this.author = author
    }
}

const tyaosani = new book("ვეფხისტყაოსანი","შოთა რუსთაველი")
console.log(tyaosani)



class vehicle{
    constructor(brand){
        this._brand = brand
        this._speed = 0
    }
    get brand() { return this._brand; }
    get speed() { return this._speed; }
  
    accelerate() {
        this._speed += 10;
        console.log(this._speed)
    }
}

class car extends vehicle{
    constructor(brand,model){
        super(brand)
        this._model = model
        this._fuel = 100
    }

    drive = () =>{
        this._fuel -= 10
        console.log(`მანქანა ${this._brand} ${this._model} მოძრაობს`) 
    }
}

const bmw = new car("bmw","x5")
bmw.accelerate()
bmw.drive()
console.log(bmw)