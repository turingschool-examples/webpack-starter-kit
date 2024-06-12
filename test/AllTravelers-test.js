import chai from 'chai';
const expect = chai.expect;
import { calculateTripCost } from '../src/calculation.js';
import Destinations from '../src/Sample-data/destination-data.js'; 

describe('calculateTripCost', () => {
    it('correctly calculates the trip cost', () => {
        const destinationValue = "Wakanda";
        const guestCount = 2;
        const durationDays = 7;
        const expectedCost = 5700.00 // 14100

        const result = calculateTripCost(destinationValue, guestCount, durationDays, Destinations)

        expect(result).to.equal(expectedCost.toFixed(2));
    });
    it('calculates the cost based on estimated flight cost per person', () => {
        const destinationValue = "Wakanda"; // Ensure this matches one of the destinations in your Destinations array
        const guestCount = 2;
        const durationDays = 0;

        // No need to manually define costPerDestination anymore
        const expectedCost = (1000 * guestCount) * 1.1; // Using 1000 as an example cost per person for Wakanda

        const result = calculateTripCost(destinationValue, guestCount, durationDays, Destinations);

        expect(result).to.equal(expectedCost.toFixed(2));
    });
});

describe('Calculates trip cost for non-zero duration days', () => {
    it('correctly calculates the cost for a stay in Wakanda for 5 days', () => {
        const destinationValue = "Wakanda";
        const guestCount = 2;
        const durationDays = 5;

        // Expected cost calculation: (Lodging cost per day * Number of days) + Flight cost
        // Assuming lodging cost per day is $500 and adjusting flight cost by 110%
        const expectedLodgingCost = 500 * 5; // $2500
        const expectedFlightCost = (1000 * 2) * 1.1; // $2200 (assuming 1000 is the cost per person for Wakanda)
        const expectedTotalCost = expectedLodgingCost + expectedFlightCost; // $4700

        const result = calculateTripCost(destinationValue, guestCount, durationDays, Destinations);

        expect(result).to.equal(expectedTotalCost.toFixed(2));
    });
});