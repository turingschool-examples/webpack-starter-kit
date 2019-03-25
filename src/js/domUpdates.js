import $ from 'jquery';
import Game from './game';
import Question from './question';
import Wheel from './wheel';

export default {

  updateQInfo(question) {
    $('.category').text(question.category);
    $('.description').text(question.description);

    question.answer.split('').forEach(letter => {
      if (letter === ' ') {
        $('.word-box').append(`<div class="space-box"></div>`);
      } else {
        $('.word-box').append(`<div class="letter-box"><div class="letter">${letter}</div></div>`);
      }
    })
  },

  revealPrize(prize) {
    $('.prize').text(prize);
  },

  showInput() {
    $('.btn-spin').on('click', function() {
      $('.check-btn, .ltr-input').show().addClass('slide-in');
      $('.btn-solve, .buy, .btn-spin').attr('disabled', true)
    });
  },

  showVowels() {
    $('.buy').on('click', function() {
      $('.vowels-to-buy').toggle().addClass('slide-in');
      $('.buy, .btn-spin, .btn-solve').attr('disabled', true)
    });
  },

  getNames() {
    let $p1Name = $('#p1Name').val();
    let $p2Name = $('#p2Name').val();
    let $p3Name = $('#p3Name').val();
    return [$p1Name, $p2Name, $p3Name];
  },

  appendNames() {
      let $p1Name = $('#p1Name-board');
      $p1Name.text($('#p1Name').val());
      let $p2Name = $('#p2Name-board');
      $p2Name.text($('#p2Name').val());
      let $p3Name = $('#p3Name-board');
      $p3Name.text($('#p3Name').val());
      $('.splash').hide();
      $('.game-page').show();
      $('.player-section').css('visibility', 'visible');
  },

  showSolveInput() {
    $('.btn-solve').on('click', function() {
      $('.input-solve, .final-solution-btn').show()
    });
  },

  getAnswer() {
    return $('.input-solve').val();
  },

  getConsonant() {
    return $('.ltr-input').val();
  },

}