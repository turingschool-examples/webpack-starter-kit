import chai from 'chai';
const expect = chai.expect;
import { calculateTripCost, calculateTotalTripCost} from '../src/testedFunctions.js';
import Destinations from '../src/Sample-data/destination-data.js'; 
import  Trips from '../src/Sample-data/trip-data.js';
describe('calculateTripCost', () => {
    it('correctly calculates the trip cost', () => {
        const destinationValue = "Wakanda";
        const guestCount = 2;
        const durationDays = 7;
        const expectedCost = 5700.00 

        const result = calculateTripCost(destinationValue, guestCount, durationDays, Destinations)

        expect(result).to.equal(expectedCost.toFixed(2));
    });
    it('calculates the cost based on estimated flight cost per person', () => {
        const destinationValue = "Wakanda"; 
        const guestCount = 2;
        const durationDays = 0;

        const expectedCost = (1000 * guestCount) * 1.1; 

        const result = calculateTripCost(destinationValue, guestCount, durationDays, Destinations);

        expect(result).to.equal(expectedCost.toFixed(2));
    });
});

describe('Calculates trip cost for non-zero duration days', () => {
    it('correctly calculates the cost for a stay in Wakanda for 5 days', () => {
        const destinationValue = "Wakanda";
        const guestCount = 2;
        const durationDays = 5;

        
        const expectedLodgingCost = 500 * 5; 
        const expectedFlightCost = (1000 * 2) * 1.1; 
        const expectedTotalCost = expectedLodgingCost + expectedFlightCost; 

        const result = calculateTripCost(destinationValue, guestCount, durationDays, Destinations);

        expect(result).to.equal(expectedTotalCost.toFixed(2));
    });
});
describe('calculateTotalTripCost', () => {
    it('returns 0 when there are no approved trips from the past three years', () => {
        const travelerId = 2; 

        
        const totalCost = calculateTotalTripCost(Trips, Destinations, travelerId);

        
        expect(totalCost).to.equal('0.00');
    });
});
describe('calculateTotalTripCost', () => {
    it('should correctly calculate the total cost for approved trips within the last three years', () => {
        
        const userId = 1; 

        const expectedResult = '6050.00'
        const result = calculateTotalTripCost(Trips, Destinations, userId);
        expect(result).to.equal(expectedResult);
    });
});