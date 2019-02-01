import domUpdates from './domUpdates.js';
import Player from './Player.js';

class Game {
  constructor() {
    this.puzzles = [{}, {}, {}, {}];
    this.wheels = [];
    this.players = [];

  }

  startGame() {
    console.log(this)
    let $names = domUpdates.getNames()
    domUpdates.displayNames($names)
    this.createPlayers($names)

  }

  createPlayers(names) {
    let player1 = new Player(names[0]);
    let player2 = new Player(names[1]);
    let player3 = new Player(names[2]);
    this.players = [player1, player2, player3];
    console.log(this.players);
  }


  spin() {

  }

  solve() {

  }

  buyVowel() {

  }

  guessLetter() {

  }

  // 
}

export default Game; 