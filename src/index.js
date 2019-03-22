// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Game from './Game';

const startGameBtn = $('#start-game-btn');


// $startGameBtn.on('click', () => {
//   // game.updateName();
//   console.log('hello');
// }

startGameBtn.click(function (e) {
  const game = new Game;
  e.preventDefault();
  game.updateName();
  console.log('hello')
})