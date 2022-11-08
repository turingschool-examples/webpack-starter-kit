class Room {
  constructor(data) {
    this.number = data.number;
    this.roomType = data.roomType;
    this.bidet = data.bidet;
    this.bedSize = data.bedSize;
    this.numBeds = data.numBeds;
    this.costPerNight = data.costPerNight;
  }
}

export default Room;
