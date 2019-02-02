
import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdate from './domUpdates.js';
import Clue from './Clue.js';
import DailyDouble from './DailyDouble.js';
import './css/base.css';
import $ from 'jquery';
import './images/player1.svg';
import './images/player2.svg';
import './images/player3.svg';


$('.start-game').on('click', (e) => {
  e.preventDefault();
  var game = new Game();
  game.start();
});
