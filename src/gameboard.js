import data from './data.js';

class Gameboard {
  constructor(categoryPosition, cluePosition, highestPointValue) {
    this.categoryPosition = categoryPosition;
    this.cluePosition = cluePosition;
    this.highestPointValue = highestPointValue;
  };

  appendGameboard() {
    console.log("append gameboard");
    this.assignCategories();
    // return true;
  };

  assignCategories() {
    console.log(data.categories);
  //pull category names from data.js and make them real english words
  //append english words to dom with properties (category id)
  };
  

  

  appendClue() {
    //Once categories are assigned, should associate our different boxes with particular clues.
  };

  

  appendWager() {
    //
  };

  clearGameboard() {
    //Removes gameboard from window to add Q&A, wager, or start screens
  };

  doublePoints() {
    //when we enter round 2, each box should display and be worth double points
  }

}

export default Gameboard;