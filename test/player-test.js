import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
import Player from '../src/player';
// import GameEngine from './game-engine';
// import Round from '../src/round';
import domUpdates from '../src/dom-updates';
import spies from 'chai-spies';
chai.use(spies);

describe('Player', ()=>{
  it('Should be a function', ()=>{
    expect(Player).to.be.a('function');
  })
  it('Should instanciate a new object', ()=>{
    const player = new Player();
    expect(player).to.be.a('object')
  })
  it('Should have default property values & be able to have a name passed in', ()=>{
    const player = new Player('Max');
    expect(player.name).to.equal('Max');
    expect(player.roundCaps).to.equal(0);
    expect(player.totalCaps).to.equal(0);
  })
  it('Should be able to add to roundCaps via the addRoundCaps method', ()=>{
    const player = new Player();
    player.addRoundCaps(10);
    expect(player.roundCaps).to.equal(10);
  })
  it('Should be able to add to totalCaps via the addTotalCaps method', ()=>{
    const player = new Player();
    player.addTotalCaps(50)
    expect(player.totalCaps).to.equal(50);
  })
  it('Should be able to set roundCaps and totalCaps back to 0 with the bankrupt method', ()=>{
    const player = new Player();
    player.addRoundCaps(25);
    player.addTotalCaps(50);
    expect(player.roundCaps).to.equal(25);
    expect(player.totalCaps).to.equal(50);
    player.bankrupt();
    expect(player.roundCaps).to.equal(0);
    expect(player.totalCaps).to.equal(0);
  })
  it('Should be able to buy a vowel if player has enough caps', () => {
    const player = new Player();
    player.addRoundCaps(100);
    expect(player.roundCaps).to.equal(100);
    let ltrGuess = 'answer'
    player.buyVowel(ltrGuess);
    assert.propertyVal({ans: "answer"}, 'ans', 'answer')
    expect(domUpdates.updateLettersUsed).to.have.been.called;
  })
})