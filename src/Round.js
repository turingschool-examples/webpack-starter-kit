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
        this.catNames = Object.keys(data.categories)
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
    const gameArr = data.categories
    console.log(gameArr)
    const catString = [
      'United States History', 'Life Sciences', 'Public Health', 'Education Jargon',
      'Name That Board Game', 'American Literature', 'Biographies', 'American Cities',
      'Food', 'Cable TV'
    ];
    //for each catId index, 
    //I want to push catString index that matches each index of our catId
    this.catNames = this.catIds.map(id => {
      // return catString[] === id - 1;
      return catString.findIndex((e) => {
        return e === catId;
      })
    })
    // if (catIds[i] === Object.values(data.categories)[i]) {
    //   return Object.keys(data.categories)
    // }
    // this.catIds.forEach(catId => {
    //   for (let i = 1; i <=10; i++) {

    //   }
    //   const catNameArr = data.categories.filter(keys => {
    //     for
    //     return Object.keys(data.categories) === catId;
    //   })
    //   this.catNames = catNameArr;
    // });
    // compare the index vs the catId
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