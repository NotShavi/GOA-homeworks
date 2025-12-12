balance= int(input("Please enter your balance: "))
if balance >=1500:
    print("You can buy the laptop")
elif balance >=1000:
    print("You can buy the phone")
elif balance >=100:
    print("You can buy the shoes")
elif balance >=50:
    print("You can buy the sweater")
elif balance >=5:
    print("You can buy the notebook")
else:
    print("You cant buy anything from your list")

number= int(input("Please enter the number: "))
if number > 0:
    print("Your number is positive")
elif number < 0:
    print("Your number is negative")
elif number == 0:
    print("Your number is equal to zero")
