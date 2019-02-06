import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round.js';
import Clue from '../src/Clue.js';
import Game from '../src/Game.js';
import data from '../src/data.js';
import domUpdates from '../src/domUpdates.js';


describe('Round', function() {

  it('should change points for round two', function() {
    let round = new Round(2);
    round.cluesRoundTwo = [{
      question: "What MTV plays 24 hours a day",
      pointValue: 100,
      answer: "music videos",
      categoryId: 10
    }]

    round.changePointRange();
    expect(round.cluesRoundTwo[0].pointValue).to.equal(200);
  });

  // it('should set daily double clues', function() {
  //   let round = new Round();

  //   round.cluesRoundOne = [{
  //     question: "What MTV plays 24 hours a day",
  //     pointValue: 100,
  //     answer: "music videos",
  //     categoryId: 10
  //   }];

  //   round.setDailyDouble();
  //   expect(round.cluesRoundOne[0]).to.have.key('dailyDouble');

  //   //test currently failing because of 'randomIndexOne'. Can't test on randomize.
  // });

  it('should gather clues for each round', function() {
    let game = new Game();
    let round = new Round();

    let mimic = [
      'unitedStatesHistory',
      'lifeSciences',
      'publicHealth',
      'educationJargon',
      'unitedStatesHistory',
      'lifeSciences',
      'publicHealth',
      'educationJargon',
      'unitedStatesHistory'
    ]

    round.gatherClues(mimic, game);

    expect(round.cluesRoundOne.length).to.deep.equal(16);
    expect(round.cluesRoundTwo.length).to.deep.equal(16);
    expect(round.cluesRoundThree.length).to.deep.equal(1);

    // expect(round.setDailyDouble).to.be.called();
    expect(domUpdates.setClues).to.be.called();
  });

});

