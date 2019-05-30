import Data from './data';
import fetch from 'cross-fetch';

class MainRepo {
    constructor(data) {
        this.data = data;
        this.date = date;
        this.roomsAvailable = roomsAvailable;
        this.cashBalanceDue = cashBalanceDue;
        this.cashPaid = cashPaid;
    }

    findTotalRoomsAvailableToday() {
        this.data.bookings.filter(item => item.date !== this.date)
    }

    findAvailableRoomsByPercentage() {

    }

    findOutstandingBalance() {

    }



}

export default MainRepo