import data from './data.js';
import domUpdates from './domUpdates.js';
import Player from './player.js';

class Gameboard {
  constructor(round, categoryList, firstRoundCategories, secondRoundCategories) {
    this.round = round || 1;
    this.categoryList = Object.keys(data.categories);
    this.cluesWithCategories = [];
    this.roundClues = [];
    // this.secondRoundClues = [];
    this.finalRoundClue = [];
    this.firstRoundCategories = [];
    this.secondRoundCategories = [];
    this.finalRoundCategory = [];
    this.playersArray = [];
    this.activePlayer = 0;
    this.turnCount = 0;
  };


  startGame() {
    console.log("You've started the game!");
    this.collectClues();
    this.assignCategories();
  };

  createPlayers(game, $playerName1, $playerName2, $playerName3) {
    let player1 = new Player($playerName1, 0, 0, 1, true);
    let player2 = new Player($playerName2, 0, 0, 2, false);
    let player3 = new Player($playerName3, 0, 0, 3, false);
    game.playersArray.push(player1);
    game.playersArray.push(player2);
    game.playersArray.push(player3);
    domUpdates.changePlayerNames(game)
    console.log('game ', game);
  }

  collectClues() {
    let allClues = data.clues;
    this.cluesWithCategories = allClues.map( clue => {
      clue.categoryName = this.categoryList[clue.categoryId - 1];
      return clue;
      });
  };

  assignCategories() {    
    function randomize(array) {
      return array.sort(() => 0.5 - Math.random());
    };

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
    console.log("gameboard 10", category10GameClues)


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
    console.log("gameboard 9", category9GameClues)


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
    console.log("gameboard 8", category8GameClues)


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
    console.log("gameboard 7", category7GameClues);


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
    console.log("gameboard 6", category6GameClues)


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
    console.log("gameboard 5", category5GameClues)



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
    console.log("gameboard 4", category4GameClues)


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
    console.log("gameboard 3", category3GameClues)

    this.roundClues = this.roundClues.flat();
    console.log(this.roundClues);

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
    console.log("gameboard 2", category2GameClues)

    this.finalRoundClue = this.finalRoundClue.flat();
    console.log(this.finalRoundClue);

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
    console.log("gameboard 1", category1GameClues)

    this.firstRoundCategories = [this.roundClues[0].categoryName, this.roundClues[4].categoryName, this.roundClues[8].categoryName, this.roundClues[12].categoryName]
    console.log(this.firstRoundCategories);
    domUpdates.labelCategories([this.firstRoundCategories], [this.secondRoundCategories]);
  //create an of the categories for each round with 4 questions for each round
  };

  // createPlayers(playerNames) {
    
  // };

  changePlayerTurn() {
    // this.activePlayer = 0;
    console.log('this player ', this.playersArray[this.activePlayer].name)
    console.log('this player ', this.playersArray[this.activePlayer].score)
    
    switch (this.activePlayer) {
      case 0:
        console.log('Im player one');
        // player1.active = false;
        // player2.active = true;
        this.activePlayer = 1;
        break;
      case 1:
        console.log('im player two');
        // player2.active = false;
        // player3.active = true;
        this.activePlayer = 2;
        break;
      case 2:
        console.log('im player 3');
        // player3.active = false;
        // player1.active = true;
        this.activePlayer = 0;
        break;
    }
    console.log("switched active player");
  }

  appendWager() {
    //
  };

  doublePoints() {
    //when we enter round 2, each box should display and be worth double points
  };

  finishGame() {

  };

  exitGame() {

  };

  
};



export default Gameboard;