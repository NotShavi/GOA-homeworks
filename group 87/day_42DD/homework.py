friends_goa={"luka","nika","gio","aleqsande","dato"}
friends={"cotne","nika","gio","tornike","tedo"}
difference=friends_goa.difference(friends)
both=friends_goa.union(friends)
cars = {"Tesla Model S", "BMW X5", "Audi A6", "Toyota Corolla"}
cars.remove("Audi A6")
cars.add("Porsche 911")
dictionary={
    "Name":"Andria",
    "Lastname":"Shavidze",
    "Favouritecar":"Porsche 911",
    "Favouriteacademy":"GOA"
}
print(dictionary["Favouritecar"])
# list comprehension-გვაძლევს საშუალებას შევავსოთ სია for ციკლის გამოყენებით მაგალითად 1 იდან 10 ამდე რიცხვებით.
list=[x for x in range(0,10)]
print(list)
# ან if ისა და for ციკლის გაერთიანებით მხოლოდ გარკვეული ინფორმაცია გადავცეთ სიას მაგალითად 1 იდან 10 ამდე მხოლოდ ლუწი რიცხვები.
list2=[i for i in range(0,10) if i%2==0]
print(list2)

