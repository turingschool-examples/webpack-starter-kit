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
import Clue from './Clue.js'
import Player from './Player.js'
import dataSet from './dataSet.js';
import domUpdates from './domUpdates.js';


let dataCategories = Object.keys(dataSet.categories);

let categoriesToArray = $('.categories').toArray();
// Hard coded categories in
let categoryArr1 = [[dataCategories[1].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[2].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[4].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[6].toUpperCase()]];

let categoryArr2 = [[dataCategories[3].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[7].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[8].split(/(?=[A-Z])/).join(' ').toUpperCase()],
[dataCategories[9].toUpperCase()]];
console.log(categoryArr2);
// Actual RNG for the categories---
// for (let i = 0; i < categoriesToArray.length; i++) {
//   // let randomCategory = dataCategories.splice(Math.floor(Math.random()*dataCategories.length),1).toString();
//   // categoryArr.push(randomCategory);

// }
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
    $('#category-one').text(categoryArr1[0]);
    $('#category-two').text(categoryArr1[1]);
    $('#category-three').text(categoryArr1[2]);
    $('#category-four').text(categoryArr1[3]);
  });


  $(".box-wrapper").on('click', function (e) {
    let category = [];
    if ($(e.target).is(".cat-1")) {
      category = (newGame.currentRound.topicOne);
      $(e.target).val()
  } else if ($(e.target).is(".cat-2")) {
    category = (newGame.currentRound.topicTwo);
  } else if ($(e.target).is(".cat-3")) {
    category = (newGame.currentRound.topicThree);
  } else {
    category = (newGame.currentRound.topicFour);
  }
  findClueIndex(category, e);

  });

 function findClueIndex (category, e) {
   if ($(e.target).is(".ind-0")) {
    let currentClue = new Clue (category[0]);
    console.log(currentClue);
  } else if ($(e.target).is(".ind-1")) {
    let currentClue = new Clue (category[1]);
    console.log(currentClue);
  } else if ($(e.target).is(".ind-2")) {
    let currentClue = new Clue (category[2]);
    console.log(currentClue);
  } else {
    let currentClue = new Clue(category[3]);
    console.log(currentClue);
  }

}

$(document).on('click', 'article', function() {
  domUpdates.publishClueCard();
  $('.close').on('click', function() {
    $('aside').remove();
  });
  });


    
 