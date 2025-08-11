import '../scss/style.scss';
const rockBtnElement = document.getElementById('rock');
const scissorsBtnElement = document.getElementById('scissors');
const paperBtnElement = document.getElementById('paper');
const playerChoiceElement = document.getElementById('player-choice');

const choices = ['rock', 'scissors', 'paper'];
let playerChoice = '';

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function choiceStyle() {
  playerChoiceElement.style.fontSize = '24px';
  playerChoiceElement.style.marginTop = '16px';
  playerChoiceElement.style.marginBottom = '16px';
}

rockBtnElement.addEventListener('click', () => {
  playerChoice = 'rock';
  choiceStyle();
  playerChoiceElement.textContent = 'Камень';
});

scissorsBtnElement.addEventListener('click', () => {
  playerChoice = 'scissors';
  choiceStyle();
  playerChoiceElement.textContent = 'Ножницы';
});

paperBtnElement.addEventListener('click', () => {
  playerChoice = 'paper';
  choiceStyle();
  playerChoiceElement.textContent = 'Бумага';
});
