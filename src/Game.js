import gameData from './data.js';
import domObject from './DOMupdates.js';
import Round from './Round.js';
//import html for whoseturn method


let round = new Round;

class Game {
  constructor(){
    this.currentTurn = 'player1';
    this.cycleTurn = true;
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
        correctAnswersPoints = element.respondents;
        this.currentAnswer.splice(this.currentAnswer.indexOf(element), 1)
      } else {
        // console.log(`no match`)
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
    if (this.cycleTurn) {
      this.currentTurn = 'player1';
    } else {
      this.currentTurn = 'player2';
    }
    this.cycleTurn = !this.cycleTurn;
    // console.log('Game.currentTurn: ' + this.currentTurn);
    // console.log('Game.cycleTurn: ' + this.cycleTurn);
  }
};




export default Game;