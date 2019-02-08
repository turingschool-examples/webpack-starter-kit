import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round'
import GameBoard from '../src/GameBoard'
import Question from '../src/Question';
import data from '../src/data'

describe('Round', function() {

  it('should be an instance of round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round)
  });

  it('should have default properties', () => {
    const round = new Round();
    expect(round.catNames).to.deep.equal([]);
    expect(round.catIds).to.deep.equal([]);
    expect(round.clues).to.deep.equal([]);
  });

  it('should have 16 questions', () => {
    const game = new GameBoard();
    const arr = game.players;

    game.shuffle(arr);
    game.instRound();

    expect(game.roundOne.clues.length).to.equal(16);
  })

  it('should have one Daily Double for Round 1', function() {
    const game = new GameBoard();
    const arr = game.players;

    game.shuffle(arr);
    game.instRound();
    
    let dd = game.roundOne.clues.find((clue) => clue.hasOwnProperty('dailyDouble'))
    expect(dd.dailyDouble).to.equal(true)
  });
  
  it('should have two daily doubles for round 2', () => {
    const game = new GameBoard();
    const round = new Round();
    // const arr = game.players;
    
    // game.shuffle(arr);
    // round.startRound();
    
    game.instRound();
    
    let arr2 = game.roundTwo.clues.filter((clue) => clue.hasOwnProperty('dailyDouble'))


    expect(arr2[0].dailyDouble).to.equal(true);
    expect(arr2[1].dailyDouble).to.equal(true);
  });

})