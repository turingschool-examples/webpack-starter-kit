// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';
import './css/normalize.css';
// import './index.html';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/FFLsm.png';

// imports
import {data} from './dataset.js';
import './Game.js';
// import player from './Player.js';
// import round from './Round.js';
// import lightningRound from './LightningRound.js';
// import domUpdates from './domUpdates.js';

console.log('This is the JavaScript entry file - your code begins here.');


console.log(data);
const dataSet = data.surveys.reduce((acc, survey) => {
    acc.push({
      id: survey.id,
      question: survey.question,
      answers: data.answers.filter((answer) => answer.surveyId === survey.id).sort((a, b) => b.respondents - a.respondents)
    });
     return acc;
}, [])

let game;

function createGame() {
  game = new Game;
};

// function startPlaying () {
//   on page load, pop up window which contains
//   two input fields for names
//   one button to fire createGame()
  
// }


//function submitButton {
//   if(wrong answer) {
//     alert wrong answer (big X)
//     switch player
//   } else {
  // game.checkAnswers
// }
// }

export default dataSet;