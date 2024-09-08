//intiate cpu choice
// cpu chooses a random number from 1 to 3
// return cpu choice

// user makes choice
// prompt user to make a choice between 1 and 3
// return user choice

// both player scores at zero

// begin round
// figurre who won and log to console as a string value
// update scores

//game must run for 5 rounds
// needs to keep track of rounds, scores, and annouces a winner

const rps = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const cpu = Math.floor(Math.random() * 3);
    return choice = rps[cpu];
}

function getHumanChoice() {
    const userSelection = parseInt(prompt("Choose a number 1 to 3", '') - 1);
    return rps[userSelection];
}
let computerScore = 0;
let humanScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        return humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        return humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        return humanScore++;
    }
    else if (humanChoice === computerChoice) {
        console.log("You have tied. No one wins");2
    }
    else {
        console.log(`Computer won. ${computerChoice} beats ${humanChoice}`);
        return computerScore++;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Your Score: ${humanScore}`);
        console.log(`CPU Score: ${computerScore}`);
        console.log("Current Round: " + i);
        if ( i === 5) {
            console.log(`Round Limit ${i} reached`);
            computerScore > humanScore ? console.log("CPU Won! With A Score Of: " + computerScore) : console.log("You Have Won! With A Score Of: " + humanScore);
            newGame();
        } 
    }
}

function newGame() {
    const _button = document.createElement("button");
    _button.appendChild(document.createTextNode("Restart!"));
    document.body.appendChild(_button);
    _button.addEventListener("click", () => {
        document.body.removeChild(_button);
        playGame();
    });
}

playGame();