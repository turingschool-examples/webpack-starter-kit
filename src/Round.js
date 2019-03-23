import domUpdates from "./domUpdates";

class Round {
  constructor(ids) {
    this.clues = []; // work on setting up this datatype
    this.currentPlayer = {}; 
    this.categoryIds = ids;
    //this.promptsLeft = value of prompts
  }
  filteredClues() {
    // each round has a new set of clues 
    // filter and remove the used clues from our clues array
    // 4 clues for each category 
  }
  setCategoryIds() {
    domUpdates.setCategory(this.categoryIds);
    // iterate over the 4 catIds 
    // invoke grabCategory()
  }
}

export default Round; 