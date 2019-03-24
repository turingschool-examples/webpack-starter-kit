import data from './data-set.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor(ids, clues) {
    // this.categoryNames = []; /// can most likely be done without making this a key/value pair
    this.categoryIds = ids;
    this.clues = clues;
  }

  displayCategories() {
    domUpdates.displayCategories(this.categoryIds);
  }

  findClue(id, pointValue) {
    const clueToShow = this.clues.find(clue => {
      return id == clue.categoryId && pointValue == clue.pointValue;
    });
    domUpdates.showClue(clueToShow, event)
  }

  // populateCategories() {
  //   const properCategoryNames = [
  //     'US History', 'Life Sciences', 'Public Health', 'Education Jargon',
  //     'Name That Board Game', 'American Literature', 'Biographies', 'American Cities',
  //     'Food', 'Cable TV'
  //   ]
  //   this.categoryNames = this.categoryIds.map(category => {
  //     return properCategoryNames.find((name, index) => index === category - 1);
  //   });
  // }

  // populateClues() {
  //   this.clues = this.categoryIds.map(categoryId => {
  //     const specificClues = data.clues.filter(clue => categoryId === clue.categoryId);
  //     return specificClues;
  //     });
  //   // domUpdates.assignClue(this.clues);
  //   // console.log(this.clues);
  // }
}

export default Round;