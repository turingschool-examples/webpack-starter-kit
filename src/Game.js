import gameData from './data.js';
import domObject from './DOMupdates.js';

class Game {
  constructor(){
    this.currentTurn = 'p1';
    this.game = Object.assign(gameData);
  }
  startGame(){
    //select 1 survey at random and remove it from the source array
    const copiedAnswers = gameData.answers.slice();
    const copiedQuestions = gameData.surveys.slice();
    const randomNumber = genNumber();
    const questionObject = copiedQuestions.splice(randomNumber, 1);
    const questionString = questionObject[0].question;
    function genNumber() { return Math.floor(Math.random() * copiedQuestions.length) + 1 };
    
    //potentially need to move this function to Round object.
    //append the question to the DOM
    domObject.createQuestion(questionString);

    const sortedAnswers = copiedAnswers.reduce( (associatedAnswers, currAnswer) => {
      if (currAnswer.surveyId === questionObject[0].id) {
        associatedAnswers.push(currAnswer);
      }
      return associatedAnswers;
    }, []).
    sort( (a,b) => {
      return b.respondents - a.respondents;
    })
    console.log(sortedAnswers);

    //create a array with the three associated answers and remove them from copied array
  }
  restartGame(){
    //clear all fields
    //revert back to starting arrays
  }
  whoseTurn(){
    if (this.currentTurn === 'p2'){
      //inputs and fields should reflect that it's players X's turn
      //player Y disabled
    } else {
      //inputs and fields should reflect that it's players Y's turn
      //player X disabled
    }
  }
}




export default Game;