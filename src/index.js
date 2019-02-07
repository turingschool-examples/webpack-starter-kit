// This is the JavaScript entry file - your code begins here
// ! Do not delete or rename this file !

// Tell webpack to use a CSS file
import './css/normalize.css';
import './css/base.css';

// Tell webpack to use a JS file
import data from './data';
import domUpdates from './domUpdates';
import Question from './Question';
import GameBoard from './GameBoard';
import Player from './Players';
import Round from './Round';
import DailyDouble from './DailyDouble';

import $ from 'jquery';
import jQuery from 'jquery'
window.$ = jQuery;

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/bg-image.jpg';
import './images/bg2.png';
import './images/bulbasaur.png';
import './images/charmander.png';
import './images/Squirtle.png';
import './images/Oak2.png';

// * This is the JavaScript entry file - your code begins here. *

// * ======= Global Variables ======= *

let game;
let tileId;

// * ======= Functions ======= *

$(window).on("load", function () {
  $('.question-container').hide();
});

$(".start--button").click(function (e) {
  e.preventDefault();
  const playerIn = [
    $('#p1-name-js').val(),
    $('#p2-name-js').val(),
    $('#p3-name-js').val()
  ];
  game = new GameBoard();
  game.startGame(playerIn);
  domUpdates.toggleStart();
});

$('.col').click(function () {
  tileId = event.target.id;
  game.cluesRemaining--;
  $(this).css('visibility', 'hidden');
  domUpdates.showPopup();
  domUpdates.showQuestion(game, tileId);
});

$('.popup-btn').click(function () {
  domUpdates.showAnswer(game, tileId);
  $("#popup-input-js").prop('disabled', true);
});

$('.close-popup').click(function () {
  $('#popup-input-js').val('');
  $("#popup-input-js").prop('disabled', false);
  domUpdates.hidePopup();
});

$('#reset-game').click(() => location.reload());