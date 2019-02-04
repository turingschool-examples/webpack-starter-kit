import domUpdates from "./domUpdates";
import Player from './Player.js';
import Round from './Round.js';
import data from './data.js';
import Clue from "./Clue";

class Game {
  constructor() {
    this.players = [];
    this.currentPlayer = null;
    this.winner = null;
    this.allCluesInPlay = [];
    this.currentClue = null;
    this.counter = 0;
    this.cluesRoundOne = null;
    this.cluesRoundTwo = null;
    this.cluesRoundThree = null;
    this.roundOne = null;
    this.roundTwo = null;
    this.roundThree = null;
  }

  switchPlayer(player) {
    if (player === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else if (player === this.players[1]) {
      this.currentPlayer = this.players[2]
    } else if (player === this.players[2]) {
      this.currentPlayer = this.players[0]
    }
  }

  gatherPlayers(a, b, c) {
    let player1 = new Player(0, a);
    let player2 = new Player(0, b);
    let player3 = new Player(0, c);
    this.players.push(player1, player2, player3);
    this.currentPlayer = this.players[0];
    domUpdates.displayPlayerScore(this.currentPlayer, this);
  }

  getRandomCat() {
    let allCategories = []
    let keys = Object.keys(data.categories);
    do {
      let singleCat = keys[Math.floor(Math.random() * keys.length)];
      if (!allCategories.includes(singleCat)) {
        allCategories.push(singleCat)
      }
    } while (allCategories.length < 9)
    this.gatherClues(allCategories);
    this.roundOne = allCategories.slice(0,4);
    this.roundTwo = allCategories.slice(4,8);
    this.roundThree = allCategories.slice(8,9);
    domUpdates.displayCategories(this.roundOne);
  }

  gatherClues(array) {
    let allClues;
    array.forEach(category => {
      allClues = data.clues.filter(clue => {
        return data.categories[category] === clue.categoryId;
      });
      for (var i = 1; i < 5; i++) {
        let specificPoints = allClues.filter(clue => {
          return clue.pointValue === 100 * i;
        });
        let randomIndex = Math.floor(Math.random() *  specificPoints.length);
        this.allCluesInPlay.push(specificPoints[randomIndex]);
      }
    });
    this.cluesRoundOne = this.allCluesInPlay.slice(0, 16);
    this.cluesRoundTwo = this.allCluesInPlay.slice(16, 32);
    this.cluesRoundThree = this.allCluesInPlay.slice(35);
    domUpdates.setClues(this.cluesRoundOne);
  }

  instantiateClue(dataset) {
    let specificClue = this.allCluesInPlay.find(clue => {
      return clue.categoryId == dataset.categoryid && clue.pointValue == dataset.pointvalue;
    })
    this.currentClue = new Clue(specificClue.question, specificClue.pointValue, specificClue.answer, specificClue.categoryId);
    domUpdates.displayClue(specificClue.question);
  }

  quitGame() {
    domUpdates.toggleSplash();
    this.allClues = [];
  }

  submitGuess(input) {
    this.currentClue.correctAnswer(this, input);
    this.switchPlayer(this.currentPlayer);
  }

  changeRound() {
    if (this.counter === 16) {
      let round = new Round(2);
      domUpdates.setClues(this.cluesRoundTwo);
      domUpdates.displayCategories(this.roundTwo);
    } else if (this.counter === 32) {
      let round = new Round(3);
      domUpdates.setClues(this.cluesRoundThree);
      domUpdates.displayCategories(this.roundThree);
    }
  }


  // determineWinner() {

  // }

}

export default Game;