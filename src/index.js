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
    $('.feedback').show();
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
    $('.vowels-to-buy, .guess-cons, .input-solve, .final-solution-btn').hide();
    $('.ltr-input, .input-solve').val('');
    $('.feedback').show();
  });

  $('.btn-solve, .buy, .btn-spin').click(() => {
    $('.feedback').hide()
  });

  $('.new-game-btn').click(() => {
    location.reload()
  });

  $('.vowels-to-buy').click((e) => {
   game.checkConsonant(e.target.textContent);
   $('.vowels-to-buy').hide()
   $('.btn-solve, .buy, .btn-spin').attr('disabled', false)
  });

})


