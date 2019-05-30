class Room {
  constructor(data) {
    this.data = data;
  }

  findByNumber(num) {
    return this.data.find(dayObj => dayObj.number === num)
  }

  filterByType(type) {
    return this.data.filter(dayObj => dayObj.roomType === type)
  }
}

export default Room;