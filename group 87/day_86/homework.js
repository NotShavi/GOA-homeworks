class MathHelper{
    static isEven(num){
        return num%2==0
    }

    static average(li){
        return li.reduce((accumulator, current) => accumulator + current, 0)/li.length
    }
}


console.log(MathHelper.isEven(5))
console.log(MathHelper.average([1,2,3]))