
function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors"];
    let rand = Math.floor(Math.random() * 3);
    return choice[rand];
  }

  function playRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    const para = document.createElement("p");
    const result = document.createElement("p");
    para.textContent = `You chose ${playerSelection}, Computer chose: ${computerSelection}`;
    scoreboard.appendChild(para);
    
    if (playerSelection == "Rock"){
      if (computerSelection == "Rock") {
        return "Tie Game...Rock"
        }
      else if (computerSelection == "Paper") {
        computerScore++;
        return "You Lose! Paper beats Rock"
        }
      else {
      playerScore++;
      return "You Win! Rock beats Scissors"
      }
    }
    else if (playerSelection == "Scissors"){
      if (computerSelection == "Scissors") {
        return "Tie Game...Scissors"
        }
      else if (computerSelection == "Rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors"
        }
      else {
      playerScore++;
      return "You Win! Scissors beat Paper"
      }
    }
    else {
      if (computerSelection == "Paper") {
        return "Tie Game...Paper"
        }
      else if (computerSelection == "Scissors") {
        computerScore++;
        return "You Lose! Scissors beat Paper"
        }
      else {
      playerScore++;
      return "You Win! Paper beat Rock"
      }
    }
  }

  let playerChoice;
  let playerScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    playerChoice = (button.id);
    playRound(playerChoice, computerPlay());
    });
  });

const container = document.querySelector(".container");
const scoreboard = document.createElement("div");
scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
container.appendChild(scoreboard);