import Player from './Player.js';
import domUpdates from './domUpdates.js';
import data from './data-set.js';
import Round from './Round.js';

class Game {
  constructor() {
    this.players = [];
    this.clues = [];
    this.round = {};
    this.categoryData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.playerTurn = 0;
    this.roundCounter = 1;
  }

  createPlayers(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    })
    this.players = players;
    domUpdates.updateNames(this.players);
  }

  startGame() {
    this.clues = this.shuffle(data.clues);
    this.categoryData = this.shuffle(this.categoryData);
    this.createRound();
    domUpdates.displayRound(this.roundCounter);
  }
 
  createRound() {
    const round = new Round(this.categoryData.splice(0, 4), this.clues);
    this.round = round;
    round.displayCategories();
    this.createDailyDouble();
  }

  createDailyDouble() {
    let randomDailyDoubleClue = Math.floor(Math.random() * (16 - 1) + 1);
    this.round.dailyDoubleClue = randomDailyDoubleClue
  }

  createFinalRound() {
    let finalRoundCategory = this.categoryData.pop()
    const finalClues = this.clues.filter(clue => clue.categoryId === finalRoundCategory)
    const finalClue = this.shuffle(finalClues).pop();
    domUpdates.executeFinalClue(finalClue, this.round.categoryTitles);
  }

  shuffle(clues) {
    return clues.sort(() => 0.5 - Math.random());
  }

  changePlayerTurn() {
    this.playerTurn === 2 ? this.playerTurn = 0 : this.playerTurn++;
  }
}

export default Game;