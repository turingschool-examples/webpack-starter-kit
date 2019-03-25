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

  checkUserGuess(game,letterInput) {
    let answer = game.currentPuzzle.answer.toUpperCase().split('');
    let vowelKeyCodes = ['a', 'e', 'i', 'o','u'];
    answer.forEach(letter => {
    if(vowel.includes(letterInput)) {
      domUpdates.displayVowelMessage();
      }
    if(letter === letterInput) {
      domUpdates.displayLetterMatch(puzzle);
     console.log(currentLetter);
      }
    })
  }

}

export default Puzzle;