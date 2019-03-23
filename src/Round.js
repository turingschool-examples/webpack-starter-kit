import data from './data-set.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor() {
    this.categoryNames = [];
    this.categoryIds = [];
    this.clues = [];
  }

  populateCategories() {
    const properCategories = [
      'US History', 'Life Sciences', 'Public Health', 'Education Jargon',
      'Name That Board Game', 'American Literature', 'Biographies', 'American Cities',
      'Food', 'Cable TV'
    ]
    this.categoryNames = this.categoryIds.map(category => {
      return properCategories.find((name, index) => index === category - 1);
    });
  }

  populateClues() {
    this.clues = this.categoryIds.map(categoryId => {
      const specificClues = data.clues.filter(clue => categoryId === clue.categoryId);
      return specificClues;
      })
    domUpdates.assignClue(this.clues);
    console.log(this.clues);
  }
}

export default Round;