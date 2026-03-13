import random
question = input("Do you want to play(yes/no): ").lower()
if question.startswith("y"):
    humanscore=0
    robotscore=0
    while humanscore<3 and robotscore<3:
        humanchoice=(input("rock,paper,scissors: ")).lower()
        print(" ")
        while humanchoice not in ["rock","paper","scissors"]:
            humanchoice=(input("Please input valid value(rock,paper,scissors): ")).lower()
            print(" ")
        robotchoice=random.choice(["rock","paper","scissors"])
        print(f"Human chose {humanchoice}")
        print(f"Robot chose {robotchoice}")
        print(" ")
        if humanchoice==robotchoice:
            print("Draw,no points")
            print(" ")
            print(" ")
        elif (robotchoice=="rock" and humanchoice=="scissors")or(robotchoice=="paper" and humanchoice=="rock")or(robotchoice=="scissors" and humanchoice=="paper"):
            print("Robot won")
            robotscore+=1
            print(f"Robot: {robotscore}")
            print(f"Human: {humanscore}")
            print(" ")
            print(" ")
        else:
            print("Human won")
            humanscore+=1
            print(f"Robot: {robotscore}")
            print(f"Human: {humanscore}")
            print(" ")
            print(" ")
    if humanscore>robotscore:
        print("Congrats,you won")
    else:
        print("You lost")
