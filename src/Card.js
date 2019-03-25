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
		// this.column = this.pickColumn();
		// this.allCategoryNames = [];
		console.log(this)
	}

	// pickColumn(game) {
	// 	console.log(card);
	// }

}

export default Card;

//take the array within createCard and split into arrays for each column by each instance of the forEach
//from there, split by value into it's own array and place into card box