import chai from 'chai';
const expect = chai.expect;
import { Destinations } from '../src/Sample-data/destination-data';
const AllDestinations = Destinations.destinations

describe('return specific Travelers', ()=>{
    it('Should be able to grab a specific traveler by their id', () => {
        const travelerId = 2;
        const password = 'traveler'
        const loginByID = loginTraveler(travelerId, password);

        expect(loginByID).to.equal()
    })
})