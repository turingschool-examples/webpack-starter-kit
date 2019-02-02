
import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';
import Clue from './Clue.js';
import DailyDouble from './DailyDouble.js';
import Data from './data.js'
import './css/base.css';
import $ from 'jquery';
import './images/player1.svg';
import './images/player2.svg';
import './images/player3.svg';



$('.box').on('click', (event) => {
  console.log('testing1');
  domUpdates.GameBoardListener(event); 
  console.log('testing2');

});



$('.start-game').on('click', (e) => {
  e.preventDefault();
  var game = new Game();
  game.start();
});
