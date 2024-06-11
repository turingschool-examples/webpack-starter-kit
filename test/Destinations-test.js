import chai from 'chai';
const expect = chai.expect;

import { getAllLocations } from '../src/domUpdates';

describe('getAllLocations', () => {
    it('generates the correct HTML string for all locations', () => {
        // Setup: Mock allDestinationsData
        const mockAllDestinationsData = [
            { destination: 'Paris' },
            { destination: 'London' },
            { destination: 'Tokyo' },
        ];
        // Temporarily override allDestinationsData with the mock data
        // Note: This assumes allDestinationsData is globally accessible or passed as an argument
        allDestinationsData = mockAllDestinationsData;

        // Execute the function
        const htmlString = getAllLocations();

        // Verify the output
        expect(htmlString).toBe('<option>London</option><option>Paris</option><option>Tokyo</option>');
    });
});
