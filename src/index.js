
import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdate from './domUpdates.js';
import Clue from './Clue.js';
import DailyDouble from './DailyDouble.js';
import './css/base.css';

$('.start-game').on('click', (e) => {
  e.preventDefault();
  var game = new Game(1, undefined);
  game.start();
});
