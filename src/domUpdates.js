import Gameboard from './GameBoard';
import $ from 'jquery';
import Round from './Round';

export default {

  showQuestion(game, tileId){
    $('.question-container').hide();
    console.log('game', game);
    let $questionText = $('.question-body');
    $questionText.text(game.roundOne.clues[tileId].question);
  },

  toggleStart() {
    let $p1Name = $("#p1-name-change-js")
    $p1Name.text($('#p1-name-js').val())
    let $p2Name = $("#p2-name-change-js")
    $p2Name.text($('#p2-name-js').val())
    let $p3Name = $("#p3-name-change-js")
    $p3Name.text($('#p3-name-js').val())
    $('.start-up').hide();
    $('.question-container').hide();
    $('.overlay').hide();
  },

  // setCatNames(round.catNames) {
  //   if (round.catNames ===)
  // },

  // toggleOverlay() {
  //   $('.overlay').show();
  //   $('.question-container').show();
  //   $('.question-overlay').show();
  //   $('.popup').show();
  //   $('.start-up').hide();
  // },

  hidePopup() {
    $('.question-container').hide();
    $('.popup').hide();
    $('.overlay').hide();
  },

  showPopup() {
    $('.question-container').show();
    $('.popup').show();
    $('.overlay').show();
    $('.start-up').show();
    $('.start-container').hide();
  },

  refreshGame() {
    console.log('yay')
    // location.replace();
  },

  showAnswer(game) {
    console.log('yay')
    let $answer = $('.answer');
    $answer.text(game.roundOne.clues[tileId].answer);
  },
  
}