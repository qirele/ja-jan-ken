console.log("Welcome to rock paper scissors\n\n");

// get random computer number and store it the global scope
// ask for a user to input either rock, paper or scissors

// make a function which accepts both computer and user input
// declare winner name
// if a choices are the same, thats a tie, update winnerName
// if paper vs rock: winner is paper, update winnerName
// if paper vs scissors: winner is scissors, update winnerName
// if rock vs scissors: winner is rock, update winnerName
// return winner name

// call the above function

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}

let computerChoice = getComputerChoice();

let userChoice = "";

while (userChoice === null ||  !choices.includes(userChoice.toLowerCase())) {
  userChoice = prompt(`Enter your choice: ${choices}`, "");
  console.log("Bad choice >:C");
}

console.log("Great choice!");
