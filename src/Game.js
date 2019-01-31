 import Player from './Player.js';
 import data from './Data.js'

 class Game {
  constructor(currentRound = 1, activePlayer, roundWinner, gameWinner, gamePuzzles) {
    this.currentRound = currentRound,
    this.activePlayer = activePlayer,
    this.roundWinner = roundWinner,
    this.gameWinner = gameWinner,
    this.gamePuzzles = []
  }

  startGame(players) {
    console.log('game started!');
    this.createPlayers(players);
    this.grabPuzzleBanks()
  }

  createPlayers(players) {
    const playerOne = new Player(players[0], true);
    const playerTwo = new Player(players[1]);
    const playerThree = new Player(players[2]);
    console.log(playerOne);
  }

  grabPuzzleBanks() {
    let puzzleArrayOne = data.puzzles.one_word_answers.puzzle_bank
    let puzzleArrayTwo = data.puzzles.two_word_answers.puzzle_bank
    let puzzleArrayThree = data.puzzles.three_word_answers.puzzle_bank
    let puzzleArrayFour = data.puzzles.four_word_answers.puzzle_bank
    let puzzleBank = puzzleArrayOne.concat(puzzleArrayTwo, puzzleArrayThree, puzzleArrayFour)
    this.randomizeBank(puzzleBank);
     let fourPuzzles = this.setGamePuzzles(puzzleBank);
    // this.setRoundPuzzle(puzzleBank)
    console.log(fourPuzzles);
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
      return new Puzzle(puzzle.category)
    })
    return fourPuzzles;
  }

  // setRoundPuzzle() {

  // }

}

// if (typeof module !== 'undefined') {
//   module.exports = Game;
// }

export default Game;