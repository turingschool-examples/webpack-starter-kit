import chai from 'chai';
const expect = chai.expect;

describe('Players', function() {
  it('Player name should equal GameBoard.players[i]', function() {
    const player1 = new Player();
    player1.getName();
    expect(player.name).to.deep.equal(NAME)
  })

});