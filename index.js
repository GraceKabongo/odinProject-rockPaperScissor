let playerWin = 0;
let computerWin = 0;

const getComputerChoice = () => {
  return parseInt(Math.random() * (4 - 1) + 1);
};

const getPlayerChoice = () => {
  let playerPrompt = parseInt(prompt("1. Rock  2. Paper  3. Scissors"));
  return playerPrompt;
};

const gameRound = (computerChoice, playerChoice) => {
  if (computerChoice === playerChoice) console.log("DRAW");
  else if (computerChoice === 1 && playerChoice === 2) {
    console.log("Rock is beaten by paper");
    playerWin++;
  } else if (computerChoice === 1 && playerChoice === 3) {
    console.log("Rock beat scissors");
    computerWin++;
  } else if (computerChoice === 2 && playerChoice === 1) {
    console.log("Paper beat rock");
    computerWin++;
  } else if (computerChoice === 2 && playerChoice === 3) {
    console.log("Paper is beaten by scissors");
    playerWin++;
  } else if (computerChoice === 3 && playerChoice === 1) {
    console.log("Scissors is beaten by rock");
    playerWin++;
  } else if (computerChoice === 3 && playerChoice === 2) {
    console.log("Scissors beat paper");
    computerWin++;
  }

  console.log("computer :", computerWin);
  console.log("player :", playerWin);
};

const game = () => {
  while (playerWin < 5 && computerWin < 5) {
    gameRound(getComputerChoice(), getPlayerChoice());
  }
  if (playerWin > computerWin) console.log("YOU WON");
  else console.log("YOU LOST");
};

game();
