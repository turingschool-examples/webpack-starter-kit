import domUpdates from "./domUpdates";
// import Player from './Players.js'

class Gameboard {
  constructor(players, activeRound, activePlayer, cluesRemaining, clues, catNames) {
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = 1;
    this.cluesRemaining = 16;
    this.clues = [];
    this.catNames = [];
  }

  createPlayers() {
    // let names = domUpdates.getNames();
    // let player1 = new Player(names[0])
    // let player2 = new Player(names[1])
    // let player3 = new Player(names[2])
    this.players = [player1, player2, player3]
  }

  hidePopup() {
    $(".start--button").click(function() {
      $(".overlay").remove();
      $('.start-up').remove();
    });
  }

  showQuestionPopup() {
    $('.col').click(function() {
      $('.question-container').css('visibility', 'visible')
    });
  }

  startGame() {
    domUpdates.displayNames();
    createPlayers();
    const gameArr = shuffle(Object.keys(data.categories));
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
        this.clues.push(catClues.find(clue => {
          return clue.pointValue === 100 * i;
        }));
      }
    });
  }

  getCatNames() {
    this.catNames = this.catIds.map(catId => {
    return this.catNames.find((name, index) => index === catId -1);
    })
  }

  changeRound() {
    this.activeRound++;
  }
  
  namePlayers() {
    // push player names into players array
    this.players.push($("$p1-name-js"), $("p2-name-js"), $("p3-name-js"))
  }

  changeTurn(players) {
    this.activePlayer++;
    if (this.activePlayer === this.players.length) {
      this.activePlayer = 0;
    }
    return players[this.activePlayer]
    // increment turn
    // reset index of player, if on p3, reset to p1
    // on round end, reset active player. if p3, reset to p1
  }

  shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }
}

export default Gameboard;