class Game {
  constructor(difficulty, round, players) {
    this.difficulty = difficulty;
    this.round = 1;
    this.players = [];
  }
  changeRound() {
    this.round++
  }
  endGame() {
      // show 'game over' screen
      // display 'back to home screen' button
  }
};

export default Game;