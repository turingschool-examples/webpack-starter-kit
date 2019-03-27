import data from './data-set.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor(ids, clues) {
    this.categoryIds = ids;
    this.clues = clues;
    this.cluesRemaining = 16;
    this.dailyDoubleClue = 0;
  }

  displayCategories() {
    domUpdates.displayCategories(this.categoryIds);
  }

  findClue(game, id, pointValue, event) {
    const clueToShow = this.clues.find(clue => {
      return id == clue.categoryId && pointValue == clue.pointValue;
    });
    console.log(id, pointValue);
    domUpdates.showClue(game, clueToShow, event)
  }  
  
}

export default Round;