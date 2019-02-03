import data from './data';

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

class Round {
  constructor(catNames, roundId, questions, indexCalled, dailyDouble) {
    this.catNames = [];
    this.roundId = 1;
    this.catIds = [];
    this.clues = [];
    this.pointValues = [];
    this.questions = [];
    this.dailyDouble = 1;
  }

  startRound() {
    const gameArr = shuffle(Object.values(data.categories));
    if (this.roundId === 1) {
      this.catIds = gameArr.splice(0, 4);
      // this.catNames = this.getCatNames();
    } else if (this.roundId === 2) {
      this.catIds = gameArr.splice(0, 4);
      // this.catNames = this.getCatNames();
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
  setCatID(gameCat, data) {
    //Depending on round // set category
    // Get category names (call function)
  }
  getCatNames() {
    gameArr = Object.keys(data.categories)
    console.log(gameArr)
    // this.catIds.forEach(catId => {
    //   const catNameArr = data.categories.filter(data => {
    //     return data.categories === catId;
    //   })
    //   this.catNames = catNameArr;
    // }
    //map the cat names into an array
    //get the key from the dataset using catID
    //display the catName on the DOM  }
  }
  getClues(data) {
    //we will need to search our dataset to get the clues from our dataset
    //using the catIDs
  }

  setDDQuestion() {
    let index = Math.floor(Math.random() * this.clues.length);
    this.clues[index].dailyDouble = true;
    if (this.round === 2) {
      let index2 = Math.floor(Math.random() * this.clues.length);
      this.clues[index2].dailyDouble = true;
    }
  }
}

export default  Round;