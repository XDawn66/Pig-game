'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
//get element by id
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let playing = true;

const playerswitch = function () {
  document.getElementById('current--' + currentPlayer).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let num = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = 'dice-' + num + '.png';

    if (num !== 1) {
      currentScore += num;
      document.getElementById('current--' + currentPlayer).textContent =
        currentScore;
    } else {
      playerswitch();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[currentPlayer] += currentScore;
    document.getElementById('score--' + currentPlayer).textContent =
      score[currentPlayer];
    if (score[currentPlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector('.player--' + currentPlayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + currentPlayer)
        .classList.remove('player--active');
    } else {
      playerswitch();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  score[0] = 0;
  score[1] = 0;
  currentPlayer = 0;
  currentScore = 0;
  document
    .querySelector('.player--' + currentPlayer)
    .classList.remove('player--winner');
  score0El.textContent = 0;
  current0EL.textContent = 0;
  score1El.textContent = 0;
  current1EL.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
});
