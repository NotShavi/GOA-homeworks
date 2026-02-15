square = lambda num:num**2

mult = lambda num1,num2:num1*num2

cToF = lambda c:c*1.8 + 32

EvenOdd = lambda num3:num3%2==0

lenght = lambda st:len(st)

names =["დათო", "ეკა", "ალექსანდრე", "გია"]

names.sort(key=len)

names.sort(key=lambda n:n[-1])

cords = [(1, 5), (8, 2), (4, 10)]

cords.sort(key=lambda cord:cord[1])

products = [{"name": "ყველი", "price": 12.0}, {"name": "რძე", "price": 4.5},{"name": "პური", "price": 1.2}]

products.sort(key=lambda prod:prod["price"])

cases = ["banana", "Apple", "cherry", "Berry"]

cases.sort(key=lambda word:word[0].lower())

age = lambda num5:"Adult" if num5>=18 else "Minor"

PosNegZer= lambda num6:"Positive" if num6>0 else "Negative" if num6<0 else "Zero"