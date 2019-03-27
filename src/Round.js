import $ from 'jquery';
import DomUpdates from './DomUpdates';
import Wheel from './Wheel';
import BonusRound from './BonusRound'


class Round {
  constructor() {
    this.clueAnswer = null
    this.roundClue = {}
    this.activePlayer = 0
    this.letterIndexs = {};
    this.wheelInst = new Wheel()
    this.remainingLetters = []
    this.bonusRound = {}
  }

  createNewRound(game) {
    DomUpdates.clearGameBoard();
    DomUpdates.updateGameScore(this.activePlayer.score);
    this.checkRoundNum(this)
    this.checkRoundNum(game)
    let allRoundClues = game.gameRoundsClueBank[game.stage][1].puzzle_bank
    this.shuffler(allRoundClues)
    this.getRandomClue(allRoundClues)

    this.wheelInst.createWheel()

    DomUpdates.displayActivePlayer(game.players[this.activePlayer])
    DomUpdates.displayRound(this.roundNumber);
  }
  
  getRandomClue(cards) {  
    this.roundClue = this.randomNumber(cards);
    this.clueAnswer = this.roundClue.correct_answer.toLowerCase().split('');
    this.remainingLetters = this.clueAnswer.join('').replace(/[-']/g, '').split('');
    DomUpdates.createGameBoard();
    this.fillGameBoard();
    DomUpdates.displayHint(this.roundClue);
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
    const selectedLetter = this.letterIndexs[letter];
    const puzzleCells = $('.puzzle-cell').toArray();
    if (selectedLetter) {
      for (var i = 0; i < selectedLetter.length; i++) {
        const instance = selectedLetter[i];
        const puzzleCell = (puzzleCells[instance].parentNode);
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
  
  checkValue(Wheel, game) {   
    
    if (Wheel.wheelValue === "BANKRUPT") {
      DomUpdates.deactivateLetters()
      DomUpdates.gameMessage("bankrupt")
      game.bankruptPlayerBank();
      this.switchPlayer(game);
    } else if (Wheel.wheelValue === "LOSE A TURN") {
      DomUpdates.gameMessage("lose turn")
      DomUpdates.deactivateLetters()
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
        game.stage ++
        this.wheelInst.selectedValue = 0;
        this.createNewRound(game);
      } else {
        game.updatePlayerBank();
        DomUpdates.resetWheelValue();
        this.wheelInst.selectedValue = 0;
        DomUpdates.gameMessage("spin again");
      }
    } else {
      DomUpdates.gameMessage("next player")
      DomUpdates.resetWheelValue();
      this.wheelInst.selectedValue = 0;
      this.switchPlayer(game)

    }
  }

  checkPlayerSolve(playerSolveInput, game) {
    let playerSolve = playerSolveInput.replace(/[-' ]/g, '')
    let gameAnswer = this.clueAnswer.join('').replace(/[-' ]/g, '')
    
    if (playerSolve === gameAnswer) {
      DomUpdates.gameMessage("round winner")
      game.updatePlayerScore()
      DomUpdates.clearGameBoard()
      game.stage ++
      this.createNewRound(game)
      
     
    } else {
      DomUpdates.gameMessage("next player")
      this.switchPlayer(game)
    }
  }


  checkRoundNum(game) {
    
    
    // console.log(this, game)
    if (game.stage === 2)  {
      game.createBonusRound()
    }
  }
}

// class BonusRound extends Round {
//   constructor(roundNumber) {
//     super(roundNumber)
   
//   }
// }


export default Round