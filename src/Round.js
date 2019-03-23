import domUpdates from "./domUpdates";

class Round {
  constructor() {
    this.clues = []; // work on setting up this datatype
    this.categoryIds = [];
    this.categoryNames = [];
    // this.currentPlayer = {}; 
    //this.promptsLeft = value of prompts
  }
  generateCategories() {
    const generateDomCats = [ 'United States History',
      'Life Sciences', 'Public Health', 'Education Jargon', 'Name That Board Game',
      'American Literature', 'Biographies', 'American Cities', 'Food',
      'CableTV' ];


    this.categoryNames = this.categoryIds.map(categoryId => {
    //   console.log('randomCatId', categoryId); 
      return generateDomCats.find((idk, index) => {
        return index === categoryId - 1;
      });
    })
    console.log(this.categoryNames);
  }


//   setCategoryIds() {
//     domUpdates.setCategory(this.categoryIds);
//   }
}

export default Round; 