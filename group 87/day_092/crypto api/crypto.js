const form = document.querySelector("form")
const div = document.getElementById("print")

async function findCrypto(crypto){
    const info = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`)
    const filtered = await info.json()
    return filtered
}

function render(information){
    div.innerHTML=""
    const newdiv = document.createElement("div")
    newdiv.id="newdiv"
    if (information.length!==0){
        newdiv.innerHTML=`
        <img src=" ${information[0].image}" width="60px" height="60px">
        <h3>Crypto name: ${information[0].name}<h3>
        <b>Current price: ${information[0].current_price}</b>
        <p>Crypto's max supply: ${information[0].max_supply}</p>
        <p>Total supply: ${information[0].total_supply}</p>
        <i>Price change(last 24h): ${information[0].price_change_24h}</i>
    `
    }
    else{
        newdiv.innerHTML=`
            <h3 style="color:red;">Crypto not found,try again</h3>        
        `
    }
    div.appendChild(newdiv)
}

form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    const search = await findCrypto(form.crypto.value)
    console.log(search)
    render(search)
    e.target.reset()
})