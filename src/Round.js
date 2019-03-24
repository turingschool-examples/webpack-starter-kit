import domUpdates from "./domUpdates";
import dataSet from "./dataSet";

class Round {
  constructor(ids, clues) {
    this.clues = clues; // work on setting up this datatype
    this.categoryIds = ids;
    this.categoryNames = [];
    // this.currentPlayer = {}; 
  }
//   generateCategories() { // displayCategories
//     const generateDomCats = [ 'United States History',
//       'Life Sciences', 'Public Health', 'Education Jargon', 'Name That Board Game',
//       'American Literature', 'Biographies', 'American Cities', 'Food',
//       'CableTV' ];

//     this.categoryNames = this.categoryIds.map(categoryId => {
//       return generateDomCats.find((idk, index) => {
//         return index === categoryId - 1;
//       });
//     })

//     console.log(this.categoryNames);
//   }
//   generateClues() { // moving away from this 
//     this.clues = this.categoryIds.map(categoryId => {
//       return dataSet.clues.filter(clue => { 
//         return categoryId === clue.categoryId;
//       })
//     })
//   }
  renderCategories() {
    domUpdates.renderCategories(this.categoryIds);
  }
  findClue(id, pointVal, event) {
    const clueToRender = this.clues.find(clue => {
      return id == clue.categoryId && pointVal == clue.pointValue; // could be stricly equal if parseInt id and pointVal
    })
    console.log('id: ', id, 'val: ', pointVal);
    domUpdates.renderClue(clueToRender, event) // drilling with (event) passing an object around 
  }

}

export default Round; 