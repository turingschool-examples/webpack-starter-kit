import chai from 'chai';
const expect = chai.expect;
import { destinationsData, travelersData, tripsData } from './testData';
import Traveler from '../src/Traveler';
import TravelerRepository from '../src/TravelerRepository';

  describe('Traveler Repository Test', function() {
    const travelerRepository = new TravelerRepository()
    travelerRepository.travelerDataLoad(travelersData)
  
    it("should be a function", function () {
      expect(TravelerRepository).to.be.a("function");
    });
  
    it("should be a instance of Traveler Repository", function () {
      expect(travelerRepository).to.be.an.instanceOf(TravelerRepository);
    });
    
    it("should store traveler objects", function () {
      expect(travelerRepository.travelers[0]).to.be.instanceOf(Traveler)
    });

})