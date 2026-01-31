list1=[x for x in range(0,100)]
list2=[x for x in list1 if x%3==0 and x%5==0]
print(list2)
names=["Andria","Nika","Gio","Lazare","Dato","Luka","Gigi","Gabrieli"]
names2=[x for x in names if len(x)%2==0]
print(names2)
# list comprehension-გვაძლევს საშუალებას მარტივად ერთ ხაზში შევქმნათ სია for ციკლის გამოყენებით
# შეგვიძლია გავაერთიანოთ if თან ერთად რომ სიაში შევიტანოთ მხოლოდ ის ელემენტები რომლებიც აკმაყოფილებს
# მოთხოვნილებებს