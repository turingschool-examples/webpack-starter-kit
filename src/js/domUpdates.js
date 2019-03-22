import $ from 'jquery';
import Game from './game';

export default {
  updateQInfo(question) {
    console.log(question.answer.split(''));
    $('.category').text(question.category);
    $('.description').text(question.description);

    question.answer.split('').forEach(letter => {
      $('.word-box').append(`<div><div class="letter">${letter}</div></div>`);
    })
  },

  revealPrize(prize) {
    $('.prize').text(prize);
  }
}