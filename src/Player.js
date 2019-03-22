class Player {
  constructor(name, num) {
    this.name = name;
    this.score = 0;
    this.playerNum = num;
    this.isTurn = false;
  }

  makeGuess(guess, game, round) {
    if (typeof guess !== 'string') {
      return 'Error: Argument Not String';
    } else if (round.answers.map(a=>a.answer.toUpperCase()).includes(guess.toUpperCase())) {
      this.score += round.answers.find(a => a.answer.toUpperCase() === guess.toUpperCase()).respondents;
    } 
    game.toggleIsTurn();
  }

}

export default Player;