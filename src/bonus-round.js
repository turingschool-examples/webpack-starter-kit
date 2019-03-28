import Round from './round';
import domUpdates from './dom-updates';
class BonusRound extends Round {
  constructor(currentRound) {
    super(currentRound)
    this.prizes = ['BB_gun', 'Fat_Man', 'laser_rifle', 'lunchbox',
      'Mister_Handy', 'nightwear', 'power_armor', 'RadAway', 'radiation_suit',
      'stimpak', 'teddy_bear'],
    this.currentPrize = this.pullPrize()
  }
  trimPuzzle() {

  }
  playerTrimPuzzle() {

  }
  bonusGuess() {

  }
  pullPrize() {
    let prize = this.prizes[Math.floor((Math.random() * 10) + 0)];
    domUpdates.displayPrize(prize);
    return prize;
  }
}

export default BonusRound;