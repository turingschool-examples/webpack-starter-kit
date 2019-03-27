import Round from './Round';
import domUpdates from './domUpdates';

class LightningRound extends Round {
  
  constructor(id, survey) {
    super(id, survey);
  }

  submitGuess(player, guess) {
    for (let response of this.responses) {
      if (response.answer.toLowerCase() === guess) {
        player.updateScore(1.5 * response.respondents);
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
        player.updateScore(-20);
      }
    }
  }

}

export default LightningRound;