'use strict';

/*
// selecting an element in Js
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Corrrect Number 👀';

document.querySelector('.score').textContent = 2;
document.querySelector('.number').textContent = 10;

console.log(document.querySelector('.guess').value);
*/

// Event listners.
let highScore = 0;
let correctNumber = Math.floor(Math.random() * 21);
console.log(correctNumber);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      'No response from user. ⛔';
  }

  let currentScore = Number(document.querySelector('.score').textContent);
  console.log(correctNumber);
  if (guess > correctNumber && currentScore > 0) {
    document.querySelector('.message').textContent = 'Too high! 😑';
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
  } else if (guess < correctNumber && currentScore > 0) {
    document.querySelector('.message').textContent = 'Too low! 😑';
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
  } else if (guess === correctNumber) {
    document.querySelector('.message').textContent = "That's correct! 🔥";
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.check').disabled = true;
    if (highScore < currentScore) {
      document.querySelector('.highscore').textContent = currentScore;
      document.querySelector('h1').textContent =
        'You made a new High score !😏';
    } else {
      document.querySelector('h1').textContent = 'You Won !😏';
    }
  } else {
    document.querySelector('h1').textContent = 'You Lost! 😫';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  correctNumber = Math.floor(Math.random() * 21);
  document.querySelector('body').style.backgroundColor = '#222';
});
