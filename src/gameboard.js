import data from './data.js';
// import Game from './game.js';
import $ from 'jquery';

class Gameboard {
  constructor(round = 1, highestPointValue, categoryList, firstRoundCategories, secondRoundCategories) {
    this.round = round;
    this.highestPointValue = highestPointValue;
    this.categoryList = Object.keys(data.categories);
    this.firstRoundCategories = [];
    this.secondRoundCategories = [];
    this.finalRoundCategory = [];
  };

  startGame() {
    console.log("You've started the game!");
    this.appendGameboard();
    return true;
  };

  appendGameboard() {
    console.log("append gameboard");
    this.assignCategories();

    console.log(this.round);

    //move below to domupdates.js
    //in domupdates, make them real english words
    //add forEach here to iterate through category list to append names
    // if (game.round === 1) 
      let $category1 = this.firstRoundCategories[0];
      $('#category1').text($category1);
      let $category2 = this.firstRoundCategories[1];
      $('#category2').text($category2);
      let $category3 = this.firstRoundCategories[2];
      $('#category3').text($category3);
      let $category4 = this.firstRoundCategories[3];
      $('#category4').text($category4);
  };

  assignCategories() {
    console.log("1" + this.categoryList);

    for (var i = this.categoryList.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = this.categoryList[randomIndex]; 
         
        this.categoryList[randomIndex] = this.categoryList[i];
        this.categoryList[i] = itemAtIndex;
    }
    console.log("2" + this.categoryList);

    this.firstRoundCategories = this.categoryList.splice(0, 4);
    this.secondRoundCategories = this.categoryList.splice(0, 4);
    this.finalRoundCategory = this.categoryList.splice(0, 1);
  };

  appendClue() {
    //Once categories are assigned, should associate our different boxes with particular clues.
    // function findClue() {}
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