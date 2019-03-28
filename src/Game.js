import DomUpdates from './DomUpdates'
import Round from './Round';
import Data from './Data'
import Player from './Player'
import BonusRound from './BonusRound'

class Game {
  constructor() {
    this.players = []
    this.stage = 0
    this.gameRoundsClueBank = null
    this.roundCards = []
    this.roundInst = new Round(0)
    this.bonus = null
  }

  startGame(p1, p2, p3) {
    this.createPlayers(p1, p2, p3)
    this.createPlayerBox()
    this.createClues()
    this.roundInst.createNewRound(this)
  }

  createPlayers(p1, p2, p3) {
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

  createBonusRound() {
    let winner = this.players.sort((playerA, playerB)=>{
      return playerA.score - playerB.score
    }).pop();
    this.bonus = new BonusRound();
  }
}
export default Game