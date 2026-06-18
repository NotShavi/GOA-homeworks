const available="qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-_+={[}];:.>,</?"
function rand(){
    let rando=Math.floor(Math.random()*63)
    return available[rando]
}

let answer=prompt("Do you want to generate random passwords?(Yes/No): ").toLowerCase()

while (answer.startsWith("y")){
    let len=Number(prompt("How long should passwords be?: "))
    let amount=Number(prompt("How many passwords should get generated?: "))

    let password=""

    for (let i=0;i<amount;i++){
        for (let x=0;x<len;x++){
            password+=String(rand())
        }
        console.log(password)
        password=""
    }
    answer=prompt("Do you want to generate random passwords?(Yes/No): ").toLowerCase()
}

