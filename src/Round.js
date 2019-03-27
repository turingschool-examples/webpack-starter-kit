import data from './data-set.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor(ids, clues) {
    this.categoryIds = ids;
    this.clues = clues;
    this.cluesRemaining = 16;
    this.dailyDoubleClue = 0;
    this.categoryTitles = ['US History', 'Life Sciences',
      'Public Health', 'Education Jargon',
      'Name That Board Game', 'American Literature',
      'Biographies', 'American Cities', 'Food', 'Cable TV'];
  }

  displayCategories() {
    domUpdates.displayCategories(this.categoryIds, this.categoryTitles);
  }

  findClue(game, id, pointValue, event) {
    const clueToShow = this.clues.find(clue => {
      return id == clue.categoryId && pointValue == clue.pointValue;
    });
    domUpdates.showClue(game, clueToShow, event, this.categoryTitles)
  }
  
  // getFinalClue(game) {
  //   let finalRoundCategory = game.categoryData.pop()
  //   const finalClueToShow = this.clues.find(clue => {
  //     return id == finalRoundCategory
  //   })
  //   console.log(finalRoundCategory);
  // }

}

export default Round;