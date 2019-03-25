import Game from './Game'

class Player {
  constructor(name, score) {
    this.name = name || 'Joe';
    this.score = score || 0;
    this.playerBank = 15
  }

}

export default Player
