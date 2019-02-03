import data from './data';

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

class Round {
  constructor(roundNum) {
    this.catNames = [];
    this.questions = [];
    this.indexCalled = [];
  }
  startRound() {
    const gameArr = shuffle(Object.values(data.categories));
    if (this.roundId === 1) {
      this.catIds = gameArr.splice(0, 4);
    } else if (this.roundId === 2) {
      this.catIds = gameArr.splice(0, 4);
    } else {
      this.catIds = gameArr.splice(0, 1);
    }
    this.catIds.forEach(catId => {
      const catClues = data.clues.filter(clue => {
        return clue.categoryId === catId;
      });
      shuffle(catClues);
      for (let i = 1; i <= 4; i++) {
        this.questions.push(catClues.find(clue => {
          return clue.pointValue === 100 * i;
        }));
      }
    });
  }
  setCatID(gameCat, dataset) {
    //Depending on round // set category
    // Get category names (call function)
  }
  getCatNames(dataset) {
    //map the cat names into an array
    //get the key from the dataset using catID
    //display the catName on the DOM
  }
  getClues(dataset) {
    //we will need to search our dataset to get the clues from our dataset
    //using the catIDs
  }
  setDDQuestion() {
    //set random clue to DD
    //set random clue to 2nd DD
  }
}

export default  Round;