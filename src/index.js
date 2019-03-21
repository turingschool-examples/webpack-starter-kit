// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';
import Data from './data.js'

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/styles.css';
import './css/game-grid.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import data from "./data.js";



let game;


$('.continue-button').on('click', (e) =>{
  e.preventDefault();
  game = new Game()
  game.startGame()
})




