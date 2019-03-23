// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';
import './css/normalize.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

//import dataset
import '/dataset.js';

console.log('This is the JavaScript entry file - your code begins here.');



const dataSet = data.surveys.reduce((acc, survey) => {
    acc.push({
      id: survey.id,
      question: survey.question,
      answers: data.answers.filter((answer) => answer.surveyId === survey.id).sort((a, b) => b.respondents - a.respondents)
    });
     return acc;
}, [])

    console.log(dataSet);


//function submitButton {
//   if(wrong answer) {
//     alert wrong answer (big X)
//     switch player
//   } else {
  // game.checkAnswers
// }
// }

// function createGame() {
//   var game = new Game
//   instantiate new game (new array, new players, new round)
// manipulate the original datasets to pair questions with their correct responses
//  -- responses are sorted in order of highest respondents to lowest
// on instatiation of a new game:
// iterate over original combined datasets
// push into new array game.surveys
// every call for a new survey question (every round) splices from the array in Game
// when instantiation deletes (game is over), the copy array goes with it
// }