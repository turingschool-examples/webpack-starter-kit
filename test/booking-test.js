import chai from 'chai';
const expect = chai.expect;
import bookings from "./booking-data.js";
import Booking from "../src/classes/bookings-class.js"

describe('Bookings', () => {
let booking;

    beforeEach(() => {
        booking = new Booking(bookings[0])
    })

    it('Should be a function', () => {
        expect(Booking).to.be.a('function');
    });

    it("Should have an ID", () => {
        expect(booking.id).to.equal("5fwrgu4i7k55hl6sz")
    })

    it("Should have userID attached to the booking", () => {
        expect(booking.userID).to.equal(9);
    })

    it("Should have a booking date", () => {
        expect(booking.date).to.equal("2022/04/22")
    })

    it("Should have a room number", () => {
        expect(booking.roomNumber).to.equal(15)
    })

    it("Should have record service charges", () => {
        expect(booking.roomServiceCharges).to.be.an("array");
    })
})