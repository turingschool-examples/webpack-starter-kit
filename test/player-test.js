// import chai from 'chai';
// const expect = chai.expect;

// import Player from '../src/Player.js'

// describe ('Player', function() {
//   it('should have an instance of Player', function() {
//     let player = new Player('Carl');

//    expect(player.this).to.equal('Carl') 
//   })
// })

// describe('Box', function () {
//   it('Box should have default height and width of 100.', function () {
//     let box = new Box;
//     }
//   {}

import chai from 'chai';
const expect = chai.expect;

// import spies from 'chai-spies';
// chai.use(spies);

// import domUpates from '../src/domUpdates.js'
// chai.spy.on(domUpdates, 'displayHeight', () => true);

import Player from '../src/Player.js'

describe('Player', function () {
  it('Player should be a function able to create a new instance', function () {
    let player = new Player;

    expect(box.height).to.equal(100);
    expect(box.width).to.equal(100);
  });
  it('User should be able to pass in specific height and widths.', function () {
    let box = new Box(8, 24);

    expect(box.height).to.equal(8);
    expect(box.width).to.equal(24);

  })
  it('Should calculate area of box using the method, .area().', function () {
    let box = new Box(20, 52);

    let boxArea = box.area();

    expect(boxArea).to.equal(1040);
  })
  it('Should be able to increase height with method increaseHeight.', function () {
    let box = new Box();

    expect(box.height).to.equal(100)

    box.increaseHeight(10);

    expect(box.height).to.equal(110);
  })
});