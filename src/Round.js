import Game from './Game'
import Data from './Data'
import DomUpdates from './DomUpdates';

class Round {
  constructor() {
    this.activePlayer = 0
    this.clueBank = null
    this.clueAnswer = null
  }

  createClues() {
    this.clueBank = Object.values(Data.puzzles).reduce((acc, puzzleLength)=>{
      puzzleLength.puzzle_bank.forEach(puzzle=>{
        acc.push(puzzle)
      });
      return acc
    }, [])
    this.shuffle(this.clueBank)
    this.getRandomClue()
  }

  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  getRandomClue() {  
    const selectedClue = this.clueBank[Math.floor(Math.random()) * this.clueBank.length]
    this.clueAnswer = selectedClue.correct_answer.toLowerCase().split('')
    console.log(this.clueAnswer)
    
  }

}

export default Round