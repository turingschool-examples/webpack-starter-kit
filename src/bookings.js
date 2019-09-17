class Bookings {
  constructor(customers, bookings, roomService, rooms, today) {
    this.customers = customers;
    this.bookings = bookings;
    this.roomService = roomService;
    this.rooms = rooms;
    this.today = today;
  }

  findAvailableRooms(day) {
    let occupiedRooms = this.bookings.filter(booking => booking.date === day).map(bookings => bookings.roomNumber)
    return this.rooms.filter(room => {
      return !occupiedRooms.includes(room.number)
      })
    };
  
    findBookedRooms(day) {
      return this.bookings.filter(booking => booking.date === day)
      };
  
    findRoomRevenue(day) {
      let occupiedRoomNums = this.bookings.filter(booking => booking.date === day).map(bookings => bookings.roomNumber)
      let occupiedRooms = this.rooms.filter(room => {
        return occupiedRoomNums.includes(room.number)
      });
      return parseInt(occupiedRooms.reduce((totalAmount, room) => {
        return totalAmount += room.costPerNight
      }, 0))
    }
  
    findRoomServiceRevenue(day) {
      return this.roomService.filter(order => order.date === day).reduce((totalAmount, order) => {
        return totalAmount += order.totalCost;
      }, 0)
    };
  
    findDayRevenue(day) {
      return this.findRoomRevenue(day) + this.findRoomServiceRevenue(day);
    }
  
    findOccupancyPercent(day) {
      return 100 - (this.findAvailableRooms(day).length * 2);
    }
  
    findDailyRoomServiceOrders(day) {
      return this.roomService.filter(order => order.date === day);
    } 
  
    findTotalRoomServiceRevenue() {
      return parseInt(this.roomService.reduce((total, order) => {
        return total += order.totalCost;
      }, 0));
    }
  
    findFoodOptions() {
      return this.roomService.reduce((foodOptions, order) => {
        if(!foodOptions.includes(order.food)) {
          foodOptions.push({
            food: order.food,
            totalCost: order.totalCost
          })
        }
        return foodOptions;
      }, [])
    }
  
    bookRoom(roomNum, date, customer) {
      let availableRooms = this.findAvailableRooms(date).map(room => room.number);
      if(availableRooms.includes(roomNum)) {
        let newBooking = {
          'userID': customer.id,
          'date': date,
          'roomNumber': roomNum
        };
        customer.rooms.push(this.rooms.find(room => room.number === roomNum))
        customer.bookings.push(newBooking);
        this.bookings.push(newBooking);
      };
    };
  
    unbookRoom(roomNum, date, customer) {
      let bookingIndex = this.bookings.findIndex(booking => booking.roomNumber === roomNum && booking.date === date);
      this.bookings.splice(bookingIndex, 1);
      let customerBookingIndex = customer.bookings.findIndex(booking => booking.roomNumber === roomNum);
      customer.bookings.splice(customerBookingIndex, 1)
      this.checkRooms(customer);
    };
    
    sortByType(prop, day) {
      let rooms = this.findAvailableRooms(day);
      if(prop === 'roomType' || prop === 'bedSize') {
        return rooms.sort((a, b) => {
          if(a[prop] < b[prop]) { 
            return -1; 
          }
          if(a[prop] > b[prop]) { 
            return 1 
          }
        })
      }
      return rooms.sort((a, b) => a[prop] - b[prop]);
    }
  
    findRoom(roomNum) {
      return this.rooms.find(room => room.number === roomNum)
    }
    
    checkRooms(customer) {
      if(customer.bookings.length === 0) {
        customer.rooms = [];
      } else {
        customer.rooms = [];
        let bookedRoomNums = customer.bookings.map(booking => booking.roomNumber);
        bookedRoomNums.forEach(number => {
          let room = this.rooms.find(room => room.number === number);
          customer.rooms.push(room);
        });
      };
    };
  
    upgradeRoom(currentRoom, newRoom, date, customer) {
      this.unbookRoom(currentRoom, date, customer);
      this.bookRoom(newRoom, date, customer);
    };
  
}


  module.exports = Bookings;