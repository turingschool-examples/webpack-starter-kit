import chai from "chai";
import Booking from "../src/classes/booking";
import Room from "../src/classes/room";
import Hotel from "../src/classes/hotel";
import customerData from "../src/sampleData/customer_sample_data";
import roomData from "../src/sampleData/room_sample_data";
import bookingsData from "../src/sampleData/booking_sample_data";
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
        date: "2022/02/05",
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
});
