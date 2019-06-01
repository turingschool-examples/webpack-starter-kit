class MainRepo {
    constructor(data) {
        this.data = data;
        this.guests = data.users.users;
        this.rooms = data.rooms.rooms;
        this.bookings = data.bookings.bookings;
        this.orders = data.roomServices.roomServices;
        this.date = this.findTodaysDate();
        // this.roomsAvailable = this.findTotalRoomsAvailableToday;
        // this.cashBalanceDue = cashBalanceDue;
        // this.cashPaid = cashPaid;
    }

    findTodaysDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        return today = dd + '/' + mm + '/' + yyyy;
    }

    findTotalRoomsAvailableToday(date) {
        return this.data.bookings.bookings.filter(item => item.date !== date).map(item => item.roomNumber).length
    }

    findPercentageOfRoomsAvailable(date) {
        const availableRooms = this.bookings.filter(item => item.date !== date);
        return (availableRooms.length/this.bookings.length) * 100

    }

    findOutstandingBalance(date) {
        const roomNumbers = this.data.bookings.bookings.filter(item => item.date === date).map(item => item.roomNumber)
  
        const cost = this.data.rooms.rooms.reduce((totalRoomCost, room) => {
          roomNumbers.forEach(roomNum => {
            if(room.number === roomNum) {
              totalRoomCost += room.costPerNight
            }
          })
          return totalRoomCost
        }, 0)
        
       const orders = this.data.roomServices.roomServices.filter(item => item.date === date).reduce((totalRoomService, order) => {
         totalRoomService += order.totalCost
         return totalRoomService
       }, 0)
       return cost + orders
    }



}

export default MainRepo