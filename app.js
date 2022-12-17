
let computerChoiceDisplay = document.getElementById("computer-choice");
let yuourChoiseDisplay = document.getElementById("your-choice");
let resultDisplay = document.getElementById("result");

let posibleChoice = document.querySelectorAll("button");

let userChoice;
let randomNum;
let resultComp;
let resultGame;

posibleChoice.forEach((posibleChoice) => {
  posibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    yuourChoiseDisplay.innerHTML = userChoice;

    computerChoice();
    resultGameAction();
  });
});

let computerChoice = () => {
  randomNum = Math.floor(Math.random() * posibleChoice.length) + 1;
  console.log(randomNum);

  if (randomNum === 1) {
    resultComp = "SCISSORS";
  }
  if (randomNum === 2) {
    resultComp = "ROCK";
  }
  if (randomNum === 3) {
    resultComp = "PAPER";
  }

  computerChoiceDisplay.innerHTML = resultComp;
};

let resultGameAction = () => {
  let lost = "You LOST :( ";
  let win = "You WIN!!!";

  if (resultComp === userChoice) {
    resultGame = "It is DRAW";
  }
  if (resultComp === "SCISSORS" && userChoice === "ROCK") {
    resultGame = win;
  }
  if (resultComp === "SCISSORS" && userChoice === "PAPER") {
    resultGame = lost;
  }
  if (resultComp === "ROCK" && userChoice === "SCISSORS") {
    resultGame = lost;
  }
  if (resultComp === "ROCK" && userChoice === "PAPER") {
    resultGame = win;
  }
  if (resultComp === "PAPER" && userChoice === "ROCK") {
    resultGame = lost;
  }
  if (resultComp === "PAPER" && userChoice === "SCISSORS") {
    resultGame = win;
  }

  resultDisplay.innerHTML  =  resultGame
};
