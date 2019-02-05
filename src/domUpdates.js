import Gameboard from './GameBoard';
import $ from 'jquery';
import Round from './Round';

export default {
  showQuestion: function(game, tileId){
    console.log('in show question');
    console.log('game', game);

    let $questionText = $('.question-body');
    let $answerBody = $('.popup-input');

    $questionText.text(game.roundOne.clues[tileId].question);
    // answerBody.val

    

    // Round.clues[tileId];

    // {'.body'}.append{`<div>

    // </div>`}
  }

//   toggleStart() {
//     let $p1Name = $("#p1-name-change-js")
//     $p1Name.text($('#p1-name-js').val())
//     let $p2Name = $("#p2-name-change-js")
//     $p2Name.text($('#p2-name-js').val())
//     let $p3Name = $("#p3-name-change-js")
//     $p3Name.text($('#p3-name-js').val())
//     $('.start-up').toggle();
//     $('.q-pop').hide();
//     $('.overlay').toggle();
//   },

//   toggleOverlay() {
//     $('.overlay').show();
//     $('.').show();
//   },

//   questionOverlay() {
//     $('.question-container').show();
//     $('.question-container').css('visibility', 'visible');
//     $('.question-overlay').toggleClass('hidden');
//   },
}