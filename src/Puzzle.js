import data from './Data.js';
import domUpdates from './domUpdates.js';

class Puzzle {
  constructor(category, numberOfLetters, correctAnswer, description, guessedLetters = 0) {
    this.category = category,
    this.numberOfLetters = numberOfLetters,
    this.correctAnswer = correctAnswer,
    this.description = description,
    this.guessedLetters = guessedLetters
    this.consonantsBank = [],
    this.vowelsBank = []
  }

  countVowels(correctAnswer) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
  }

  populateConsonantsBank() {
    let consonants = this.consonantsBank = this.consonantsBank.concat(['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'])
    let vowels = this.vowelsBank = this.vowelsBank.concat(['A', 'E', 'I', 'O', 'U'])
    domUpdates.displayLetters(consonants, vowels);
  }
 }

export default Puzzle;