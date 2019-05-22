/* eslint-disable object-shorthand */
import $ from 'jquery'
const domUpdates = {

  showBoard: function (roundObj) {
    console.log('new game')
    $('#form_game-start').hide()
    $('#game_board').toggle()
    $('#survey_output').text(roundObj.surveys[0].question)
  },

  assignNames: function (name1, name2) {
    $("#name_player-1, label[for='input_player-1']").text(name1)
    $("#name_player-1").text(name1)
    $("#name_player-2").text(name2)
    // $("label[for='input_player-guess']").text(name1 + ' guess')
  },

  checkGuess: function () {
    // let player.guess = $('#input_player-guess').val()
    $('#input_player-guess').val('That\'s already been guessed')
  },

  correctAnswer: function (player, score, answerObj, num) {
    $(`#score_player-${player}`).text(score)
    $(`.survey-${num}`).text(answerObj.answer)
  },

  switchPlayer: function () {
    $('#steve1').toggle()
    $('#steve2').toggle()
    // $("label[for='input_player-guess']").text(`${player.name} guess`)
    // $(`#name_player-${player.id}`).css('border', '1px solid red')
  }

}

export default domUpdates