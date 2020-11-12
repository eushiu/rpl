
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
        result.textContent = "Tie! You both chose " + computerSelection + ".";
        container.appendChild(result);
        }
      else if (computerSelection == "Paper") {
        computerScore++;
        scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
        result.textContent = "You lose!  Paper beats rock!";
        container.appendChild(result);
        }
      else {
      playerScore++;
      scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
      result.textContent = "You win!  Rock beats scissors";
      container.appendChild(result);
      }
    }
    else if (playerSelection == "Scissors"){
      if (computerSelection == "Scissors") {
        result.textContent = "Tie! You both chose " + computerSelection + ".";
        container.appendChild(result);
        }
      else if (computerSelection == "Rock") {
        computerScore++;
        scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
        result.textContent = "You lose!  Rock beats scissors!";
        container.appendChild(result);
        }
      else {
      playerScore++;
      scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
      result.textContent = "You win!  Scissors beats paper";
      container.appendChild(result);
      }
    }
    else {
      if (computerSelection == "Paper") {
        result.textContent = "Tie! You both chose " + computerSelection + ".";
        container.appendChild(result);
        }
      else if (computerSelection == "Scissors") {
        computerScore++;
        scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
        result.textContent = "You lose!  Scissors beat paper!";
        container.appendChild(result);
        }
      else {
      playerScore++;
      scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
      result.textContent = "You win!  Paper beats rock";
      container.appendChild(result);
      }
    }
    checkScore()
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
const gameOver = document.createElement("div");
scoreboard.textContent = `Player score: ${playerScore}; Computer score: ${computerScore}`;
container.appendChild(scoreboard);

function checkScore() {
  if (playerScore >= 5) {
    alert("Game Over. You win the game")
  }

  if (computerScore >= 5) {
    alert("Game Over. You lose the game")
  }
}