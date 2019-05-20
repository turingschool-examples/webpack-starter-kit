import data from "../data";
import Round from "../src/Round";
import Player from '../src/Player'
import domUpdates from './domUpdates';

class Turn {
  constructor(round) {
    this.answers = (this.findAnswers(round));
  }

  findAnswers (round) {
    let answers = [... data.answers]
    let filteredAnswers = answers.filter(steve => steve.surveyId === round.surveys[0].id)
    let sortedAnswers = filteredAnswers.sort((a, b)=> b.respondents - a.respondents)
    return sortedAnswers
  }

  checkGuess(player) {  
    let guessed = this.answers.map(steve => steve.answer).indexOf(player.guess)
    return guessed === -1 
      ? this.switchPlayer(player)
      : this.increaseScore(player, this.answers[guessed]);
  }
  
  increaseScore (player, answer) {
    player.score += answer.respondents
    // console.log(answer)
  }

  switchPlayer() {

  }
}

export default Turn;