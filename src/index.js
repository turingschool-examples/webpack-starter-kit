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







// * ======= Functions ======= *

let game;

$(".start--button").click(function (e) {
  e.preventDefault();
  game = new GameBoard();
  game.startGame();
  // domUpdates.toggleStart();
});

$('h2').click(domUpdates.toggleOverlay());


  $('.overlay').toggle();
  $('.start-container').toggle();
  $('.popup').toggle();
});

$('.col').click(function () {
  $('.overlay').toggle();
  $(".question-container").css('visibility', 'visible');
  $('.popup').toggle();
});
$('.col').click(function (e) {
  $(e.target).css('visibility', 'hidden');
});

$('.popup-btn').click(function (e) {
  e.preventDefault();
  $('.overlay').toggle();
  $(".question-container").css('visibility', 'visible');
  $('.popup').toggle();
})
