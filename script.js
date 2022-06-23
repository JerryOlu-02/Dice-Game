'use strict';

let randomNumber1 = 0;
let randomNumber2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let playing = true;
const diceImage = document.querySelector('.dice');
const rollDiceClass = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const winnerAnimation = function (winner) {
  winner.classList.add('player--winner');
  playerOne.classList.remove('player--active');
  playerTwo.classList.remove('player--active');
  diceImage.classList.add('hidden');
};

const activePlayer = function () {
  if (playerOne.classList.contains('player--active')) {
    playerOne.classList.remove('player--active');
    playerTwo.classList.add('player--active');
  } else if (playerTwo.classList.contains('player--active')) {
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
  }
};

const rollDice = function () {
  if (playerOne.classList.contains('player--active') && playing) {
    diceImage.classList.remove('hidden');
    randomNumber1 = Math.trunc(Math.random() * 6) + 1;
    let randomDice1 = 'dice-' + randomNumber1 + '.png';
    diceImage.setAttribute('src', randomDice1);
    if (randomNumber1 === 1) {
      activePlayer();
      currentNumberScore1 = 0;
      currentScore1.textContent = 0;
    } else {
      currentNumberScore1 += randomNumber1;
      currentScore1.textContent = currentNumberScore1;
    }
  } else if (playerTwo.classList.contains('player--active') && playing) {
    diceImage.classList.remove('hidden');
    randomNumber2 = Math.trunc(Math.random() * 6) + 1;
    let randomDice2 = 'dice-' + randomNumber2 + '.png';
    diceImage.setAttribute('src', randomDice2);
    if (randomNumber2 === 1) {
      activePlayer();
      currentNumberScore2 = 0;
      currentScore2.textContent = 0;
    } else {
      currentNumberScore2 += randomNumber2;
      currentScore2.textContent = currentNumberScore2;
    }
  }
};

const playerScore = function () {
  activePlayer();
  if (playerOne.classList.contains('player--active') && playing) {
    totalScore2 += currentNumberScore2;
    playerScore2.textContent = totalScore2;
    currentNumberScore2 = 0;
    currentScore2.textContent = currentNumberScore2;
    if (totalScore2 >= 100) {
      playing = false;
      winnerAnimation(playerTwo);
    }
  } else if (playerTwo.classList.contains('player--active') && playing) {
    totalScore1 += currentNumberScore1;
    playerScore1.textContent = totalScore1;
    currentNumberScore1 = 0;
    currentScore1.textContent = currentNumberScore1;
    if (totalScore1 >= 100) {
      playing = false;
      winnerAnimation(playerOne);
    }
  }
};

// Player 1
const currentScore1 = document.getElementById('current--0');
const playerScore1 = document.getElementById('score--0');
const playerOne = document.querySelector('.player--0');
let currentNumberScore1 = 0;

// Player 2
const currentScore2 = document.getElementById('current--1');
const playerScore2 = document.getElementById('score--1');
const playerTwo = document.querySelector('.player--1');
let currentNumberScore2 = 0;

rollDiceClass.addEventListener('click', rollDice);
holdBtn.addEventListener('click', playerScore);
btnNew.addEventListener('click', function () {
  randomNumber1 = 0;
  randomNumber2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  playing = true;

  playerScore1.textContent = 0;
  playerScore2.textContent = 0;
  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
});
