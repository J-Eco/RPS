const rps = ["rock", "paper", "scissors"];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const results = document.querySelector('#result');

let userSelection = '';

let computerScore = 0;
let humanScore = 0;

let currentRound = 1;

rock.addEventListener('click', (event) => {
    userSelection = event.target.textContent.toLowerCase();
    playGame();
})
paper.addEventListener('click', (event) => {
    userSelection = event.target.textContent.toLowerCase();
    playGame();
})
scissors.addEventListener('click', (event) => {
    userSelection = event.target.textContent.toLowerCase();
    playGame();
})

function getComputerChoice() {
    const cpu = Math.floor(Math.random() * 3);
    return choice = rps[cpu];
}



const myPoints = document.querySelector(`#userScore`);
const pcPoints = document.querySelector(`#pcScore`);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.classList.add('showScore');
        results.textContent = `Tie.`;
        timer(results);
    }

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        results.classList.add('showScore');
        results.textContent = `You won with ${humanChoice}`;
        humanScore++;
        myPoints.textContent = `Your Score: ${humanScore}`;
        timer(results);
    }

    else if (computerChoice === "paper" && humanChoice === "rock" || computerChoice === "rock" && humanChoice === "scissors" || computerChoice === "scissors" && humanChoice === "paper") {
        results.classList.add('showScore');
        results.textContent = `PC won with ${computerChoice}`;
        computerScore++;
        pcPoints.textContent = `PC Score: ${computerScore}`;
        timer(results);
    }
    currentRound++;
    console.log(currentRound);
    console.log('PC Choice: '+ computerChoice + " | " + 'Your Choice: ' + userSelection);
}

function playGame() {
    if (computerScore > 4 || humanScore > 4) {
        newGame();
        console.log("game end");
    } else {
        playRound(userSelection, getComputerChoice());
    }
}
function timer(runner) {
    setTimeout(() => {
        runner.classList.remove('showScore');
    }, 1000);
}
function newGame() {
    rock.setAttribute("disabled", "");
    paper.setAttribute("disabled", "");
    scissors.setAttribute("disabled", "");

    const container = document.querySelector('.gameContainer');
    const div = Object.assign(document.createElement('div'), {className: "newGameBlock"});
    const button = Object.assign(document.createElement('button'), {
        textContent: 'Replay Game?',
        id: 'replayButton',
        className: 'replayButton'
    });

    button.addEventListener('click', () => {
        rock.removeAttribute("disabled");
        paper.removeAttribute("disabled", "");
        scissors.removeAttribute("disabled", "");

        computerScore = 0;
        humanScore = 0;

        currentRound = 1;
        myPoints.textContent = 'Your Score: 0';
        pcPoints.textContent = 'PC Score: 0';
        div.remove();
    })

    div.appendChild(button);
    container.insertBefore(div, container.firstChild);
}