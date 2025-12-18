
let humanScore = 0;
let computerScore = 0;
let result = 0;

const container = document.querySelector("#container")
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const yourScore = document.querySelector('#your-score');
const thaoScore = document.querySelector('#thao-score');
const turnResult = document.querySelector('#turn-result');
const finalResult = document.querySelector('#final-result');

const getComputerChoice = function() {
    let a = Math.random() * 3;
    if (a < 1) {
        return "paper";
    } 
    if (a < 2) {
        return "rock";
    } 
    return "scissors";
}

const handleActionClick = (event) => {
    let targetId = event.target.id;

    playRound(targetId, getComputerChoice());
    
    thaoScore.textContent = `- Thao's score: ${computerScore}`;
    yourScore.textContent = `- Your score: ${humanScore}`
    
    if ((computerScore === 5) || (humanScore === 5)) {
        if (computerScore === 5) {
            finalResult.textContent = "You are the looser";
        } else {
            finalResult.textContent = "You are the winner";
        }

        humanScore = 0;
        computerScore = 0;
    } else {
        finalResult.textContent = "";
    };
};

function playRound(humanChoice, computerChoice) {
    const winCombinations = ["rock-scissors", "paper-rock", "scissors-paper"];

    if (humanChoice === computerChoice) {
        turnResult.textContent = "It's a tie";
    } else if (winCombinations.indexOf(`${humanChoice}-${computerChoice}`) >= 0) {
        humanScore +=1;
        turnResult.textContent = `Yayy You WIN this turn! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore +=1;
        turnResult.textContent = `Oops You LOSE this turn! ${computerChoice} beats ${humanChoice}`;
    }
}

rockBtn.addEventListener('click', handleActionClick);
paperBtn.addEventListener('click', handleActionClick);
scissorsBtn.addEventListener('click', handleActionClick);