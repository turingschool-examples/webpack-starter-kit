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
    domUpdates.showClue(game, clueToShow, event)
  }

  findNextRoundClues(game, id, innerText, event) {
    domUpdates.newCluePoints(game, id, innerText,event);
  }

  displayNextRoundClues(game, id, pointValue, newClues, event) {
    const newClueToShow = newClues.find(clue => {
      return id == clue.categoryId && pointValue == clue.pointValue;
    });
    domUpdates.showNewClue(game, newClueToShow, event)
  }

  

}

export default Round;