import DomUpdates from './dom-updates';

class Player {
  constructor(name, playerNum) {
    this.name = name,
    this.playerNum = playerNum,
    this.roundCaps = 0,
    this.totalCaps = 0
  }
  addRoundCaps(caps) {
    this.roundCaps += caps;
  }
  addTotalCaps(caps) {
    this.totalCaps += caps;
  }
  bankrupt() {
    this.roundCaps = 0;
    this.totalCaps = 0;
  }
  buyVowel(game, round, player, ltrGuess, vowels) {
    if (player.roundCaps < 100) {
      alert('Insufficient Funds!');
    } else {
      player.roundCaps -= 100;
      player.ans = ltrGuess.toUpperCase();
      round.answer = round.answer.filter(item => item !== `'` && item !== `-` && item !== `&`)
      round.conditionalChecking(game, ltrGuess, vowels);
      DomUpdates.updateLettersUsed(game);
    }
  }
  guessLtr() {
    
  }
}

export default Player;