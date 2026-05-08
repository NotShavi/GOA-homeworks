# def greet(a):
#     return f"Hello {a}"
# print(greet("Andria"))
# num = 10
# num += 20 
# # num = num + 20
# print(num)
# num = [1,2,3,45,6]
# print(num)
# num = "Andria"
# for i in num:
#     print(i)































# print("5"+"5")
# print(5+5)

# print("5")






# integer - ნებისმიერი მთელი რიცხვი 5,1,3,-5,999
# string - ნებისმიერი მონაცემი პრჭყალებში - " ","Andria","5","5.4"
# float - ათწილადი რიცხვები 3.14,5.5,-4.3


# number = 5

# print(number+number+number)

# number = 4

# print(number+number+number)

# print(number)


# ცვლადი არის ერთგვარი საცავი რომელშიც ვინახავთ ინფორმაციას და შემდგომ მას ვიყენებთ კოდში


# //,%
# //-აბრუნებს განაყოფს ათწილადი ნაწილის გარეშე
# %-აბრუნებს განაყოფის ნაშთს,თუ ნაშთი არ რჩება აბრუნებს 0 ს


# print(11//2)

# print(23%2)


# def create_spiral(n):
#     if type(n)!=int :return []
#     li = [x for x in range(1,(n*n)+1)]
#     lis = []
#     temp = []
#     for i in li:
#         temp.append(0)
#         if len(temp)==n:
#             lis.append(temp)
#             temp=[]
#         else:pass
#     x=-1
#     y=0
#     direction="right"
#     for i in range(1,n*n+1):
#         if direction=="right" and (x+1>=n or lis[y][x+1]!=0):
#             direction="down"
#         elif direction=="down" and (y+1>=n or lis[y+1][x]!=0):
#             direction="left"
#         elif direction=="left" and (x-1<0 or lis[y][x-1]!=0):
#             direction="up"
#         elif direction=="up" and (y-1<0 or lis[y-1][x]!=0):
#             direction="right"
#         if direction=="right":
#             x+=1
#             lis[y][x]=i
#         elif direction=="down":
#             y+=1
#             lis[y][x]=i
#         elif direction=="left":
#             x-=1
#             lis[y][x]=i
#         elif direction=="up":
#             y-=1
#             lis[y][x]=i
#     return lis