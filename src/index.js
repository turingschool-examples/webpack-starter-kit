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

$("#submit-names-btn").on("click", function() { 
  const player1Name = $("#player-1-input").val();
  const player2Name = $("#player-2-input").val();

  $(".player-1-name").text(player1Name.toUpperCase());
  $(".player-2-name").text(player2Name.toUpperCase());
  $(".welcome-screen").addClass("hidden");

  let startingPlayer = Math.floor(Math.random() * 2) + 1

  window.game = new Game(new Player(player1Name, 1), new Player(player2Name, 2)); 
  window.game.startNewGame(startingPlayer);
  window.game.toggleActivePlayer();
});

$("#submit-guess-btn").on("click", function() { 
  const playerGuess = $(".guess-input").val().toLowerCase();
  window.game.round.saveGuess(playerGuess);
  window.game.round.checkAnswer(playerGuess, window.game);
  $(".guess-input").val('');
});

$("#start-btn").on("click", function() {
  $(".welcome-screen").removeClass("hidden");
});