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
      $('.ltr-input').toggle()
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
    $('.buy').hide();
  },

  getNames() {
    $('.start-btn').on('click', function() {
      alert('it works')
      let $p1Name = $('#p1Name-board');
      $p1Name.text($('#p1Name').val());
      console.log($p1Name.val())
    })
  }
}