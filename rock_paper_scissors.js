// console.log(game());

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == computerSelection) {
        return [0, `It's a tie! Both picked ${capitalize(playerSelection)}`];
    }

    const winMap = new Map([
        ['rock', 'scissors'],
        ['paper', 'rock'],
        ['scissors', 'paper']
    ]);

    if (winMap.get(playerSelection) == computerSelection) {
        return [1,`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`];
    } else {
        return [-1, `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`];
    }
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

result = "";

rockBtn.addEventListener('click', () => buttonSelected('rock'));
paperBtn.addEventListener('click', () => buttonSelected('paper'));
scissorsBtn.addEventListener('click', () => buttonSelected('scissors'));


const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);


function buttonSelected(playerSelection) {
    result = playRound(playerSelection, computerPlay());
    content.textContent = result[1];
}

// function game() {
//     playerWinCount = 0;
//     computerWinCount = 0;
//     for (let i = 0; i < 5; i++) {
//         playerSelection = window.prompt('Rock, paper, or scissors?');
//         winInt = 0;
//         // playerSelection = 'rock';
//         [win, message] = playRound(playerSelection, computerPlay());
        
//         console.log(message);    
//         switch (win) {
//             case 0:
//                 break;
//             default:
//                 win > 0 ? playerWinCount++ : computerWinCount++;
//         } 
//     }


//     if (playerWinCount == computerWinCount) {
//         return `It\'s a tie! ${playerWinCount}-${computerWinCount}`;
//     } else {
//         return playerWinCount > computerWinCount ? `You win ${playerWinCount}-${computerWinCount}!` : `Computer wins ${computerWinCount}-${playerWinCount}!`;
//     }
// }

function capitalize(myStr) {
    return `${myStr[0].toUpperCase()}${myStr.substring(1).toLowerCase()}`;
}