class Player extends Gameboard {
  constructor(round, points, avatar) {
    super(round, points)
    this.avatar = avatar;
    this.turn = false;
  }
}

export default Player;