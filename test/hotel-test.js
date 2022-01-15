import chai from 'chai';
const expect = chai.expect;
import bookings from "./booking-data.js";
import rooms from "./rooms-data.js";
import users from "./user-data.js";
import Hotel from "../src/classes/hotel-class.js"

describe('Hotel', () => {
    let overlook;

    beforeEach(() => {
        overlook = new Hotel(bookings, rooms, users)
    })

    it('Should be a function', () => {
        expect(Hotel).to.be.a('function');
    });

    it('Should have rooms', () => {
        expect(overlook.rooms).to.be.an('array')
    })

    it("Should have bookings", () => {
        expect(overlook.bookings).to.be.an('array')
    })

    it("Should have customers", () => {
        expect(overlook.customers).to.be.an('array');
    })

    it("Should have a manager", () => {
        expect(overlook.manager).to.be.an("object");
    })

    it("Should be able to tell a customer their purchase history", () => {
        expect()
    })

    it("Should be able to create new bookings", () => {
        expect()
    })

    it("Should not allow a room to be double booked", () => {
        expect()
    })

    it("Should show rooms avaialbe for a given date", () => {
        expect()
    })

    it("Should apologize when rooms are not availalbe", () => {
        expect()
    })

    it("Should be able to sort by room type", () => {
        expect()
    })


})

// 1. Dashboard
// As a customer:

// I should see a dashboard page that shows me:
// Any room bookings I have made(past or present / upcoming)
// The total amount I have spent on rooms
// 2. Customer Interaction
// As a customer:

// I should be able to select a date for which I’d like to book a room for myself
// Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
// I should be able to filter the list of available rooms by their roomType property
// I should be able to select a room for booking
// In the event that no rooms are available for the date / roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search
// Refer to the “Add new booking” section from the endpoints table above!

// Note!
// If you haven’t already, focus on accessibility at this point.Before moving to iteration 3, please create a branch and push it up to GH so instructors can run Lighthouse and check your dashboard for it’s accessibility audit.

