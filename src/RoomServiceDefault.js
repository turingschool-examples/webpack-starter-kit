import domUpdates from "./domUpdates.js";

class RoomServiceDefault {
  constructor(data, today, fixedDate) {
    this.data = data;
    this.today = today;
    this.fixedDate = fixedDate;
  }

  todayTotalIncome(today) {
    var grandTotal =  this.data.roomServices.reduce((total, booking) => {
      if (today === booking.date) {
        total = total + booking.totalCost;
      }
      return total;
    }, 0);
    let fixedTotal = grandTotal.toFixed(2);
    domUpdates.domTodayTotalIncome(fixedTotal);
    return fixedTotal;
  }

  allServicesOfOneDay() {
    let date = this.fixedDate || this.today;
    let todayServices = this.data.roomServices.reduce((acc, roomService) => {
      if (roomService.date === date ) {
        acc.push(roomService);
      }
      return acc;
    }, []);

    let services = todayServices.reduce((acc, service) => {
      acc[service.food] = [];
      acc[service.food][0] = todayServices.filter(s => s.food === service.food).length;
      acc[service.food][1] = acc[service.food][0] * service.totalCost
      return acc;
    }, {})
    domUpdates.domAllServicesOfOneDay(services);
    return services
  }

}

export default RoomServiceDefault;
