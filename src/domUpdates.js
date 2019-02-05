import Gameboard from './GameBoard';
import $ from 'jquery';
import Round from './Round';

export default {
  showQuestion: function(game, tileId){
    console.log('in show question');
    console.log('game', game);

    let $questionText = $('.question-body');
    // let $answerBody = $('.popup-input');

    $questionText.text(game.roundOne.clues[tileId].question);
    // answerBody.val

    $('.question-container').show();
    $('.overlay').show();
    $('.popup').show();
    $('.start-container').hide()
  },

  toggleStart() {
//     let $p1Name = $("#p1-name-change-js")
//     $p1Name.text($('#p1-name-js').val())
//     let $p2Name = $("#p2-name-change-js")
//     $p2Name.text($('#p2-name-js').val())
//     let $p3Name = $("#p3-name-change-js")
//     $p3Name.text($('#p3-name-js').val())
    $('.start-up').toggle();
    $('.question-container').hide();
    $('.overlay').toggle();
  },

  toggleOverlay: function() {
    $('.overlay').show();
    $('.question-container').show();
    $('.question-overlay').show();
    $('.popup').show();
    $('.start-up').hide();
  },

  submitQuestion() {
    $('.question-container').hide();
    $('.popup').hide();
    $('.overlay').hide();
//     $('.question-container').css('visibility', 'visible');
//     $('.question-overlay').toggleClass('hidden');
  },
}