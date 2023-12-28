'use strict';

// selecting elements.
const score0El = document.querySelector('#score--0'); //selecting id with queryselector
const score1El = document.getElementById('score--1'); //selcting id with getElementById is faster.
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//starting condions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let winner = '';

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (!winner) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;

    let current0value = Number(current0El.textContent);
    let current1value = Number(current1El.textContent);

    if (dice == 1) {
      if (player0El.classList.contains('player--active')) {
        current0El.textContent = 0;
        player1El.classList.add('player--active'); //you can also handel this by classList.toggle
        player0El.classList.remove('player--active');
        current0El.textContent = 0;
      } else {
        current1El.textContent = 0;
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
        current1El.textContent = 0;
      }
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
    } else {
      if (player0El.classList.contains('player--active')) {
        current0value += dice;
        current0El.textContent = current0value;
      } else {
        current1value += dice;
        current1El.textContent = current1value;
      }
    }
  }
});

//Hold
btnHold.addEventListener('click', () => {
  if (!winner) {
    score0El.textContent =
      Number(score0El.textContent) + Number(current0El.textContent);
    if (player0El.classList.contains('player--active')) {
      if (Number(score0El.textContent) >= 20) {
        player0El.classList.add('player--winner');
        diceEl.classList.add('hidden');
        player0El.classList.remove('player--active');
        winner = 'p1';
        return;
      }
      current0El.textContent = 0;
      player1El.classList.add('player--active');
      player0El.classList.remove('player--active');
    } else {
      score1El.textContent =
        Number(score1El.textContent) + Number(current1El.textContent);
      if (Number(score1El.textContent) >= 20) {
        player1El.classList.add('player--winner');
        diceEl.classList.add('hidden');
        player1El.classList.remove('player--active');
        winner = 'p2';
        return;
      }
      current1El.textContent = 0;
      player0El.classList.add('player--active');
      player1El.classList.remove('player--active');
    }
  }
});

//New game
btnNew.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  winner == 'p1'
    ? player0El.classList.remove('player--winner')
    : player1El.classList.remove('player--winner');
  if (!player0El.classList.contains('player--active')) {
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
  }
  winner = '';
});
