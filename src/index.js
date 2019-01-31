// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// import Game from './Game.js';
// import Player from './Player.js';
// import Wheel from './Wheel.js';
// import Puzzle from './Puzzle.js';

// Tell webpack to use a CSS file
// import './css/base.css';

$('.start-button').click(playGame);

const player1 = $('#player1').val();
const player2 = $('#player2').val();
const player3 = $('#player3').val();
const players = [];

function collectPlayers(player) {
  players.push(player);
}

collectPlayers(player1);
collectPlayers(player2);
collectPlayers(player3);

function playGame(event) {
  event.preventDefault();
  alert('hi');
}



