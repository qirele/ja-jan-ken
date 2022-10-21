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

// call the above function

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}

let computerChoice = getComputerChoice();

let userChoice = prompt(`Enter your choice: ${choices}`, "");

while (userChoice === null ||  !choices.includes(userChoice.toLowerCase())) {
  console.log("Bad input. Try again!");
  userChoice = prompt(`Enter your choice: ${choices}`, "");
}

console.log(`Computer chose:  ${computerChoice}`);
console.log(playRound(userChoice, computerChoice));

function playRound(user, comp) {
  user = user.toLowerCase();
  let message = "";

  switch (user) {
    case 'rock': {
      if (comp === 'rock') message = "Tie!";
      if (comp === 'paper') message = "You lose! Paper beats Rock";
      if (comp === 'scissors') message = "You win! Rock beats Scissors";
      break;
    }
    case 'paper': {
      if (comp === 'rock') message = "You win! Paper beats rock";
      if (comp === 'paper') message = "Tie!";
      if (comp === 'scissors') message = "You lose! Scissors beat Paper";
      break;
    }
    case 'scissors': {
      if (comp === 'rock') message = "You lose! Rock beats Scissors";
      if (comp === 'paper') message = "You win! Scissors beat Paper";
      if (comp === 'scissors') message = "Tie!";
      break;
    }
  }
  
  return message;
}
