dictionary={
    "name":"Andria",
    "hobby":"Football",
    "height":1.75,
    "weight":80
}
print(dictionary.get("name"))
dictionary.pop("height")
print(dictionary)

print(dictionary.keys())
print(dictionary.values())

print(dictionary.items())

animals={
    "dog":2,
    "cat":3,
    "parrot":5
}
anims={}
anims=animals.copy()
print(anims)
animals.clear()
print(animals)


numbers=[1,4,7,10,13,16,19]
newlist=[]
for i in numbers:
    if i%2!=0:
        newlist.append(i*2)
    else:pass
print(newlist)

newlist2=[x*2 for x in numbers if x%2!=0]
print(newlist2)