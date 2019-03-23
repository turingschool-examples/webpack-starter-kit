// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/normalize.css';
import './css/base.css';




// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import Rounds from './Rounds.js';

import Game from './Game.js';

import dataSet from './dataSet.js';

import domUpdates from './domUpdates.js';


console.log(dataSet.clues);

const newGame = new Game(dataSet.clues);

let dataCategories = Object.keys(dataSet.categories);
dataCategories.filter(currentCategory => {
  $(".categories").html(currentCategory)
})
$(document).ready(dataCategories);
console.log(dataSet.categories)

// newGame.populateQuestions()

// dom manipulation to get values of the three names
var name1 = 'Erik';
var name2 = 'Elton';
var name3 = 'Sean';

// var newGame = new Game(name1, name2, name3);




// const player1 = new Rounds(flatData, 'Erik');
// console.log('Log 2: ', player1);

// const player2 = new Rounds(gameStart, 'Aidan');
// console.log('Log 3: ', player2);



console.log('This is the JavaScript entry file - your code begins here.');
