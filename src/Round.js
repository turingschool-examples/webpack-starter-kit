import data from './data-set.js';

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
}

export default Round;