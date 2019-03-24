import gameData from './data.js';
import domObject from './DOMupdates.js';
import Round from './Round.js';

let round = new Round;

class Game {
  constructor(){
    this.currentTurn = 'p1';
    this.currentAnswer = [];
  }
  startGame(){
    round.generateRound();
    this.currentAnswer = round.currentAnswer;
  }

  checkAnswers(guess, answers){
    let userGuess = guess.toLowerCase();
    let correctAnswersPoints = 0;
    answers.forEach( element => {
      if (element.answer.toLowerCase() === userGuess) {
        console.log(`ITS A MATCH! Here's ${element.respondents} points!`);
        correctAnswersPoints = element.respondents;
      } else {
        console.log(`no match`)
      }
    })
    return correctAnswersPoints;

    //if the variable matches any answer, give player the points and show answer on the DOM. 
    //move the answer object into the player's correct answer array
  }

  checkAnswersTimed(answer){

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
};




export default Game;