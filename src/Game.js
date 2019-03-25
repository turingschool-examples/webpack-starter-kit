import Player from "./Player";
import DomUpdates from './DomUpdates'
import Round from './Round';
import Data from './Data'



class Game {
  constructor() {
    this.players = []
    this.stage = 0
    this.alphabet = []
    this.gameRoundsClueBank = null
    this.roundCards = []
    this.roundInst = new Round()
  }

  startGame(p1, p2, p3) {
    this.createPlayers(p1, p2, p3)
    this.createLetters()
    this.createGameBoard(this.alphabet)
    this.createPlayerBox()
    this.createClues()
    this.roundInst.createNewRound(this)
    console.log(this)
  //   console.log(this.roundInst.allRoundCards)
  }

  createPlayers(p1, p2, p3) {
    let player1 = new Player(p1)
    let player2 = new Player(p2)
    let player3 = new Player(p3)
    this.players.push(player1, player2, player3)
  }
  createGameBoard() {
    DomUpdates.createGameBoard(this.alphabet)
  }

  createPlayerBox() {
    DomUpdates.createPlayerBox(this.players)
  }

  createLetters() {
    let allLetters = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase().split('')
    for (var i = 0; i < allLetters.length; i++) {
      this.alphabet.push(allLetters[i])
    }
  }
  createClues() {
    this.gameRoundsClueBank = Object.entries(Data.puzzles)
    // this.roundCards = this.roundsBank[game.stage][1].puzzle_bank
  }

  ///pass in wheelValue from wheel value function invocation ***********
  updatePlayerBank() {
    this.players[this.roundInst.activePlayer].playerBank += this.roundInst.wheelInst.selectedValue
  
    DomUpdates.updateRoundScore(this.players[this.roundInst.activePlayer].playerBank, this.roundInst.activePlayer)


    // this.players[this.roundInst.activePlayer].score += this.roundInst.wheelInst.selectedValue
    // return this.players[this.roundInst.activePlayer].score = cool
console.log(this.players)
  }
  
}
export default Game