// Select all the elements and define all the variables

btnNewGame = document.querySelector('.btn--new');
btnRollDice = document.querySelector('.btn--roll');
btnHold = document.querySelector('.btn--hold');
displayDice = document.querySelector('.dice');
currentP0 = document.querySelector('#current--0');
currentP1 = document.querySelector('#current--1');
scoreP0 = document.querySelector('#score--0');
scoreP1 = document.querySelector('#score--1');
sectionP0 = document.querySelector('.player--0');
sectionP1 = document.querySelector('.player--1');

let score;
let currentScore;
let activePlayer;
let playing;

init();

function init(){

  playing = true;
  activePlayer = 0;
  currentScore = 0;
  score = [0, 0];

  currentP0.textContent = 0;
  currentP1.textContent = 0;
  scoreP0.textContent = 0;
  scoreP1.textContent = 0;

  displayDice.style.display ='none';
  sectionP0.classList.remove('player--winner');
  sectionP1.classList.remove('player--winner');
  sectionP0.classList.add('player--active'); 
  sectionP1.classList.remove('player--active');
}

btnRollDice.addEventListener('click', function(){
  
  if(playing) {

  const diceNum = Math.trunc((Math.random()*6+1));
  displayDice.src = `images/dice-${diceNum}.jpg`;
  displayDice.style.display ='block';
  
  if (diceNum !== 1) {
    currentScore += diceNum;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } 
    
    else {
      switchPlayer();
    }
  }

})

btnHold.addEventListener('click', function(){
  
  if(playing){

  score[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
  document.querySelector(`#current--${activePlayer}`).textContent = 0;

    if(score[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    } else {
      switchPlayer();
    }

  } 

})

function switchPlayer(){
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  sectionP0.classList.toggle('player--active');
  sectionP1.classList.toggle('player--active');
}

btnNewGame.addEventListener('click', init);

