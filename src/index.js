import $ from 'jquery';
import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';
import p5 from 'p5';
import sketch from './sketch';
import data from "./data.js";
import './css/normalize.css';
import './css/styles.css';
import './css/game-grid.css';
import './css/wheel.scss';
import './images/player1.svg';
import './images/player2.svg';
import './images/player3.svg';





new p5(sketch);

let game;

$('.continue-button').on('click', (e) =>{
  e.preventDefault();
  game = new Game();
  game.startGame();
})

$('.reset-button').on('click', (e) =>{
  domUpdates.resetGame();
})

$('#wheel').on('click', () => {
  domUpdates.spinWheel();
})


