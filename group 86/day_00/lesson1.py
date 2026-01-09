from turtle import *


#we want to paint a house

#step one draw a square
speed(10)
width(5)
color("blue")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square
#draw a door
forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()
#end of door
#draw a roof
penup()
goto(200,200)
pendown()
left(180)
color("red")
begin_fill()
left(30)
forward(200)
left(120)
forward(200)
end_fill()

#end of roof
#draw a window
color("green")
penup()
goto(15,140)
pendown()
begin_fill()
right(150)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()
penup()
goto(185,140)
pendown()
begin_fill()
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
end_fill()
#end of window

exitonclick()