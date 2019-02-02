import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js'

it('should instantiate a new player', function() {
  let player = new Player()
  expect(player).to.be.an('object');
});