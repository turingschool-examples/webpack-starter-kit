import data from './Data.js';

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

  //   grabPuzzleBanks() {
  //   let puzzleArrayOne = data.puzzles.one_word_answers.puzzle_bank
  //   let puzzleArrayTwo = data.puzzles.two_word_answers.puzzle_bank
  //   let puzzleArrayThree = data.puzzles.three_word_answers.puzzle_bank
  //   let puzzleArrayFour = data.puzzles.four_word_answers.puzzle_bank
  //   let puzzleBank = puzzleArrayOne.concat(puzzleArrayTwo, puzzleArrayThree, puzzleArrayFour)
  //   this.randomizeBank(puzzleBank);
  //   let fourPuzzles = this.setGamePuzzles(puzzleBank);
  //   let roundPuzzle = this.setRoundPuzzle(fourPuzzles);
  //   console.log(roundPuzzle)
  //   return puzzleBank;
  // }

  // randomizeBank(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     const randomIndex = Math.floor((Math.random() * (arr.length - i))) + i;
  //     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  //   }
  //   return arr;
  // }

  // setGamePuzzles(puzzleBank) {
  //   let fourPuzzles = puzzleBank.slice(0, 4);
  //   this.gamePuzzles = fourPuzzles.map(puzzle => {
  //     return new Puzzle(puzzle.category, puzzle.total_number_of_letters, puzzle.correct_answer, puzzle.description, 0, )
  //   })
  //   return fourPuzzles;
  // }

  // setRoundPuzzle(fourPuzzles) {
  //   let roundPuzzle = fourPuzzles.pop();
  //   console.log(fourPuzzles.length)
  //   return roundPuzzle;
  // }

  countVowels(correctAnswer) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
  }

  populateConsonantsBank() {
    this.consonantsBank = this.consonantsBank.concat(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'])
    this.vowelsBank = this.vowelsBank.concat(['a', 'e', 'i', 'o', 'u'])
  }
 }

export default Puzzle;