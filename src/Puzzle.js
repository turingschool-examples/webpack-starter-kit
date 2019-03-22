import data from './data.js';

class Puzzle {
  constructor(letterBank, vowels, categories, description, splitAnswer) {
    this.letterBank = null;
    this.vowels = [];
    this.categories = []; 
    this.description = null;
    this.splitAnswer = null;
  }

  getRandomPuzzle() {
    
  }
  getRandomCategories() {
    for(let i = this.categories.length - 1; i>0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.categories[i], this.categories[j]] = 
      [this.categories[j], this.categories[i]];
    }
  //     data.puzzles.one_word_answers.puzzle_bank.map(cat => {
  // return cat.category;
  // });
  }
}

export default Puzzle;