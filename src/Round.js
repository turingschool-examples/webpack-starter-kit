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

  // TODO: move to game class?
  setPlayer(round, players) {
    // TODO how to do opposite of case 3'
    const p2Winning = players[0].score <= players[1].score
    switch (round) {
      case 1:
        return players[0];
      case 2:
        return players[1];
      case 3:
        return p2Winning ? players[0] : players[1];
      case 4:
        return !p2Winning ? players[1] : players[0];
      default:
        break;
    }
  }

}

export default Round;