import dataSet from './dataSet.js'

import Game from './Game.js'
import domUpdates from './domUpdates.js'


class Rounds {
  constructor(categoryIds) {
    this.categoryIds = categoryIds;
    // console.log('Rounds class Categories ',this.categoryIds);
    this.topicOne = [];
    this.topicTwo = [];
    this.topicThree = [];
    this.topicFour = [];
  }

  roundTwoPoints() {
    this.pointValue * 2;
  }

  uniquePoints(currentTopic, num) {
    let finalCat = new Set();
    let finalTopic = currentTopic.filter(clue => {
        if (finalCat.has(clue.pointValue)) {
            return false;
        }
        finalCat.add(clue.pointValue);
        return true;
      });
    if (num === 1) {
      this.topicOne = finalTopic;
    } else if (num === 2) {
      this.topicTwo = finalTopic;
    } else if (num === 3) {
      this.topicThree = finalTopic;
    } else {
      this.topicFour = finalTopic;
    }
    // console.log('1', this.topicOne);
    // console.log('2', this.topicTwo);
    // console.log('3', this.topicThree);
    // console.log('4 ', this.topicFour);
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
    this.uniquePoints(this.topicOne, 1);
    this.uniquePoints(this.topicTwo, 2);
    this.uniquePoints(this.topicThree, 3);
    this.uniquePoints(this.topicFour, 4);
   }
   fetchQuestion() {

   }
}

export default Rounds;
