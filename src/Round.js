// import Wheel from "./Wheel.js";
import Game from "./Game.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import domUpdates from "./domUpdates.js";

class Round {
  constructor(players) {
    this.players = [] || players;
    this.activePlayer = 0;

  }

  getPuzzle(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    let randomPuzzle = array.splice(randomNum, 1);
    let puzzle = new Puzzle(randomPuzzle[0]);
    console.log(puzzle);
    console.log(puzzle.correctAnswer);
    return puzzle;
  }
  changeActivePlayers() {
    // if (this.activePlayer < 3) {
    //     this.activePlayer++;
    // }else {
    //     this.activePlayer = 1;
    // }
    // this.checkScore();

    // ///next turn

    // switch (true) {
    // case (this.activePlayer === 1):
    //   oldPlayer = 3; newPlayer = 1;
    //   break;
    // case(this.activePlayer === 2): 
    //   oldPlayer = 1; newPlayer = 2
    //   break;
    // case (this.activePlayer === 3):
    //   oldPlayer = 2; newPlayer = 3
    //   break;
    // default:
    //     alert('Something went wrong!');
    //   break;
    // }
    // domUpdates.turnOrder(oldPlayer, newPlayer);

  }

  checkScore() {
      if (this.players[this.activePlayer].roundScore >= 100) {
        domUpdates.buyAVowel();
      }
    }

  guessLetter(event) {
    domUpdates.displayCorrectLetter(puzzle.splitAnswer, event.currentTarget.innerText);
    if (puzzle.splitAnswer.includes(e.currentTarget.innerText)) {
      puzzle.splitAnswer.forEach(letter => {
        if (letter === event.currentTarget.innerText) {
          this.players[this.activePlayer].roundScore += wheel.currentSpin;
        }
      })
      domUpdates.displayScore(this.activePlayer, 
        this.players[this.activePlayer].roundScore);
      this.checkScore();
    } else {
      this.changeActivePlayers();
    }
  }

}

export default Round;