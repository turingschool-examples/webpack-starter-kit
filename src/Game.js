import Wheel from './Wheel.js'

class Game {
  constructor(difficulty, round, players) {
    this.difficulty = difficulty;
    this.round = 1;
    this.players = [1, 2, 3];
  }
  changeRound() {
    this.round++
    // would like to refactor this as a switch statement
    if (this.round < 5) {
      let wheel = new Wheel();
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