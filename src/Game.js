import Player from './Player.js'
import domUpdates from './domUpdates.js';
import Round from './Round.js';
import data from './data.js'

class Game{
  constructor(players = []){
    this.round = 0;
    this.rounds = [];
    this.players = players;
    this.allData = [[],[],[],[],[],[],[],[],[],[]];
    // clues for entire game
    // round1 clues
    // round2 clues
    //round3 clue
  }
  getRandomData () {
    allData.forEach((cat,ind) => {
      data.clues.forEach(clue => { 
        if (clue.categoryId === (ind + 1)){
          cat.push(clue);
        }
      })
    });
    this.shuffle(allData).forEach(cat => this.shuffle(cat));
  }
  shuffle (a) {
    return a.sort(() => 0.5 - Math.random())
  }
  createRounds () {
    let round = new Round(this.clueSet());
    round.sortClues();
    this.rounds.push(round)
  }
  clueSet () {
  return allData.splice(0, 4);
  }
  
  // var catArr = [[],[],[],[],[],[],[],[],[],[]];

  // catArr.forEach((cat,ind) => {
  //   data.clues.forEach(clue => { 
  //     if (clue.categoryId === (ind + 1)){
  //       cat.push(clue);
  //     }
  //   })
  // });


  // shuffle(catArr).forEach(cat => shuffle(cat));
  
  // function shuffle(a) {
  //   return a.sort(() => 0.5 - Math.random())
  // }

  // let pointValuesArr = [100, 200, 300, 400]
  // let roundClues = [];
  // categories.forEach(cat => {
  //   pointValuesArr.forEach(value => {
  //     roundClues.push(cat.find(clue => clue.pointValue === value))
  //   })
  // })

  // function spliceArr (array) {
  //   return array.splice(0, 4)
  // }
  // console.log(roundClues);

  start(){
    const round = new Round();
    this.round = round;
    this.createPlayers(domUpdates.grabNames());
  }

  createPlayers(array){
      this.players = array.map(person => {
       return person = new Player(person);
      });
      this.players = this.shuffle(this.players);
  }



}

export default Game;