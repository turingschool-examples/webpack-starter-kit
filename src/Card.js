import GameData from './Game-Data.js';

class Card {
	constructor(category, question, answer, pointValue) {
		this.category = category;
		this.question = question;
		this.answer = answer;
		this.pointValue = pointValue;
		this.isDailyDouble = false;
		this.allCategoryNames = [];
	}

	settingCategories() {
		let roundOne = this.allCategoryNames.splice(6,5);
		game.roundOneCategories.unshift(roundOne)
	}
}

export default Card;

