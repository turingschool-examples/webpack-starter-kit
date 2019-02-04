import domUpdates from './domUpdates.js';
import $ from 'jquery';

class Puzzle {
  constructor(puzzleObj) {
    this.category = puzzleObj.category;
    this.numberWords = puzzleObj.number_of_words;
    this.totalLetters = puzzleObj.total_number_of_letters;
    this.firstWord = puzzleObj.first_word;
    this.description = puzzleObj.description;
    this.answer = puzzleObj.correct_answer;
  }

  checkGuess() {
  const array = this.answer.toUpperCase().split('');
  const letter = $('#guess-input').val().toUpperCase();
  if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
    alert("Sorry, a vowel costs $100. You can buy one below.");
    return;
  }
  if (array.includes(letter)) {
    domUpdates.changeLetter(letter);
    } else {
      domUpdates.wrongLetter(letter);
    };
  }
}

export default Puzzle;
