class Round {
  constructor(catNames, roundId, questions, indexCalled, dailyDouble) {
    this.catNames = [];
    this.roundId = 1;
    this.catIds = [];
    this.clues = [];
    this.pointValues = [];
    this.dailyDouble = 1;
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
    let index = Math.floor(Math.random() * this.clues.length);
    this.clues[index].dailyDouble = true;
    if (this.round === 2) {
      let index2 = Math.floor(Math.random() * this.clues.length);
      this.clues[index2].dailyDouble = true;
    }
  }
}