import domUpdates from "./domUpdates";
import Player from './Player.js';
import data from './data.js'
import Clue from "./Clue";

class Game {
  constructor() {
    this.players = [];
    this.currentPlayer = null;
    this.winner = null;
    this.cluesThisRound = [];
  }

  gatherPlayers(a, b, c) {
    let player1 = new Player(0, a);
    let player2 = new Player(0, b);
    let player3 = new Player(0, c);
    this.players.push(player1, player2, player3);
    this.currentPlayer = this.players[0];
  }

  getRandomCat() {
    let fourCats = []
    let keys = Object.keys(data.categories);
    do {
      let singleCat = keys[Math.floor(Math.random() * keys.length)];
      if (!fourCats.includes(singleCat)) {
        fourCats.push(singleCat)
      }
    } while (fourCats.length < 4)
    this.gatherClues(fourCats);
    // this.createColumns(clues, fourCats)
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
        this.cluesThisRound.push(specificPoints[0]);
      }
    });
    domUpdates.setClues(this.cluesThisRound);
    return this.cluesThisRound
  }

  instantiateClue(dataset) {
    let specificClue = this.cluesThisRound.find(clue => {
      return clue.categoryId == dataset.categoryid && clue.pointValue == dataset.pointvalue;
    })
    let clue = new Clue(specificClue.question, specificClue.pointValue, specificClue.answer, specificClue.categoryId)
  }

  quitGame() {
    domUpdates.toggleSplash();
  }

  // determineWinner() {

  // }

}

export default Game;