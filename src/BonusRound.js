import Round from './Round'

class BonusRound extends Round {
  constructor(game) {
    super(game);
    this.setPlayer(game);
    console.log(this.players);
    this.activePlayer = 0;
    this.createNewRound(game);
  }

  setPlayer(game) {
    let allPlayers = game.players.sort((a, b) => {
      return a.score - b.score;
    })
    game.players = []
    game.players.push(allPlayers[2]);
  }
}

export default BonusRound