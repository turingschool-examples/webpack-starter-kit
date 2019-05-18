import chai from 'chai';
import Player from '../src/Player'
const expect = chai.expect;

describe('Player', function () {

  let player;

  beforeEach(function () {
    player = new Player()
  })

  it('should be a function', function () {
    expect(Player).to.be.a('function');
  });

  it('should instantiate Player', function () {
    expect(player).to.be.an.instanceOf(Player)
  })

});