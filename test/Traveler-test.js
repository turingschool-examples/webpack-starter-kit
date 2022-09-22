import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/classes/Traveler.js'
import travelData from '../data/sample-travelerData.js'

describe('Traveler', () => {
  let traveler1;
  let traveler2;
  let traveler3;
  let traveler4;
  let traveler5;
  let traveler6;

  beforeEach( () => {
    traveler1 = new Traveler(travelData[0]);
    traveler2 = new Traveler(travelData[1]);
    traveler3 = new Traveler(travelData[2]);
    traveler4 = new Traveler(travelData[3]);
    traveler5 = new Traveler(travelData[4]);
    traveler6 = new Traveler(travelData[5]);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
    expect(traveler2).to.be.an.instanceOf(Traveler);
    expect(traveler3).to.be.an.instanceOf(Traveler);
    expect(traveler4).to.be.an.instanceOf(Traveler);
    expect(traveler5).to.be.an.instanceOf(Traveler);
    expect(traveler6).to.be.an.instanceOf(Traveler);
  });

  it('should take in a travelers data', () => {
    expect(traveler1).to.deep.equal({
      "id": 1,
      "name": "Ham Leadbeater",
      "travelerType": "relaxer",
    });
    expect(traveler2).to.deep.equal({
      "id": 2,
      "name": "Rachael Vaughten",
      "travelerType": "thrill-seeker",
    });
    expect(traveler3).to.deep.equal({
      "id": 3,
      "name": "Sibby Dawidowitsch",
      "travelerType": "shopper",
    });
    expect(traveler4).to.deep.equal({
      "id": 4,
      "name": "Leila Thebeaud",
      "travelerType": "photographer",
    });
    expect(traveler5).to.deep.equal({
      "id": 5,
      "name": "Tiffy Grout",
      "travelerType": "history buff",
    });
    expect(traveler6).to.deep.equal({
      "id": 6,
      "name": "Laverna Flawith",
      "travelerType": "foodie",
    });
  });

  it('should have a travelers id', () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler2.id).to.equal(2);
    expect(traveler3.id).to.equal(3);
    expect(traveler4.id).to.equal(4);
    expect(traveler5.id).to.equal(5);
    expect(traveler6.id).to.equal(6);
  });

  it('should have a travelers name', () => {
    expect(traveler1.name).to.equal('Ham Leadbeater');
    expect(traveler2.name).to.equal('Rachael Vaughten');
    expect(traveler3.name).to.equal('Sibby Dawidowitsch');
    expect(traveler4.name).to.equal('Leila Thebeaud');
    expect(traveler5.name).to.equal('Tiffy Grout');
    expect(traveler6.name).to.equal('Laverna Flawith');
  });

  it('should have a travelers type', () => {
    expect(traveler1.travelerType).to.equal('relaxer');
    expect(traveler2.travelerType).to.equal('thrill-seeker');
    expect(traveler3.travelerType).to.equal('shopper');
    expect(traveler4.travelerType).to.equal('photographer');
    expect(traveler5.travelerType).to.equal('history buff');
    expect(traveler6.travelerType).to.equal('foodie');
  });
});
