import Gameboard from './gameboard.js';
import './css/base.css';
import $ from 'jquery';

const domUpdates = {

  labelCategories([roundCategories]){
    //in domupdates, make them real english words
    //add forEach here to iterate through category list to append names
      console.log("is this working?");
      let $category1 = roundCategories[0];
      $('#category-0').text($category1);
      let $category2 = roundCategories[1];
      $('#category-1').text($category2);
      let $category3 = roundCategories[2];
      $('#category-2').text($category3);
      let $category4 = roundCategories[3];
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
    $('#playerAnswer').val('');
    $clueCardCategory.text(selectedClue.categoryName);
    $clueValue.text(`For $${selectedClue.pointValue}`);
    $question.text(selectedClue.question);
    $('#rightWrong').hide();
    this.showClueCard();
  },

  showClueCard() {
    let $clueDisplay = $('.question-card');
    $('.answer-btn').show();
    $clueDisplay.show();
  },

  correctFeedback() {
    let $clueDisplay = $('.question-card');
    $('.answer-btn').hide();
    $('#rightWrong').text('CORRECT!').removeClass('incorrect-feedback').addClass('correct-feedback').show();
    $clueDisplay.fadeOut(3000, function() {
      $(this).hide();
    })
  },

  incorrectFeedback() {
    let $clueDisplay = $('.question-card');
    $('.answer-btn').hide();
    $('#rightWrong').text('INCORRECT!').removeClass('correct-feedback').addClass('incorrect-feedback').show();
    $clueDisplay.fadeOut(1000, function() {
      $(this).hide();
    })
  },

  showWagerCard() {
    let $wagerCard = $('#DailyDoubleCard');
    $wagerCard.css('display', 'block');
  },

  removeWagerCard() {
    let $wagerCard = $('#DailyDoubleCard');
    $wagerCard.css('display', 'none');
  },

  changePlayerNames(game) {
    $('#playerName1').text(game.playersArray[0].name);
    $('#playerName2').text(game.playersArray[1].name);
    $('#playerName3').text(game.playersArray[2].name);
  },

  disableClue(id) {
    let $recentClue = $(`#${id}`);
    $recentClue.removeClass('available-box');
    $recentClue.addClass('disabled');
    console.log("disabled");
    //perhaps line to remove innertext, not sure if we want that
  },

  repopulateClues() {
    let $allClueBoxes = $('.clue-box');
    $allClueBoxes.removeClass('disabled');
    $allClueBoxes.addClass('available-box');
  },

  activePlayerHighlight(activePlayerNum) {
    console.log(activePlayerNum);
    $(`#avatar${activePlayerNum}`).css("background-color", "lightgreen")
  },

  deactivatePlayerHighlight(activePlayerNum) {
    console.log(activePlayerNum);
    $(`#avatar${activePlayerNum}`).css("background-color", "#853c1e")
  },

  updatePlayerScore(activePlayer, score) {
    let $playerScore = $(`#scoreBox${activePlayer}`);
    $playerScore.text(score);
  }
  
}

  let $resetButton = $('#reset-button');

  $resetButton.on('click', function() {
    location.reload();
  })


export default domUpdates;

