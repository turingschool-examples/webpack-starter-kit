import Game from './Game.js';
import domUpdates from './domUpdates.js';

class Puzzle {
  constructor(puzzle) {
    this.guessedBank = [];
    this.category = puzzle.category;
    this.description = puzzle.description;
    this.answer = puzzle.correct_answer;
    this.numWords = puzzle.number_of_words;
  }

  checkUserGuess(letterInput) {
    let answer = this.answer.toUpperCase().split('');
    let vowels = ['a', 'e', 'i', 'o','u'];
    answer.forEach(letter => {
    if(letter === letterInput) {
      domUpdates.displayLetterMatch(letterInput);
      }
    if(letterInput === vowels) {
      domUpdates.displayVowelMessage();
      }
    })
  }

}

export default Puzzle;