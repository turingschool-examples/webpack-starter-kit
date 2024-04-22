import chai from 'chai';
const expect = chai.expect;
import { renderUser, renderUserCard } from '../src/render';
import { bookings, rooms_1, rooms, rooms_2, bookings_full, sampleUsers } from './test-data';
import { userBookings, getBookingCost, calculateTotalCost } from '../src/bookings';

describe('renderUserCard()',()=>{
    let user;
    beforeEach(()=>{
        user = sampleUsers[1]
    });
    it('should take in a userBookings array and user and return a block of html as describe in the assertion',()=>{
        const book = userBookings(user.id, bookings);
        const totalCost = calculateTotalCost(book, rooms);
        const renderedCard = renderUserCard(user.name,totalCost)
        expect(renderedCard).to.equal(`<li class="username-card">Fleta Schuppe</li>\n<li class="totalspent">Total Spent: 1207.94$</li>`)
    });
    it('should format a rounded cost',()=>{
        const renderedCard = renderUserCard('Evil Guest', 12.5)
        expect (renderedCard).to.equal(`<li class="username-card">Evil Guest</li>\n<li class="totalspent">Total Spent: 12.50$</li>`)
    });
    it.skip('should play well with the error handling of previous functions',()=>{
        
    });

});