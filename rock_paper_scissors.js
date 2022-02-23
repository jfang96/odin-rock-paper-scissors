// console.log(game());

function computerSelection() {
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

// Rock Paper Scissors Buttons
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => buttonSelected('rock'));
paperBtn.addEventListener('click', () => buttonSelected('paper'));
scissorsBtn.addEventListener('click', () => buttonSelected('scissors'));

// Create results display
const resultDiv = document.querySelector('#resultDiv');
const resultsText = document.createElement('div');
resultsText.classList.add('resultsText');
resultsText.setAttribute('style', 'white-space: pre;');
resultDiv.appendChild(resultsText);

// Create score display
const scoreDiv = document.querySelector('#scoreDiv');
const score = document.createElement('div');
score.classList.add('score');
score.setAttribute('style', 'white-space: pre;');
scoreDiv.appendChild(score);

playerScore = 0;
computerScore = 0;

function buttonSelected(playerSelection) {
    compSelection = computerSelection();

    resultsText.textContent = `You picked ${playerSelection}! Computer picked ${compSelection}!\r\n`
    
    result = playRound(playerSelection, compSelection);
    resultsText.textContent += result[1];
    if (result[0] > 0) 
        playerScore++;
    else if (result[0] < 0)
        computerScore++;

    score.textContent = `You: ${playerScore}, Computer: ${computerScore}\r\n`;

    // Check for winner
    if (playerScore == 5) {
        score.textContent += "You win!";
        resetGame();        
    }

    if (computerScore == 5) {
        score.textContent += "Computer wins!";
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function capitalize(myStr) {
    return `${myStr[0].toUpperCase()}${myStr.substring(1).toLowerCase()}`;
}