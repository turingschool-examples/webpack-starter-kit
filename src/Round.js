import Game from './Game.js';
import data from './Game-Data.js';

class Round {
	constructor() {
		this.round = 1;
		this.allCategoryNames = [];
		this.currentCategories = [];
	}

	setCategories() {
   const categoryData = Object.entries(data.categories);
   console.log(categoryData);
		   Array.prototype.shuffle = function() {
    var input = this;    
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var categoryAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = categoryAtIndex;
    }
    return input;
  }
    let shuffledCategories = categoryData.shuffle();
    this.allCategoryNames.push(shuffledCategories);
    let currentCategories = shuffledCategories.splice(6,5);


    console.log(currentCategories)
    console.log(shuffledCategories)

  }
}


export default Round;