import chai from 'chai';
const expect = chai.expect;
import DestinationRepository from '../src/DestinationRepository';
import { destinationsData, travelersData, tripsData } from './testData';
import Trip from '../src/Trip';
import TripRepository from '../src/TripRepository';
import Traveler from '../src/Traveler';
import DestinationsRepository from '../src/DestinationRepository';

describe('Trip Test', function() {
  const destinationRepository = new DestinationRepository();
  destinationRepository.loadDestinations(destinationsData)

  const destination = destinationRepository.allDestinations[5]

  const tripRepository = new TripRepository();
    tripRepository.tripDataLoad(tripsData)
  
  const trip = tripRepository.trips[5]

    it("should be a function", function () {
      expect(Trip).to.be.a("function");
    });

    it("should calculate the total cost of a trip", function () {
      expect(trip.costPerTrip(destination)).to.equal(6435)
    });


})