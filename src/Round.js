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
    this.roundNumber ++
    console.log('game', game.gameRoundsClueBank)
    let allRoundClues = game.gameRoundsClueBank[game.stage][1].puzzle_bank
    this.shuffler(allRoundClues)
    this.playerTurn(game)
    DomUpdates.displayActivePlayer(game.players[this.activePlayer])
    this.getRandomClue(allRoundClues)
    this.wheelInst.createWheel(this)
    game.stage ++
    console.log(this.letterIndexs)
  }

  getRandomClue(cards) {  
    this.roundClue = this.randomNumber(cards);
    this.clueAnswer = this.roundClue.correct_answer.toLowerCase().split('');
    this.remainingLetters = this.clueAnswer.join('').replace(/[-']/g, '').split('');
    this.fillGameBoard();
    this.displayHint();
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
    console.log(this.clueAnswer)
    if (this.clueAnswer.includes(userLetter)) {
      game.updatePlayerBank()
    } else if (!this.clueAnswer.includes(userLetter) && userLetter !== 'LOSE A TURN') {
      // this.activePlayer++
      this.switchPlayer(game)
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
    console.log('after', this)
  }

  buyVowel(game) {
    game.players[this.activePlayer].playerBank -= 100;
    DomUpdates.activateVowels();
  }

  checkValue(wheelValue, game) {   
    if (wheelValue === "BANKRUPT") {
      DomUpdates.deactivateLetters()
      DomUpdates.gameMessage("bankrupt")
      game.players[this.activePlayer].playerBank = 0
      this.switchPlayer(game);
    } else if (wheelValue === "LOSE A TURN") {
      DomUpdates.gameMessage("lose a turn")
      DomUpdates.deactivateLetters()
      this.switchPlayer(game)
    } else {
      DomUpdates.activateLetters()
    }
  }

  // playerGuessPuzzle(playerGuessInput, game) {
  //   let clueAnswer = this.clueAnswer.join('')
  //   if (clueAnswer == playerGuessInput) {
  //     DomUpdates.clearGameBoard();
  //     this.createNewRound(game)
  //     console.log(this)
  //   }
  // }

  ///checking clicked letter works
  checkLetter(userLetter, game) {
    console.log(this.remainingLetters)
    let cleanClueAnswer = this.clueAnswer.join('').replace(/[-']/g, '').split('')
    if (cleanClueAnswer.includes(userLetter)) {
      this.remainingLetters = this.remainingLetters.filter(letter =>{
        if (letter !== userLetter) {
          return letter;
        }
      })
      console.log(this.remainingLetters)
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
      this.switchPlayer()

    }

    
    // (!this.clueAnswer.includes(userLetter) && userLetter !== 'LOSE A TURN') {
    //       // this.activePlayer++
    //       this.switchPlayer()
    //     }
    console.log('go to bed')

  }

  checkPlayerSolve(playerSolveInput, game) {
    let playerSolve = playerSolveInput.replace(/[-']/g, '')
    let gameAnswer = this.clueAnswer.join('').replace(/[-']/g, '')
    
    if (playerSolve === gameAnswer) {
      DomUpdates.gameMessage("round winner")
      game.updatePlayerScore()
      this.createNewRound(game)
    } else {
      DomUpdates.gameMessage("next player")
      this.switchPlayer()
    }
  }


}

export default Round