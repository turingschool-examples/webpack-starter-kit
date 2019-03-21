import Player from "./Player";

class Round {

  constructor(id, survey) {
    this.id = id;
    this.question = survey.question;
    this.responses = survey.responses;
  }

  submitGuess(player, guess) {
    this.responses.forEach((response) => {
      if (guess.toLowerCase() === response.answer.toLowerCase()) {
        player.updateScore(response.respondents);
        // domUpdates.updateScore(player)
        // domUpdates.revealAnswer(response);
        return;
      }
    });
  }

}

export default Round;