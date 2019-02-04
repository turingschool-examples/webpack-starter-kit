import Wheel from './Wheel.js';
import Player from './Player.js';

class Game {
  constructor(difficulty, round, players) {
    this.difficulty = difficulty;
    this.round = 1;
    this.players = [];
  }
  createPlayer(name) {
    let player = new Player(name);
    this.players.push(player);
  }
  changeRound() {
    this.round++
    // would like to refactor this as a switch statement
    if (this.round < 5) {
      let wheel = new Wheel();
      let player = new Player();
      // how to sort highest through lowest score. 
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