import $ from 'jquery';
import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';
import data from "./data.js";
import './css/normalize.css';
import './css/styles.css';
import './css/game-grid.css';
import './images/player1.svg';
import './images/player2.svg';
import './images/player3.svg';



let game;

$('.continue-button').on('click', (e) =>{
  e.preventDefault();
  game = new Game();
  game.startGame();
})

$('.reset-button').on('click', (e) =>{
  domUpdates.resetGame();
})




