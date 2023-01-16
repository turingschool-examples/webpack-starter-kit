import chai from 'chai';
const expect = chai.expect;
import DestinationRepository from '../src/DestinationRepository';
import { destinationsData, travelersData, tripsData } from './testData';
import Trip from '../src/Trip';
import TripRepository from '../src/TripRepository';
import Traveler from '../src/Traveler';



describe('Trip Repository Test', function() {
  const destinationRepository = new DestinationRepository();
  destinationRepository.loadDestinations(destinationsData)

  const tripRepository = new TripRepository();
  tripRepository.tripDataLoad(tripsData)

  const traveler = new Traveler(travelersData[0])

    it("should be a function", function () {
      expect(TripRepository).to.be.a("function");
    });

    it("should hold instances of trip objects", function () {
      expect(tripRepository.trips[0]).to.be.an.instanceof(Trip)
    });

    it("should find trips by traveler ID", function () {
      expect(tripRepository.tripsByTraveler(traveler)).to.deep.equal([
           {
            id: 117,
            userID: 1,
            destinationID: 28,
            travelers: 3,
            date: '2022/01/09',
            duration: 15,
            status: 'approved',
            suggestedActivities: []
          }
        ]);
    });

    it("should calculate the total cost of annual trips for a user", function () {
      expect(tripRepository.yearlyCost(destinationRepository, traveler)).to.equal(6435)
    });

})