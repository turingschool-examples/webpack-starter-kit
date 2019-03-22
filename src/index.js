// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';
import Game from './Game'
import Data from './Data'
import Round from './Round'


// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/WOF-star-background.jpg'

console.log('This is the JavaScript entry file - your code begins here.');


let game = new Game()

//********Event Listeners ********/
$('.start-btn').on('click', () => {
  event.preventDefault()
  startGameBtn(event);
});

// $('body').on('click', () =>{
//   event.preventDefault()
// })


/************Functions******* */
function startGameBtn(event) {
  event.preventDefault()
  let playerName1 = $('#player1').val();
  let playerName2 = $('#player2').val();
  let playerName3 = $('#player3').val();
  $('.input-form').remove()
  game.startGame(playerName1, playerName2, playerName3)
}