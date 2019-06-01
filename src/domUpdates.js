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
    let elements = $(`<tr><th>#</th><th>Services</th><th>Quantity</th><th>Total price</th></tr>`);
    for (let i = 0; i < data.length; i++) {
    elements = elements.add(`<tr><td>${i + 1}</td><td>${data[i][0]}</td><td>${data[i][1][0]}</td><td>${data[i][1][1]}</td></tr>`);
    }
    $('.services-general-info-services').append(elements);
  },

  domMostPopularDay(data) {
    let elements = $(`<tr><th>#</th><th>Most popular day/s (${data.numOfDays}) </th></tr>`);
    for (let i = 0; i < data.dates.length; i++) {
    elements = elements.add(`<tr><td>${i + 1}</td><td>${data.dates[i]}</tr>`);
    }
    $(".rooms-most-popular-days").append(elements);
  },



  domLeastPopularDay(data) {
    let elements = $(`<tr><th>#</th><th>Least popular day/s (${data.numOfDays}) </th></tr>`);
    for (let i = 0; i < data.dates.length; i++) {
    elements = elements.add(`<tr><td>${i + 1}</td><td>${data.dates[i]}</tr>`);
    }
    $(".rooms-least-popular-days").append(elements);
  }

}