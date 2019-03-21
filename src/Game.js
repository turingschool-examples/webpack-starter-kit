import Player from "./Player";
import Data from './Data';
import DomUpdates from './DomUpdates'
import Puzzle from './Puzzle';
import Wheel from './Wheel'

class Game {
  constructor() {
    this.players = []
    this.clueBank = null
    this.wheels = []

  }




  startGame(p1, p2, p3) {
    console.log('hi')
    this.createPlayers(p1, p2, p3)
    this.createClues()
    this.createGameBoard()
  }


  createPlayers(p1, p2, p3) {
    let player1 = new Player(p1)
    let player2 = new Player(p2)
    let player3 = new Player(p3)
    this.players.push(player1)
    this.players.push(player2)
    this.players.push(player3)
    console.log(this.clueBank)

  }
  createClues() {
    this.clueBank = Object.values(Data.puzzles).reduce((acc, puzzleLength)=>{
      puzzleLength.puzzle_bank.forEach(puzzle=>{
        acc.push(puzzle)
      });
      return acc
    }, [])
  }

  createGameBoard() {
    console.log(this.players)

    DomUpdates.createBoard(this.players)
  }
  
}

export default Game