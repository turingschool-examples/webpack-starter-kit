
// import Game from './Game.js';
const startButton = document.querySelector('.start-game');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const player3 = document.querySelector('#player3');




window.addEventListener('load',createGame);
startButton.addEventListener('click', startGame);


function createGame(e){
    e.preventDefault();
  var game = new Game(round = 1, undefined);

}

function startGame(e){
  e.preventDefault();
  const playerOne = player1.value;
  const playerTwo = player2.value;
  const playerThree = player3.value;
  console.log('stuff');
  createGameBoard();
}


function createGameBoard(){
document.querySelector('.entry-page').className ='game-board-area';
document.querySelector('.intro-page').className = "entry-page";
console.log();
}

