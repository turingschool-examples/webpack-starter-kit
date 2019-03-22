class Player {
  constructor(name) {
    this.name = name;
    this.roundCaps = 0;
    this.totalCaps = 0;
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
}

export default Player;