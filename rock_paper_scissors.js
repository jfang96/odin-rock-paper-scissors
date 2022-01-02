console.log(getWinner("rock", "rock"));
console.log(getWinner("rock", "paper"));
console.log(getWinner("rock", "scissors"));



function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function getWinner(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }

    const winMap = new Map([
        ['rock', 'scissors'],
        ['paper', 'rock'],
        ['scissors', 'paper']
    ]);

    if (winMap.get(playerSelection) == computerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
