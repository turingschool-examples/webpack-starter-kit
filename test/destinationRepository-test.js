import chai from 'chai';
const expect = chai.expect;
import DestinationRepository from '../src/DestinationRepository';
import { destinationsData } from './testData';


describe('Destination Repository Test', function() {
  const destinationRepository = new DestinationRepository();
  destinationRepository.loadDestinations(destinationsData)

  it("should be a function", function () {
    expect(DestinationRepository).to.be.a("function");
  });

  it("should be a instance of DestinationRepository", function () {
    expect(destinationRepository).to.be.an.instanceOf(DestinationRepository);
  })

  it('should hold all destinations', function() {
    expect(destinationRepository.allDestinations.length).to.equal(6);
  });

  it('should find a destination by the ID', function() {
    expect(destinationRepository.findDestObject(1)).to.deep.equal({
      id: 1,
      destination: "Lima, Peru",
      lodgingCost: 70,
      flightCost: 400,
      image: {
        url: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        alt: "overview of city buildings with a clear sky"
      }
    });
  });

  it('should find a destination ID by name', function() {
    expect(destinationRepository.findDestByName("Stockholm, Sweden")).to.equal(2);
  });

  it('should calculate the flight cost of a trip', function() {
    expect(destinationRepository.findFlightCost(1)).to.equal(400);
  });

  it('should calculate the lodging cost of a trip', function() {
    expect(destinationRepository.findLodgingCost(1)).to.equal(70);
  });

});
