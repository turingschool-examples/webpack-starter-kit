import domUpdates from "./domUpdates";

class Round {
  constructor(ids) {
    this.clues = []; // work on setting up this datatype
    this.currentPlayer = {}; 
    this.categoryIds = ids;
    //this.promptsLeft = value of prompts
  }
  findClues() {
     
  }
  setCategoryIds() {
    domUpdates.setCategory(this.categoryIds);
  }

}

export default Round; 