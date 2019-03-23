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
  guessConsonant() {
    
  }
}

export default Player;