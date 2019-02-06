import Gameboard from './GameBoard';
import $ from 'jquery';
import Round from './Round';

export default {

  showQuestion(game, tileId) {
    // $('.question-container').hide();
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
    console.log("this is firing")
    $('.question-container').toggle();
    $('.popup').toggle();
    $('.overlay').toggle();
  },

  showPopup() {
    $('.question-container').toggle();
    $('.popup').toggle();
    $('.overlay').toggle();
    // $('.start-up').show();
    $('.start-container').hide();
  },

  refreshGame() {
    console.log('yay')
    // location.replace(); 
  },

  showAnswer(game, tileId) {
    console.log('yay')
    let $answer = $('.answer');
    $answer.text(game.roundOne.clues[tileId].answer);
  },

  changeCatTitles(game) {
    let names;
    // if (game.activeRound === 1) {
      names = game.roundOne.catNames;
      console.log(names)
      $('.cat0').text(names[0]);
      $('.cat1').text(names[1]);
      $('.cat2').text(names[2]);
      $('.cat3').text(names[3]);
    // ?} else if (game.activeRound === 2) {
    // ?  names = game.roundTwo.catNames;
    // ?  $('#col0').text(names[0]);
    // ?  $('#col1').text(names[1]);
    // ?  $('#col2').text(names[2]);
    // ?  $('#col3').text(names[3]);
    // ?}
    // console.log(game.roundOne.catNames);
    // let orignalCats =  $('.cat');
    // console.log(orignalCats)
    // $('.cat').each((index, el) => {
    //   // value[index].text(value)
    //   console.log(el)
    //   el.text(index)
      
    //   // orignalCats[index].innerHTML(val)
    // })
    // $.each(names, function (index, value) {
    //   $cats[index] = `$('.` + index + `').text('` + value + `')`;
    //   // $cats[index] = value;
    // });
  }
  
}