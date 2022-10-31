const choices = ["rock", "paper", "scissors"];

const btns = document.querySelectorAll(".choices button");
const results = document.querySelector(".results");

let playerScore = 0;
let compScore = 0;

btns.forEach(btn => {

  btn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = playRound(btn.dataset.choice, getComputerChoice());
    results.appendChild(p);
  });

});



function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}

function getInput() {
  let userChoice = prompt(`Enter your choice: ${choices}`, "");

  while (userChoice === null || !choices.includes(userChoice.toLowerCase())) {
    console.log("Bad input. Try again!");
    userChoice = prompt(`Enter your choice: ${choices}`, "");
  }

  return userChoice;
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

// declare new function called game, in that function
// repeat 5 times:
//  generate new random computer number,
//  ask for a user choice via prompt
//  playRound
// keep score of the game

function game() {
  //let userChoice = getInput();
  let computerChoice = getComputerChoice();

  let message = playRound(userChoice, computerChoice);

  console.log(message);

}

function printResult(wins, losses, ties) {
  console.log(`Total score: `);
  console.log(`Wins: ${wins}`);
  console.log(`Losses: ${losses}`);
  console.log(`Ties: ${ties}`);

  if (wins > losses) {
    console.log("You win the tournament!");
  } else if (losses > wins) {
    console.log("You lose the tournament!");
  } else {
    console.log("You tied in the tournament!");
  }
}


