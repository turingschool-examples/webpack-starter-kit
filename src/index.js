// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/sheild-and-sword.png';
import './images/family-feud-logo.png';
import './images/banner1.png';
import './images/banner2.png';
import './images/text-banner.png';
import './images/knight-horse-shield.gif';
import './images/round-one.png';
import './images/round-two.png';
import './images/final-round.png';
import './images/name-background.png';


import domUpdates from './domUpdates.js';
import data from './gamedata.js';
import Game from './Game.js';
import Player from './Player.js';

let game;
let round;

$(".name-btn").on("click", startGame);
$(".guess-btn").on("click", guess);
$(".guess-input").on("keypress", function(e) {
  if (e.keyCode === 13) {
    guess();
  }
});
$(".guess-input").on("keydown", domUpdates.hideGuessMessages);
$(".start-timer-btn").on("click", runTimer);
$(".multiplier-btn").on("click", startFinalRound);

function startGame() {
  const p1Name = $("#p1-name-input").val();
  const p2Name = $("#p2-name-input").val();
  const player1 = new Player(p1Name, 1);
  const player2 = new Player(p2Name, 2);
  game = new Game(player1, player2);
  domUpdates.updateNames(p1Name, p2Name);
  domUpdates.revealGame();
  round = game.startNewRound();
}

function guess() {
  const guess = $(".guess-input").val();
  game.player1.isTurn ? game.player1.makeGuess(guess, game, round) : game.player2.makeGuess(guess, game, round);
  domUpdates.clearInput();
  if (round.answers.length === 0) {
    round = game.startNewRound();
  }
}

function runTimer() {
  round.startTimer($(".timer"));
}

function startFinalRound() {
  game.player1.getMultiplier(parseInt($("#p1-multiplier-input").val()));
  game.player2.getMultiplier(parseInt($("#p2-multiplier-input").val()));
  domUpdates.revealTimer();
  domUpdates.revealGame();
  game.updateDOM(round);
}
