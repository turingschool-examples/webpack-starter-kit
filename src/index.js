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
// import $ from 'jquery';

console.log('This is the JavaScript entry file - your code begins here.');

// jQuery Variables
let $namesButton = $('submit-names');

let $playerOneInput = $('#player1');
let $playerTwoInput = $('#player2');
let $playerThreeInput = $('player3');

let $playerOneOutput = $('player1-output');
let $playerTwoOutput = $('player2-output');
let $playerThreeOutput = $('player3-output');

// jQuery Event Listeners
$namesButton.on('click', addNames);

// Functions
function addNames(e) {
  e.preventDefault();
  console.log("Did this work?");
  $playerOneOutput.text($playerOneInput);
};



