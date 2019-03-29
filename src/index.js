
import $ from 'jquery';
import Game from './Game.js';
import domUpdates from './domUpdates.js';
import './css/normalize.css';
import './css/styles.css';
import './css/game-grid.css';
import './css/wheel.scss';
import './images/player1.svg';
import './images/player2.svg';
import './images/player3.svg';




let game;

$('.continue-button').on('click', (e) =>{
  e.preventDefault();
  game = new Game();
  game.startGame();
})

$('#reset-button').on('click', () =>{
  game.resetGame();
})

$('#wheel').on('click', () => {
  game.round.currentWheel.spinWinner(game);
  domUpdates.spinWheel(game);
})

$('.consonant').on('click', (e) =>{
  game.round.guessLetter(e, game);
})

$('.submit-guess').on('click', (e) => {
  domUpdates.checkSolution(e, game);
})

$('.vowel').on('click', (e) => {
  game.round.guessLetter(e, game);
});

