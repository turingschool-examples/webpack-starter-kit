/* eslint-disable object-shorthand */
import $ from 'jquery'
const domUpdates = {

  showBoard: function () {
    console.log('new game')
    $('#form_game-start').hide()
    $('#game_board').toggle()
    $('#input_player-2').prop('disabled', true)
  },

  assignNames: function (name1, name2) {
    $("#name_player-1, label[for='input_player-1']").text(name1)
    $("#name_player-2").text(name2)
    $("label[for='input_player-guess']").text(name1 + ' guess')
  },

  checkGuess: function () {
    // let player.guess = $('#input_player-guess').val()

  },

  switchPlayer: function (player) {
    $("label[for='input_player-guess']").text(`${player.name} guess`)
  }

}

export default domUpdates