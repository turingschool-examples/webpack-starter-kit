import chai from 'chai';
const expect = chai.expect;
import { travelersData } from './testData';
import TravelerRepository from '../src/TravelerRepository';
import Traveler from '../src/Traveler';

describe('Traveler Test', function() {
  const travelerRepository = new TravelerRepository();
  travelerRepository.travelerDataLoad(travelersData)

  const traveler = travelerRepository.travelers[3]

  it("should be a function", function () {
    expect(Traveler).to.be.a("function");
  });

  it('should have a traveler ID', function () {
    expect(traveler.id).to.equal(4);
  });

  it('should have a traveler name', function () {
    expect(traveler.name).to.equal('Leila Thebeaud');
  });

  it('should have a traveler ID', function () {
    expect(traveler.travelerType).to.equal('photographer');
  });

})