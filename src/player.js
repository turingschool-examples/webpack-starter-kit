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

  spinWheel(game, random) {
    DomUpdates.toggleButtons();
    const slice = game.currentRound.currWheel.wheelSlices[random];
    DomUpdates.appendWheelValue(slice);
    typeof slice === "number" ? this.spinNum(game, slice) 
      : this.spinNotNum(game, slice);
  }

  spinNum(game, slice) {
    game.currentRound.currentPlayer.roundCaps += slice;
    DomUpdates.updatePlayerScore(game);
  }

  spinNotNum(game, slice) {
    if (slice === 'BANKRUPT') {
      game.currentRound.currentPlayer.roundCaps = 0;
      game.currentRound.currentPlayer.totalCaps = 0;
      DomUpdates.appendBankrupt(game);
      DomUpdates.updatePlayerScore(game);
    } else {
      DomUpdates.appendLoseTurn(game);
    }
    game.currentRound.getCurrentPlayer(game);
    DomUpdates.toggleButtons(game);
  }

  buyVowel(game, round, player, ltrGuess, vowels) {
    if (player.roundCaps < 100) {
      alert('Insufficient Funds!');
    } else {
      player.roundCaps -= 100;
      player.ans = ltrGuess.toUpperCase();
      round.answer = round.answer
        .filter(item => item !== `'` && item !== `-` && item !== `&`)
      round.conditionalChecking(game, ltrGuess, vowels);
      DomUpdates.updateLettersUsed(game);
    }
  }

  guessWord(game, guess, alphabet) {
    guess = guess.map(letter => letter.toUpperCase());
    guess = guess.filter(letter => alphabet.includes(letter));
    DomUpdates.updatePlayerScore(game);
    game.currentRound.wholeWord = game.currentRound.wholeWord
      .filter(letter => alphabet.includes(letter))
    if (game.currentRound.wholeWord.join('') === guess.join('')) {
      DomUpdates.appendWinner(game);
      game.currentRound.newRound(game);
    } else {
      game.currentRound.getCurrentPlayer(game);
    }
  }
}

export default Player;