import data from './data.js';
import domUpdates from './domUpdates.js';
import Player from './player.js';
import Clue from './clue.js';
import Dailydouble from './dailyDouble.js';
import $ from 'jquery';

class Gameboard {
  constructor(round, categoryList) {
    this.round = round || 1;
    this.categoryList = Object.keys(data.categories);
    this.cluesWithCategories = [];
    this.roundClues = [];
    this.finalRoundClue = [];
    this.roundCategories = [];
    this.finalRoundCategory = [];
    this.playersArray = [];
    this.activePlayer = 0;
    this.turnCount = 0;
    this.doubleCount = [];
  }

  updateScore(answer, score) {
    let activePlayer = this.playersArray[this.activePlayer];
    if (answer === "correct") {
      activePlayer.score += score;
    } else {
      activePlayer.score -= score;
    }
    domUpdates.updatePlayerScore(this.activePlayer, activePlayer.score);
    this.turnCount++;
    this.checkTurnCount();
  }

  checkTurnCount() {
    if (this.turnCount === 3 && this.round === 1) {
      this.round++;
      this.changeRound2();
    } else if (this.turnCount === 3 && this.round === 2) {
      this.round++;
      this.finalJeopardy();
    } else {
      this.changePlayerTurn();
    }
  }

  finalJeopardy() {
    domUpdates.disableAllClues();
    domUpdates.removeCategories();
    this.turnCount = 0;
    this.changePlayerTurn()
    let clue = new Clue();
    let selectedClue = this.finalRoundClue[3];
    let dailydouble = new Dailydouble;
    $('.wager-head').text('Final Jeopardy!');
    dailydouble.giveDouble(selectedClue);
    clue.showClue(selectedClue);
    currentClue = selectedClue;
    domUpdates.populateClueCard(selectedClue);
  }

  startGame() {
    let dailydouble = new Dailydouble;
    let DD1 = dailydouble.doubleCountGenerator();
    this.doubleCount.push(DD1);
    this.collectClues();
    this.assignCategories();
    this.calculateWager();
    domUpdates.activePlayerHighlight(this.activePlayer);
  }

  createPlayers(game, playerName1, playerName2, playerName3) {
    let player1 = new Player(playerName1, 0, 0, 1, true);
    let player2 = new Player(playerName2, 0, 0, 2, false);
    let player3 = new Player(playerName3, 0, 0, 3, false);
    game.playersArray.push(player1);
    game.playersArray.push(player2);
    game.playersArray.push(player3);
    domUpdates.changePlayerNames(game)
  }

  collectClues() {
    let allClues = data.clues;
    this.cluesWithCategories = allClues.map( clue => {
      clue.categoryName = this.categoryList[clue.categoryId - 1];
      return clue;
    });
  }

  selectCorrectClue(e) {
    let clue = new Clue();
    let selectedClueLocation = e.target.id;
    let selectedClue = this.roundClues[selectedClueLocation];
    if (e.target.className.includes('available-box')) {
      if (this.doubleCount[0] === this.turnCount || 
        this.doubleCount[1] === this.turnCount) {
        let dailydouble = new Dailydouble;
        dailydouble.giveDouble(selectedClue);
      }
      clue.showClue(selectedClue);
      currentClue = selectedClue;
      currentLocation = selectedClueLocation;
    }
    if (e.target.className.includes('wager-btn')) {
      let $wagerAmount = $('#wagerInput').val();
      currentClue.pointValue = $wagerAmount;
      domUpdates.reassignPointValue($wagerAmount);
      domUpdates.removeWagerCard();
    }
    if (e.target.className.includes('answer-btn')) {
      let $playerAnswer = $('#playerAnswer').val();
      domUpdates.disableClue(currentLocation);
      clue.checkAnswer(this, currentClue, $playerAnswer);
    }
  }

  selectFinalJeopardy(e) {
    let clue = new Clue();
    let selectedClue = this.finalRoundClue[2];
    let dailydouble = new Dailydouble;
    $('.wager-head').text('Final Jeopardy!')
    dailydouble.giveDouble(selectedClue);
    clue.showClue(selectedClue);
    currentClue = selectedClue;
    domUpdates.populateClueCard(selectedClue);
    if (e.target.className.includes('answer-btn')) {
      let $playerAnswer = $('#playerAnswer').val();
      clue.checkAnswer(this, currentClue, $playerAnswer);
    }
    if (e.target.className.includes('wager-btn')) {
      let $wagerAmount = $('#wagerInput').val();
      currentClue.pointValue = $wagerAmount;
      domUpdates.reassignPointValue($wagerAmount);
      domUpdates.removeWagerCard();
    }
    if (this.turnCount === 3 ) {
    }
  }


  assignCategories() {    
    function randomize(array) {
      return array.sort(() => 0.5 - Math.random());
    }

    let category10Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 10
    });
    randomize(category10Clues);
    let clues10 = category10Clues;
    let category10GameClues = []
    let point10100 = clues10.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point10200 = clues10.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point10300 = clues10.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point10400 = clues10.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category10GameClues.push(point10100, point10200, point10300, point10400)
    this.roundClues.push(category10GameClues);

    let category9Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 9
    });
    randomize(category9Clues);
    let clues9 = category9Clues;
    let category9GameClues = []
    let point9100 = clues9.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point9200 = clues9.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point9300 = clues9.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point9400 = clues9.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category9GameClues.push(point9100, point9200, point9300, point9400)
    this.roundClues.push(category9GameClues);

    let category8Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 8
    });
    randomize(category8Clues);
    let clues8 = category8Clues;
    let category8GameClues = []
    let point8100 = clues8.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point8200 = clues8.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point8300 = clues8.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point8400 = clues8.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category8GameClues.push(point8100, point8200, point8300, point8400)
    this.roundClues.push(category8GameClues);

    let category7Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 7
    });
    randomize(category7Clues);
    let clues7 = category7Clues;
    let category7GameClues = []
    let point7100 = clues7.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point7200 = clues7.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point7300 = clues7.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point7400 = clues7.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category7GameClues.push(point7100, point7200, point7300, point7400);
    this.roundClues.push(category7GameClues);

    let category6Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 6
    });
    randomize(category6Clues);
    let clues6 = category6Clues;
    let category6GameClues = []
    let point6100 = clues6.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point6200 = clues6.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point6300 = clues6.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point6400 = clues6.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category6GameClues.push(point6100, point6200, point6300, point6400);
    this.roundClues.push(category6GameClues);

    let category5Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 5
    });
    randomize(category5Clues);
    let clues5 = category5Clues;
    let category5GameClues = []
    let point5100 = clues5.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point5200 = clues5.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point5300 = clues5.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point5400 = clues5.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category5GameClues.push(point5100, point5200, point5300, point5400);
    this.roundClues.push(category5GameClues);


    let category4Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 4
    });
    randomize(category4Clues);
    let clues4 = category4Clues;
    let category4GameClues = []
    let point4100 = clues4.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point4200 = clues4.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point4300 = clues4.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point4400 = clues4.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category4GameClues.push(point4100, point4200, point4300, point4400);
    this.roundClues.push(category4GameClues);


    let category3Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 3
    });
    randomize(category3Clues);
    let clues3 = category3Clues;
    let category3GameClues = []
    let point3100 = clues3.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point3200 = clues3.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point3300 = clues3.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point3400 = clues3.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category3GameClues.push(point3100, point3200, point3300, point3400)
    this.roundClues.push(category3GameClues);

    this.roundClues = this.roundClues.flat();

    let category2Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 2
    });
    randomize(category2Clues);
    let clues2 = category2Clues;
    let category2GameClues = []
    let point2100 = clues2.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point2200 = clues2.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point2300 = clues2.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point2400 = clues2.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category2GameClues.push(point2100, point2200, point2300, point2400);
    this.finalRoundClue.push(category2GameClues);

    this.finalRoundClue = this.finalRoundClue.flat();

    let category1Clues = this.cluesWithCategories.filter(clue => {
      return clue.categoryId === 1
    });
    randomize(category1Clues);
    let clues1 = category1Clues;
    let category1GameClues = []
    let point1100 = clues1.filter(clue => {
      return clue.pointValue === 100
    }).shift()
    let point1200 = clues1.filter(clue => {
      return clue.pointValue === 200
    }).shift()
    let point1300 = clues1.filter(clue => {
      return clue.pointValue === 300
    }).shift()
    let point1400 = clues1.filter(clue => {
      return clue.pointValue === 400
    }).shift()
    category1GameClues.push(point1100, point1200, point1300, point1400)

    this.roundCategories = [this.roundClues[0].categoryName,
      this.roundClues[4].categoryName,
      this.roundClues[8].categoryName,
      this.roundClues[12].categoryName]
    domUpdates.labelCategories([this.roundCategories]);
  }

  changePlayerTurn() {
    switch (this.activePlayer) {
    case 0:
      domUpdates.deactivatePlayerHighlight(this.activePlayer);
      this.activePlayer = 1;
      domUpdates.activePlayerHighlight(this.activePlayer);
      break;
    case 1:
      domUpdates.deactivatePlayerHighlight(this.activePlayer);
      this.activePlayer = 2;
      domUpdates.activePlayerHighlight(this.activePlayer);
      break;
    case 2:
      domUpdates.deactivatePlayerHighlight(this.activePlayer);
      this.activePlayer = 0;
      domUpdates.activePlayerHighlight(this.activePlayer);
      break;
    default:
    }
  }

  changeRound2() {
    this.doubleCount.pop();
    let dailydouble = new Dailydouble;
    let DD1 = dailydouble.doubleCountGenerator();
    let DD2 = dailydouble.doubleCountGenerator();
    this.doubleCount.push(DD1);
    this.doubleCount.push(DD2);
    this.roundClues.splice(0, 16);
    this.roundClues.forEach((clue) => {
      clue.pointValue = clue.pointValue * 2;
    });
    domUpdates.setClueBoxPoints();
    this.roundCategories = [this.roundClues[0].categoryName, 
      this.roundClues[4].categoryName, 
      this.roundClues[8].categoryName, 
      this.roundClues[12].categoryName];
    domUpdates.labelCategories([this.roundCategories]);
    domUpdates.repopulateClues();
    this.turnCount = 0
    this.changePlayerTurn();
  }

  calculateWager() {
    let highestPointValue = 400;
    if (this.round === 2) {
      highestPointValue = 800
    } else if (this.round === 3) {
      highestPointValue = this.activePlayer.score
    }
    let wagerMin = 5;
    let wagerMax = highestPointValue;
  }

  finishGame() {
    //display winner popup
    //have reset game button
    //calculate winner using this.playersArray
    // console.log("PLAYERS ARRAY", this.playersArray);
    // let winner = winner;
    // let winnerList = this.playersArray[score].reduce((acc, currPlayer) {
      
    //   return acc;
    // });
    // console.log("WINNER", winnerList)
  }

  
}

let currentClue = {};
let currentLocation = 0;

export default Gameboard;