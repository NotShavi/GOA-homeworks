fruits = {"apple","banana","melon","cherry","pineapple"}
fruits.remove("melon")
print(fruits)
fruits.add("watermelon")
print(fruits)
fruits1 = {"strawberry","blueberry"}
fruits2=fruits.union(fruits1)
print(fruits2)
print(fruits.difference(fruits1))


dictionary={
    "Name":"Andria",
    "Lastname":"Shavidze",
    "Age":15,
    "Favourite sport":"Football"
}
print(dictionary.keys())
print(dictionary.values())
print(dictionary.items())


# .add-გამოიყენება set ში ახალი ელემენტის დასამატებლად
# .pop-შლის set იდან ერთ random ელემენტს
# .remove-შლის set იდან ელემენტს რომელსაც მივუთითებთ
# .union-აერთიანებს 2 set ს
# .difference-fruits.difference(fruits1) გამოაქვს ისეთი ელემენტები რომლებიც არ არის fruits1 set ში მაგრამ არის fruits ში
# .clear-ასუფთავებს/შლის set ში ყველა ელემენტს
# .discard-შლის set იდან იმ ელემენტს რომელსაც მივუთითებთ.განსხვავდება .remove ისგან იმით რომ თუ ეს გადაცემული ელემენტი არ არის set ში error არ გამოაქვს
# .get-გამოაქვს dictionary დან ის მნიშვნელობა რომლის გასაღებსაც გადავცემთ ფრჩხილებში
# .keys-გამოაქვს dictionary ს ყველა გასაღები
# list()-გვაძლევს შესაძლებლობას მაგ. set ი ვაქციოთ list ად როგორც str(),int() და სხვა ფუნქციები მუშაობს
# .values-გამოაქვს dictionary დან მხოლოდ მნიშვნელობები
# .items-გამოაქვს dictionary დან გასაღებებიც და მნიშვნელობებიც
