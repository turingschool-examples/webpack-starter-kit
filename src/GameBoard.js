import data from "./data"
import $ from 'jquery';
import jQuery from 'jquery'
window.$ = jQuery;
class Gameboard {
  constructor(players, activeRound, activePlayer, cluesRemaining, clues, catNames) {
    this.players = [];
    this.activeRound = 1;
    this.activePlayer = 1;
    this.cluesRemaining = 16;
    this.clues = [];
    this.catNames = [];
  }

  hidePopup() {
    $(".start--button").click(function() {
      $(".overlay").toggle();
      $('.start-up').remove();
    });
  }

  showQuestionPopup() {
    $('.col').click(function() {
      $('.question-container').css('visibility', 'visible')
    });
  }

  startGame() {
    const gameArr = this.shuffle(Object.keys(data.categories));
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
      this.shuffle(catClues);
      for (let i = 1; i <= 4; i++) {
        this.clues.push(catClues.find(clue => {
          return clue.pointValue === 100 * i;
        }));
      }
    });
  }

  getCatNames() {
    this.catNames = this.catIds.map(catId => {
    return this.catNames.find((name, index) => index === catId - 1);
  })
  }

  //for each category value we can use object.keys at the index lower to grab the key that is associated with it

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