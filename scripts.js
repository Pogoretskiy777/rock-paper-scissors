const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
    let playerSelection = button.textContent.toLowerCase();
  });
});

function playRound() {
  var playerSelection = prompt("Rock, Paper, or Scissors?");
  playerSelection = playerSelection.toLowerCase();
  var computerSelection = computerPlay();
  let score = `Computer: ${computerScore} Player: ${playerScore}`;
    if (playerSelection === 'rock' && computerSelection==='Scissors') {
    alert("You win! Rock beats scissors!");
    playerScore +=1;
      console.log(score);
      console.log(computerSelection);
  } else if (playerSelection === 'scissors' && computerSelection==='Paper') {
    alert("You win! Scissors beats paper!");
    playerScore +=1;
      console.log(score);
      console.log(computerSelection);
  } else if (playerSelection === 'paper' && computerSelection==='Rock') {
    alert("You win! Paper beats rock!");
    playerScore +=1;
      console.log(score);
      console.log(computerSelection);
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    alert("A draw! Nice! No points to either team!");
      console.log(score);
      console.log(computerSelection);
  } else if (playerSelection === '') {
      alert("Error");
  } else { 
    alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
    computerScore += 1;
      console.log(score);
      console.log(computerSelection);
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