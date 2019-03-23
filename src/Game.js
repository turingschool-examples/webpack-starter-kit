import Player from './Player.js';
import Data from './Game-Data.js';
import DomUpdates from './domUpdates.js';

class Game {
	constructor(round, dailyDoubles, cardsClicked) {
		this.round = 1;
		this.dailyDoubles = 1;
		this.cardsClicked = 0;
		this.roundOneCategories = [];
	}
	startGame() {
		domUpdates.appendCategoryNames();
	}
}

export default Game;