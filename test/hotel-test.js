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

    it('Should be able to find the current user', () => {
        expect(overlook.findCustomer('customer1', 'overlook2021')).to.deep.equal({ id: 1, name: "Leatha Ullrich"});
    })

    it('Should be able to set current customer details', () => {
        overlook.setCurrentCustomer(overlook.findCustomer('customer1', 'overlook2021'));
        expect(overlook.currentCustomer).to.deep.equal({
            id: 1,
            name: 'Leatha Ullrich',
            userName: 'customer1',
            password: 'overlook2021',
            isCustomer: true,
            bookings: [],
            total: 0
        });
    })

    it("Should be able to give user a list of all of their bookings", () => {
        overlook.setCurrentCustomer(overlook.findCustomer('customer1', 'overlook2021'));
        overlook.listCustomerBookings()
        expect(overlook.currentCustomer.bookings).to.deep.equal([{
            id: '5fwrgu4i7k55hl6t8',
            userID: 1,
            date: '2022/02/05',
            roomNumber: 12,
            roomServiceCharges: []
        }]);
    })

    it("Should be able to tell a customer their total spent", () => {
        overlook.setCurrentCustomer(overlook.findCustomer('customer1', 'overlook2021'));
        overlook.listCustomerBookings()
        overlook.calculateTotal()
        expect(overlook.currentCustomer.total).to.deep.equal(397.02)
    })

    it("Should be able to store available rooms", () => {
        expect(overlook.availableRooms).to.deep.equal([]);
    })

    it("Should have unavailable rooms", () => {
      expect(overlook.unavailable).to.deep.equal([]);
    })

    it("Should show rooms available for a given date", () => {
        overlook.findAvailableRooms("2022/02/16");
        expect(overlook.availableRooms).to.have.lengthOf(7);
    })


    it("Should be able to sort by room type", () => {
      overlook.filterRooms(["residential suite"],"2022/02/16")
      expect(overlook.availableRooms).to.have.lengthOf(1);
    })

    it("Should be able to create new bookings", () => {
          overlook.filterRooms(["residential suite"],"2022/02/16");
          overlook.setCurrentCustomer(overlook.findCustomer('customer1', 'overlook2021'));
          overlook.bookRoom(1);
        expect(overlook.bookings).to.have.lengthOf(6);
    })
})
