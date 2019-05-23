// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Game from './Game';
import Round from './Round';
import Turn from './Turn';
import Player from './Player';
import Survey from './Survey';
import domUpdates from './domUpdates';

$(document).ready(function () {
  $('#game_board').hide()
  $('#steve2').hide()
  $('header').hide()
})

let game;
let round;
let turn;
$('#btn_game-start').on('click', function (e) {
  e.preventDefault()
  let player1 = $('#input_name-player1').val()
  let player2 = $('#input_name-player2').val()
  if (player1 && player2) {
    game = new Game(player1, player2)
    round = game.round
    turn = game.round.turn
    domUpdates.showBoard(round, 0)
    domUpdates.assignNames(player1, player2)
  } else {
    alert('please enter a name')
  }
})

$('#btn_submit').on('click', function (e) {
  e.preventDefault()
  console.log('button')
  if (game.round.turn.currentPlayer === 1) {
    game.players[0].guess = $('#input_player-guess').val()
    game.round.turn.checkGuess(game.players[0])
  } else {
    game.players[1].guess = $('#input_player-guess').val()
    game.round.turn.checkGuess(game.players[1])
  }

  round.changeRound()
})


$('#btn_game-quit').on('click', function () {
  domUpdates.quitGame()
})

