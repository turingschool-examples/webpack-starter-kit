import './css/base.css';
import $ from 'jquery';

const domUpdates = {

  labelCategories([roundCategories]) {
    //in domupdates, make them real english words
    //add forEach here to iterate through category list to append names
    let $category0 = roundCategories[0];
    $('#category-0').text($category0);
    let $category1 = roundCategories[1];
    $('#category-1').text($category1);
    let $category2 = roundCategories[2];
    $('#category-2').text($category2);
    let $category3 = roundCategories[3];
    $('#category-3').text($category3);
  },

  removeCategories() {
    $('#category-0').text(" ");
    $('#category-1').text(" ");
    $('#category-2').text(" ");
    $('#category-3').text(" ");
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
    $('#rightWrong').text('CORRECT!')
      .removeClass('incorrect-feedback')
      .addClass('correct-feedback')
      .show();
    $clueDisplay.fadeOut(1000, function() {
      $(this).hide();
    })
  },

  incorrectFeedback() {
    let $clueDisplay = $('.question-card');
    $('.answer-btn').hide();
    $('#rightWrong').text('INCORRECT!')
      .removeClass('correct-feedback')
      .addClass('incorrect-feedback')
      .show();
    $clueDisplay.fadeOut(1000, function() {
      $(this).hide();
    })
  },

  showWagerCard() {
    let $wagerCard = $('#dailyDoubleCard');
    $wagerCard.show();
  },

  removeWagerCard() {
    let $wagerCard = $('#dailyDoubleCard');
    $wagerCard.hide();
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
  },

  disableAllClues() {
    $('.clue-box').removeClass('available-box');
    $('.clue-box').addClass('disabled');
  },

  repopulateClues() {
    let $allClueBoxes = $('.clue-box');
    $allClueBoxes.removeClass('disabled');
    $allClueBoxes.addClass('available-box');
  },

  activePlayerHighlight(activePlayerNum) {
    $(`#avatar${activePlayerNum}`).css("background-color", "lightgreen")
  },

  deactivatePlayerHighlight(activePlayerNum) {
    $(`#avatar${activePlayerNum}`).css("background-color", "#853c1e")
  },

  updatePlayerScore(activePlayer, score) {
    let $playerScore = $(`#scoreBox${activePlayer}`);
    $playerScore.text(`$${score}`);
  },

  setClueBoxPoints() {
    $('.100').text("$200");
    $('.200').text("$400");
    $('.300').text("$600");
    $('.400').text("$800");
  },

  reassignPointValue(wagerAmount) {
    let $clueValue = $('#displayPointVal');
    $clueValue.text(`For $${wagerAmount}`);
  }
}



export default domUpdates;

