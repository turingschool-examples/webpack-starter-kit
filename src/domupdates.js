import $ from 'jquery'
import Room from './rooms';

const domUpdates = {
  displayCurrentDate(date) {
    $('#tab-1__date').text(date)
  },

  displayTodaysAvailableRooms(date, data, room) {
    let numRooms = room.availableByDate(date, data).length
    $('#tab-1__insert-data').text(numRooms)
  }
}

export default domUpdates;