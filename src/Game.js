import domObject from "./DOMupdates.js";
import Round from "./Round.js";
import $ from "jquery";
import "./DOMevents.js";
import Player from "./Player.js";

let round = new Round();

class Game {
  constructor(player1, player2) {
    this.currentPlayerTurn = "player1";
    this.cycleTurn = true;
    this.currentAnswers = [];
    this.currentRound = 1;
    this.multipleAmount = 0;
    this.player1 = player1 || "not yet set";
    this.player2 = player2 || "not yet set";
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
      $("#submit-guess").prop("disabled", true);
      this.beginRound();
    } else if (this.currentRound >= 4) {
      this.beginRound();
    }
  }

  startNextRoundTimed() {
    if (this.currentRound < 4) {
      this.currentRound++;
      this.beginRound();
      this.multiplyValues();
      this.timer(10);
      if (this.currentPlayerTurn === "player1") {
        $(".current-turn").html(`${this.player2.name}'s turn!`);
      } else if (this.currentPlayerTurn === "player2") {
        $(".current-turn").html(`${this.player1.name}'s turn!`);
      }
    } else if (this.currentRound === 4) {
      if (this.player1.score > this.player2.score) {
        $(".display-winner").html(`${this.player1.name}`);
        $(".display-loser").html(`${this.player2.name}`);
        $(".main-content").toggle("hidden");
        $(".post-game").toggle("hidden");
      } else {
        $(".display-winner").html(`${this.player2.name}`);
        $(".display-loser").html(`${this.player1.name}`);
        $(".main-content").toggle("hidden");
        $(".post-game").toggle("hidden");
      }
      console.log("game over");
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
        this.whoseTurn();
        this.startNextRoundTimed();
      }
    }, 1000);
  }

  checkUserGuess(userGuess, possibleAnswersArray) {
    let correctAnswersPoints = 0;
    possibleAnswersArray.forEach(element => {
      if (element.answer.toLowerCase() === userGuess.toLowerCase()) {
        domObject.clearInput();
        correctAnswersPoints = element.respondents;
        this.currentAnswers.splice(this.currentAnswers.indexOf(element), 1);
      }
      if (this.currentRound < 3) {
        this.currentAnswers.length === 0 ? this.startNextRound() : null;
      }
    });
    return correctAnswersPoints;
  }

  multiplyValues(multiple) {
    if (multiple !== undefined) {
      this.multipleAmount = multiple;
    }
    let amount = multiple || this.multipleAmount;
    this.currentAnswers.forEach(answer => {
      answer.respondents = answer.respondents * amount;
    });
    domObject.createAnswers(this.currentAnswers);
  }

  whoseTurn() {
    this.cycleTurn
      ? (this.currentPlayerTurn = "player1")
      : (this.currentPlayerTurn = "player2");
    this.cycleTurn = !this.cycleTurn;
  }
}

export default Game;
