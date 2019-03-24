import Player from "./Player";
import DomUpdates from './DomUpdates'
import Round from './Round';
import Wheel from './Wheel'
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

  // createWheel() {
  //   Object.values(Data.wheel).forEach(value => {
  //     return this.roundWheel.push(value)
  //   })
   

  //   console.log(this.roundWheel)
  //   this.shuffle(this.roundWheel)
  //   console.log(this.roundWheel)

  //   let selectedWheels = []

  //   //run a function to get 6 random numbers
  //   //find the index of the 
  //   let wheelNumber = this.randomNumber(this.roundWheel)
  //   console.log('huh', randomSelectedWheel)
  //   if(wheelNumber >= 17 )
  //   selectedWheels.push()
  //   // const weWheels = this.roundWheel.slice()
  //   // this.roundWheel.sp
  //   // let number = this.randomNumber(this.roundWheel)
  //   // console.log(number)
  // }

}

export default Game