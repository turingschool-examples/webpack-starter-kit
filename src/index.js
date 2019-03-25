// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
// import normalize here;
import './sass/index.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/portal.png';
import './images/Morty.png';
import './images/Mr_poopy_butthole.png';
import './images/Pickle_rick.png';

import Game from './js/game';
import Wheel from './js/wheel';
import domUpdates from './js/domUpdates';
import Question from './js/question'
import Player from './js/player';

$(document).ready( () => {
  const game = new Game();
  $('.start-btn').click( () => {
    game.startRound();
  });
  
  $('.final-solution-btn').click( () => {
    game.validateAnswer();
    $('.input-solve, .final-solution-btn').hide();
  });
  
  $('.btn-spin').click( () => {
    game.generatePrize();
    console.log(game.currentPrize);
  });

  $('.check-btn, .btn-solve, .buy').click( () => {
    $('.btn-solve, .buy, .btn-spin').attr('disabled', false);
    $('.vowels-to-buy, .ltr-input, .check-btn, .input-solve, .final-solution-btn').hide();
    game.changeTurn();
  });

})


