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
console.log('log 1: ', categoriesToArray);
$("categoriesToArray.categories").each(categoryBox => {
  let randomCategory = dataCategories.splice(Math.floor(Math.random()*dataCategories.length),1)
  console.log(randomCategory)

  // $(categoryBox).html(randomCategory);
});
// dataCategories.forEach(currentCategory => {
//   console.log(currentCategory)
//   $(".categories").html(currentCategory)
// })
// $(document).ready(dataCategories);

// newGame.populateQuestions()

// dom manipulation to get values of the three names
$("#start-game").click();

var name1 = $("#player-one").val;
var name2 = $("#player-two").val;
var name3 = $("#player-three").val;

var newGame = new Game(name1, name2, name3);



// newGame.currentRound.fetchClues;
// console.log(newGame.currentRound.fetchClues(newGame.round1Categories));

// newGame.nextRound()

console.log('This is the JavaScript entry file - your code begins here.');



function publishRoundClues () {
  var board = `
  <article class="clues">
      100
    </article>
    <article class="clues">
      100
    </article>
    <article class="clues">
      100
    </article>
    <article class="clues">
      100
    </article>
    <article class="clues">
      200
    </article>
    <article class="clues">
      200
    </article>
    <article class="clues">
      200
    </article>
    <article class="clues">
      200
    </article>
    <article class="clues">
      300
    </article>
    <article class="clues">
      300
    </article>
    <article class="clues">
      300
    </article>
    <article class="clues">
      300
    </article>
    <article class="clues">
      400
    </article>
    <article class="clues">
      400
    </article>
    <article class="clues">
      400
    </article>
    <article class="clues">
      400
    </article>`;
    // $("#box-wrapper").append(board);
}
