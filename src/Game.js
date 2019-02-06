import Wheel from './Wheel.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor(difficulty) {
    this.round = 0;
    this.players = [];
    this.currentPlayer = 0;
    this.roundWheel = null;
    this.bonusWheel = [];
    this.roundPuzzle = [];
    this.splitPuzzle = [];
  }
  createPlayers(names) {
    let thisPlayers = this.players;
    names.forEach(function(name) {
      const player = new Player(name);
      thisPlayers.push(player);
    })
  }
  createWheel() {
    this.roundWheel.randomizeWheel();
    this.roundWheel.wheelElements.forEach((element) => {
      domUpdates.appendWheel(element);
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
    domUpdates.disableKeyboard();
    domUpdates.updateRound(this.round - 1, this.round);
    if (this.round < 5) {
      this.roundWheel = new Wheel();      
      this.createWheel();
      this.createPuzzle();
      //console log the individual puzzle here
    }
    if (this.round === 5) {
      // this.createBonusWheel();
      // start bonus round;
    } 
  }
  cyclePlayers() {
    if (this.currentPlayer < 3) {
      this.currentPlayer++;
      console.log(this.currentPlayer);
    } else {
      this.currentPlayer = 0;
      console.log(this.currentPlayer);
    }
  }
  buyVowel() {
    domUpdates.toggleKeyboard();
  }
  guessLetter(e) {
    let uppercasePuzzle = this.roundPuzzle.answer.toUpperCase();
    this.splitPuzzle = uppercasePuzzle.split('');
    this.splitPuzzle.forEach((letter, i) => {
      if (letter === e.currentTarget.innerText) {
        domUpdates.displayCorrectLetter(letter, i);
        this.players[this.currentPlayer].roundScore += this.roundWheel.currentSpin;
        domUpdates.scoreUpdate(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      }
    })
    // console.log(this.players[this.currentPlayer].roundScore);
    // represent on DOM ^
    console.log(this.players[this.currentPlayer].roundScore);
    // domUpdates.scoreUpdate(this.currentPlayer, this.players[this.currentPlayer].roundScore);
  }
  endGame() {
      // show 'game over' screen
      // display 'back to home screen' button
  }
};

export default Game;