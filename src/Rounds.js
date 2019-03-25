import dataSet from './dataSet.js'

import Game from './Game.js'
import domUpdates from './domUpdates.js'


class Rounds {
  constructor(categoryIds) {
    this.categoryIds = categoryIds;
    this.topicOne = [];
    this.topicTwo = [];
    this.topicThree = [];
    this.topicFour = [];
  }

  roundTwoPoints() {
    this.pointValue * 2;
  }

  uniquePoints(currentTopic) {
    const finalCat = new Set();
    currentTopic = currentTopic.filter(clue => {
        if (finalCat.has(clue.pointValue)) {
            return false;
        }
        finalCat.add(clue.pointValue);
        return true;
    });
    if(currentTopic[0].id === this.topicOne[0].id) {
      this.topicOne = currentTopic;
    } else if (currentTopic[0].id === this.topicTwo[0].id) {
      this.topicTwo = currentTopic;
    } else if (currentTopic[0].id === this.topicThree[0].id) {
      this.topicThree = currentTopic;
    } else {
      this.topicFour = currentTopic;
    }
  }

  fetchClues() {
    const clueList = dataSet.clues;
    const categoryList = clueList.filter((currentClue) => {
      return this.categoryIds.indexOf(currentClue.categoryId) !== -1 ;
    });

    categoryList.forEach((currentClue) => {
      if (currentClue.categoryId === this.categoryIds[0]) {
        this.topicOne.push(currentClue)
      } else if (currentClue.categoryId === this.categoryIds[1]) {
        this.topicTwo.push(currentClue)
      } else if (currentClue.categoryId === this.categoryIds[2]) {
        this.topicThree.push(currentClue)
      } else if (currentClue.categoryId === this.categoryIds[3]) {
        this.topicFour.push(currentClue)
      }
    });
    this.uniquePoints(this.topicOne);
    this.uniquePoints(this.topicTwo);
    this.uniquePoints(this.topicThree);
    this.uniquePoints(this.topicFour);
   }
   fetchQuestion() {
     
   }
}

export default Rounds;
