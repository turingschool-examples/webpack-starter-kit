class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    increaseScore(points, multiplier = 1) {
      this.score += points * multiplier;
    }

}

export default Player;