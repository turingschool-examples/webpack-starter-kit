import domUpdates from "./domUpdates";
import Player from './Player.js';
import data from './data.js'
class Game {
  constructor() {
    this.players = [];
    // this.clues = gatherClues;
    this.currentPlayer = null;
    this.winner = null;
  }

  gatherPlayers(a, b, c) {
    let player1 = new Player(0, a);
    let player2 = new Player(0, b);
    let player3 = new Player(0, c);
    this.players.push(player1, player2, player3);
    this.currentPlayer = this.players[0];
  };

  getRandomCat() {
    let fourCats = []
    let keys = Object.keys(data.categories);
     do {
       let singleCat = keys[Math.floor(Math.random()*keys.length)];
       if(!fourCats.includes(singleCat)) {
         fourCats.push(singleCat)
       }
     }while(fourCats.length < 4)
     let clues = this.gatherClues(fourCats);
     this.createColumns(clues, fourCats);
   };

  gatherClues(array) {
    let cluesThisRound = [];
    let allClues;
    array.forEach(category => {
       allClues = data.clues.filter(clue => {
        return data.categories[category] === clue.categoryId;
       });
       for(var i = 1; i < 5; i++) {
         let specificPoints = allClues.filter(clue => {
           return clue.pointValue === 100 * i;
           });
           cluesThisRound.push(specificPoints[0]);
         }
       });
     return cluesThisRound;
   };

  createColumns(gameClues, catergories) {
    let columnOne = gameClues.slice(0,4);
    let columnTwo = gameClues.slice(4,8);
    let columnThree = gameClues.slice(8,12);
    let columnFour = gameClues.slice(12,16);
    columnOne.unshift(catergories[0]);
    columnTwo.unshift(catergories[1]);
    columnThree.unshift(catergories[2]);
    columnFour.unshift(catergories[3]);
    domUpdates.displayCategories(columnOne[0], columnTwo[0], columnThree[0], columnFour[0]);
  };
  
  quitGame() {
    domUpdates.toggleSplash();
  }

  // determineWinner() {

  // }

}

export default Game;