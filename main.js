const choices = ["rock", "paper", "scissors"];

const btns = document.querySelectorAll(".choices button");
const results = document.querySelector(".results");
const liveScore = document.querySelector(".live-score");
results.style.whiteSpace = "pre";
liveScore.style.whiteSpace = "pre";

let playerScore = 0;
let compScore = 0;
let ties = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", playGame);
});

function playGame() {
  if (compScore === 0 && playerScore === 0 && ties === 0) {
    // this means that a new game is being played  now
    while (results.firstChild) results.removeChild(results.lastChild);
  }

  let roundResult = playRound(this.dataset.choice, getComputerChoice());

  const p = document.createElement("p");
  p.textContent = roundResult;
  results.appendChild(p);

  if (roundResult.includes("win")) {
    playerScore++;
    p.style.background = 'green';
  } else if (roundResult.includes("lose")) {
    compScore++;
    p.style.background = 'red';
  } else 
    ties++;


   
  liveScore.textContent = `Score\nPlayer: ${playerScore} - Computer: ${compScore}`;

  // game over if this happens
  if (playerScore === 5 || compScore === 5) {
    printResult(playerScore, compScore, ties);
    playerScore = compScore = ties = 0;
  }
}

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}

function playRound(user, comp) {
  user = user.toLowerCase();
  let message = "";

  switch (user) {
    case "rock": {
      if (comp === "rock") message = "Tie! Rock vs Rock";
      if (comp === "paper") message = "You lose! Paper beats Rock";
      if (comp === "scissors") message = "You win! Rock beats Scissors";
      break;
    }
    case "paper": {
      if (comp === "rock") message = "You win! Paper beats rock";
      if (comp === "paper") message = "Tie! Paper vs Paper";
      if (comp === "scissors") message = "You lose! Scissors beat Paper";
      break;
    }
    case "scissors": {
      if (comp === "rock") message = "You lose! Rock beats Scissors";
      if (comp === "paper") message = "You win! Scissors beat Paper";
      if (comp === "scissors") message = "Tie! Scissors vs Scissors";
      break;
    }
  }

  return message;
}

function printResult(wins, losses, ties) {
  const p = document.createElement("p");
  let output = `Total Score: \nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}\n`;

  if (wins > losses) {
    output += "You win the tournament!";
    p.style.background = "green";
  } else if (losses > wins) {
    output += "You lose the tournament!";
    p.style.background = "red";
  } else {
    output += "You tied in the tournament!";
  }

  p.textContent = output;
  results.appendChild(p);
}
