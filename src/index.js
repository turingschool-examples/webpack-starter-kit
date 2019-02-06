// This is the JavaScript entry file - your code begins here
// ! Do not delete or rename this file !

// Tell webpack to use a CSS file
import './css/normalize.css';
import './css/base.css';
// import './css/styles.css';

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


// $(".start--button").click(function (e) {
//   $(".overlay").remove();
//   $('.start-up').remove();
// });
// $('.col').click(function (e) {
//   $('.question-container').css('visibility', 'visible')
// })
// * ======= Global Variables ======= *

// let $cats = [$('.0').text(), $('.1').text(), $('.2').text(), $('.3').text()];
// console.log($cats)
// let $tiles = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#b5'), $('#c6'), $('#d7'), $('#a8'), $('#b9'), $('#10'), $('#11'), $('#12'), $('#13'), $('#14'), $('#15')];

// console.log($tiles[15])

// let game = new GameBoard();


// * ======= Functions ======= *

let game;

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
  console.log(game)
  game.startGame(playerIn);
  domUpdates.toggleStart();
  // domUpdates.showAnswer();
  
});

let tileId;

$('.col').click(function () {
  console.log('tile id', event.target.id);
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

