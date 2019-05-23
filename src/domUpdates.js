/* eslint-disable object-shorthand */
import $ from 'jquery'
const domUpdates = {

  showBoard: function (roundObj, index) {
    $('header').show()
    $('#form_game-start').hide()
    $('#game_board').show()
    $('#survey_output').text(roundObj.surveys[index].question)
    this.hideAnswers()
    $('#round_current-round').text(`Round ${roundObj.currentRound}`)
    $('input').val('')
  },

  assignNames: function (name1, name2) {
    $("#name_player-1, label[for='input_player-1']").text(name1)
    $("#name_player-1").text(name1)
    $("#name_player-2").text(name2)
  },

  checkGuess: function () {
    $('#input_player-guess').val('That\'s already been guessed')
  },

  correctAnswer: function (player, score, answerObj, num) {
    $(`#score_player-${player}`).text(score)
    $(`.survey-${num}`).html(`<div class="turn_answer-container"><p class="turn_answer">${answerObj.answer}</p> <p class="turn_answer-respondents">${answerObj.respondents}<p></div>`)
    $('input').val('')
  },

  switchPlayer: function () {
    $('#steve1').toggle()
    $('#steve2').toggle()
    $('input').val('')
  },

  hideAnswers: function () {
    $('.survey-0').text('')
    $('.survey-1').text('')
    $('.survey-2').text('')
  },

  quitGame: function () {
    $('#form_game-start').show()
    $('#game_board').hide()
    $('header').hide()
  }

}

export default domUpdates