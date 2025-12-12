
let humanScore = 0;
let computerScore = 0;
let result = 0;
const getComputerChoice = function() {
    let a = Math.random() * 3;
    if (a < 1) {
        return("paper");
    } else if (a < 2) {
        return("rock");
        } else {
            return("scissors");
        }
}
const getHumanChoice = function() {
    let humanChoice = prompt("What is your move? (rock/paper/scissors)");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice === "rock") {
            console.log ("It's a tie");
            result = 0;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        } else if (computerChoice === "paper") {
            console.log ("Oops You LOSE this turn! Paper beats Rock");
            computerScore += 1;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        } else {
            console.log ("Yayy You WIN this turn! Rock beats Scissors");
            humanScore +=1;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        }
    }
    if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "paper") {
            console.log ("It's a tie");
            result = 0;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        } else if (computerChoice === "rock") {
            console.log ("You WIN this turn! Paper beats Rock");
            humanScore += 1;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        } else {
            console.log ("Oops You LOSE this turn! Scissors beat Paper");
            computerScore +=1;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        }
    }
    if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "scisors") {
            console.log ("It's a tie");
            result = 0;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        } else if (computerChoice === "paper") {
            console.log ("Yay You WIN this turn! Scissors beat Paper");
            humanScore += 1;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        } else {
            console.log ("Oops You LOSE this turn! Rock beats Scissors");
            computerScore +=1;
            console.log ("- Human Score:",humanScore);
            console.log ("- Computer Score:",computerScore);
        }
    }
}

function playGame() {
    for (let index = 1; index < 6; index++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        // console.log (result);
        // if (result === 1) {
        //     humanScore +=1;
        //     console.log (humanScore)
        // }
        // if (result === -1) {
        //     computerScore +=1;
        //     console.log (computerScore)
        // }
    }
}
playGame();
if (humanScore > computerScore) {
    console.log(">> You are the final winner",)
};
if (humanScore < computerScore) {
    console.log(">> You are the looser")
};
if (humanScore === computerScore) {
    console.log(">> It's a tie. Do you want to play again?")
};