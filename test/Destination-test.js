import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/classes/Destination.js';
import destinationData from '../data/sample-destinationData.js'

describe('Destination', () => {
  let destination1;
  let destination2;
  let destination3;

  beforeEach( () => {
    destination1 = new Destination(destinationData[0]);
    destination2 = new Destination(destinationData[5]);
    destination3 = new Destination(destinationData[10]);
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(destination1).to.be.an.instanceOf(Destination);
    expect(destination2).to.be.an.instanceOf(Destination);
    expect(destination3).to.be.an.instanceOf(Destination);
  });

  it('should take in an array of Destination instances', () => {
    expect(destination1).to.deep.equal({
      id: 1,
      destination: 'Lima, Peru',
      lodgingCost: 70,
      flightCost: 400,
      image: 'https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
      alt: 'overview of city buildings with a clear sky'
    });
    expect(destination2).to.deep.equal({
      id: 6,
      destination: 'Jakarta, Indonesia',
      lodgingCost: 70,
      flightCost: 890,
      image: 'https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: 'lit up city at night'
    });
    expect(destination3).to.deep.equal({
      id: 11,
      destination: 'Mikonos, Greece',
      lodgingCost: 140,
      flightCost: 1000,
      image: 'https://images.unsplash.com/photo-1573783309724-e44b859f5a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
      alt: 'cityscape along the water during the day'
    });
  });

  it('should have a destination\'s id', () => {
    expect(destination1.id).to.equal(1);
    expect(destination2.id).to.equal(6);
    expect(destination3.id).to.equal(11);
  });

  it('should have a destination\'s location', () => {
    expect(destination1.destination).to.equal('Lima, Peru');
    expect(destination2.destination).to.equal('Jakarta, Indonesia');
    expect(destination3.destination).to.equal('Mikonos, Greece');
  });

  it('should have a destination\'s estimated lodging cost per day', () => {
    expect(destination1.lodgingCost).to.equal(70);
    expect(destination2.lodgingCost).to.equal(70);
    expect(destination3.lodgingCost).to.equal(140);
  });

  it('should have a destination\'s estimated flight cost per person', () => {
    expect(destination1.flightCost).to.equal(400);
    expect(destination2.flightCost).to.equal(890);
    expect(destination3.flightCost).to.equal(1000);
  });

  it('should have a destination\'s location image', () => {
    expect(destination1.image).to.equal('https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
    expect(destination2.image).to.equal('https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
    expect(destination3.image).to.equal('https://images.unsplash.com/photo-1573783309724-e44b859f5a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80');
  });

  it('should have a destination\'s location image alternative text', () => {
    expect(destination1.alt).to.equal('overview of city buildings with a clear sky');
    expect(destination2.alt).to.equal('lit up city at night');
    expect(destination3.alt).to.equal('cityscape along the water during the day');
  });
});
