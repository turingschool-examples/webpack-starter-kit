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

}

export default Round;