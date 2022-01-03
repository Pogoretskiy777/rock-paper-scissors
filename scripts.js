const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
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
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

game();