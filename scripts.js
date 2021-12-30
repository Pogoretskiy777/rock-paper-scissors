const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let playerScore = 0;
let computerScore = 0;
let score = `Computer: ${computerScore} Player: ${playerScore}`;
var playerSelection = prompt("Rock, Paper, or Scissors?");
var computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Scissors') {
    alert("You win! Rock beats scissors!");
    playerScore + 1;
    console.log(score);
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Rock') {
    alert("A draw! Nice!");
    console.log(score);
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='Paper') {
    alert("You win! Scissors beats paper!");
    playerScore + 1;
    console.log(score);
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='Scissors') {
    alert("A draw! Nice!");
    console.log(score);
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Rock') {
    alert("You win! Paper beats rock!");
    playerScore + 1;
    console.log(score);
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Paper') {
    alert("A draw! Nice!");
    console.log(score);
  } else { 
    alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
    computerScore + 1;
    console.log(score);
  }
}

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);