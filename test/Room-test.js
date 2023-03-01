import {expect} from 'chai'
import Room from '../src/classes/Room.js';

describe('Room tests', function() {
  it('should be a function', () => {
    expect(Room).to.be.a('function');
  });
});