class Gameboard {
  constructor(round, players, activeRound, activePlayer, cluesRemaining, clues) {
    this.rounds = [];
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = false;
    this.cluesRemaining = 16;
    this.clues = [];
  }

  hidePopup() {
    $(".start--button").click(function(e) {
      $(".overlay").remove();
      $('.start-up').remove();
    });
  }

  showQuestionPopup() {
    $('.col').click(function(e) {
      $('.question-container').css('visibility', 'visible')
    });
  }

  startGame() {
    const gameArr = shuffle(Object.keys(data.categories));
    let round1 = gameArr.splice(0, 4);
    let round2 = gameArr.splice(0, 4);
    let round3 = gameArr.splice(0, 1);

    // for (let i = 0; i > gameArr.length; i++) {
    //   if (data.clues.categoryId[i] === )
    // }

    // shuffle indexes of category array 
    // shuffle the questions within each category
    // splice the array
    // populate the categories on page
    // populate the questions on page

  }

  changeRound() {
    if (this.cluesRemaining === 0) {
      this.activeRound++;
    }
  }
  
  startGame() {
    // push player names into players array
    this.players.length === 3;
  }

  changeTurn(players) {
    // increment turn
    // reset index of player, if on p3, reset to p1
    // on round end, reset active player. if p3, reset to p1
  }

  shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
}

export default Gameboard;