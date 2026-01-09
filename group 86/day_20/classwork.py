# num = 0
# for i in range(5):
#     num += int(input("please enter number: "))
# if num%2==0:
#     print("Sum of the numbers is even")
# else:
#     print("Sum of the numbers is odd")

number=1
while number % 5 !=0  or  number % 7 !=0:
    number=int(input("Please enter number: "))
    print("Your number is not divisible by 5 and 7,try again")