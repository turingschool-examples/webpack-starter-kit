import Wheel from './Wheel.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';


class Game {
  constructor(difficulty) {
    this.difficulty = difficulty;
    this.round = 1;
    this.players = [];
  }
  createPlayers(names) {
    let thisPlayers = this.players;
    names.forEach(function(name) {
      const player = new Player(name);
      thisPlayers.push(player);
    })
    // displayPlayerNames();
  }
  createWheel() {
    const wheel = new Wheel();
    wheel.randomizeWheel();
    // display wheel on DOM
  }
  createPuzzle() {
    const puzzle = new Puzzle();
    // display puzzle, difficulty, hint on DOM
  }
  changeRound() {
    this.round++;
    if (this.round < 5) {
      let wheel = new Wheel();
      let player = new Player();
      let sortedPlayers = this.players.sort(function(a, b) {
        return a.roundScore - b.roundScore;
      })
      //player with the highest score gets to keep his money: player.winRound()
      player.resetScore();
      return wheel.randomizeWheel();
    }
    if (this.round === 5) {
      // start bonus round;
    } 
  }
  endGame() {
      // show 'game over' screen
      // display 'back to home screen' button
  }
};

export default Game;