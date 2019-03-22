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

function getDatasetAnswers() {
   const dataAnswers = data.answers;
   for (let i=0; i<dataAnswers.length; i++) {
    surveys.push(dataAnswers);
      // console.log(dataAnswers[i]);
      // console.log(dataAnswers[i].surveyId);
        // console.log(dataAnswers[i].respondents);
          // console.log(dataAnswers[i].answer);
   } 
};

function getDatasetQuestions() {
    const dataQuestions = data.surveys;
   for (let i=0; i<dataQuestions.length; i++) {
    surveys.push(dataQuestions)
      // console.log(dataQuestions[i]);
      //console.log(dataQuestions[i].id);
        // console.log(dataQuestions[i].question);  
   } 
};

var surveys = [];


//can get rid of above two functions
function createSurveyDataset(id) {
   const dataQuestions = data.surveys;
   const dataAnswers = data.answers; 
   const respondents = dataAnswers.sort((a, b) => a.surveyId > b.surveyId ? 1 : -1);
  //console.log(respondents);
  for (let i = 0; i < dataQuestions.length; i++) {
  if (dataQuestions[i].id === dataAnswers[i].surveyId) {
     for (let i=0; i < dataQuestions.length; i++) {
     const answerProp = dataQuestions[i]['answer'] = [];
    // const answersObj = respondents.reduce((acc, answer) => {
    //     if (respondents[i].surveyId == dataQuestions[i].id)
    //issue has to do with what is being compared and what is being returned
    // {
    //           return answer;
    //           return acc;
    //       }
    //   }, {});
    
    //  if () {
    //   dataQuestions[i].answer.push()
   // console.log(dataQuestions[i].answer.push(respondents));
     };
};
        const answerObj = respondent => respondent[i].surveyId === dataQuestions[i].id;
      dataQuestions[i].answer.push(respondents.reduce((acc, answer) => {
        if (respondents['surveyId'] > i) {
          return answer;
        }
         return acc;
        }, {}));

     
    
      
     
      console.log(dataQuestions);
 
      //here is the final issue
     //and how do we put multiple answers in answer[] as an object
  };
 };

createSurveyDataset(data.answers['surveyId']);


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