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
    $(".guess-input").focus();

  let startingPlayer = Math.floor(Math.random() * 2) + 1

  window.game = new Game(new Player(player1Name || 'Player 1', 1), new Player(player2Name || 'Player 2', 2)); 
  window.game.startNewGame(startingPlayer);
  window.game.toggleActivePlayer();
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
    //window.game.round.saveGuess(playerGuess);
    window.game.round.checkAnswer(playerGuess); //replace with check guess later
  } else {
    domUpdates.showMustEnterGuessMsg();
  }
});

$("#start-btn").on("click", function() {

  $(".welcome-screen").removeClass("hidden");
});

$("#play-again-btn").on("click", function() {
  domUpdates.resetPageDefaults();
  $(".winner-screen").addClass("hidden");
  $(".welcome-screen").removeClass("hidden");
});

$(".guess-input").on("keyup", function() {
    $('#submit-guess-btn').prop('disabled', $(".guess-input").val().length < 3);
});

$(".name-input").on("keyup", function() {
    $('#submit-names-btn').prop('disabled', !$("#player-1-input").val() || 
        !$("#player-2-input").val());
});

$("#fastround-start-btn").on("click", function() {
    // alert('poop');
    window.game.round.startTimedRound();
    $(".fastround-ready-screen").addClass("hidden");
});

// export default window.game;
