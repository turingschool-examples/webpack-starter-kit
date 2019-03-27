import Wheel from "./Wheel.js";
import Game from "./Game.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import domUpdates from "./domUpdates.js";

class Round {
  constructor(players, wheel, puzzle) {
    this.players = players;
    this.currentWheel = wheel;
    this.activePlayer = 0;
    this.currentPuzzle = puzzle;
  }

  getPuzzle(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    let randomPuzzle = array.splice(randomNum, 1);
    let puzzle = new Puzzle(randomPuzzle[0]);
    this.currentPuzzle = puzzle;
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

  checkScore(game) {
    if (this.players[this.activePlayer].roundScore >= 100) {
      domUpdates.buyAVowel(game);
    }
  }

  // TODO: DISPLAY TOTAL SCORE ON DOM
  // INVESTIGATE: Might not actually be modifying the player score
  // aka might need a "player.updateScore" method
  updatePlayerScore(spinValue) {
    const player = this.players[this.activePlayer]
    player.roundScore += spinValue
    console.log('after: ', player.roundScore)
    domUpdates.displayScore(player, player.roundScore)
  }

  // TODO: DISPLAY REVEALED LETTER
  handleCorrectLetterChosen(splitAnswer, chosenLetter) {
    const spinValue = this.currentWheel.currentSpin
    const player = this.players[this.activePlayer]
    splitAnswer.forEach(letter => {
      if (chosenLetter === letter) {
        console.log('before: ', player.roundScore)
        this.updatePlayerScore(spinValue)
        domUpdates.displayCorrectLetter(splitAnswer, chosenLetter);
      }
    });
  }

  // TODO: Refactor to use entire solution
  // INVESTIGATE: Consider creating a Tile class
  guessLetter(event, game) {
    const splitAnswer = game.round.currentPuzzle.splitAnswer;
    const chosenLetter = event.currentTarget.innerText;
    if (splitAnswer.includes(chosenLetter)) {
      this.handleCorrectLetterChosen(splitAnswer, chosenLetter)
      this.checkScore();
    } else {
      this.changeActivePlayers();
    }
  }

}

export default Round;