import DomUpdates from './DomUpdates'
import Round from './Round';
import Data from './Data'
import Player from './Player'
import BonusRound from './BonusRound'


class Game {
  constructor(roundNumber, roundCards) {
    this.players = []
    this.roundNumber = roundNumber || 0
    this.gameRoundsClueBank = null
    this.roundCards = roundCards || []
    this.roundInst = new Round(0)
  }

  startGame(players) {
    this.createPlayers(players)
    this.createPlayerBox()
    this.createClues()
    this.roundInst.createNewRound(this)
  }

  createPlayers(players) {
    let player1 = new Player(p1)
    let player2 = new Player(p2)
    let player3 = new Player(p3)
    this.players.push(player1, player2, player3)
  }

  createPlayerBox() {
    DomUpdates.createPlayerBox(this.players)
  }

  createClues() {
    this.gameRoundsClueBank = Object.entries(Data.puzzles);
    
    for(let i = 0; i < 5; i++) {

    }
  }

  updatePlayerBank() {
    this.players[this.roundInst.activePlayer].playerBank += this.roundInst.wheelInst.selectedValue
    DomUpdates.updateRoundScore(this.players)
  }

  bankruptPlayerBank() {
    this.players[this.roundInst.activePlayer].playerBank = 0;
    DomUpdates.updateRoundScore(this.players)
  }

  updatePlayerScore() {
    this.players[this.roundInst.activePlayer].score += this.players[this.roundInst.activePlayer].playerBank
    this.players.forEach(player => {
      player.playerBank = 0
    })
    this.updatePlayerBank();
  }

  createBonusRound(game) {
    const bonus = new BonusRound(game)
    this.roundInst = bonus
    console.log(this.roundInst)

  
}
}
export default Game