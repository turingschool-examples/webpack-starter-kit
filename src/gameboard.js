class Gameboard {
  constructor(categoryPosition, cluePosition, highestPointValue) {
    this.categoryPosition = categoryPosition;
    this.cluePosition = cluePosition;
    this.highestPointValue = highestPointValue;
  };

  appendGameboard() {
    console.log("append gameboard");
    return true;
  };

  appendClue() {

  };

  appendWager() {

  };

  clearGameboard() {
    //Removes gameboard from window to add Q&A, wager, or start screens
  };

}

export default Gameboard;