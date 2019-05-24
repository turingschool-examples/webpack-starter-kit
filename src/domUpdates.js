/* eslint-disable object-shorthand */
import $ from 'jquery'
const domUpdates = {

  showBoard: function (roundObj, userID) {
    $('header').show()
    $('#form_game-start').hide()
    $('#game-board').show()
    $('#survey_output').text(roundObj.survey.question)
    this.hideAnswers()
    $('#round_current-round').text(`Round ${roundObj.currentRound}`)
    $('input').val('')
    this.switchPlayer(userID)
    $(`score_player-1`).text()
    $(`score_player-2`)
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
    $(`.survey-box-${num}`).html(`<div class="turn_answer-container"><p class="turn_answer-${num}">${answerObj.answer}</p> <p class="turn_answer-respondents-${num}">${answerObj.respondents}</p></div>`)
    $('input').val('')
  },

  switchPlayer: function (userID) {
    // let next = userID === 1 ? userID++ : userID--;
    // $(`#steve${next}`).toggle()
    $(`#steve${userID}`).toggle()
    $('input').val('')
  },

  hideAnswers: function () {
    console.log('whatup')
    $('.turn_answer-0').text('Answer 1')
    $('.turn_answer-1').text('Answer 2')
    $('.turn_answer-2').text('Answer 3')
    $('.turn_answer-respondents-0').text('1')
    $('.turn_answer-respondents-1').text('2')
    $('.turn_answer-respondents-2').text('3')
  },

  quitGame: function () {
    $('#form_game-start').show()
    $('#game_board').hide()
    $('header').hide()
  }

}

export default domUpdates