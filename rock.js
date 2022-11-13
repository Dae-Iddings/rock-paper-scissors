let wins = 0
let lose = 0
    function getComputerChoice(randomNumber) {
        if (randomNumber <= 33) {
            return 'rock';
        } else if (randomNumber >= 66) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

let scoreDiv = document.querySelector('.scoreDiv');
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button )=> {
        button.addEventListener('click', function (e) {
            function randomNumber() {
                return Math.floor(Math.random() * 100);
                }
            let computerSelection = getComputerChoice(randomNumber());
            counter(singleRound(computerSelection, button.id));
            scoreDiv.textContent = singleRound(computerSelection, button.id) + ' Your wins: ' + wins + ' Computer wins: ' + lose;
          if (wins === 5 ) {
            alert('You won!');
            window.location.reload()
        } else if (lose === 5) {
            alert('You lost!')
            window.location.reload()
        }
          });
});

    function singleRound(computerSelection2, playerSelection2) {
        if (computerSelection2 === playerSelection2) {
            return 'It\'s a tie!';
        } else if (computerSelection2 === 'rock' && playerSelection2 === 'scissors') {
            return 'You lose! Rock beats scissors.';
        } else if (computerSelection2 === 'paper' && playerSelection2 === 'rock') {
            return 'You lose! Paper beats rock.';
        } else if (computerSelection2 === 'scissors' && playerSelection2 === 'paper') {
            return 'You lose! Scissors beat paper.';
        } else if (computerSelection2 === 'rock' && playerSelection2 === 'paper') {
            return 'You win! Paper beats rock.';
        } else if (computerSelection2 === 'paper' && playerSelection2 === 'scissors') {
            return 'You win! scissors beat paper.';
        } else if (computerSelection2 === 'scissors' && playerSelection2 === 'rock') {
            return 'You win! Rock beats scissors';
        } else {
            return 'enter a valid answer'
        }
    }
    function counter(round) {
        if (round.indexOf('You win!') >= 0) {
            return ++wins;
        } else if (round.indexOf('You lose!')) {
            ++lose
            return wins;
        } else {
            return wins;
    }
}