add_15 = lambda num:num+15

mult = lambda x,y:x*y

revers = lambda st:st[::-1]

words=["apple", "banana", "cherry", "kiwi"]
words.sort(key=len)

words.sort(key=lambda word:word[-1])
print(words)

products=[("Milk", 3), ("Bread", 2), ("Cheese", 5)]
products.sort(key=lambda product:product[1])

# lambda-მარტივად რომ ვთქვათ პატარა ფუნქცია რომელსაც ვიყენებთ მაშინ როდესაც გვჭირდება პატარა მარტივი კოდის გაწერა
# გვეხმარება sort() ფუნქციის გამოყენებაში
# განსხვავდება ფუნქციისგან იმით რომ არის მოკლე,არ გამოიყენება დიდი კოდებისთვის და არის ანონიმური ანუ მას სახელი არ აქვს
# თუ ცვლადში არ ჩავსვავთ