import domUpdates from "./domUpdates";

class Round {

  constructor(survey) {
    this.question = survey.question;
    this.responses = survey.responses;
    this.isFinished = false;
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

export default Round;