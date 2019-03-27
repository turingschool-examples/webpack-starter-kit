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
    if ($('#p1Name').val() !== '' && $('#p2Name').val() !== '' && $('#p3Name').val() !== '') {
      game.startRound();
    } else {
      // NAME REQUIRED
    }
  });
  
  $('.final-solution-btn').click( () => {
    if ($('.input-solve').val() !== '') {
      game.validateAnswer();
      $('.input-solve, .final-solution-btn').hide();
      $('.feedback').show();
    };
  });
  
  $('.btn-spin').click( () => {
    game.generatePrize();
    console.log(game.currentPrize);
  });

  $('.check-btn').on('click', () => {
    let vowels = ['A', 'E', 'I', 'O', 'U']
    if (vowels.includes($('.ltr-input').val().toUpperCase())) {
      console.log('vowels only');
    } else if ($('.ltr-input').val() !== '') {
      game.checkConsonant();
      $('.ltr-input').val('')
    }
  });

  $('.btn-solve').click( () => {
    $('.btn-solve, .buy, .btn-spin').attr('disabled', false);
    $('.guess-cons, .input-solve, .final-solution-btn').hide();
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
    $(e.target).attr('disabled', true);
    $('.vowels-to-buy').hide();
    $('.btn-solve, .buy, .btn-spin').attr('disabled', false);
  });

})


