import dataSet from './dataSet.js'
import domUpdates from './domUpdates.js'

class Rounds {
  constructor(categoryIds) {
    
  }
  displayCategories() {
    domUpdates.displayCategories(dataSet.categories.cableTV)
  }
  roundTwoPoints() {
    this.pointValue * 2
  }

  fetchClues(categoryIds) {
    // Filter through dataSets and grab only questions that match
  }


   fetchClue(categoryIds) {
     // sweet filter
     // gets array of clues that match any of the categoryIds
     // sort by point pointValue
     // puts questions in order for html
     var clues = [{}]
     clues.forEach((clue) => {
       // put event listeners on questions
       // if question is clicked, create a new Clue instance
       // another event listener to watch for enter
      // trigger checkAnswer on instance of clue`
      // set this.rightOrWrong to true for correct answer, false for incorrect answer.
      // somehow get the game to check rightOrWrong
      // if right, update player score
     });
   }

}

export default Rounds;
