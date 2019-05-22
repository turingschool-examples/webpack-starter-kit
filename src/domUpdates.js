/* eslint-disable object-shorthand */
import $ from 'jquery'
const domUpdates = {

  showBoard: function (roundObj, index) {
    $('#form_game-start').hide()
    $('#game_board').show()
    $('#survey_output').text(roundObj.surveys[index].question)
    this.hideAnswers()
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
    $(`.survey-${num}`).html(`${answerObj.answer} ---- ${answerObj.respondents}`)
  },

  switchPlayer: function () {
    $('#steve1').toggle()
    $('#steve2').toggle()
  },

  hideAnswers: function () {
    $('.survey-0').text('Hidden answer 1')
    $('.survey-1').text('Hidden answer 2')
    $('.survey-2').text('Hidden answer 3')
  }

}

export default domUpdates