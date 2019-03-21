import $ from 'jquery';
import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';
import data from "./data.js";
import './css/normalize.css';
import './css/styles.css';
import './css/game-grid.css';



let game;

$('.continue-button').on('click', (e) =>{
  e.preventDefault();
  game = new Game()
  game.startGame()
})




