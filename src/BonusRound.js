import Round from './Round'

class BonusRound extends Round {
  constructor(game) {
    super(game);
    this.createNewRound(game);
    this.setPlayer(game);
    this.winner = this.setPlayer(game);
    this.players = this.winner;
    this.test = console.log(this.players);
  }

  setPlayer(game) {
    let allPlayers = game.players.sort((a, b) => {
      return a.score - b.score;
  })
    this.activePlayer = allPlayers.pop();
    return this.activePlayer;
  }
}

export default BonusRound