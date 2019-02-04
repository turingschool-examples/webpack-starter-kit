import domUpdates from "./domUpdates";
import Player from './Player.js';
import data from './data.js'
import Clue from "./Clue";

class Game {
  constructor() {
    this.players = [];
    this.currentPlayer = null;
    this.winner = null;
    this.allCluesInPlay = [];
    this.currentClue = null;
    this.cluesRoundOne = null;
    this.cluesRoundTwo = null;
    this.cluesRoundThree = null;
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
    domUpdates.displayCategories(allCategories);
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
    let specificClue = this.cluesRoundOne.find(clue => {
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

  


  // determineWinner() {

  // }

}

export default Game;