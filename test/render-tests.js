import chai from 'chai';
const expect = chai.expect;
import { mapRoomsFromBookings, renderRoomCards, renderUserCard } from '../src/render';
import { bookings, rooms, rooms_2, sampleUsers,roomRenders, bookingsForRender } from './test-data';
import { userBookings, calculateTotalCost } from '../src/bookings';

describe('renderUserCard()',()=>{
    it('should take in a userBookings array and user and return a block of html as describe in the assertion',()=>{
        const user = sampleUsers[1]
        const book = userBookings(user.id, bookings);
        const totalCost = calculateTotalCost(book, rooms);
        const renderedCard = renderUserCard(user.name,totalCost)
        expect(renderedCard).to.equal(`<li class="username-card">Fleta Schuppe</li>\n<li class="totalspent">Total Spent: 1207.94$</li>`)
    });

    it('should format a rounded cost',()=>{
        const renderedCard = renderUserCard('Evil Guest', 12.5)
        expect (renderedCard).to.equal(`<li class="username-card">Evil Guest</li>\n<li class="totalspent">Total Spent: 12.50$</li>`)
    });

    it('should play well with the error handling of previous functions',()=>{
        const book = userBookings(sampleUsers[2].id, bookings)
        const totalCost = calculateTotalCost(book, rooms)
        const renderedCard = renderUserCard(sampleUsers[2].name, totalCost)
        expect (renderedCard).to.equal(`<li class="username-card">Dell Rath</li>\n<li class="totalspent">Total Spent: 0.00$</li>`)
    });
});
describe('renderRoomCards()',()=>{
    it.skip('should take in room array and return an array of html blocks as described in the assertion',()=>{        
        let match = true
        const roomCards = renderRoomCards(rooms_2)
        roomCards.forEach((string, i)=> {
            if(!string.includes(roomRenders[i])){
                match = false
            }
        });
        expect(match).to.equal(true);
    });
});
describe('mapFromBookings()',()=>{
    let toRender
    beforeEach(()=>{
        toRender = mapRoomsFromBookings(bookingsForRender, rooms);
    });
    it.skip('should return a map of rooms from a bookings array for rendering purposes',()=>{
        let match = true
        const roomCards = renderRoomCards(toRender)
        roomCards.forEach((string, i)=> {
            if(!string.includes(roomRenders[i])){
                match = false
            }
        });
        expect(match).to.equal(true);
    });
    it.skip('should be renderable by the renderRoomCards() function',()=>{
        let match = true
        const roomCards = renderRoomCards(toRender)
        roomCards.forEach((string, i)=> {
            if(!string.includes(roomRenders[i])){
                match = false
            }
        });
        expect(match).to.equal(true);
    });
})