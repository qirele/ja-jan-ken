console.log("Welcome to rock paper scissors\n\n");

// get random computer number and store it the global scope
// ask for a user to input either rock, paper or scissors

// make a function which accepts both computer and user input
// declare winnerStr
// if a choices are the same, thats a tie, update winnerStr
// if paper vs rock: winner is paper, update winnerStr
// if paper vs scissors: winner is scissors, update winnerStr
// if rock vs scissors: winner is rock, update winnerStr
// return winner string



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
      if (comp === "rock") message = "Tie!";
      if (comp === "paper") message = "You lose! Paper beats Rock";
      if (comp === "scissors") message = "You win! Rock beats Scissors";
      break;
    }
    case "paper": {
      if (comp === "rock") message = "You win! Paper beats rock";
      if (comp === "paper") message = "Tie!";
      if (comp === "scissors") message = "You lose! Scissors beat Paper";
      break;
    }
    case "scissors": {
      if (comp === "rock") message = "You lose! Rock beats Scissors";
      if (comp === "paper") message = "You win! Scissors beat Paper";
      if (comp === "scissors") message = "Tie!";
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
  let ties = 0;
  let wins = 0;
  let losses = 0;

  for (let i = 0; i < 5; i++) {
    let userChoice = getInput();
    let computerChoice = getComputerChoice();

    let message = playRound(userChoice, computerChoice);

    if (message.includes("win")) wins++;
    else if (message.includes("lose")) losses++;
    else ties++;

    console.log(message);
  }

  conclusion(wins, losses, ties);
}

function conclusion(wins, losses, ties) {
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




const choices = ["rock", "paper", "scissors"];
game();