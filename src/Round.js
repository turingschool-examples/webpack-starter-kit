import $ from 'jquery';
import DomUpdates from './DomUpdates';
import Wheel from './Wheel';


class Round {
  constructor() {
    this.clueAnswer = null
    this.roundClue = {}
    this.activePlayer = 0
    this.letterIndexs = [];
    this.remainingLetters = []
    this.wheelInst = new Wheel()
  }

  createNewRound(game) {
    DomUpdates.clearGameBoard();
    DomUpdates.updateGameScore(this.activePlayer.score);
    let allRoundClues = game.gameRoundsClueBank[game.roundNumber][1].puzzle_bank
    this.shuffler(allRoundClues)
    this.getRandomClue(allRoundClues)

    this.wheelInst.createWheel()

    DomUpdates.displayActivePlayer(game.players[this.activePlayer])
    DomUpdates.displayRound(game.roundNumber);
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
        this.checkRoundNum(game)
        game.roundNumber ++
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
      game.roundNumber ++
      this.checkRoundNum(game)
      this.createNewRound(game)
      
     
    } else {
      DomUpdates.gameMessage("next player")
      this.switchPlayer(game)
    }
  }

  checkRoundNum(game) { 
    if (game.roundNumber === 2)  {
      game.createBonusRound()
    }
  }
}

export default Round
