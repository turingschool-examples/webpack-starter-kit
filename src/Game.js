import Data from './Data';

class Game {
  constructor(players) {
    this.players = players;
    this.roundCounter = 0;
  }

  returnPuzzleBlock() {
    // fetch dataset
    // instantiate a Puzzle() of each word length
    // assign this.puzzleBlock to the array of instantiated Puzzles
  }

  instantiatePuzzle() {
    // instantiate and return a Puzzle() from this.puzzleBlock() based on difficulty needed
  }

  start() {
    // new Round(this, this.instantiatePuzzle())
    // this.assignCurrentRound(round);
  }

  assignCurrentRound(round) {
    // this.currentRound = round;
  }
  
  findWinner() {
    // if roundCounter is 4, find player with highest score
    // assign this.winner to that player
  }

  endGame() {
    // find winner
    // start a bonus round with hardest puzzle and winner
  }

}

export default Game;