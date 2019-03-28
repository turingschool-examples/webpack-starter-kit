import chai from 'chai';
const expect = chai.expect;
import BonusRound from '../src/bonus-round';
import Round from '../src/round';
import GameEngine from '../src/game-engine';
// import Puzzle from '../src/puzzle.js'

import spies from 'chai-spies';
chai.use(spies);

describe('BonusRound', ()=>{
  it('Should be a function', ()=>{
    expect(BonusRound).to.be.a('function');
  })
  it('Should instanciate a new instance of BonusRound', ()=>{
    let game = new GameEngine();
    game.bonusRound()
    const bonus =  new BonusRound(5);
    expect(bonus).to.be.an.instanceof(BonusRound);
  })
  it('Should have default properties of prizes', () => {
    const bonus = new BonusRound(5);
    expect(bonus.prizes).to.have.lengthOf(11)
  })
  it('Should "randomly" select 1 prize', () => {
    const bonus = new BonusRound(5);
    bonus.prizes = ["test_armor"];
    expect(bonus.prize).to.have.property('prize', "test_armor");
  })
})
export default BonusRound;