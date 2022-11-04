let randomNumber = Math.floor(Math.random() * 100);
function getComputerChoice() {
    if (randomNumber <= 33) {
        return 'rock';
    } else if (randomNumber >= 66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
function singleRound (computerSelection, playerSelection) {
    if (computerSelection === playerSelection.toLowerCase()) {
        return 'It\'s a tie!'
    } else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') {
        return 'You lose! Rock beats scissors.'
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') {
        return 'You lose! Paper beats scissors.'
    } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper') {
        return 'You lose! Scissors beat paper.'
    }else if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'paper') {
        return 'You win! Paper beats rock.'
    } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'scissors') {
        return 'You win! scissors beat paper.'
    } else {
        return 'You win! Rock beats scissors'
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(singleRound(playerSelection, computerSelection));