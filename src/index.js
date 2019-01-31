// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';
import Game from './Game.js';
import domUpdates from './domUpdates.js';

//  Tell webpack to use an image (link to it in index.html)
let game;

$('.start--btn').on('click', startGame);
function startGame() {
  game = new Game();
  let one = $('.player--input1').val();
  let two = $('.player--input2').val();
  let three = $('.player--input3').val();
  game.gatherPlayers(one, two, three);
  domUpdates.toggleSplash();
}


//Once Start Game Btn is pressed
//Instantiate new game 
//Toggle CSS rules
//grab player info
//Instantiate new players
//display player info on DOM