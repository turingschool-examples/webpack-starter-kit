import chai from "chai";
import Booking from "../src/classes/booking";
import Room from "../src/classes/room";
import Hotel from "../src/classes/hotel";
import customerData from "../src/sampleData/customer_sample_data";
import roomData from "../src/sampleData/room_sample_data";
import bookingsData from "../src/sampleData/booking_sample_data";
import Customer from "../src/classes/customer";
const expect = chai.expect;

describe("Hotel", function () {
  let hotelDani = new Hotel(roomData, bookingsData);
  it("Should have an array that can hold all the rooms in the hotel", function () {
    expect(hotelDani.allRooms).to.deep.equal([
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4,
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14,
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44,
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
      {
        number: 12,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 50.25,
      },
    ]);
  });
  it("Should have the list of rooms be instances of Rooms", function () {
    expect(hotelDani.allRooms[0]).to.be.instanceOf(Room);
    expect(hotelDani.allRooms[3]).to.be.instanceOf(Room);
  });
  it("Should have a list of all bookings for the hotel", function () {
    expect(hotelDani.allBookings).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6sz",
        userID: 9,
        date: "2022/04/22",
        roomNumber: 15,
      },
      {
        id: "5fwrgu4i7k55hl6t5",
        userID: 43,
        date: "2022/01/24",
        roomNumber: 24,
      },
      {
        id: "5fwrgu4i7k55hl6t6",
        userID: 13,
        date: "2022/01/10",
        roomNumber: 12,
      },
      {
        id: "5fwrgu4i7k55hl6t7",
        userID: 20,
        date: "2022/02/16",
        roomNumber: 7,
      },
      {
        id: "5fwrgu4i7k55hl6t8",
        userID: 1,
        date: "2023/02/05",
        roomNumber: 12,
      },
    ]);
  });
  it("Should have the list of bookings be instances of Booking", function () {
    expect(hotelDani.allBookings[0]).to.be.instanceOf(Booking);
    expect(hotelDani.allBookings[3]).to.be.instanceOf(Booking);
  });
  it("Should be able to update list of rooms", function () {
    const newRoomData = [roomData[0]];
    hotelDani.createRooms(newRoomData);
    expect(hotelDani.allRooms).to.deep.equal([
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4,
      },
    ]);
  });
  it("Should be able to update list of bookings", function () {
    const newBookingData = [bookingsData[0]];
    hotelDani.createBookings(newBookingData);
    expect(hotelDani.allBookings).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6sz",
        userID: 9,
        date: "2022/04/22",
        roomNumber: 15,
      },
    ]);
  });
  it("Should find bookings for any given customer", function () {
    hotelDani.createBookings(bookingsData);
    const currentCustomer = new Customer(customerData[0]);
    const myBookings = hotelDani.findCustomerBookings(currentCustomer);
    expect(myBookings).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6t8",
        userID: 1,
        date: "2023/02/05",
        roomNumber: 12,
      },
    ]);
  });
  it("Should let the customer know if there are no bookings for any given customer", function () {
    const currentCustomer = new Customer(customerData[3]);
    const myBookings = hotelDani.findCustomerBookings(currentCustomer);
    expect(myBookings).to.deep.equal("You have not made any bookings.");
  });
  it("Should be able to find total booking expenses for any given customer", function () {
    const currentCustomer = new Customer(customerData[0]);
    hotelDani.createRooms(roomData);
    hotelDani.createBookings(bookingsData);
    const expenses = hotelDani.findCustomerBookingExpenses(currentCustomer);
    expect(expenses).to.equal(50.25);
  });
  it("Should tell if there are no bookings", function () {
    const currentCustomer = new Customer(customerData[1]);
    const expenses = hotelDani.findCustomerBookingExpenses(currentCustomer);
    expect(expenses).to.equal("You have not made any bookings.");
  });
  it("Should tell what rooms are available for a given date", function () {
    const currentCustomer = new Customer(customerData[0]);
    const roomsAvailable = hotelDani.findAvailableRooms(
      currentCustomer,
      5,
      2,
      2023
    );
    expect(roomsAvailable).to.deep.equal([
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4,
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14,
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44,
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
    ]);
  });
  it("Should be able to filter rooms by room type", function () {
    const found1 = hotelDani.filterByRoomType("residential suite");
    const found2 = hotelDani.filterByRoomType("suite");
    const found3 = hotelDani.filterByRoomType("single room");
    expect(found1).to.deep.equal([
      {
        number: 1,
        roomType: "residential suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 358.4,
      },
    ]);
    expect(found2).to.deep.equal([
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38,
      },
    ]);
    expect(found3).to.deep.equal([
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14,
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44,
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
      {
        number: 12,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 50.25,
      },
    ]);
  });
  it("Should tell if it does not have that room type", function () {
    const found = hotelDani.filterByRoomType("clown room");
    const found1 = hotelDani.filterByRoomType("sweet");
    expect(found).to.equal(
      `We apologize! No "clown room" rooms were found at the hotel.`
    );
    expect(found1).to.equal(
      `We apologize! No "sweet" rooms were found at the hotel.`
    );
  });
  it("Should find rooms by number", function () {
    const found1 = hotelDani.filterByRoomNumber(1);
    const found2 = hotelDani.filterByRoomNumber(2);
    expect(found1).to.deep.equal({
      number: 1,
      roomType: "residential suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 358.4,
    });
    expect(found2).to.deep.equal({
      number: 2,
      roomType: "suite",
      bidet: false,
      bedSize: "full",
      numBeds: 2,
      costPerNight: 477.38,
    });
  });
  it("Should return nothing if no room is found", function () {
    const found1 = hotelDani.filterByRoomNumber(50);
    expect(found1).to.deep.equal(undefined);
  });
  it("Should filter by bed number", function () {
    const found1 = hotelDani.filterByBedNumber(1);
    expect(found1).to.deep.equal([
      {
        bedSize: "queen",
        bidet: true,
        costPerNight: 358.4,
        numBeds: 1,
        number: 1,
        roomType: "residential suite",
      },
      {
        bedSize: "king",
        bidet: false,
        costPerNight: 491.14,
        numBeds: 1,
        number: 3,
        roomType: "single room",
      },
      {
        bedSize: "queen",
        bidet: false,
        costPerNight: 429.44,
        numBeds: 1,
        number: 4,
        roomType: "single room",
      },
    ]);
  });
  it("Should should create a new booking", function () {
    const currentCustomer = customerData[0];
    const booking = hotelDani.createNewBooking(
      currentCustomer,
      4,
      "2022/09/23"
    );
    expect(booking).to.deep.equal({
      userID: 1,
      date: "2022/09/23",
      roomNumber: 4,
    });
  });
});
