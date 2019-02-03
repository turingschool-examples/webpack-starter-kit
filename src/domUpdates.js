// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// import Game from './Game.js';
// import Player from './Player.js';
// import Wheel from './Wheel.js';
// import Puzzle from './Puzzle.js';
import $ from 'jquery';


// $('.start-button').on('click', playGame);

export default {
  getNames: function() {
    let $players = [$('#player1').val(), $('#player2').val(), $('#player3').val()];
    return $players;
  },

  displayNames: function(players) {
    $('#player1-name').text(players[0]);
    $('#player2-name').text(players[1]);
    $('#player3-name').text(players[2]);
  },

  changePuzzle: function() {
    let answer = game.puzzles[0].answer; 
    let category = game.puzzles[0].category;
    $('.puzzle').text(answer);
    $('.category').text(category);
  },
}





