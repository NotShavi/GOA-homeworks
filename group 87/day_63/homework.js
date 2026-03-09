
function randomMove(){
    const rps=["rock","paper","scissors"]
    let randomnum=Math.floor(Math.random()*3)
    return rps[randomnum]
}
let humanScore=0
let robotScore=0
while (humanScore < 3 && robotScore < 3){
    let robotChoice=randomMove()
    let choice=prompt("Rock,paper,scissors: ").toLowerCase()
    console.log(`Human chose ${choice} and robot chose ${robotChoice}`)
    if (choice === robotChoice){
        console.log("Draw")
    }
    else if (choice === "scissors" && robotChoice==="paper"){
        console.log("Human won")
        humanScore++
        console.log(`Human's score is ${humanScore}`)
    }
    else if (choice === "scissors" && robotChoice==="rock"){
        console.log("Robot won")
        robotScore++
        console.log(`Robot's score is ${robotScore}`)
    }
    else if (choice === "rock" && robotChoice==="scissors"){
        console.log("Human won")
        humanScore++
        console.log(`Human's score is ${humanScore}`)
    }
    else if (choice === "rock" && robotChoice==="paper"){
        console.log("Robot won")
        robotScore++
        console.log(`Robot's score is ${robotScore}`)
    }
    else if (choice === "paper" && robotChoice==="scissors"){
        console.log("Robot won")
        robotScore++
        console.log(`Robot's score is ${robotScore}`)
    }
    else if (choice === "paper" && robotChoice==="rock"){
        console.log("Human won")
        humanScore++
        console.log(`Human's score is ${humanScore}`)
    }
}
