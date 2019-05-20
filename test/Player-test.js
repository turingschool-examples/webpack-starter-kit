import chai from 'chai';
import Player from '../src/Player'
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'displayWords', () => true)

describe('Player', function () {

  let player;

  beforeEach(function () {
    player = new Player(1, 'Aidan')
  })

  it('should be a function', function () {
    expect(Player).to.be.a('function');
  });

  it('should instantiate Player', function () {
    expect(player).to.be.an.instanceOf(Player)
  })

  it('should have an id', function () {
    expect(player.id).to.be.equal(1)
  })

  it('should have a name', function () {
    expect(player.name).to.be.equal('Aidan')
  })

  it('should have a default score of 0', function () {
    expect(player.score).to.equal(0)
  })

  it('should be undefined by default', function () {
    expect(player.guess).to.equal()
  })

  it('should be able to make a guess', function () {
    let player = new Player(1, 'Patrick', 'hello');
    expect(player.guess).to.equal('hello')
  })


});