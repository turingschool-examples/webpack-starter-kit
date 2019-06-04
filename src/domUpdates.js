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
      elements = elements.add(`<li data-id="${filtredCustomers[i].id}" class="names-found">${filtredCustomers[i].name}</li>`);
    }
    if ($("#customers-body-search-add-input").val() === "") {
      $("#customers-body-found-name").text("");
    } else {
      $("#customers-body-found-name").text("");
      $("#customers-body-found-name").append(elements);
    }

    if ($("#customers-body-search-add-input").val() !== "" && filtredCustomers.length === 0) {
      $("#customers-body-add-btn").attr("disabled", false);

    } else {
      $("#customers-body-add-btn").attr("disabled", true);
    }
  },

  domRoomsAvailable(rooms) {
    let data = Object.entries(rooms);
    let elements = $(`<tr><th class="header_hashtag">#</th><th class="room-type">Room type</th><th class="available-rooms">Available rooms</th><tr>`);
    for (let i = 1; i < data.length; i++) {
      elements = elements.add(`<tr><td>${i}</td><td>${data[i][0]}</td><td class="align-center">${data[i][1]}</td></tr>`);
    }
    elements = elements.add(`<tr><td colspan="2">Total rooms available</td><td class="align-center">${data[0][1]}</td></tr>`);
    $(".rooms-available-rooms-table").text("");
    if (data.length !== 0) {
      $(".rooms-available-rooms-table").append(elements);
      $(".services-title-2").text(`Rooms available`);
    }
  },

  domCustomerBookingHistory(bookingHistory) {
    let data = Object.entries(bookingHistory);

    let elements = $(`<tr><th class="header_hashtag">#</th><th class="room-type">Room type</th><th class="available-rooms">Date</th><tr>`);
    
    for (let i = 0; i < data.length; i++) {
      elements = elements.add(`<tr><td>${i + 1}</td><td>${data[i][0]}</td><td class="align-center">${data[i][1]}</td></tr>`);
    }
    $(".rooms-customer-history-table").text("");
    $(".rooms-general-info").css('display', 'none');
    $(".rooms-customer-info").css('display', 'flex');

    if (data.length !== 0) {
      $(".rooms-customer-history-table").append(elements);
    } else {
      $(".rooms-customer-history-table").append(`<p class="prompt">No booking history available for the selected customer...</p>`);
    }
    console.log(bookingHistory)
    
  },

  domCustomerServicesHistory(serviceHistory) {
    let data = Object.entries(serviceHistory)[0][1];
    let total = Object.entries(serviceHistory)[1][1]

    let elements = $( `<tr><th class="header_hashtag">#</th><th class="room-type">Service</th><th class="available-rooms">Date</th><th>Cost</th><tr>`);
    
    for (let i = 0; i < data.length; i++) {
      elements = elements.add(`<tr><td>${i + 1}</td><td>${data[i].food}</td><td class="align-center">${data[i].date}</td><td class="align-center">${data[i].totalCost}</td></tr>`);
    }

    elements = elements.add(`<tr><td class="align-center" colspan="3">Total</td><td class="align-center">${total}</td></tr>`);


    $(".services-customer-history-table").text("");
    $(".services-general-info").css('display', 'none');
    $(".services-customer-info").css('display', 'block');
    if (data.length !== 0) {
      $(".services-customer-history-table").append(elements);
    } else {
      $(".services-customer-history-table").append(`<p class="prompt">No service history available for the selected customer...</p>`);
    }
  },

  domAllAvailableRooms(availableRooms) {
    let elements = $();

    for (let i = 0; i < availableRooms.length; i++) {
      let bedit = availableRooms[i].bidet === true ? "Yes" : "No";

      elements = elements.add(`<div class="one-room">
        <p>Room type: <span>${availableRooms[i].roomType}<span></p>
        <p>Number of beds: <span>${availableRooms[i].numBeds}<span></p>
        <p>Bed size: <span>${availableRooms[i].bedSize}<span></p>
        <p>Bidet: <span>${bedit}<span></p>
        <button class="book" type="button" >Book</button>
        <p class="hidden">${availableRooms[i].number}</p>
      </div>`)
    }
    $(".available-all-rooms").text("");
    $(".available-all-rooms").append(elements);
    $(".available-all-rooms-title").text(`Available rooms | ${availableRooms.length}`)

  }

}