import Round from './Round';
import domUpdates from './domUpdates';

class LightningRound extends Round {
  
  constructor(id, survey) {
    super(id, survey);
  }

  submitGuess(player, guess) {
    for (let response of this.responses) {
      if (response.answer.toLowerCase() === guess) {
        player.updateScore(2 * response.respondents);
        this.responses = this.responses.filter(response => {
          return response.answer.toLowerCase() !== guess
        });
        if (this.responses.length === 0) {
          this.isFinished = true;
        }
        domUpdates.revealResponse(response.answer);
        domUpdates.updateScores(player);
        break;
      } else {
        player.updateScore(-25);
      }
    }
  }

}

export default LightningRound;