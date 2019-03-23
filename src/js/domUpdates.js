import $ from 'jquery';
import Game from './game';

export default {
  updateQInfo(question) {
    $('.category').text(question.category);
    $('.description').text(question.description);

    question.answer.split('').forEach(letter => {
      $('.word-box').append(`<div class="letter-box"><div class="letter">${letter}</div></div>`);
    })
  },

  revealPrize(prize) {
    $('.prize').text(prize);
  },

  showInput() {
    $('.btn-spin').on('click', function() {
      $('.spin-pop-up').toggle()
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
    $('.start-btn').on('click', function() {
      let $p1Name = $('#p1Name-board');
      $p1Name.text($('#p1Name').val());
      let $p2Name = $('#p2Name-board');
      $p2Name.text($('#p2Name').val());
      let $p3Name = $('#p3Name-board');
      $p3Name.text($('#p3Name').val());
      $('.splash').hide();
      $('.game-page').show();
      $('.player-section').css('visibility', 'visible');
      let game = new Game()
      game.instantiatePlayers();
    });
  },

  solvePuzzle() {
    $('.btn-solve').on('click', function() {
      $('.input-solve').toggle()
    });
  }

}