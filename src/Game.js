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
    this.currentRound = 1;
  }
  startGame(){
    round.generateRound();
    this.currentAnswer = round.currentAnswer;
  }
  startNextRound() {
    console.log('outside:',this.currentRound);
    if (this.currentAnswer.length === 0 && this.currentRound < 2) {
      round.generateRound();
      this.currentAnswer = round.currentAnswer;
      this.currentRound++;
      console.log(this.currentRound, 'inside');
    } else if (this.currentAnswer.length === 0 && this.currentRound == 2) {
      console.log('detects round 3');
      this.currentRound++;
      round.generateRoundTimed();
      this.currentAnswer = round.currentAnswer;
    } else if (this.currentRound === 3) {
      console.log('END OF GAME');
    }
  }

  checkAnswers(guess, answers){
    let userGuess = guess.toLowerCase();
    let correctAnswersPoints = 0;
    answers.forEach( element => {
      if (element.answer.toLowerCase() === userGuess) {
        correctAnswersPoints = element.respondents;
        this.currentAnswer.splice(this.currentAnswer.indexOf(element), 1)
        this.startNextRound();
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
  }
};




export default Game;