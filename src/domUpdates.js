// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// import Game from './Game.js';
// import Player from './Player.js';
// import Wheel from './Wheel.js';
// import Puzzle from './Puzzle.js';

// Tell webpack to use a CSS file
// import './css/base.css';

// const $player2 = $('#player2').val();
// const $player3 = $('#player3').val();

// import './index.js'

// $('.start-button').on('click', playGame);
const domUpdates = {

  getNames: function() {
   let $player1 = $('#player1').val();
   $('#player1-name').text($player1);
   let $player2 = $('#player2').val();
   $('#player2-name').text($player2);
   let $player3 = $('#player3').val();
   $('#player3-name').text($player3);

   // add each player to an array[]
   // players from innerText updated Dom to current player
   // 
  }

  

  // playGame: function() {
  //   console.log($player1);

  // }
}

export default domUpdates;


