import Gameboard from './gameboard.js';
// import './css/base.css';
import $ from 'jquery';

const domUpdates = {

  labelCategories([firstRoundCategories], [secondRoundCategories], [finalRoundCategory]) {
    //in domupdates, make them real english words
    //add forEach here to iterate through category list to append names
    // if (game.round === 1) 
      let $category1 = firstRoundCategories[0];
      $('#category-0').text($category1);
      let $category2 = firstRoundCategories[1];
      $('#category-1').text($category2);
      let $category3 = firstRoundCategories[2];
      $('#category-2').text($category3);
      let $category4 = firstRoundCategories[3];
      $('#category-3').text($category4);
  },

  removeStartScreen() {
    let $tableTitle = $('h4');
    $tableTitle.addClass('add-margin-top')
    let $inputScreen = $('.input-fields');
    $inputScreen.hide();
  },

  populateClueCard(selectedClue) {
    let $clueCardCategory = $('.category-reminder');
    let $clueValue = $('#displayPointVal');
    let $question = $('#displayQuestion');
    $clueCardCategory.text(selectedClue.categoryName);
    $clueValue.text(`For $${selectedClue.pointValue}`);
    $question.text(selectedClue.question);
  },

  showClueCard() {
    let $clueDisplay = $('.question-card');
    $clueDisplay.show();
  },

  // $clueDisplay.css('display', 'block');

  answerFeedback(selectedClue) {
    let $playerAnswer = $('#playerAnswer').val();
    if ($playerAnswer.toLowerCase() === selectedClue.answer.toLowerCase()) {
      console.log('yup')
    } else {
      console.log('nah')
    };
    // $playerAnswer = '';
  },

  removeClueCard() {
    let $clueDisplay = $('.question-card');
    $clueDisplay.hide();
  },

  showWagerCard() {
    let $wagerCard = $('#DailyDoubleCard');
    $wagerCard.css('display', 'block');
  },

  removeWagerCard() {
    let $wagerCard = $('#DailyDoubleCard');
    $wagerCard.css('display', 'none');
  },



  // updatePlayerScores() {
  //   let $player1Score = $('#scoreBox1');
  //   let $player2Score = $('#scoreBox2');
  //   let $player3Score = $('#scoreBox3');
  // }
}

let $resetButton = $('#reset-button');

$resetButton.on('click', function() {
  location.reload();
});


export default domUpdates;

