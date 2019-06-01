import $ from "../node_modules/jquery";

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
    $('.time').text(currentTime);
  },

  date(currentDate) {
    $('.date').text(currentDate);
  },

  domAllServicesOfOneDay(services) {
    let data = Object.entries(services);
    var elements = $('<tr><th>Services</th><th>Quantity</th><th>Price</th></tr>');
    for (let i = 0; i < data.length; i++) {
    elements = elements.add('<tr><td>'+data[i][0]+'</td><td>'+data[i][1][0]+'</td><td>'+data[i][1][1]+'</td></tr>');
    }

    $('.services-general-info-services').append(elements);

  },


}