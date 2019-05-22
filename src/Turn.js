import data from "../data";
import Round from "../src/Round";
import Player from '../src/Player';
import Game from '../src/Game';
import domUpdates from './domUpdates';

class Turn {
  constructor(round) {
    this.answers = (this.findAnswers(round));
    this.currentPlayer = 1;
  }

  findAnswers (round) {
    let answers = [... data.answers]
    let filteredAnswers = answers.filter(steve => steve.surveyId === round.surveys[0].id)
    let sortedAnswers = filteredAnswers.sort((a, b)=> b.respondents - a.respondents)
    return sortedAnswers
  }

  checkGuess(player) {  
    let guessed = this.answers.map(steve => steve.answer).indexOf(player.guess)
    guessed === -1
      ? this.switchPlayer(player)
      : this.increaseScore(player, this.answers[guessed], guessed);

    // this.round.turn.changeRound()
  }
  
  increaseScore (player, answer, index) {
    player.score += answer.respondents
    this.answers.splice(index, 1)
    domUpdates.increaseScore(player.id, player.score)
  }

  switchPlayer() {
    // console.log('switch player', player)
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2
    } else {
      this.currentPlayer = 1
    }
    domUpdates.switchPlayer()
  }

}

export default Turn;