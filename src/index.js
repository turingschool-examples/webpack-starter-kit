// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/background.jpg';
import './images/background2.png';

// Tell webpack to use a JS file
// import data from './data.js';
import domUpdates from './domUpdates.js';
import Puzzle from './Puzzle.js';
import Game from './Game.js';
import data from './data.js';
import Wheel from './Wheel.js';

// import $ from 'jquery';

console.log('This is the JavaScript entry file - your code begins here.');

let game = new Game();
let wheel = new Wheel();
console.log(game.changeRound())

// jQuery Variables
let $namesButton = $('submit-names');

let $playerOneInput = $('#player1');
let $playerTwoInput = $('#player2');
let $playerThreeInput = $('player3');

let $playerOneOutput = $('player1-output');
let $playerTwoOutput = $('player2-output');
let $playerThreeOutput = $('player3-output');



// JS variables
let difficulty1 = data.puzzles.one_word_answers;
let difficulty2 = data.puzzles.two_word_answers;
let difficulty3 = data.puzzles.three_word_answers;
let difficulty4 = data.puzzles.four_word_answers;




// jQuery Event Listeners
$namesButton.on('click', addNames);

// Functions
function addNames(e) {
  e.preventDefault();
  console.log("Did this work?");
  $playerOneOutput.text($playerOneInput);
};



