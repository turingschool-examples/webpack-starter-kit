import $ from 'jquery';

export default {
  domPercentageRoomsOccupied(percentageOccupied) {
    $('.rooms-occupied-percentage').text(percentageOccupied);
  },

  domRoomsAvailable(roomsAvailable) {
    $('.rooms-available').text(roomsAvailable);
  },

  domTodayTotalIncome(total) {
    $('.totdays-total-income').text(total);
  },

  time(currentTime) {
    $('.time').text(currentTime)
  },

  date(currentDate) {
    $('.date').text(currentDate)
  }

}