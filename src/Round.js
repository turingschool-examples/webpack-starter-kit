import Game from './Game.js';
import data from './Game-Data.js';
import Card from './Card.js';

class Round {
	constructor(game) {
		this.round = 1;
		this.allCategoryNames = [];
		this.currentCategories = [];
        this.currentQuestions = [];
        console.log(this.currentQuestions);
	}

	setCategories(game) {
   const categoryData = Object.entries(data.categories);
   // console.log(categoryData);
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
    let firstRound = currentCategories.forEach((category) =>
    	game.roundOneCategories.push(category));
    // game.roundOneCategories = this.currentCategories;
     // game.roundOneCategories.push(this.currentCategories);
// console.log(game);
    // console.log(currentCategories)
    // console.log(shuffledCategories)
	}
    createCards(game) {
        console.log(game.roundOneCategories);
        const roundOneClues = []
        game.roundOneCategories.forEach(category => {
            const matchingClues = data.clues.filter(clue => {
                if (clue.categoryId === category[1]) {
                   roundOneClues.push(clue);
                }
                return roundOneClues;
            console.log(matchingClues);
            });
            roundOneClues.forEach(clue => {
                let answer = clue.answer;
                let categoryId = clue.categoryId;
                let pointValue = clue.pointValue;
                let question = clue.question
                var newCard = new Card(answer, categoryId, pointValue, question);
                newCard.pickColumn(this);
            return newCard
            });   
        });
    }

    sortQuestions(game) {
        console.log(game.roundOneCategories);   
        this.currentQuestions.forEach(question => {
            if (question.categoryID === game.roundOneCategories[0][1]) {
                game.columnOne.push(question);
            } else if (question.categoryID === game.roundOneCategories[1][1]) {
                game.columnTwo.push(question);
            } else if (question.categoryID === game.roundOneCategories[2][1]) {
                game.columnThree.push(question)
            } else {
                game.columnFour.push(question)
            }
        });
    }


}

export default Round;