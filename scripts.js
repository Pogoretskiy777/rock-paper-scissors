const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let playerScore = 0;
let computerScore = 0;

let score = document.getElementById('score-text');
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.textContent.toLowerCase();
    playRound(playerSelection);
    score.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
  });
});




function playRound(playerSelection) {
  var computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection==='Scissors') {
    alert("You win! Rock beats scissors!");
    playerScore +=1;
  } else if (playerSelection === 'scissors' && computerSelection==='Paper') {
    alert("You win! Scissors beats paper!");
    playerScore +=1;
  } else if (playerSelection === 'paper' && computerSelection==='Rock') {
    alert("You win! Paper beats rock!");
    playerScore +=1;
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    alert("A draw! Nice! No points to either team!");
  } else if (playerSelection === '') {
      alert("Error");
  } else { 
    alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
    computerScore += 1;
  }
}

function game() {
  let score = `Computer: ${computerScore} Player: ${playerScore}`;
  if (computerScore > playerScore) {
    alert(`You lose! The computer outplayed you!\n${score}`);
  } else if (playerScore > computerScore) {
    alert(`Congrats! You beat the computer!\n${score}`);
  } else {
    alert(`It is a draw! Maybe next time?\n${score}`);
  }
}