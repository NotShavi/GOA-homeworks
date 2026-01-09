# გამოაქვს ტერმინალში ყველა ლუწი რიცხვი 0 დან 30 ჩათვლით.
for i in range(0,32,2):
    print(i)

# ამ შემთხვევაში გავაერთიანეთ for loop და for რომ გამოგვეტანა 0 დან 30 ჩათვლით ყველა ლუწი რიცხვი.
for i in range (0,32,2):
    if i%2!=1:
        print(i)

# ამ შემთხვევაში გავაერთიანეთ while loop და for რომ გამოგვეტანა 0 დან 30 ჩათვლით ყველა ლუწი რიცხვი.
num=0
while num!=32:
    for i in range (0,32,2):
     if i%2!=1:
        print(i)
        num += 2

# ამ შემთხვევაში ჩვენ ვეუბნებით მომხმარებელს ყველა იმ ნივთს რომელიც შეუძლია რომ იყიდოს მისი მთლიანი ბალანსით
Total=3000

if Total >= 5000:
   print("You can buy a new computer")
else:
    print("You cant buy a new computer")
if Total >= 3000:
   print("You can buy a new phone")
else:
    print("You cant buy a new phone")
if Total >= 2000:
   print("You can buy a new laptop")
else:
    print("You cant buy a new laptop")
if Total >= 1000:
   print("You can buy a new bike")
else:
    print("You cant buy a new bike")
if Total >= 500:
   print("You can buy a new CPU")
else:
    print("You cant buy a new CPU")
if Total >= 50:
   print("You can buy 5 books")
else:
    print("You cant buy 5 books")
if Total >= 5:
   print("You can buy a new pencil")
else:
    print("You cant buy a new pencil")
if Total <= 5:
   print("You cant buy anything")


# ამ შემთხვევაში კი მომხმარებელს ვეუბნებით იმ პირველივე ყველაზე ძვირ ნივთს რომელის ყიდვაც მას შეუძლია.
Total=1000

if Total >= 5000:
   print("You can buy a new computer")
elif Total >= 3000:
   print("You can buy a new phone")
elif Total >= 2000:
   print("You can buy a new laptop")
elif Total >= 1000:
   print("You can buy a new bike")
elif Total >= 500:
   print("You can buy a new CPU")
elif Total >= 50:
   print("You can buy 5 books")
elif Total >= 5:
   print("You can buy a new pencil")
elif Total <= 5:
   print("You cant buy anything")