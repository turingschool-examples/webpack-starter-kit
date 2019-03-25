import data from './data-set.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor(ids, clues) {
    this.categoryIds = ids;
    this.clues = clues;
    this.cluesRemaining = 16;
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