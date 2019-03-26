import gameData from "./data.js";
import domObject from "./DOMupdates.js";
import Round from "./Round.js";
import $ from "jquery";

let round = new Round();

class Game {
  constructor() {
    this.currentPlayerTurn = "player1";
    this.cycleTurn = true;
    this.currentAnswers = [];
    this.currentRound = 1;
  }

  startGame() {
    this.beginRound();
  }

  startNextRound() {
    this.currentRound++;
    if (this.currentRound === 2) {
      this.beginRound();
    } else if (this.currentRound === 3) {
      $(".round3").removeClass("hidden");
      this.beginRound();
    } else if (this.currentRound >= 4) {
      this.beginRound();
    }
  }

  beginRound() {
    round.generateRound();
    this.currentAnswers = round.currentAnswers;
    console.log("currentRound: ", this.currentRound);
  }

  timer(time) {
    const timer = setInterval(() => {
      $(".countdown-timer").html(time);
      time--;
      if (time < 0) {
        clearInterval(timer);
        this.startNextRound();
      }
    }, 1000);
  }
  //SET TIMER TO START NEXT ROUND AND LET PLAYER 2 GO FOR 30 SECONDS WHEN TIMER HITS 0 -- KEEP MULTIPLIER

  checkUserGuess(userGuess, possibleAnswersArray) {
    let correctAnswersPoints = 0;
    possibleAnswersArray.forEach(element => {
      if (element.answer.toLowerCase() === userGuess.toLowerCase()) {
        correctAnswersPoints = element.respondents;
        this.currentAnswers.splice(this.currentAnswers.indexOf(element), 1);
      }
      this.currentAnswers.length === 0 ? this.startNextRound() : null;
    });
    return correctAnswersPoints;
  }

  multiplyValues(multiple) {
    this.currentAnswers.forEach(answer => {
      answer.respondents = answer.respondents * multiple;
    });
    domObject.createAnswers(this.currentAnswers);
  }

  restartGame() {}

  whoseTurn() {
    this.cycleTurn
      ? (this.currentPlayerTurn = "player1")
      : (this.currentPlayerTurn = "player2");
    this.cycleTurn = !this.cycleTurn;
  }
}

export default Game;
