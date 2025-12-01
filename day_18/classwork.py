number = int(input("Enter a number: "))
if number > 50:
    print(number * 5)
else:
    print(number * number)

password = input("Enter your password: ")
if password == "goa123":
    print("Password is correct!")
else:
    print("Incorrect password!")

enternum = int(input("Enter a number: "))
total = 0
for i in range(1, enternum+1):
    total += i
print("The total sum is: " + str(total))