import Round from './Round'

class BonusRound extends Round {
  constructor(game) {
    super(game);
    this.createNewRound(game);
    this.setPlayer(game);
  }

  setPlayer(game) {
    let allPlayers = game.players.sort((a, b) => {
      return a.score - b.score;
  })
    this.activePlayer = allPlayers.pop();
  }
}

export default BonusRound