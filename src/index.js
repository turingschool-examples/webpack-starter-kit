// This is the JavaScript entry file - code begins here
// Do not delete or rename this file

// jQuery
import $ from 'jquery';

// CSS
import './css/base.css';
import './css/normalize.css'

// Images
import './images/turing-logo.png'
import './images/feud76.png'
import './images/family-feud-logo.png'

// Classes
import Game from './Game.js';
import Player from './Player.js';

// Dom Updates
import domUpdates from './domUpdates.js';

let game = new Game();

domUpdates.disableBackgroundTabbing();

$("#player-1-input:text:visible:first").focus();

$("#player-1-input").keypress(function(e) {
  if (e.keyCode === 13) {
    $("#player-2-input").focus();
  }
});

$("#player-2-input").keypress(function (e) {
  if (e.keyCode === 13) {
    $("#submit-names-btn").click(); 
  }
}); 

$("#submit-names-btn").on("click", function() { 
  const player1Name = $("#player-1-input").val();
  const player2Name = $("#player-2-input").val();

  $(".player-1-name").text(player1Name.toUpperCase() || 'PLAYER 1');
  $(".player-2-name").text(player2Name.toUpperCase() || 'PLAYER 2');
  $(".welcome-screen").addClass("hidden"); 
  // $(".guess-input").focus();

  domUpdates.enableTabbing();

  let startingPlayer = Math.floor(Math.random() * 2) + 1

  game = new Game(new Player(player1Name || 'Player 1', 1), new Player(player2Name || 'Player 2', 2)); 
  game.startNewGame(startingPlayer);
  game.toggleActivePlayer();
});

$(".guess-input").keypress(function (e) {
  if (e.keyCode === 13) {
    $("#submit-guess-btn").click(); 
  }
}); 

$("#submit-guess-btn").on("click", function() { 
  if ($(".guess-input").val() !== '') {
    const playerGuess = $(".guess-input").val().toLowerCase();
    $(".guess-input").val('');
    game.round.checkAnswer(playerGuess); 
  } else {
    domUpdates.showMustEnterGuessMsg();
  }
});

$("#start-btn").on("click", function() {
  $(".welcome-screen").removeClass("hidden");
});

$(".play-again-btn").on("click", function() {
  domUpdates.resetPageDefaults();
  $(".winner-screen").addClass("hidden");
  $(".tie-screen").addClass("hidden");
  $(".welcome-screen").removeClass("hidden");
  domUpdates.enableTabbing();
});

$(".guess-input").on("keyup", function() {
  $("#submit-guess-btn").prop('disabled', $(".guess-input").val().length < 3);
});

$("#fastround-start-btn").on("click", function() {
    $(".fastround-ready-screen").addClass("hidden");
    domUpdates.enableTabbing();
    if (game.activePlayer === game.player1) {
      $(".timer-area-1").removeClass("hidden");
      $(".timer-area-2").addClass("hidden");
    } else {
      $(".timer-area-2").removeClass("hidden");
      $(".timer-area-1").addClass("hidden");
    }
    game.round.startTimedRound();
});
