 import Player from './Player.js';
 import data from './Data.js';
 import Puzzle from './Puzzle.js';
 import domUpdates from './domUpdates.js';

 class Game {
  constructor(players, currentRound = 1, activePlayer, roundWinner, gameWinner, gamePuzzles) {
    this.currentRound = currentRound,
    this.activePlayer = activePlayer,
    this.roundWinner = roundWinner,
    this.gameWinner = gameWinner,
    this.gamePuzzles = [],
    this.players = players
  }

  startGame(players) {
    console.log('game started!');
    this.createPlayers(this.players);
    this.grabPuzzleBanks();
    domUpdates.removeStartPage();

  }

  createPlayers(players) {
    const playerOne = new Player(this.players[0], true);
    const playerTwo = new Player(this.players[1]);
    const playerThree = new Player(this.players[2]);
    domUpdates.displayPlayers(playerOne, playerTwo, playerThree);
    console.log(playerOne)
  }

  grabPuzzleBanks() {
    let puzzleArrayOne = data.puzzles.one_word_answers.puzzle_bank
    let puzzleArrayTwo = data.puzzles.two_word_answers.puzzle_bank
    let puzzleArrayThree = data.puzzles.three_word_answers.puzzle_bank
    let puzzleArrayFour = data.puzzles.four_word_answers.puzzle_bank
    let puzzleBank = puzzleArrayOne.concat(puzzleArrayTwo, puzzleArrayThree, puzzleArrayFour)
    this.randomizeBank(puzzleBank);
    let fourPuzzles = this.setGamePuzzles(puzzleBank);
    let roundPuzzle = this.setRoundPuzzle(fourPuzzles);
    console.log(roundPuzzle);
    domUpdates.displayCategory(roundPuzzle);
    domUpdates.populateRoundPuzzle(roundPuzzle);
    return puzzleBank;
  }

  randomizeBank(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const randomIndex = Math.floor((Math.random() * (arr.length - i))) + i;
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
  }

  setGamePuzzles(puzzleBank) {
    let fourPuzzles = puzzleBank.slice(0, 4);
    this.gamePuzzles = fourPuzzles.map(puzzle => {
      return new Puzzle(puzzle.category, puzzle.total_number_of_letters, puzzle.correct_answer, puzzle.description, 0, )
    })
    return fourPuzzles;
  }

  setRoundPuzzle(fourPuzzles) {
    let roundPuzzle = fourPuzzles.pop();
    console.log(fourPuzzles.length)
    console.log(roundPuzzle);
    return roundPuzzle;
    // domUpdates.displayPuzzle();
  }

}

// if (typeof module !== 'undefined') {
//   module.exports = Game;
// }

export default Game;