class Player {
  constructor(name = null) {
    this.name = name;
    this.score = 0;
    this.isTurn = false;
  }

  makeGuess(guess) {
    if(!(typeof guess === 'string')) {
      return 'Error: Argument Not String';
    }
  }
}

export default Player;