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

    console.log(this.cluesWithCategories);

  };

  assignCategories() {
    console.log(this.cluesWithCategories);
    
    function randomize(array) {
      return array.sort(() => 0.5 - Math.random());
    };

/*

  this.cluesWithCategories.reduce((acc,currentClue) => {
    let contains = false;

    acc.forEach(uniqueClue  => {
      if(uniqueClue.categoryName === currentClue.categoryName){
        contains = true;
      }
    })

    if(!contains){
      acc.push(currentClue)
    }

    return acc;
  }, [])
*/

    randomize(this.cluesWithCategories);

    console.log(this.cluesWithCategories);

    this.cluesWithCategories.reduce((acc, currentClue) => {
      console.log(currentClue);

      if (!acc.includes(currentClue.categoryName && currentClue.pointValue)) {
          acc.push(currentClue);
      };
      console.log(acc);
      return acc;
      }, []);


    // this.firstRoundCategories = this.cluesWithCategories.find();
    // this.secondRoundCategories = this.categoryList.splice(0, 4);
    // this.finalRoundCategory = this.categoryList.splice(0, 1);

    // domUpdates.labelCategories([this.firstRoundCategories], [this.secondRoundCategories], [this.finalRoundCategory]);
  
  


  //create an of the categories for each round with 4 questions for each round
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