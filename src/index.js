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



const newGame = new Game(dataSet.clues);


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

// var newGame = new Game(name1, name2, name3);




// const player1 = new Rounds(flatData, 'Erik');
// console.log('Log 2: ', player1);

// const player2 = new Rounds(gameStart, 'Aidan');
// console.log('Log 3: ', player2);



console.log('This is the JavaScript entry file - your code begins here.');
