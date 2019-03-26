// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';




// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/jeopardy-logo.png'

import Rounds from './Rounds.js';

import Game from './Game.js';

import dataSet from './dataSet.js';

import domUpdates from './domUpdates.js';


let dataCategories = Object.keys(dataSet.categories);

let categoriesToArray = $('.categories').toArray();
// Hard coded categories in
let categoryArr = [[dataCategories[1].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[2].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[4].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[6].toUpperCase()]];
// Actual RNG for the categories---
// for (let i = 0; i < categoriesToArray.length; i++) {
//   // let randomCategory = dataCategories.splice(Math.floor(Math.random()*dataCategories.length),1).toString();
//   // categoryArr.push(randomCategory);

// }

$('#category-one').text(categoryArr[0]);
$('#category-two').text(categoryArr[1]);
$('#category-three').text(categoryArr[2]);
$('#category-four').text(categoryArr[3]);

// $(document).ready(dataCategories);

// newGame.populateQuestions()

// dom manipulation to get values of the three names
var name1 = 'Erik';
var name2 = 'Elton';
var name3 = 'Sean';

$("#start-game").click(function() {
  event.preventDefault();
  publishRoundClues()
});

var name1 = $("#player-one").val;
var name2 = $("#player-two").val;
var name3 = $("#player-three").val;

var newGame = new Game(name1, name2, name3);



// newGame.currentRound.fetchClues;
// console.log(newGame.currentRound.fetchClues(newGame.round1Categories));

// newGame.nextRound()

console.log('This is the JavaScript entry file - your code begins here.');


console.log('This is the JavaScript entry file - your code begins here.');

$("#start-game").click(function() {
  event.preventDefault();
  publishRoundClues()
});


function publishRoundClues () {
  console.log('hello')
  const board = '<article class="clues">' +
  100 +
  '</article>' +
  '<article class="clues">' +
  100 +
  '</article>' +
  '<article class="clues">' +
  100 +
  '</article>' +
  '<article class="clues">' +
  100 +
  '</article>' +
  '<article class="clues">' +
  200 +
  '</article>' +
  '<article class="clues">' +
  200 +
  '</article>' +
  '<article class="clues">' +
  200 +
  '</article>' +
  '<article class="clues">' +
  200 +
  '</article>' +
  '<article class="clues">' +
  300 +
  '</article>' +
  '<article class="clues">' +
  300 +
  '</article>' +
  '<article class="clues">' +
  300 +
  '</article>' +
  '<article class="clues">' +
  300 +
  '</article>' +
  '<article class="clues">' +
  400 +
  '</article>' +
  '<article class="clues">' +
  400 +
  '</article>' +
  '<article class="clues">' +
  400 +
  '</article>' +
  '<article class="clues">' +
  400 +
  '</article>'

  $(".box-wrapper").append(board);
  console.log(board)

}
