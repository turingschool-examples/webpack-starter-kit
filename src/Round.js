class Round {
  constructor(catNames, roundId, questions, indexCalled, dailyDouble) {
    this.catNames = [];
    this.roundId = 1;
    this.catIds = [];
    this.clues = [];
    this.pointValues = [];
    this.dailyDouble = 1;
  }

  startRound() {
    const gameArr = shuffle(Object.keys(data.categories));
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
      })
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
    //math.floor to get random number less than clue.length
    //this.dd = true;
    //if round two, add variable for second dd and use math.floor
    let index = Math.floor(Math.random() * this.clues.length);
    this.clues[index].dailyDouble = true;
    if (this.round === 2) {
      let index2 = Math.floor(Math.random() * this.clues.length);
      this.clues[index2].dailyDouble = true;
    }
  }
}