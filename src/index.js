
import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
import domUpdate from './domUpdates.js';
import Clue from './Clue.js';
import DailyDouble from './DailyDouble.js';
import './css/base.css';

// const player1 = $('#player1');
// const player2 = $('#player2');
// const player3 = $('#player3');

$('.start-game').on('click', (e) => {
  e.preventDefault();
  var game = new Game(1, undefined);
  const players = domUpdate.grabNames();
  game.start(players);
  // startGame(game);
});



function startGame(game){
  const players = [player1.val(), player2.val(), player3.val()];
  game.start(players);
  createGameBoard(players);
}


function createGameBoard(arr){
document.querySelector('.entry-page').className ='game-board-area';
document.querySelector('.intro-page').className = "entry-page";

arr.forEach((player,ind) => {
  $('#player' + ([ind + 1]) + '-name-text').text(player);
})
}
