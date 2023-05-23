const myArray = ["Rock", "Paper", "Scissors"];

/**
 * This function simulates a computer's play which is completely random out of the three options.
 *
 * @returns The computer's play
 */
function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

let playerScore = 0;
let computerScore = 0;

let score = document.getElementById("score-text");
let buttons = document.querySelectorAll("button");
let resultContainer = document.querySelector(".result");
let result = document.createElement("p");

let restartButton = document.createElement("button");
restartButton.textContent = "Restart";
restartButton.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.addEventListener("click", handlePlayerClick);
  });
  playerScore = 0;
  computerScore = 0;
  score.textContent =
    "Press a button to start playing against the computer!\nFirst to five wins!";
  resultContainer.removeChild(restartButton);
  result.textContent = "";
});
resultContainer.appendChild(result);

buttons.forEach((button) => {
  button.addEventListener("click", handlePlayerClick);
});

/**
 * Every time a decision is clicked, the current score will be updated. When either team reaches 5 points,
 * the buttons will no longer be clickable.
 */
function handlePlayerClick() {
  let playerSelection = this.textContent.toLowerCase();
  let newResult = playRound(playerSelection);
  score.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
  result.textContent = newResult;
  console.log();
  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach((button) => {
      button.removeEventListener("click", handlePlayerClick);
    });
    result.setAttribute("font-size", "20px");
    result.textContent = finishGame() + " Press restart to play again!";
    resultContainer.appendChild(restartButton);
  }
}

/**
 * Add a point to either team depending on the result of the computer's play.
 *
 * @param {*} playerSelection The player's selection
 * @returns The result of the round
 */
function playRound(playerSelection) {
  var computerSelection = computerPlay();
  let result;
  if (playerSelection === "rock" && computerSelection === "Scissors") {
    result = "You win! Rock beats scissors!";
    playerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    result = "You win! Scissors beats paper!";
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    result = "You win! Paper beats rock!";
    playerScore += 1;
  } else if (
    playerSelection.toLowerCase() === computerSelection.toLowerCase()
  ) {
    result = "A draw! Nice! No points to either team!";
  } else if (playerSelection === "") {
    result = "Error";
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}!`;
    computerScore += 1;
  }
  return result;
}

/**
 * Calculate the game's ending depending on the scores of both parties.
 *
 * @returns The result of the game.
 */
function finishGame() {
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
