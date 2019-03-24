import Round from './Round';

class LightningRound extends Round {
  
  constructor(id, surveys, multiplier) {
    super(id);
    this.question = [surveys[0].question, surveys[1].question];
    this.responses = [surveys[0].responses, surveys[1].responses];
    this.multiplier = multiplier;
  }

  submitGuess(player, guess, game) {
    for (let response of this.responses) {
      if (response.answer.toLowerCase() === guess) {
        player.updateScore(response.respondents);
        this.responses = this.responses.filter(response => {
          return response.answer.toLowerCase() !== guess
        });
        if (this.responses.length === 0) {
          this.isFinished = true;
        }
        domUpdates.revealResponse(response.answer);
        domUpdates.updateScores(player);
        break;
      } else if (this.responses.indexOf(response) === this.responses.length - 1) {
        game.switchPlayers();
      }
    }
  }

}

export default LightningRound;