const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}
var playerSelection = "Rock";
var computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Scissors') {
    return "You win! Rock beats scissors!";
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection==='Rock') {
    return "A draw! Nice!";
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='Paper') {
    return "You win! Scissors beats paper!";
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection==='Scissors') {
    return "A draw! Nice!"; 
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Rock') {
    return "You win! Paper beats rock!"
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection==='Paper') {
    return "A draw! Nice!"
  } else { 
    return `You lose! ${computerSelection} beats ${playerSelection}!`
  }
}
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);