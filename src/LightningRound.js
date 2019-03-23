import Round from './Round.js';

class LightningRound extends Round {
  constructor(id, question, multiplier) {
    super(id, question);
    this.multiplier = multiplier;
    // check score, lowest score is player to pick
    // pop up on DOM with input
    // 
    // switch player if: all three answers are solved
    //         else: 30 seconds timer runs out
    // switchPlayer()
    // game.declareWinner()

  };

};

export default LightningRound;