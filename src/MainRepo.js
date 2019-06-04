import domUpdates from "./domUpdates";
import RoomsRepo from "./RoomsRepo";
import Customer from "./Customer";

class MainRepo {
  constructor(data, today, fixedDate) {
    this.data = data;
    this.today = today;
    this.fixedDate = fixedDate;
    this.currentID = this.data.users.length + 1;
  }

  returnCustomerName(customerObject) {
    return customerObject.name;
  }

  addNewCustomer(customerName) {
    let newCustomer = {id: this.currentID, name: customerName};
    this.data.users.push(newCustomer);
    this.currentID++;
  }

  allAvailableRooms(roomsDate, roomType) {
    const roomsRepo = new RoomsRepo(this.data, this.today, roomsDate)
    let arrAvailableRooms = roomsRepo.roomsAvailable(roomsDate).available

    let availableRooms = this.data.rooms.filter(room => {
      return arrAvailableRooms.find(available => {
        if (roomType === 'All room types') {
          return  room.number === available;
        } else {
          return room.number === available && room.roomType === roomType;
        }
      })
    })

    domUpdates.domAllAvailableRooms(availableRooms);
    return availableRooms.length;
  }

  bookingRoom(customerName, rNumber) {
    const customer = new Customer(this.data, customerName);
    let customerID = customer.returnCustomerId();
    let today = this.today;
    let newBooking = { userID: customerID, date: today, roomNumber: parseInt(rNumber)};
    // const customer2 = new Customer(this.data, customerName);
    this.data.bookings.push(newBooking);
    customer.customerBookingHistory();
  }

}

export default MainRepo;