class Gameboard {
  constructor(round, players, activeRound, activePlayer, cluesRemaining, clues) {
    this.rounds = [];
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = 1;
    this.cluesRemaining = 16;
    this.clues = [];
  }

  hidePopup() {
    $(".start--button").click(function(e) {
      $(".overlay").toggle();
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
    /////////////////////////////////////////////////
//     let round1 = gameArr.splice(0, 4);
//     let round2 = gameArr.splice(0, 4);
//     let round3 = gameArr.splice(0, 1);
    // for (let i = 0; i > gameArr.length; i++) {
    //   if (data.clues.categoryId[i] === data.categories);
    // }
    ////////////////////////////////////////////////
    if (this.roundId === 1) {
      this.catIds = gameArr.splice(0, 4);
    } else if (this.roundId === 2) {
      this.catIds = gameArr.splice(0, 4);
    } else {
      this.catIds = gameArr.splice(0, 1);
    }  
    this.catIds.forEach(catId => {
      const catClues = data.clues.filter(clue => {
        return clue.categoryId === catId;
      })
      shuffle(catClues);
      for (let i = 1; i <= 4; i++) {
        this.questions.push(catClues.find(clue => {
          return clue.pointValue === 100 * i;
        }));
      }
    });
  }

  changeRound() {
    this.activeRound++;
  }
  
  startGame() {
    // push player names into players array
    this.players.length === 3;
  }

  changeTurn(players) {
    this.activePlayer++;
    if (this.activePlayer === players.length) {
      this.activePlayer = 0;
    }
    return players(this.activePlayer)
    // increment turn
    // reset index of player, if on p3, reset to p1
    // on round end, reset active player. if p3, reset to p1
  }

  shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
}

export default Gameboard;