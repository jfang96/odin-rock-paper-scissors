console.log(game());

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == computerSelection) {
        return [0, "It's a tie!"];
    }

    const winMap = new Map([
        ['rock', 'scissors'],
        ['paper', 'rock'],
        ['scissors', 'paper']
    ]);

    if (winMap.get(playerSelection) == computerSelection) {
        return [1,`You win! ${playerSelection} beats ${computerSelection}`];
    } else {
        return [-1, `You lose! ${computerSelection} beats ${playerSelection}`];
    }
}


function game() {
    for (let i = 0; i <= 5; i++) {
        playerSelection = window.prompt('Rock, paper, or scissors?');
        winInt = 0;
        // playerSelection = 'rock';
        [win, message] = playRound(playerSelection, computerPlay());
        
        winInt += win;
        console.log(message);     
    }

    if (winInt == 0) {
        results = 'It\'s a tie!';
    } else {
        results = winInt > 0 ? 'You win!' : 'Computer wins!';
    }

    return results;
}