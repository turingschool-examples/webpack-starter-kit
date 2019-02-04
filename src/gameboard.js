import data from './data.js';

import domUpdates from './domUpdates.js';

class Gameboard {
  constructor(round = 1, categoryList, firstRoundCategories, secondRoundCategories) {
    this.round = round;
    this.categoryList = Object.keys(data.categories);
    this.firstRoundCategories = [];
    this.secondRoundCategories = [];
    this.finalRoundCategory = [];
    this.cluesWithCategories = [];
  };

  startGame() {
    console.log("You've started the game!");
    
    this.collectClues();
    this.assignCategories();

    console.log(this.round);
    
    //Include a seond method to run all dom manipulation for start screen/appendgameboard
  };

  collectClues() {
    let allClues = data.clues;
    this.cluesWithCategories = allClues.map( clue => {
      clue.categoryName = this.categoryList[clue.categoryId - 1];
      return clue;
      });
    // console.log(this.cluesWithCategories);
  };

  assignCategories() {
    // console.log("1" + this.categoryList);

    for (var i = this.categoryList.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = this.categoryList[randomIndex]; 
         
        this.categoryList[randomIndex] = this.categoryList[i];
        this.categoryList[i] = itemAtIndex;
    }
    // console.log("2" + this.categoryList);

    this.firstRoundCategories = this.categoryList.splice(0, 4);
    this.secondRoundCategories = this.categoryList.splice(0, 4);
    this.finalRoundCategory = this.categoryList.splice(0, 1);

    domUpdates.labelCategories([this.firstRoundCategories], [this.secondRoundCategories], [this.finalRoundCategory]);
  };

  selectClue(selectedClue) {
    //grab catregory name of box and point value
    //iterate through game.cluesWithCategories
    //find clue object that has matching categoryname and point value
    //instantiate a clue with that data
    
  };

  appendWager() {
    //
  };

  clearGameboard() {
    //Removes gameboard from window to add Q&A, wager, or start screens
  };

  doublePoints() {
    //when we enter round 2, each box should display and be worth double points
  };

  finishGame() {

  };

  exitGame() {

  };

  changePlayerTurn() {
    //Will need method to change player active status
  }

};



export default Gameboard;