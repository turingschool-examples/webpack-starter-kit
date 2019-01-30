// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';

// Tell webpack to use javascript files

import Data from './data.js';

// import './Clue.js';

// import './domUpdates.js';

import Game from './Game.js';

// var newGame = require('./Game.js')

console.log('This is the JavaScript entry file - your code begins here.');


let textH = document.querySelector('h1')

textH.addEventListener('click', messageName)

// $('h1').on('click', messageName);


// start game and all event listeners
 const newGame = new Game();


let weneir = 'hellow'


// let clue = new Clue();

const dataSet = Object.values(Data).splice(1);



console.log(dataSet);


function messageName(){
    dataSet.pop();
  alert('hey');

  console.log(dataSet);

}
