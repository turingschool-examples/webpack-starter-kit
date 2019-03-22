import Player from "./Player";

class Round {

  constructor(id, survey) {
    this.id = id;
    this.question = survey.question;
    this.responses = survey.responses;
    this.isFinished = false;
    // this.correctGuesses = [];
  }

  submitGuess(player, guess) {
    for (let response of this.responses) {
      if (response.answer.toLowerCase() === guess) {
        player.updateScore(response.respondents);
        this.responses = this.responses.filter(response => {
          return response.answer.toLowerCase() !== guess
        });
        // this.correctGuesses.push(response);
        // domUpdates.updateScore(player)
        // domUpdates.revealAnswer(response);
        // TODO create game over screen
        if (this.responses.length === 0) {
          this.isFinished = true;
        }
        break;
      } 
    }
  }

}

export default Round;