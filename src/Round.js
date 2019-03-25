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
    switch (round) {
      case 1:
        return players[0];
      case 2:
        return players[1];
      case 3:
        return players[0].score <= players[1].score ? players[0] : players[1]
      default:
      console.log('round: ', round);
        return; // ? return opposite of case 3 how?
    }
  }

}

export default Round;