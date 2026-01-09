number = 10
while number >= -10:
    print(number)
    number = number - 1

number1 = 1
while number1 <= 100:
    print(number1)
    number1 = number1 + 2

RealPassword="goa123"
UserPassword=""
TotalAttempts=2
while UserPassword != RealPassword and TotalAttempts != -1:
    UserPassword=input("Enter your password: ")
    print("Wrong password. Try again.You have " + str(TotalAttempts) + " attempts left.")
    TotalAttempts = TotalAttempts - 1

