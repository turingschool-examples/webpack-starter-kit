import $ from 'jquery';
import Data from './Data';
import DomUpdates from './DomUpdates';
import Wheel from './Wheel';

class Round {
  constructor() {
    this.clueAnswer = {}
    this.roundClue = {}
    this.activePlayer = 0
    this.playerBank = []
    this.letterIndexs = {};
    this.wheelInst = new Wheel()
  }

  createNewRound(game) {
    let allRoundClues = game.gameRoundsClueBank[game.stage][1].puzzle_bank
    this.shuffler(allRoundClues)
    this.playerTurn(game)
    this.getRandomClue(allRoundClues)
    this.wheelInst.createWheel(this)
  }

  getRandomClue(cards) {  
    this.roundClue = this.randomNumber(cards) 
    this.clueAnswer = this.roundClue.correct_answer.toLowerCase().split('')
    this.fillGameBoard()
    console.log(this.clueAnswer)
  }
  randomNumber(values) {
    if (values.length === 24) {
      return values[Math.floor(Math.random() * values.length)]
    } 
  }

  shuffler(array) {
    console.log(array)
    for (var i = array.length - 1; i > 0; i--) {
      var m = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[m];
      array[m] = temp;
    }
  }

  ///checking clicked letter works
  checkLetter(userLetter, game) {
   
    if (this.clueAnswer.includes(userLetter)) {
      game.updatePlayerScore()
      // game.players[this.activePlayer].score += this.wheelInst.selectedValue
      // console.log(game.players)
      console.log('go to bed')

    }
  }

  fillGameBoard() {
    this.letterIndexs = DomUpdates.fillGameBoard(this.clueAnswer);
  }

  flipCells(letter) {
    const selectedLetter = this.letterIndexs[letter];
    const puzzleCells = $('.puzzle-cell').toArray();
    if(selectedLetter) {
      for(var i = 0; i < selectedLetter.length; i++) {
        const instance = selectedLetter[i];
        const puzzleCell = (puzzleCells[instance].parentNode);
        puzzleCell.classList.remove('letters-not-displayed')
        puzzleCell.classList.add('letters-displayed');
      }
    }
  }

  checkGameBoard() {

  }

  playerTurn(game) {
    game.players[this.activePlayer]


  //   switchPlayer() {

  //     if(this.activePlayer < 2){
  //       this.activePlayer++
  //      } else this.activePlayer = 0
   
  // }
  }
  checkValue(wheelValue) {
    console.log(wheelValue)
    
    if (typeof wheelValue === "string") {
      DomUpdates.deactivateLetters()
    } else {
      DomUpdates.activateLetters()
    }
  }

}

export default Round