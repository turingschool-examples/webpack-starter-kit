import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor(player) {
    this.currentPlayer = player;
    this.roundQuestions = [];
    this.finalRound = [];
    this.playerGuess = [];
  }

  checkPlayerGuess() {
    //player inputs guess
    //verify if guess matches correct answer for currentPuzzle
    //if letterGuess matches letter within puzzle
      //then, it will display on dom
    //else it will populate within an already used guess bank
    //dom doesnt change if it doesnt match
  }
  
changeAvailablePuzzle() {
  //once new round starts, a random puzzle is selected (doesn't repeat). Once this function is invoked, it should change the category, description, and puzzle display. 
}


}

export default Round;