import Gameboard from './GameBoard';
import $ from 'jquery';
import Round from './Round';
import Question from './Question'
import Player from './Players'


export default {

  showQuestion(game, tileId) {
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

  hidePopup() {
    console.log("this is firing")
    $('.question-container').toggle();
    $('.popup').toggle();
    $('.overlay').toggle();
  },

  showPopup() {
    $('.question-container').toggle();
    $('.popup').toggle();
    $('.overlay').toggle();
    $('.start-container').hide();
    $('.answer').hide();
    $('.question-result').hide();
  },

  showAnswer(game, tileId) {
    let $answer = $('.answer');
    $answer.show();
    $('.question-result').show();
    const player = new Player();
    player.validAns();
    $answer.text(game.roundOne.clues[tileId].answer);
  },

  changeCatTitles(game) {
    let names;
    names = game.roundOne.catNames;
    console.log(names)
    $('.cat0').text(names[0]);
    $('.cat1').text(names[1]);
    $('.cat2').text(names[2]);
    $('.cat3').text(names[3]);
  },

  correctAns() {
    $('.question-result').text('CORRECT!');
    // $('#hp-p1').val();
    // $('#hp-p2').val();
    // $('#hp-p3').val();
    
  },

  wrongAns() {
    $('.question-result').text('NICE TRY!');
  }
  
}