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
    console.log(players)
    players.map(player => this.players.push(new Player(player)))
  }

  createPlayerBox() {
    DomUpdates.createPlayerBox(this.players)
  }

  createClues() {
    this.gameRoundsClueBank = Object.entries(Data.puzzles);
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