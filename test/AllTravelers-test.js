import chai from 'chai';
const expect = chai.expect;
import { Destinations } from '../src/Sample-data/destination-data';
import { loginTraveler } from '../src/domUpdates';
const AllDestinations = Destinations.destinations

describe('return specific Travelers', ()=>{
    it('Should be able to grab a specific traveler by their id', () => {
        const travelerId = 2;
        const password = 'travel'
        const loginByID = loginTraveler(travelerId, password);

        expect(loginByID).to.equal(2, 'travel')
    })
})