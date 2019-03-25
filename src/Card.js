import data from './Game-Data.js';
import Game from './Game.js';
import Round from './Round.js';

class Card {
	constructor(answer, categoryID, pointValue, question) {
		// this.category = category;
		this.answer = answer;
		this.categoryID = categoryID;
		this.pointValue = pointValue;
		this.question = question;
		// this.categoryId = categoryId;
		// this.isDailyDouble = false;
		// this.column = pickColumn(round);
		// this.allCategoryNames = [];
		// console.log(this)
		// game.currentQuestions.push(this);
	}

	pickColumn(round) {
		// console.log(this)
		const usefulQuestions = round.currentQuestions.push(this);
	}

}

export default Card;

//take the array within createCard and split into arrays for each column by each instance of the forEach
//from there, split by value into it's own array and place into card box