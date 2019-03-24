// import Player from './Player.js';
import data from './Game-Data.js';
import domUpdates from './domUpdates.js';
import index from './index.js';
import Player from './Player.js';
import Round from './Round.js';
import Card from './Card.js';
import $ from 'jquery';

class Game {
	constructor(round, dailyDoubles, cardsClicked) {
    // this.player = getPlayerNames();
		this.round = 1;
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

  setRoundOne() {
    let newRound = new Round(this);
    let newCard = new Card(this);
    newRound.setCategories(this);
    domUpdates.appendCategoryNames(this);
    newCard.createCards(this);
  }


    // let shuffledCategories = categoryData.shuffle();
    // round.allCategoryNames.push(shuffledCategories);
    // currentCategories = shuffledCategories.splice(6,5);
    // console.log(currentCategories)
    // console.log(shuffledCategories)

}

export default Game;