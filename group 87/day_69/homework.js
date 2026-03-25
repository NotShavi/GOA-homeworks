// .length-გვიბრუნებს სიის/ტექსტის სიგრძეს
console.log("Andria".length)
console.log([1,2,3,4,5,6,7].length)

// .join()-აერთებს სიის ელემენტებს და გარდაქმნის სტრინგად
let li=[1,2,3,4]
// შეაერთებს მძიმეებით
console.log(li.join())
// შეაერთებს - ით
console.log(li.join("-"))

// to.String()-გარდაქმნის სიას სტრინგად და აკავშირებს ელემენტებს ერთმანეთთან მძიმეთი
console.log(li.toString())
console.log(["a",'n',"d","r","i","a"].toString())

// push()-ამატებს სიის ბოლოში ელემენტს
li.push(5)
li.push(6)
console.log(li)

// .shift()-სიიდან შლის პირველ ელემენტს
li.shift()
li.shift()
console.log(li)

// isArray()-ამოწმებს არის თუ არა გადაცემული value სია
console.log(Array.isArray([1,2,3]))
console.log(Array.isArray("Andria"))

// .concat()-აერთებს სიებს,ან სიას გადაცემულ მნიშვნელობასთან
let li2=[7,8,9,10]
console.log(li.concat(li2))
console.log(li.concat([7,8,9,10]))

// .slice()-გამოაქვს სიის გადაცემული ინდექსიდან გადაცემულ ინდექსამდე მონაკვეთი
let lis=[1,2,3,4]
console.log(lis.slice(1,4))

// .splice()-შლის სიიდან მონაკვეთს ინდექსიდან რამდენსაც მივუთითებთ
lis.splice(1,2)
// ამოშალა 1 ინდექსი და შემდეგი ერთი ელემენტი
console.log(lis)
let lis2=[1,2,3,4,5,6,7]
lis2.splice(1,3)
// ამოშალა 1 ინდექსი და შემდეგი სამი ელემენტი
console.log(lis2)




let price = 100;

const changePrice = () => {
    let price = 50;
    console.log("ახალი ფასი ფუნქციაში:", price);
};

changePrice();
console.log("გლობალური ფასი:", price);



let nickname = "Gigi";

function outer() {
    let nickname = "Gio";

    function inner() {
        console.log(nickname);
    }

    inner();
}

outer();

// ფუნქციამ ეს ცვლადი არ იპოვა outer ფუნქციაში და გაჩერდა იქ

let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);

// ფუნქციაში ჩვენ გვაქვს ცვლადი რომელიც იღებს არგუმენტს.ამ ცვლადის სახელი იგივეა რაც გარეთა ცვლადის მაგრამ ფუნქცია იყენებს პარამეტრის
// ცვლადს.ამის გამო გარეთა ცვლადი არ იცვლება და ფუნქციის ცვლადი იცვლის მნიშვნელობას.