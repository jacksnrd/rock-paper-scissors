function getComputerChoice () {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    // return computerChoice[Math.floor(Math.random() * 3)].toLowerCase();
    play = computerChoice[Math.floor(Math.random() * 3)].toLowerCase();
    console.log('computer plays ' + play);
    return play;
}

function getPlayerChoice () {
    let playerChoice = prompt('Rock, paper, scissors, shoot!');
    return playerChoice.toLowerCase();
}

function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return 0;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 1;
    } else if (computerSelection == 'rock' && computerSelection == 'scissors') {
        return 2;
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return 2;
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return 2;
    } else {
        return 3;
    }
}

function playGame () {

    let playerScore = 0;
    let computerScore = 0;
    let i = 1;

    while (i <= 5) {
        let result = playRound();
        console.log(result);
        if (result == 1) {
            playerScore++
        } else if (result == 2) {
            computerScore++
        }

        console.log('Round:' + i + ' Human:' + playerScore + ' Computer:' + computerScore);

        i++
    }
}

playGame();
