import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import Player from '../src/Player.js';
import FastRound from '../src/FastRound.js';
import domUpdates from '../src/domUpdates.js';

let survey = 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?';

let surveyAnswers = [
  { answer: 'Bowling Ball', respondents: 5 },
  { answer: 'Donuts', respondents: 24 },
  { answer: 'Beer', respondents: 67 }
];

let player1 = new Player('Tiff', 1);
let player2 = new Player('Lynne', 2);
let game = new Game(player1, player2);
let round = new FastRound(survey, surveyAnswers, game)

chai.spy.on(domUpdates, [
  'removeTimer',
  'displayTimer',
  'displayFastroundDialog'
], () => true);

describe('FastRound', () => {
  it('Should shave a timer property that defaults to 30.', () => {
    expect(round.timer).to.equal(30);
  });

  it('Should have a multipler property with a default value of 2.', () => {

    expect(round.multiplier).to.equal(2);
  });

  it('Should be able to reset the multiplier value.', () => {

    round.setMultiplier(5);

    expect(round.multiplier).to.equal(5);
  });
});
