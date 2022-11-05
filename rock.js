let wins = 0
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    function getComputerChoice() {
        if (randomNumber <= 33) {
            return 'rock';
        } else if (randomNumber >= 66) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    function singleRound(computerSelection2, playerSelection2) {
        if (computerSelection2 === playerSelection2.toLowerCase()) {
            return 'It\'s a tie!';
        } else if (computerSelection2 === 'rock' && playerSelection2.toLowerCase() === 'scissors') {
            return 'You lose! Rock beats scissors.';
        } else if (computerSelection2 === 'paper' && playerSelection2.toLowerCase() === 'rock') {
            return 'You lose! Paper beats rock.';
        } else if (computerSelection2 === 'scissors' && playerSelection2.toLowerCase() === 'paper') {
            return 'You lose! Scissors beat paper.';
        } else if (computerSelection2 === 'rock' && playerSelection2.toLowerCase() === 'paper') {
            return 'You win! Paper beats rock.';
        } else if (computerSelection2 === 'paper' && playerSelection2.toLowerCase() === 'scissors') {
            return 'You win! scissors beat paper.';
        } else if (computerSelection2 === 'scissors' && playerSelection2.toLowerCase() === 'rock') {
            return 'You win! Rock beats scissors';
        } else {
            return 'enter a valid answer'
        }
    }
    let computerSelection = getComputerChoice();
    let playerSelection = window.prompt("Enter rock, paper, or scissors.")
    console.log(singleRound(computerSelection, playerSelection))
    function counter(round) {
        if (round.indexOf('You win!') >= 0) {
            return ++wins;
        } else {
            return wins;
        }
    }
    console.log(counter(singleRound(computerSelection, playerSelection)))
}