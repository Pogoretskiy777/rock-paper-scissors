const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let playerScore = 0;
let computerScore = 0;

let score = document.getElementById('score-text');
let buttons = document.querySelectorAll('button');
let resultContainer = document.querySelector('.result');
let result = document.createElement('p');
resultContainer.appendChild(result);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.textContent.toLowerCase();
    let newResult = playRound(playerSelection);
    score.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
    if (playerScore == 5 || computerScore == 5) {
      result.textContent = game();
    } else {
      result.textContent = newResult;
    }
  });
});

function playRound(playerSelection) {
  var computerSelection = computerPlay();
  let result;
    if (playerSelection === 'rock' && computerSelection==='Scissors') {
    result = "You win! Rock beats scissors!";
    playerScore +=1;
  } else if (playerSelection === 'scissors' && computerSelection==='Paper') {
    result = "You win! Scissors beats paper!";
    playerScore +=1;
  } else if (playerSelection === 'paper' && computerSelection==='Rock') {
    result = "You win! Paper beats rock!";
    playerScore +=1;
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    result = "A draw! Nice! No points to either team!";
  } else if (playerSelection === '') {
    result = "Error";
  } else { 
    result = `You lose! ${computerSelection} beats ${playerSelection}!`;
    computerScore += 1;
  }
  return result;
}

function game() {
  let score = `Computer: ${computerScore} Player: ${playerScore}`;
  let result;
  if (computerScore > playerScore) {
    result = `You lose! The computer outplayed you!`;
  } else if (playerScore > computerScore) {
    result = `Congrats! You beat the computer!`;
  } else {
    result = `It is a draw! Maybe next time?`;
  }
  return result;
}