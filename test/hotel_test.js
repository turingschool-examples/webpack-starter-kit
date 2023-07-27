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
        number: 15,
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
        date: "2023/04/22",
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
        date: "2023/04/22",
        roomNumber: 15,
      },
    ]);
  });
  it("Should have a list of customers", function () {
    hotelDani.createCustomers(customerData);
    expect(hotelDani.allCustomers).to.deep.equal([
      {
        id: 1,
        name: "Leatha Ullrich",
        username: "customer1",
        password: "overlook2021",
      },
      {
        id: 2,
        name: "Rocio Schuster",
        username: "customer2",
        password: "overlook2021",
      },
      {
        id: 3,
        name: "Kelvin Schiller",
        username: "customer3",
        password: "overlook2021",
      },
      {
        id: 4,
        name: "Kennedi Emard",
        username: "customer4",
        password: "overlook2021",
      },
      {
        id: 5,
        name: "Rhiannon Little",
        username: "customer5",
        password: "overlook2021",
      },
      {
        id: 6,
        name: "Fleta Schuppe",
        username: "customer6",
        password: "overlook2021",
      },
    ]);
  });
  it("Should be able to find a user based on their login information", function () {
    const found1 = hotelDani.login("customer1", "overlook2021");
    const found2 = hotelDani.login("customer2", "overlook2021");
    expect(found1).to.deep.equal({
      id: 1,
      name: "Leatha Ullrich",
      password: "overlook2021",
      username: "customer1",
    });
    expect(found2).to.deep.equal({
      id: 2,
      name: "Rocio Schuster",
      password: "overlook2021",
      username: "customer2",
    });
  });
  it("Should be able to login the manager", function () {
    const found1 = hotelDani.login("manager", "overlook2021");
    expect(found1).to.equal("manager");
  });
  it("Should return undefined if there is no valid user or manager credentials", function () {
    const found1 = hotelDani.login("customer150", "overlook2021");
    expect(found1).to.equal(undefined);
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
    const roomsAvailable1 = hotelDani.findAvailableRooms("2023/02/05");
    expect(roomsAvailable1).to.deep.equal([
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
        number: 15,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17,
      },
    ]);
    const roomsAvailable2 = hotelDani.findAvailableRooms("2023/04/22");
    expect(roomsAvailable2).to.deep.equal([
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
        number: 12,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 50.25,
      },
    ]);
  });
  it("Should be able to filter rooms by room type", function () {
    const found1 = hotelDani.filterRoomsByType("residential suite", roomData);
    const found2 = hotelDani.filterRoomsByType("suite", roomData);
    const found3 = hotelDani.filterRoomsByType("single room", roomData);
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
        number: 15,
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
    const found = hotelDani.filterRoomsByType("clown room");
    const found1 = hotelDani.filterRoomsByType("sweet");
    expect(found).to.deep.equal([]);
    expect(found1).to.deep.equal([]);
  });
  it("Should find rooms by number", function () {
    const found1 = hotelDani.findSpecificRoomByNumber(1);
    const found2 = hotelDani.findSpecificRoomByNumber(2);
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
    const found1 = hotelDani.findSpecificRoomByNumber(50);
    expect(found1).to.deep.equal(undefined);
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
  it("Should let us know total revenue for any given date", function () {
    const found1 = hotelDani.totalRevenue(`2023/02/05`);
    expect(found1).to.deep.equal(50.25);
  });
  it("Should be able to delete a booking", function () {
    expect(hotelDani.allBookings).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6sz",
        userID: 9,
        date: "2023/04/22",
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
    hotelDani.deleteABooking("5fwrgu4i7k55hl6sz");
    expect(hotelDani.allBookings).to.deep.equal([
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
  it("Should find bookings by id", function () {
    const found1 = hotelDani.findBookingByID("5fwrgu4i7k55hl6t7");
    const found2 = hotelDani.findBookingByID("5fwrgu4i7k55hl6t8");
    expect(found1).to.deep.equal({
      id: "5fwrgu4i7k55hl6t7",
      userID: 20,
      date: "2022/02/16",
      roomNumber: 7,
    });
    expect(found2).to.deep.equal({
      id: "5fwrgu4i7k55hl6t8",
      userID: 1,
      date: "2023/02/05",
      roomNumber: 12,
    });
  });
  it("Should return undefined if nothing was found", function () {
    const found1 = hotelDani.findBookingByID("boo");
    expect(found1).to.deep.equal(undefined);
  });
});
