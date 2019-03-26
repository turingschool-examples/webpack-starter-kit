import $ from 'jquery';
import Data from './Data';
import DomUpdates from './DomUpdates';
import Wheel from './Wheel';

class Round {
  constructor(roundNumber) {
    this.roundNumber = roundNumber
    this.clueAnswer = {}
    this.roundClue = {}
    this.activePlayer = 0
    this.letterIndexs = {};
    this.wheelInst = new Wheel()
  }

  createNewRound(game) {
    this.roundNumber ++
    let allRoundClues = game.gameRoundsClueBank[game.stage][1].puzzle_bank
    game.stage ++
    this.shuffler(allRoundClues)
    this.playerTurn(game)
    this.getRandomClue(allRoundClues)
    this.wheelInst.createWheel(this)
  }

  getRandomClue(cards) {  
    this.roundClue = this.randomNumber(cards);

    this.clueAnswer = this.roundClue.correct_answer.toLowerCase().split('');
    this.fillGameBoard();
    this.displayHint();
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
    console.log(this.clueAnswer)
    if (this.clueAnswer.includes(userLetter)) {
      game.updatePlayerBank()
    } else if (!this.clueAnswer.includes(userLetter) && userLetter !== 'LOSE A TURN') {
      // this.activePlayer++
      this.switchPlayer()
    }
    // game.players[this.activePlayer].score += this.wheelInst.selectedValue
    // console.log(game.players)
    console.log('go to bed')

  }
  

  fillGameBoard() {
    this.letterIndexs = DomUpdates.fillGameBoard(this.clueAnswer);
  }

  displayHint() {
    DomUpdates.displayHint(this.roundClue);
  }

  flipCells(letter) {
    console.log(this.letterIndexs)
    const selectedLetter = this.letterIndexs[letter];
    const puzzleCells = $('.puzzle-cell').toArray();
    if (selectedLetter) {
      for (var i = 0; i < selectedLetter.length; i++) {
        const instance = selectedLetter[i];
        console.log('instance', instance)
        const puzzleCell = (puzzleCells[instance].parentNode);
        console.log('puzzleCell', puzzleCell)
        puzzleCell.classList.remove('letters-not-displayed')
        puzzleCell.classList.add('letters-displayed');
      }
    }
  }

  playerTurn(game) {
    game.players[this.activePlayer]
    console.log('myTurn:', game.players[this.activePlayer])
  }

  switchPlayer() {
    switch (this.activePlayer) {
    case 0:
      this.activePlayer = 1
      break;
    case 1:
      this.activePlayer = 2
      break;
    case 2:
      this.activePlayer = 0
      break;
    default:
      return;
    }
    console.log('after', this)
  }

  buyVowel(game) {
    game.players[this.activePlayer].playerBank -= 100;
    DomUpdates.activateVowels();
  }

  checkValue(wheelValue, game) {   
    if (wheelValue === "BANKRUPT") {
      DomUpdates.deactivateLetters()
      DomUpdates.bankrupt()
      game.players[this.activePlayer].playerBank = 0
      this.switchPlayer(game);
    } else if (wheelValue === "LOSE A TURN") {
      DomUpdates.loseTurn()
      DomUpdates.deactivateLetters()
      this.switchPlayer(game)
    } else {
      DomUpdates.activateLetters()
    }
  }

  playerGuessPuzzle(playerGuessInput, game) {
    let clueAnswer = this.clueAnswer.join('')
    if (clueAnswer == playerGuessInput) {
        DomUpdates.clearGameBoard();
        this.createNewRound(game)
      console.log(this)
  }
  }


}

export default Round