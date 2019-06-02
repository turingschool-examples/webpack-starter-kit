import $ from "../node_modules/jquery";

export default {
  domPercentageRoomsOccupied(percentageOccupied) {
    $('.rooms-occupied-percentage').text(percentageOccupied);
  },

  domNoRoomsAvailable(noRoomsAvailable) {
    $('.rooms-available').text(noRoomsAvailable);
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
    let elements = $(`<tr><th class="header_hashtag">#</th><th class="header_services">Services</th><th class="header_quantity">Quantity</th><th class="header_price">Total price</th></tr>`);
    for (let i = 0; i < data.length; i++) {
    elements = elements.add(`<tr><td>${i + 1}</td><td>${data[i][0]}</td><td class="align-center">${data[i][1][0]}</td><td class="align-right">${data[i][1][1]}</td></tr>`);
    }
    $('.services-general-info-services').text("");
    if (data.length !== 0) {
      $('.services-general-info-services').append(elements);
      $(".services-title").text("Services of one day");
    } else {
      $('.services-general-info-services').append(`<p class="prompt">No services for that date...</p>`)
      $(".services-title").text("");
    }
    
  },

  domMostPopularDay(data) {
    let elements = $(`<tr><th class="header_hashtag">#</th><th class="days">Most popular day/s (${data.numOfDays}) </th></tr>`);
    for (let i = 0; i < data.dates.length; i++) {
    elements = elements.add(`<tr><td>${i + 1}</td><td>${data.dates[i]}</tr>`);
    }
    $(".rooms-most-popular-days").append(elements);
  },

  domLeastPopularDay(data) {
    let elements = $(`<tr><th class="header_hashtag">#</th><th class="days">Least popular day/s (${data.numOfDays}) </th></tr>`);
    for (let i = 0; i < data.dates.length; i++) {
    elements = elements.add(`<tr><td>${i + 1}</td><td>${data.dates[i]}</tr>`);
    }
    $(".rooms-least-popular-days").append(elements);
  },

  domSearchCustomerName(filtredCustomers) {
    
    let elements = $();
    for (let i = 0; i < filtredCustomers.length; i++) {
      elements = elements.add(`<li class="names-found">${filtredCustomers[i].name}</li>`);
    }
    if ($("#customers-body-search-input").val() === "") {
      $("#customers-body-found-name").val("");
    } else {
      $("#customers-body-found-name").text("");
      $("#customers-body-found-name").append(elements);
    }
  },

  domRoomsAvailable(rooms) {
    let data = Object.entries(rooms);
    let elements = $(`<tr><th class="header_hashtag">#</th><th class="room-type">Room type</th><th class="available-rooms">Available rooms</th><tr>`);
    for (let i = 1; i < data.length; i++) {
      elements = elements.add(`<tr><td>${i}</td><td>${data[i][0]}</td><td class="align-center">${data[i][1]}</td></tr>`);
    }
    elements = elements.add(`<tr><td></td><td>Total rooms available</td><td class="align-center">${data[0][1]}</td></tr>`);
    $(".rooms-available-rooms-table").text("");
    if (data.length !== 0) {
      $(".rooms-available-rooms-table").append(elements);
      $(".services-title-2").text(`Rooms available`);
    }
  },

  domAddNewCustomer(name) {
    this.domSearchCustomerName(name)
    console.log('okkkkk')
  }

}

// [ [total: 198,]
//   ['residential suite', 45]
//   [ 'single room', 65 ]
//   [ 'junior suite', 38 ]
//   [ suite, 50 ]
// ]