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
let computerSelection = getComputerChoice();
console.log(computerSelection)