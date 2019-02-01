import Player from './Player.js'
import domUpdates from './domUpdates.js';
import Round from './Round.js';

class Game{
  constructor(round =1, players =[]){
    this.round = round;
    this.players = players;
    // clues for entire game
    // round1 clues
    // round2 clues
    //round3 clue
  }


    // var categoryNum = 10;
    // var arrayOfCatergories = [[],[],[],[],[],[],[],[],[],[]];

    // arrayOfCatergories.forEach((cat,ind) => {
    //   data.clues.forEach(clue => { 
    //     if (clue.categoryId === (ind + 1)){
    //       cat.push(clue);
    //     }
    //   })

    // });


    // shuffle(arrayOfCatergories);
    // arrayOfCatergories.forEach(cat => {
    //   shuffle(cat);
    // });

    // function shuffle(a) {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }
    // console.log(arrayOfCatergories[0]);




  start(){
    const round = new Round();
    this.round = round;
    this.round.getClues()
    this.createPlayers(domUpdates.grabNames());
  }

  createPlayers(array){
      this.players = array.map(person => {
       return person = new Player(person);
      });
  }



}

export default Game;