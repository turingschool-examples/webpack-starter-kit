import Data from './Data'
import DomUpdates from './DomUpdates';
import Wheel from './Wheel';

class Round {
  constructor() {
    this.allRoundCards = null
    this.clueAnswer = null
    this.roundClue = {}
    this.roundWheel = []
    this.activePlayer = 0
    this.letterIndexs = {};
  }

  createNewRound(game) {
    this.allRoundCards = game.gameRoundsClueBank[game.stage][1].puzzle_bank

    this.getRandomClue(this.allRoundCards)
  
  }

  getRandomClue(cards) {  
    this.roundClue = this.randomNumber(cards) 
    this.clueAnswer = this.roundClue.correct_answer.toLowerCase().split('')
    this.fillGameBoard()

  }


  randomNumber(values) {
    if (values.length === 24) {
      return values[Math.floor(Math.random() * values.length)]
    } 
  }

  ///checking clicked letter works
  checkLetter(userLetter) {
    if (this.clueAnswer.includes(userLetter)) {
      console.log('go to bed')
    }
  }

  fillGameBoard() {
    this.letterIndexs = DomUpdates.fillGameBoard(this.clueAnswer);
  }

}

export default Round