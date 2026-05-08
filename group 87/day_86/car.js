class Car{
    constructor(brand,model){
        this._brand = brand
        this._model = model
    }

    static compare(car1,car2){
        if (car1._brand===car2._brand){
            return "ეს მანქანები ერთი ბრენდისაა"
        }
        else{
            return "ეს მანქანები არარის ერთი ბრენდის"
        }
    }
}

module.exports = Car