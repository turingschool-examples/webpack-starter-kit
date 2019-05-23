import Game from './Game';
import Round from './Round';
import User from './User';
import { userInfo } from 'os';

class Turn {
  constructor(currentPlayer, round) {
    this.currentPlayer = currentPlayer;
    this.round = round;
    this.guess = '';
  }

  // returnCurrentQuestion(questionID) {
    //DOM UPDATE
  //   let currentQuestion = this.survey.surveys.find(el => el.id === questionID)
  //   return currentQuestion.question
  // }

  // returnCurrentAnswers(){
  //   return this.answers = this.surveys.answers.map(el => el.answer)
  // }

  returnUserGuess(guess) {
    return this.guess = guess;
  }

  evaluateGuess(guess) {
    let threeAnswers = this.round.survey.answers;
    let threeWords = threeAnswers.map(el => el.answer)
    if (threeAnswers.map(el => el.answer).includes(guess)){
      let scoreUpdate= threeAnswers.find(el => {
        if(el.answer === guess) {
          return el
        }
      })
      this.currentPlayer.updateScore(scoreUpdate.respondents);
      let indexOfGuess = threeWords.indexOf(guess);
      this.round.eliminateGuessedAnswer(indexOfGuess);
    } else {
      this.round.changeTurn();
    }
  }



      
  //     this.round.checkAnswers();
  //   } else {
  //     this.round.changeTurn();
  //   }
  // }



}

export default Turn;