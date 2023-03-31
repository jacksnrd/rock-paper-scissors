function getComputerChoice () {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * 3)].toLowerCase();
}

function getPlayerChoice () {
    let playerChoice = prompt('Rock, paper, scissors, shoot!');
    return playerChoice.toLowerCase();
}

function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    return playerSelection + ' ' + computerSelection;
}

console.log(playRound());



