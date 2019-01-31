import Game from './Game.js';

class Player{
  constructor(name, score = 0 , wager = 0){
    this.name = name;
    this.score = score;
    this.wager = wager;
    
  }
}

export default Player;