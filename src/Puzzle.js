import Game from './Game.js';
import domUpdates from './domUpdates.js';
import Round from './Round.js';

class Puzzle {
  constructor(puzzle) {
    this.guessedBank = [];
    this.categories = puzzle.category;
    this.description = puzzle.description;
    this.answer = puzzle.correct_answer;
    this.numWords = puzzle.number_of_words;
  }

    // displayBoard(game) {
  //   let playerGuess = 'a';
  //   let board = $('.puzzle-container');
  //   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k',
  //     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
  //     'v', 'w', 'x', 'y', 'z'];
  //   game.currentPuzzle.map((index, letter) => {
  //     if (alphabet.includes(letter).toUpperCase()) {
  //       alphabet[index].append();
  //       //if the array only has letters in it, it will display the correct_answer.length 
  //       //it needs to reference the correct answer, attach it to the alphabet index, and display only the letter that match the correct answer 
  //     } else {
  //       board.append(
  //         //if the board contains '-', board will have - appended the answer 
  //       );
  //     }
  //   })
  // }

}

export default Puzzle;