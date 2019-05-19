import Data from './Data';
import Round from './Round'
import Puzzle from './Puzzle'

class Game {
  constructor(players, wheel) {
    this.players = players;
    this.wheel = wheel;
    this.roundCounter = 0;
  }

  assignPuzzleBlock() {
    const newPuzzleBlock = Object.keys(Data.puzzles).reduce((puzzBlock, puzzType) => {
      const randomIndex = Math.floor(Math.random() * 25);
      const instantiatedPuzzle = new Puzzle(Data.puzzles[puzzType].puzzle_bank.find(puzz => Data.puzzles[puzzType].puzzle_bank.indexOf(puzz) === randomIndex));
      puzzBlock.push(instantiatedPuzzle);
      return puzzBlock;
    }, [])
    this.puzzleBlock = newPuzzleBlock;
  }

  returnPuzzle() {
    return this.puzzleBlock.find((puzz, index, array) => array.indexOf(puzz) === this.roundCounter);
  }

  start() {
    const round = new Round(this, this.returnPuzzle())
    this.assignCurrentRound(round);
  }

  assignCurrentRound(round) {
    this.currentRound = round;
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