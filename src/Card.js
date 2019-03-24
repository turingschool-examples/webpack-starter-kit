import data from './Game-Data.js';
import Game from './Game.js';

class Card {
	constructor(category, question, answer, pointValue) {
		this.category = category;
		this.question = question;
		this.answer = answer;
		this.pointValue = pointValue;
		this.isDailyDouble = false;
		this.allCategoryNames = [];
	}

	createCards(game) {
		console.log(game.roundOneCategories);
		game.roundOneCategories.forEach(category => {
			const matchingClues = data.clues.filter(clue => {
				return clue.categoryId === category[1];
			})
			console.log(matchingClues);
		});
	}
}

export default Card;

//take the array within createCard and split into arrays for each column by each instance of the forEach
//from there, split by value into it's own array and place into card box