// import Player from './Player.js';
// import Data from './Game-Data.js';
import domUpdates from './domUpdates.js';
import index from './index.js';
import Player from './Player.js';
import $ from 'jquery';

class Game {
	constructor(round, dailyDoubles, cardsClicked) {
    // this.player = getPlayerNames();
		this.round = [];
		this.dailyDoubles = 1;
		this.cardsClicked = 0;
		this.roundOneCategories = [];
    this.currentPlayers = [];
	}

  getPlayerNames(names) {
    const players = names.map(name => {
      let newPlayer = new Player(name);
      return newPlayer;
    });
    this.currentPlayers = players;
    domUpdates.updatePlayerNames(this.currentPlayers);
    console.log(players);
      // startGame(inputPlayerOne, inputPlayerTwo, inputPlayerThree);
    // });
  }

	// startGame(name1, name2, name3) {
 //    let inputPlayerOne = new Player(name1);
 //    let inputPlayerTwo = new Player(name2);
 //    let inputPlayerThree = new Player(name3);
 //    // domUpdates.getPlayerNames();
 //    console.log(inputPlayerOne);
	// 	// domUpdates.appendCategoryNames();
	// }
}

export default Game;