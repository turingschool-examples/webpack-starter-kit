import domUpdates from "./domUpdates.js";

class RoomServiceRepo {
  constructor(roomServiceData, date) {
    this.roomServiceData = roomServiceData;
    this.date = date
    this.todayTotalIncome();
  }

  
  todayTotalIncome() {
    return this.roomServiceData.reduce((total, booking) => {
      if (this.date === booking.date) {
        total = total + booking.totalCost;
      }
      domUpdates.domTodayTotalIncome(total)
      return total;
    }, 0);
  }



}

export default RoomServiceRepo;
