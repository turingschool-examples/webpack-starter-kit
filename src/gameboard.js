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

  };

  appendWager() {

  };

  clearGameboard() {
    //Removes gameboard from window to add Q&A, wager, or start screens
  };

}

export default Gameboard;