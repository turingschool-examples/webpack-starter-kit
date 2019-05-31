class MainRepo {
    constructor(data) {
        this.data = data;
        this.rooms = data.rooms;
        this.bookings = data.bookings;
        this.orders = data.orders;
        this.date = this.findTodaysDate;
        this.roomsAvailable = this.findTotalRoomsAvailableToday;
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
        return this.bookings.filter(item => item.date !== date).map(item => item.roomNumber)
    }

    findPercentageOfRoomsAvailable(date) {
        const availableRooms = this.bookings.filter(item => item.date !== date);
        return (availableRooms.length/this.bookings.length) * 100

    }

    findOutstandingBalance(date) {
  
    }



}

export default MainRepo