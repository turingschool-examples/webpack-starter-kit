import Player from '../src/Player.js';
import chai from 'chai';

const expect = chai.expect

describe('Player', function(){

  it('should have default player properties', function() {
    let player = new Player();
     expect(player.name).to.equal(undefined);
     expect(player.active).to.equal(false);
     expect(player.roundScore).to.equal(0);
     expect(player.totalScore).to.equal(0);
     expect(player.playerNumbner).to.equal(undefined)
  })

  it('should instantiate a new player', function(){
    let player = new Player('adam', true, 2, 200, 400);
     expect(player.name).to.equal('adam');
     expect(player.active).to.equal(true);
     expect(player.roundScore).to.equal(200);
     expect(player.totalScore).to.equal(400);
     expect(player.playerNumber).to.equal(2)
  })

})