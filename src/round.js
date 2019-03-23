import Puzzle from "./puzzle";
import data from './data_wheel-of-fortune';
import GameEngine from './game-engine';
import DomUpdates from './dom-updates';
import { throws } from "assert";

/*
data.wheel => wheel array of values
data.puzzles.one_word_answers.puzzle_bank => array of puzzle objects 
! goes up to four_word_answers !
*/

class Round {
  constructor(currentRound) {
    this.roundNumber = currentRound,
    this.correctRoundGuesses = [],
    this.allRoundGuesses = [],
    this.currentPlayer = 0,
    this.counter = 0
  }
  determinePuzzleLength() {
    switch (this.roundNumber) {
      case 1: this.storePuzzle(data.puzzles.one_word_answers.puzzle_bank[Math.floor((Math.random() * 23) + 0)]);
      break;
      case 2: this.storePuzzle(data.puzzles.two_word_answers.puzzle_bank[Math.floor((Math.random() * 23) + 0)])
      break;
      case 3: this.storePuzzle(data.puzzles.three_word_answers.puzzle_bank[Math.floor((Math.random() * 23) + 0)])
      break;
      case 4: this.storePuzzle(data.puzzles.four_word_answers.puzzle_bank[Math.floor((Math.random() * 23) + 0)])
      break;
      case 5: this.storePuzzle(data.puzzles.one_word_answers.puzzle_bank[Math.floor((Math.random() * 23) + 0)])
    }
  }
  storePuzzle(puzzle) {
    this.getPuzzle(puzzle.category, puzzle.number_of_words, puzzle.total_number_of_letters, puzzle.first_word, puzzle.description, puzzle.correct_answer);
  }
  getPuzzle(category, wordNumber, totalLtrs, firstWordLtr, description, answer) {
    this.roundPuzzle = new Puzzle(category, wordNumber, totalLtrs, firstWordLtr, description, answer);
    this.answer = this.roundPuzzle.ans.split('')
  }
  getCurrentPlayer(game) {
    this.currentPlayer = game.players[this.counter];
    this.counter < 2 ? this.counter++ : this.counter = 0;    
    console.log(game.players)
    DomUpdates.updatePlayerScore(game);
  }
  // create an option method
  // switch statement based on their dom interaction
  // case guess: 
  playerGuessWord() {
    console.log('In guessword')
  }
  // ? Insert input & 2 buttons to tag event listeners on
  playerSpin() {
    console.log('In spin')
    
  }
  
  playerBuy() {
    console.log('In buy')
    
  }
  
  
  
}
export default Round;