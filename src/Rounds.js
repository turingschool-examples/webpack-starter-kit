import dataSet from './dataSet.js'

class Rounds {
  constructor(categoryIds) {
    this.categoryIds = categoryIds;
  }

  roundTwoPoints() {
    this.pointValue * 2;
  }

   fetchClues(categoryIds) {
     // sweet filter
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
      const categories = dataSet.clues.filter((currentClue) => {
        return currentClue.categoryId;
        console.log('Categories Log: ', categories);
      });
   }


}

export default Rounds;
