import domUpdates from "./domUpdates.js";

class RoomServiceRepo {
  constructor(roomServiceData, today, fixedDate) {
    this.roomServiceData = roomServiceData;
    this.today = today;
    this.fixedDate = fixedDate;
    this.todayTotalIncome();
  }

  
  todayTotalIncome(today) {
    return this.roomServiceData.reduce((total, booking) => {
      if (today === booking.date) {
        total = total + booking.totalCost;
      }
      domUpdates.domTodayTotalIncome(total)
      return total;
    }, 0);
  }

  allServicesOfOneDay() {
    let date = this.fixedDate || this.today;
    let todayServices = this.roomServiceData.reduce((acc, roomService) => {
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

export default RoomServiceRepo;
