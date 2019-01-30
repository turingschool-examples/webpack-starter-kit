
// import Game from './Game.js';
const startButton = document.querySelector('.start-game');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const player3 = document.querySelector('#player3');
var playerOneName = '';
var playerTwoName = '';
var playerThreeName = '';




window.addEventListener('load',createGame);
startButton.addEventListener('click', startGame);


function createGame(e){
    e.preventDefault();
  var game = new Game(round = 1, undefined);

}

function startGame(e){
  e.preventDefault();
  playerOneName = player1.value;
  playerTwoName = player2.value;
  playerThreeName = player3.value;
  createGameBoard();
}


function createGameBoard(){
document.querySelector('.entry-page').className ='game-board-area';
document.querySelector('.intro-page').className = "entry-page";
document.querySelector('#player1-name-text').innerText = playerOneName;
document.querySelector('#player2-name-text').innerText = playerTwoName;
document.querySelector('#player3-name-text').innerText = playerThreeName;

console.log();
}

