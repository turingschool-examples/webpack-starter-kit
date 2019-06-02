import domUpdates from "./domUpdates";

class MainRepo {
  constructor(sData, today, fixedDate) {
    this.data = sData;
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
    domUpdates.domAddNewCustomer(customerName)
    console.log('classss', newCustomer)
  }

  searchCustomerName(search) {
    let filteredCustomers = this.data.users.filter(customer => {
      let name = customer.name.toUpperCase();
      let searchCap = search.toUpperCase();
      if (name.includes(searchCap)) {
        return customer
      }
    })
    domUpdates.domSearchCustomerName(filteredCustomers)
    return filteredCustomers
  }


  roomsAvailable(fixedDate) {
    let date = fixedDate || this.today;

    let allRoomsNumbers = this.data.rooms.map(roomData => roomData.number)
    let roomsBooked = this.data.bookings.reduce((acc, booking) => {
      if (date === booking.date) {
        acc.push(booking.roomNumber)
      }
      return acc;
    }, []);
    let availableRooms = allRoomsNumbers.reduce((acc, roomNumber) => {
      if (!roomsBooked.includes(roomNumber)) {
        acc.push(roomNumber);
      }
      return acc;
    }, []);
    
    
    let rooms = availableRooms.reduce((acc, num) => {
      this.data.rooms.forEach(room => {
        if (room.number === num) {
          acc.push(room)
        }
      })
      return acc
    }, [])
    

    let finalRooms =  rooms.reduce((acc, room) => {
      if (!acc[room.roomType]) {
        acc[room.roomType] = 0;
      }
      acc[room.roomType]++
      return acc;
    }, {total: rooms.length})
    domUpdates.domRoomsAvailable(finalRooms);
    return finalRooms
  }

}

export default MainRepo;