import Player from "./Player";
import DomUpdates from './DomUpdates'
import Round from './Round';
import Data from './Data'




class Game {
  constructor() {
    this.players = []
    this.stage = 0
    this.gameRoundsClueBank = null
    this.roundCards = []
    this.roundInst = new Round(0)
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
    console.log(this.players)
    this.players[this.roundInst.activePlayer].playerBank += this.roundInst.wheelInst.selectedValue
    let playerPot = this.players[this.roundInst.activePlayer].playerBank
    let playerTurn = this.roundInst.activePlayer
    console.log(this.players)
    DomUpdates.updateRoundScore(playerPot, playerTurn)
  }

  bankruptPlayerBank() {
    this.players[this.roundInst.activePlayer].playerBank = -100;
    let playerPot = this.players[this.roundInst.activePlayer].playerBank
    let playerTurn = this.roundInst.activePlayer
    DomUpdates.updateRoundScore(playerPot, playerTurn)
  }

  updatePlayerScore() {
    console.log('Player Scored')
    this.players[this.roundInst.activePlayer].score += this.players[this.roundInst.activePlayer].playerBank
    this.players.forEach(player => {
      player.playerBank = 0
    })
  }
}
export default Game