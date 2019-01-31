
import Game from './Game.js';
import './css/base.css'

const player1 = $('#player1');
const player2 = $('#player2');
const player3 = $('#player3');

$('.start-btn').on('click', createGame);

function createGame(e){
  e.preventDefault();
  var game = new Game(round = 1, undefined);
  startGame(game);
}

function startGame(game){
  const players = [player1.value, player2.value, player3.value];
  game.startGame(players);
  createGameBoard();
}


function createGameBoard(){
document.querySelector('.entry-page').className ='game-board-area';
document.querySelector('.intro-page').className = "entry-page";
document.querySelector('#player1-name-text').innerText = playerOneName;
document.querySelector('#player2-name-text').innerText = playerTwoName;
document.querySelector('#player3-name-text').innerText = playerThreeName;
}

