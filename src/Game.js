import Player from "./Player";
import Data from './Data';




class Game {
  constructor() {
    this.players = []
    this.clueBank = []

  }
  startGame(p1, p2, p3) {
    this.createClues(Data)
    
    this.createPlayers(p1, p2, p3)
  }


  createPlayers(p1, p2, p3) {
    let player1 = new Player(p1)
    let player2 = new Player(p2)
    let player3 = new Player(p3)
    this.players.push(player1)
    this.players.push(player2)
    this.players.push(player3)
  }
  createClues(Data){
  let onWordClueBan = Object.entries(Data).forEach
console.log(data1)

  }
}

export default Game