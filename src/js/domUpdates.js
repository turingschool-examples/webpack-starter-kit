import $ from 'jquery';
import Game from './game';
import Question from './question';

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
      $('.check-btn').toggle().addClass('slide-in');
      $('.ltr-input').toggle().addClass('slide-in');
      $('ltr-input').addClass('slide-in');
    });
  },

  showVowels() {
    $('.buy').on('click', function() {
      $('.vowels-to-buy').toggle().addClass('slide-in');
    });
  },

  hideIt() {
    // we'll call this when we check the user's answer so we can get rid of the inputs easily
    $('.vowels-to-buy').hide();
    $('.ltr-input').hide();
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
    return $('.gues-cons').val();
  }

}