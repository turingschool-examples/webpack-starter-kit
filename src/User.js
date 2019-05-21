import domUpdates from './domUpdates';
import Game from './Game';
import Round from './Round';

class User {
  constructor(name, player = 'playerOne') {
    this.name = name;
    this.score = 0;
    this.player = player;
  }

  increaseScore(guess){
    console.log(round)
    if(round.evaluateGuess(guess) === true) {
      this.score += round.survey.answers.find(amount => amount.answer === guess).respondents;
      //DOM update display score
    }
  }

  //DOM update name 

}

export default User;

