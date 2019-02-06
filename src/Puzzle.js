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
    let forbiddenVowel = ["A", "E", "I", "O", "U"];
    let forbiddenNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const letter = ($('#guess-input').val().toUpperCase());
    if (forbiddenVowel.includes(letter)) {
      alert("Sorry, a vowel costs $100. You can buy one below.");
      return;
    }
    if (forbiddenNum.includes(letter)) {
      alert("That's not a letter");
      return;
    }
    if (array.includes(letter)) {
      domUpdates.changeLetter(letter);
    } else {
      domUpdates.wrongLetter(letter);
      game.trackPlayerTurn();
    }
  }

  checkVowel() {
    const puzzleAnswer = this.answer.toUpperCase().split('');
    const vowel = ($('#vowel-input').val().toUpperCase());
    if (puzzleAnswer.includes(vowel)) {
      domUpdates.changeLetter(vowel);
    } else {
      domUpdates.wrongLetter(vowel);
    }
  }
}

export default Puzzle;
