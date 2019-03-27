import $ from 'jquery';
import Data from './Data';
import DomUpdates from './DomUpdates';
import Wheel from './Wheel';

class Round {
  constructor(roundNumber) {
    this.roundNumber = roundNumber
    this.clueAnswer = null
    this.roundClue = {}
    this.activePlayer = 0
    this.letterIndexs = {};
    this.wheelInst = new Wheel()
    this.remainingLetters = []
  }

  createNewRound(game) {
    this.checkRoundNum(this)
    this.roundNumber ++
    let allRoundClues = game.gameRoundsClueBank[game.stage][1].puzzle_bank
    this.shuffler(allRoundClues)
    DomUpdates.displayActivePlayer(game.players[this.activePlayer])
    this.getRandomClue(allRoundClues)
    this.wheelInst.createWheel(this)
    game.stage ++

  }

  getRandomClue(cards) {  
    this.roundClue = this.randomNumber(cards);
    this.clueAnswer = this.roundClue.correct_answer.toLowerCase().split('');
    this.remainingLetters = this.clueAnswer.join('').replace(/[-']/g, '').split('');
    DomUpdates.createGameBoard();
    this.fillGameBoard();
    DomUpdates.displayHint(this.roundClue);
    console.log(this.clueAnswer)
  }
  randomNumber(values) {
    if (values.length === 24) {
      return values[Math.floor(Math.random() * values.length)]
    } 
  }

  shuffler(gameClues) {
    for (var i = gameClues.length - 1; i > 0; i--) {
      var m = Math.floor(Math.random() * (i + 1));
      var temp = gameClues[i];
      gameClues[i] = gameClues[m];
      gameClues[m] = temp;
    }
  }

  fillGameBoard() {
    this.letterIndexs = DomUpdates.fillGameBoard(this.clueAnswer);
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

  switchPlayer(game) {
    switch (this.activePlayer) {
    case 0:
      this.activePlayer = 1
      DomUpdates.displayActivePlayer(game.players[this.activePlayer])
      break;
    case 1:
      this.activePlayer = 2
      DomUpdates.displayActivePlayer(game.players[this.activePlayer])
      break;
    case 2:
      this.activePlayer = 0
      DomUpdates.displayActivePlayer(game.players[this.activePlayer])
      break;
    default:
      return;
    }

  }

  buyVowel(game) {
    game.players[this.activePlayer].playerBank -= 100;
    DomUpdates.activateVowels();
  }

  checkValue(wheelValue, game) {   

    if (wheelValue === "BANKRUPT") {
      DomUpdates.deactivateLetters()
      DomUpdates.gameMessage("bankrupt")
      game.bankruptPlayerBank();
      this.switchPlayer(game);
    } else if (wheelValue === "LOSE A TURN") {
      DomUpdates.gameMessage("lose turn")
      DomUpdates.deactivateLetters()
      console.log('loseturn')
      this.switchPlayer(game)
    } else {
      DomUpdates.activateLetters()
    }
  }



  checkLetter(userLetter, game) {
    let cleanClueAnswer = this.clueAnswer.join('').replace(/[-']/g, '').split('')
    if (cleanClueAnswer.includes(userLetter)) {
      this.remainingLetters = this.remainingLetters.filter(letter =>{
        if (letter !== userLetter) {
          return letter;
        }
      })
      if (this.remainingLetters.length === 0) {
        DomUpdates.gameMessage("round winner")
        game.updatePlayerScore()
        this.createNewRound(game)
      } else {
        DomUpdates.gameMessage("spin again")
        game.updatePlayerBank()
      }
    } else {
      DomUpdates.gameMessage("next player")
      this.switchPlayer(game)

    }
  }

  checkPlayerSolve(playerSolveInput, game) {
    let playerSolve = playerSolveInput.replace(/[-' ]/g, '')
    console.log(playerSolve)
    let gameAnswer = this.clueAnswer.join('').replace(/[-' ]/g, '')
    
    if (playerSolve === gameAnswer) {
      DomUpdates.gameMessage("round winner")
      game.updatePlayerScore()
      DomUpdates.clearGameBoard()
      this.createNewRound(game)
    } else {
      DomUpdates.gameMessage("next player")
      this.switchPlayer(game)
    }
  }

  checkRoundNum() {
    if (this.roundNumber === 5) {
      this.createBonusWheel()
    }
  }
}

export default Round