// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';

import './css/normalize.css'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import './images/feud76.png'

import './images/family-feud-logo.png'

import Game from './Game.js';
import Round from './Round.js';
import Player from './Player';
import domUpdates from './domUpdates';

// import Round from './Round.js';
// import FastRound from './FastRound.js';
// import Player from './Player.js';

console.log('This is the JavaScript entry file - your code begins here.');

$("#submit-names-btn").on("click", function() { 
    const player1Name = $('#player-1-input').val();
    const player2Name = $('#player-2-input').val();

    $(".player-1-name").text(player1Name);
    $(".player-2-name").text(player2Name);
    $(".welcome-screen").addClass("hidden");

    window.game = new Game(new Player(player1Name), new Player(player2Name)); 
    window.game.startNewGame();
});

$("#submit-guess-btn").on("click", function() { 
    const playerGuess = $('.guess-input').val().toLowerCase();
    window.game.round.saveGuess(playerGuess);
    window.game.round.checkAnswer(playerGuess);
    $(".guess-input").val('');
});