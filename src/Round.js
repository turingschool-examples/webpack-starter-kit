import Game from './Game,js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor() {
    this.players = players;
    this.availablePuzzles = [];
    this.currentRound = 1;
    this.totalRounds = [1, 2, 3, 4, 5]; 
  }
  changeRound() {
    //once answer is guess, round is complete 
  }

changeAvailablePuzzle() {
  //once new round starts, a random puzzle is selected (doesn't repeat). Once this function is invoked, it should change the category, description, and puzzle display. 
}


}

export default Round;