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
// $(document).ready(dataCategories);

// dom manipulation to get values of the three names

var name1 = $("#player-1").val;
var name2 = $("#player-2").val;
var name3 = $("#player-3").val;

var newGame = new Game(name1, name2, name3);

console.log('This is the JavaScript entry file - your code begins here.');



  $("#start-game").click(function() {
    event.preventDefault();
    domUpdates.publishCategories();
    domUpdates.publishRoundClues();
    domUpdates.publishScoreBoard();
    domUpdates.removeMe();
    $('#category-one').text(categoryArr[0]);
    $('#category-two').text(categoryArr[1]);
    $('#category-three').text(categoryArr[2]);
    $('#category-four').text(categoryArr[3]);
  });


  $(".box-wrapper").on('click', function (e) {
    let category = []
    if ($(e.target).is(".cat-1")) {
      category = (newGame.currentRound.topicOne);
  }
  console.log(category);

  console.log($(e.target).is(".cat-1"));


  });
