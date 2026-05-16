// call stack-არის ადგილი სადაც javascript ი ინახავს იმ ფუნქციებს რომლებიც იმ მომენტში სრულდება
// callback queue-კი არის ადგილი სადაც ინახება callback ფუნქციები რომლებიც მოგვიანებით უნდა შესრულდეს მაგალითად settimeout,fetch
// API(Application Programming Interface)-არის კავშირი ორ პროგრამას შორის სადაც ერთი პროგრამა მეორეს რაღაც ინფორმაციას სთხოვს

async function getUserName() {
    return "Giorgi"
}
getUserName().then((data)=>{console.log(data)})

function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(100)
        },2000)
    })
}

async function processData(){
    let num = await getData()
    return num*2
}

processData().then((data)=>{return data})