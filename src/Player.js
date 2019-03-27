import Game from './Game.js';
import domUpdates from './domUpdates.js';
import Puzzle from './Puzzle.js';

class Player {
  constructor(name, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }

  solvePuzzle(game) {
    let solveInput = domUpdates.grabCurrentLetter();
    console.log(solveInput);
    let puzzle = game.currentPuzzle
    let letters = game.currentPuzzle.answer.split('');
    letters.forEach(letter => {
      if (solveInput === puzzle.answer) {
        domUpdates.displayLetterMatch(letter);
        getPlayerScore();
        // if(player.input !== puzzle.answer) {
        // }
        // switchPlayers();
        //add this to puzzle instead
      }
    })
    
  }


  getPlayerScore(wheel, game) {
    // use this after we create wheel spin method
    console.log('playerScore:', game.currentPlayer)
    game.currentPlayer.roundScore += wheel.currentIndex;
  }


  // buyVowel() {
  //   if(this.score > 100) {
  //     buy vowel becomes enabled
  //     dom updates to show enabled
  //     game.currentPlayer = this.totalScore - 100
  //     when enabled, player can enter in 1 vowel and if it's in the letter if will show up on the puzzle bank
  //   if(this.score <100) {
  //     domUpdates display not enough cash message
  //     buy vowel is still disabled
  //   }
  //   }
  }


export default Player;