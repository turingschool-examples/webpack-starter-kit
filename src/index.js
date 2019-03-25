import $ from 'jquery';

import './sass/index.scss';

import './images/portal.png';
import './images/Morty.png';
import './images/Mr_poopy_butthole.png';
import './images/Pickle_rick.png';

import Game from './js/game';

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

  $('.check-btn').on('click', () => {
    game.checkConsonant();
  });

  $('.check-btn, .btn-solve, .buy').click( () => {
    $('.btn-solve, .buy, .btn-spin').attr('disabled', false);
    $('.vowels-to-buy, .ltr-input, .check-btn, .input-solve, .final-solution-btn').hide();
  });

})


