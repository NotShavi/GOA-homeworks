num=[10,20,30,40]
ind=int(input("Please enter an index: "))
try:
    print(num[ind])
except IndexError:
    print("ასეთი ინდექსი არ არსებობს")

prices={
    "apple":2,
    "banana":3,
    "watermelon":5,
    "strawberry":1
}
product=input("Please enter a product name: ")
try:
    print(prices[product])
except KeyError:
    print("ასეთი პროდუქტი ვერ მოიძებნა")

num1=input("Please enter the first number: ")
num2=input("Please enter the second number: ")
try:
    print(int(num1)+int(num2))
except ValueError:
    print("შემოიყვანე მხოლოდ რიცხვები")