import gameData from './data.js';

class Game {
  constructor(){
    this.currentTurn = 'p1';
    this.game = Object.assign(gameData);
  }
  startGame(){
    //select 1 survey at random and remove it from the source array
    const gameDataCopy = gameData.surveys.slice();
    const randomNumber = genNumber();
    const questionObject = gameDataCopy.splice(randomNumber, 1);
    function genNumber() { return Math.floor(Math.random() * gameDataCopy.length) + 1 };
    
    const question = questionObject[0].question;
    return question;
    //append the question to the DOM
    //create a array with the three associated answers and remove them from copied array
  }
  restartGame(){
    //clear all fields
    //revert back to starting arrays
  }
  whoseTurn(){
    if (this.currentTurn === 'p2'){
      //inputs and fields should reflect that it's players X's turn
      //player Y disabled
    } else {
      //inputs and fields should reflect that it's players Y's turn
      //player X disabled
    }
  }
}




export default Game;