import Player from "./Player";

class Round {

  constructor(id, survey) {
    this.id = id;
    this.question = survey.question;
    this.responses = survey.responses;
    this.isFinished = false;
  }

  submitGuess(player, guess) {
    this.responses.forEach((response) => {
      if (guess.toLowerCase() === response.answer.toLowerCase()) {
        player.updateScore(response.respondents);
        // domUpdates.updateScore(player)
        // domUpdates.revealAnswer(response);
        // check if all answers have been guessed
          // end round
        // else keep playing
        return;
      }
    });
  }

}

export default Round;