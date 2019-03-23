import dataSet from './dataSet.js'
import Game from './Game.js'

class Rounds {
  constructor(categoryIds) {
    this.categoryIds = categoryIds;
    // console.log(this.categoryIds);

  }

  roundTwoPoints() {
    this.pointValue * 2;
  }

  fetchClues(categoryIds) {
     // filter
     // gets array of clues that match any of the categoryIds
     // sort by point pointValue
     // puts questions in order for html
       // put event listeners on questions
       // if question is clicked, create a new Clue instance
       // another event listener to watch for enter
      // trigger checkAnswer on instance of clue`
      // set this.rightOrWrong to true for correct answer, false for incorrect answer.
      // somehow get the game to check rightOrWrong
      // if right, update player score
      const clueList = dataSet.clues;
      // console.log('log 1 ', clueList);

      const sortedList = clueList.sort((a, b) => {
        return a.pointValue - b.pointValue;
      });

      const categoryList = clueList.filter((currentClue) => {
        return this.categoryIds.indexOf(currentClue.categoryId) !== -1 ;
      });
      // console.log('log 2 ', categoryList);
   }
}

export default Rounds;
