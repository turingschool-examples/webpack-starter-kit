import Game from './Game'
import Data from './Data'

class Round {
  constructor() {
    this.activePlayer = 0
    this.clueBank = null
    this.roundClue = []

  }

  createClues() {
    this.clueBank = Object.values(Data.puzzles).reduce((acc, puzzleLength)=>{
      puzzleLength.puzzle_bank.forEach(puzzle=>{
        acc.push(puzzle)
      });
      return acc
    }, [])
    this.shuffle()
  }

  randomizeClues(array){

    
  }

}

export default Round