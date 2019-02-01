// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// import Game from './Game.js';
import Player from './Player.js';
// import Wheel from './Wheel.js';
// import Puzzle from './Puzzle.js';



// $('.start-button').on('click', playGame);

const domUpdates = {
  getNames: function() {
    let $players = [$('#player1').val(), $('#player2').val(), $('#player3').val()];
    return $players;
  },

   displayNames: function(players) {
    $('#player1-name').text(players[0]);
    $('#player2-name').text(players[1]);
    $('#player3-name').text(players[2]);
  }
}
    // $players.forEach(player) {
    //   let player = new Player(player); 
    // }
export default domUpdates;

