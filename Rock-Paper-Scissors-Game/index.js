const buttons = document.querySelectorAll('button');

const playerScoreEl = document.querySelector('#user-score');

const computerScoreEl = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // console.log('user choice!', button.id, 'computer choice!', computerPlay());
    const result = playRound(button.id, computerPlay());
    console.log(result);
    document.querySelector('#result').innerText = result;
  });
});

function computerPlay(){
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random()*choices.length);
  //kinda still get confused at this point!
  return choices[randomChoice]
}

function playRound(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ){
    playerScore ++;
    playerScoreEl.textContent = playerScore;
    return 'You win! ' + playerSelection + ' beats ' + computerSelection;
  } else {
    computerScore ++;
    computerScoreEl.textContent = computerScore;
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
  }
}
//DONE!!

