class RoomService {
  constructor(data) {
    this.data = data;
  }

  returnAllRoomServices() {
    return this.data;
  }

  returnDailyTotalSpent(givenDate) {
    const forThisDate = this.data.filter(day => day.date === givenDate);
    return Math.round(100 * forThisDate.reduce((sum, order) => {
      sum += order.totalCost;
      return sum;
    }, 0)) / 100;
  }

  returnAllTimeTotalSpent() {
    return Math.round(100 * this.data.reduce((sum, order) => {
      sum += order.totalCost;
      return sum;
    }, 0)) / 100;
  }
}

export default RoomService;