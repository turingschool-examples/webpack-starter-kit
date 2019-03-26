import domUpdates from "./domUpdates";
import dataSet from "./dataSet";

class Round {
  constructor(ids, clues) {
    this.clues = clues; 
    this.categoryIds = ids;
    // this.categoryNames = [];
    // this.currentPlayer = {}; 
  }
  renderCategories() {
    domUpdates.displayCategories(this.categoryIds); 
    console.log(this.categoryIds);
  }
  findClue(id, pointVal, event) {
    const clueToRender = this.clues.find(clue => {
      return id == clue.categoryId && pointVal == clue.pointValue; // could be stricly equal if parseInt id and pointVal
    })
    console.log('pointval', pointVal)
    domUpdates.changeScore(pointVal)
    // console.log('id: ', id, 'val: ', pointVal);
    domUpdates.renderClue(clueToRender, event) // drilling with (event) passing an object around 
  }
}

export default Round; 