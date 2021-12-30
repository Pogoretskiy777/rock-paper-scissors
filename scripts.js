const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}
var playerSelection = prompt("Rock, Paper, or Scissors?");
var computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Scissors') {
    alert("You win! Rock beats scissors!");
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Rock') {
    alert("A draw! Nice!");
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='Paper') {
    alert("You win! Scissors beats paper!");
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='Scissors') {
    alert("A draw! Nice!"); 
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Rock') {
    alert("You win! Paper beats rock!");
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Paper') {
    alert("A draw! Nice!");
  } else { 
    alert(`You lose! ${computerSelection} beats ${playerSelection}!`);
  }
}

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);