import '../scss/style.scss'
import '../scss/media.scss'

const rockChoiceElement = document.getElementById('rock');
const scissorsChoiceElement = document.getElementById('scissors');
const paperChoiceElement = document.getElementById('paper');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score')
const resultElement = document.getElementById('result');
const h2Element = document.querySelectorAll('h2');
const dash = document.querySelectorAll('.dash');
const score = document.querySelectorAll('.score')
const resetButton = document.getElementById('reset-button');

const choices = ['Rock', 'Scissors', 'Paper'];
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function hasPlayerWon(player, computer) {
  return ((player === 'Rock' && computer === 'Scissors') || (player === 'Scissors' && computer === 'Paper') || (player === 'Paper' && computer === 'Rock'))
}

function getRoundResult(userOption) {
  const computerOption = getRandomChoice();
  showComputerChoice(computerOption);
  if (hasPlayerWon(userOption, computerOption)) {
    playerScore++;
    playerScoreElement.innerText = `Score: ${playerScore}`;
    resultElement.innerText = `Player wins! ${userOption} beats ${computerOption}`;
    showResults();
  } else if (userOption === computerOption) {
    resultElement.innerText = `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    computerScoreElement.innerText = `Score: ${computerScore}`;
    resultElement.innerText = `Computer wins! ${computerOption} beats ${userOption}`;
    showResults();
  }
}

function showResults() {
  if (playerScore === 3 || computerScore === 3) {
    resultElement.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game! Wanna play it again?`;
    playerChoiceElement.style.display = 'none';
    computerChoiceElement.style.display = 'none';
    h2Element.textContent = '';
}}

function choiceStyle(element) {
  element.style.fontSize = '24px';
  element.style.marginTop = '14px';
  element.style.marginBottom = '14px';
}

function showPlayerChoice(choice) {
  playerChoiceElement.innerText = playerChoice;
  choiceStyle(playerChoiceElement);
}

function showComputerChoice(choice) {
  computerChoiceElement.innerText = choice;
  choiceStyle(computerChoiceElement);
}

rockChoiceElement.addEventListener('click', () => {
  playerChoice = 'Rock';
  showPlayerChoice(playerChoice);
  getRoundResult(playerChoice);
})

scissorsChoiceElement.addEventListener('click', () => {
  playerChoice = 'Scissors';
  showPlayerChoice(playerChoice);
  getRoundResult(playerChoice);
})

paperChoiceElement.addEventListener('click', () => {
  playerChoice = 'Paper';
  showPlayerChoice(playerChoice);
  getRoundResult(playerChoice);
})

resetButton.addEventListener('click', () => {
  resultElement.innerText = 'Make your choice!';
  playerChoiceElement.style.display = 'flex';
  computerChoiceElement.style.display = 'flex';
  dash.forEach(element => {
    element.textContent = '—'
    element.style.fontSize = '48px';
    element.style.marginTop = '0px';
    element.style.marginBottom = '0px';
  })
  score.forEach(element => {
    element.textContent = 'Score: 0'
  })
  playerScore = 0;
  computerScore = 0;
})
