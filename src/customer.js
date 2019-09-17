class Customer {
  constructor(id, name, userBookings = [], userRoomServices = [], userRooms = [], menu, date) {
    this.id = id;
    this.name = name;
    this.bookings = userBookings;
    this.roomService = userRoomServices;
    this.rooms = userRooms;
    this.menu = menu;
    this.date = date;
    this.currentDish;
    this.currentPrice;
  }

  calculateRoomCost(date) {
    if(this.bookings.find(booking => booking.date === date)) {
      let roomNum = parseInt(this.bookings.find(booking => booking.date === date).roomNumber);
      let costs = this.rooms.find(room => room.number === roomNum).costPerNight;
      return parseFloat(costs.toFixed(2));
    } else {
      return 0;
    }
  };
  
  calculateRoomServiceCost(date) {
    if(this.roomService.find(order => order.date === date)) {
      let costs = this.roomService.reduce((totalCost, order) => {
        if(order.date === date) {
          totalCost += order.totalCost;
        }
        return totalCost;
      }, 0)
      return parseFloat(costs.toFixed(2));
    } else {
      return 0;
    }
  }

  calculateBill(date) {
    let costs = this.calculateRoomCost(date) + this.calculateRoomServiceCost(date);
    return parseFloat(costs.toFixed(2));
  }
  
  calculateAllBookings() {
    if(this.bookings.length > 0) {
      let roomNums = this.bookings.map(booking => booking.roomNumber);
      let roomCosts = roomNums.map(number => {
        return this.rooms.find(room => room.number === number).costPerNight;
      });
      return roomCosts.reduce((total, cost) => {
        return total += cost;
      }, 0)
    } else {
      return 0;
    }
  }

  calculateAllRoomService() {
    if(this.roomService.length > 0) {
      let costs = this.roomService.reduce((totalCost, order) => {
          totalCost += order.totalCost;
        return totalCost;
      }, 0)
      return parseFloat(costs.toFixed(2));
    } else {
      return 0;
    }
  }

  calculateAllCosts() {
    let costs = this.calculateAllBookings() + this.calculateAllRoomService();
    return parseFloat(costs.toFixed(2));
  }

  orderRoomService(food, date) {
    let dish = this.menu.find(plate => plate.food === food);
    this.roomService.push({
      userID: this.id,
      date: date,
      food: dish.food,
      totalCost: dish.totalCost
    })
  }

  cancelRoomService(food, date) {
   let plateIndex = this.roomService.findIndex(order => order.food === food && order.date === date);
   this.roomService.splice(plateIndex, 1);
  }

  findTodayBooking(day) {
    return this.bookings.find(booking => booking.date === day);
  }

}

  module.exports = Customer;