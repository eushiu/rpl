function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors"];
    let rand = Math.floor(Math.random() * 3);
    return choice[rand];
  }

  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
    if (playerSelection == "Rock"){
      if (computerSelection == "Rock") {
        return "Tie Game...Rock"
        }
      else if (computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
        }
      else {
      return "You Win! Rock beats Scissors"
      }
    }
    else if (playerSelection == "Scissors"){
      if (computerSelection == "Scissors") {
        return "Tie Game...Scissors"
        }
      else if (computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors"
        }
      else {
      return "You Win! Scissors beat Paper"
      }
    }
    else {
      if (computerSelection == "Paper") {
        return "Tie Game...Paper"
        }
      else if (computerSelection == "Scissors") {
        return "You Lose! Scissors beat Paper"
        }
      else {
      return "You Win! Paper beat Rock"
      }
    }
  }

  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
