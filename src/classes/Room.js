class Room {
  constructor(room) {
    this.number = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.numBeds = room.numBeds;
    this.costPerNight = room.costPerNight;
  }

  getImageEndPath() {
    return this.roomType.replace(' ', '-') + '.jpeg';
  }

  getRoomName() {
    return this.roomType.split(' ').map(word => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
  }

  getBedSize() {
    return this.bedSize[0].toUpperCase() + this.bedSize.substring(1);
  }
}

export default Room;