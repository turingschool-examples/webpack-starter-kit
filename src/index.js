// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';
import './css/state.css';
import './css/layout.css';
import './css/modules/result-box.css';
import './css/modules/guess-input.css';
import './css/modules/player-score.css';
import './css/modules/multiplier.css';
import './css/modules/round-banner.css';
import './css/modules/survey-box.css';
import './css/modules/game-area.css';
import './css/modules/info-page.css';
import './css/modules/timer.css';


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

$(".name-btn").on("click", startGame);
$(".guess-btn").on("click", guess);
$(".guess-input").on("keypress", function(e) {
  if (e.keyCode === 13) {
    guess();
  }
});
$(".guess-input").on("keydown", domUpdates.hideGuessMessages);
$(".multiplier-btn").on("click", startFinalRound);

function startGame() {
  const p1Name = $("#p1-name-input").val();
  const p2Name = $("#p2-name-input").val();
  const player1 = new Player(p1Name, 1);
  const player2 = new Player(p2Name, 2);
  game = new Game(player1, player2);
  domUpdates.updateNames(p1Name, p2Name);
  domUpdates.revealGame();
  game.round = game.startNewRound();
}

function guess() {
  const guess = $(".guess-input").val();
  game.currentRound < 3 ? normalGuess(guess) : finalGuess(guess);
}

function normalGuess(guess) {
  game.player1.isTurn ? game.player1.makeGuess(guess, game, game.round) : game.player2.makeGuess(guess, game, game.round);
  domUpdates.clearInput();
  if (game.round.answers.length === 0) {
    game.round = game.startNewRound();
  }
}

function finalGuess(guess) {
  game.player1.isTurn ? game.player1.makeFinalGuess(guess, game, game.round) : game.player2.makeFinalGuess(guess, game, game.round);
  domUpdates.clearInput();
}

function startFinalRound() {
  game.player1.isTurn = true;
  game.player2.isTurn = false;
  game.player1.getMultiplier(parseInt($("#p1-multiplier-input").val()));
  game.player2.getMultiplier(parseInt($("#p2-multiplier-input").val()));
  domUpdates.revealTimer();
  domUpdates.revealGame();
  game.updateDOM(game.round);
}
