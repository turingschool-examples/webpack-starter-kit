import Wheel from './Wheel.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';


class Game {
  constructor(difficulty) {
    this.difficulty = difficulty;
    this.round = 1;
    this.players = [];
    this.roundWheel = null;
    this.bonusWheel = [];
    this.roundPuzzle = [];
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
    // const wheel = new Wheel();÷
    // wheel.randomizeWheel();
    this.roundWheel.randomizeWheel();
    console.log('Wheel: ' + this.roundWheel.wheelElements);
    this.roundWheel.wheelElements.forEach((element) => {
      $('.wheel').append('<p>' + element + '</p>');
    })

  }
  createPuzzle() {
    this.roundPuzzle = new Puzzle

    this.roundPuzzle.chooseDifficulty();
    this.roundPuzzle.randomizePuzzle();
    // display puzzle, difficulty, hint on DOM
  }
  newRound() {
    this.round++;
    this.players.forEach((player) => {
      player.resetScore();
    });
    // update dom
    if (this.round < 5) {
      console.log('rounds 1-4')
      this.roundWheel = new Wheel();      
      this.createWheel();
      this.createPuzzle();
      //console log the individual puzzle here
    }
    if (this.round === 5) {
      console.log('in round 5');
      // this.createBonusWheel();
      // start bonus round;
    } 
  }
  scoreUpdate() {
  $('#score-player1').text(this.players[0].roundScore);
  $('#score-player2').text(this.players[1].roundScore);
  $('#score-player3').text(this.players[2].roundScore);
}
  endGame() {
      // show 'game over' screen
      // display 'back to home screen' button
  }
};

export default Game;