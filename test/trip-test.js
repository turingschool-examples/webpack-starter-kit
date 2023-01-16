import chai from 'chai';
const expect = chai.expect;
import DestinationRepository from '../src/DestinationRepository';
import { destinationsData, tripsData } from './testData';
import Trip from '../src/Trip';
import TripRepository from '../src/TripRepository';


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

    it('should have a user ID', function () {
      expect(trip.userID).to.equal(1);
    });

    it('should have a trip ID', function () {
      expect(trip.id).to.equal(117);
    });

    it('should have a destination ID', function () {
      expect(trip.destinationID).to.equal(28);
    });

    it('should have a traveler quantity', function () {
      expect(trip.travelers).to.equal(3);
    });

    it('should have a trip date', function () {
      expect(trip.date).to.equal('2022/01/09');
    });

    it('should have a trip duration', function () {
      expect(trip.duration).to.equal(15);
    });

    it('should have a trip status', function () {
      expect(trip.status).to.equal('approved');
    });

    it('should have a suggested activities array', function () {
      expect(trip.suggestedActivities).to.deep.equal([]);
    });

    it("should calculate the total cost of a trip", function () {
      expect(trip.costPerTrip(destination)).to.equal(6435)
    });


})