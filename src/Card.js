class Card {
	constructor(category, question, answer, pointValue) {
		this.category = category;
		this.question = question;
		this.answer = answer;
		this.pointValue = pointValue;
		this.isDailyDouble = false;
	}
}

export default Card;

