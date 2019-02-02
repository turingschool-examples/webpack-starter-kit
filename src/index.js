// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = jQuery;
import './css/base.css';
import Game from './Game.js';
import domUpdates from './domUpdates.js';

//  Tell webpack to use an image (link to it in index.html)
let game = new Game();

$('.start--btn').on('click', () => {
  let one = $('.player--input1').val();
  let two = $('.player--input2').val();
  let three = $('.player--input3').val();
  game.gatherPlayers(one, two, three);
  domUpdates.displayPlayers(one, two, three);
  domUpdates.toggleSplash();
  domUpdates.enableReset();
  game.getRandomCat();
});


$('.game--exit').on('click', () => {
  game.quitGame();
  domUpdates.disableReset();
});

$('.game--board').on('click', (event) => {
  let dataset = event.target.dataset;
  if ($(event.target).is('h4')) {
    game.instantiateClue(dataset);
  }
});

$('body').on('click', '.submit--guess', () => {
  console.log('hello')
  domUpdates.hidePopUp();
});