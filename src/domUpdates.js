
import $ from 'jquery';
import Hotel from './hotel.js';
const domUpdates = {
  startOnMainTab() {
    $('.section__display article').hide();
    $('.section__display article:first').show();
    $('.main__section--tabs li:first').addClass('tab-active');
  },

  changeTabs(event, _this) {
    event.preventDefault();
    $('.section__display li').removeClass('tab-active a');
    $(_this).parent().addClass('tab-active');
    $('.section__display article').hide();
    $($(_this).attr('href')).show();
  },

  getDate(hotel) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
  
    today = `${yyyy}/${mm}/${dd}`;
    $('.span__date').html(today);
    hotel.today = today
  },

  

  displayDate() {
    $('.main__today--date').html($('.span__date').val());
  },

  displayRoomsAvailable(hotel) {
    $('.main__available--rooms').html(hotel.roomsAvailable(hotel.today));
  },

  displayRoomsOccupied(hotel) {
    $('.main__occupied--percent').text(`${hotel.percentOccupied(hotel.today)}%`);
  },

  displaySearchResults(matches) {
    $('.search__list').empty();
    if(matches.length > 0 && matches.length < 100) {
      let searchHtml = matches.slice(0, 10).map(match => `
      <article  class="search__customer">
      <h4>${match.name}</h4>
      </article>
      `).join('');
      $('.search__list').append(searchHtml);
    }
  },

  displayCustomer(name, bill, todayRoomService, allTimeRoomService) {
    $('.span__customer').html(name);
    $('.search__list').empty();
    $('.main__aside--input').val('');
    $('.main__customer-total-bill').text(`Today's charges: $${bill}`);
    $('.today-room-service').text(`Today's Room Service: $${todayRoomService}`);
    $('.all-time-room-service').text(`Room Service All Time: $${allTimeRoomService}`)
  },

  displayBookings(customer, booking) {
    $('.customer-bookings-body').empty()
    if(!booking) {
      $('.customer__book-room').show();
      $('.customer__book-room').attr('disabled', false);
      $('.customer__booking-box').hide();
      customer.bookings.forEach(currentBooking => {
        $('.customer-bookings-body').append(`
        <tr class="table__room-number" data-room="${currentBooking.roomNumber}">
          <td>${currentBooking.date}</td>
          <td>${currentBooking.roomNumber}</td>
        </tr>
        `)
      })
      customer.roomService.forEach(order => {
        $('.current-customer-orders').append(`
        <tr>
        <td>${customer.name}</td>
        <td>${order.date}</td>
        <td>${order.food}</td>
        <td>${order.totalCost}</td>
        </tr>
        `)
      })
    }
    if(booking) {
      $('.customer__fees-box').show();
      $('.customer-bookings-table').show();
      $('.customer__book-room').hide();
      $('.customer__booking-box').show();
      $('.customer__booked-name').text(`${customer.name}`);
      $('.customer__booked-date').text(`Date: ${booking.date}`);
      $('.customer__booked-room').text(`Room Number: ${booking.roomNumber}`);
      customer.bookings.forEach(currentBooking => {
        $('.customer-bookings-body').append(`
        <tr class="table__room-number" data-room="${currentBooking.roomNumber}" data-date="${currentBooking.date}">
          <td>${currentBooking.date}</td>
          <td>${currentBooking.roomNumber}</td>
        </tr>
        `)
      })
      customer.roomService.forEach(order => {
        $('.current-customer-orders').append(`
        <tr>
        <td>${customer.name}</td>
        <td>${order.date}</td>
        <td>${order.food}</td>
        <td>${order.totalCost}</td>
        </tr>
        `)
      })
    }
  },

  dailyBookings(menu) {
    menu.forEach(dish => {
      $('.today-menu-body').append(`
      <tr class="table__menu-row" data-dish="${dish.food}" data-price="${dish.totalCost}">
        <td>${dish.food}</td>
        <td>$${dish.totalCost}</td>
      </tr>
      `)
    })
  },

  appendSortedRooms(rooms) {
    $('.available-rooms-body').empty();
    rooms.forEach(room => {
      $('.available-rooms-body').append(`
      <tr class="table__room-number" data-room="${room.number}">
        <td>${room.number}</td>
        <td>${room.roomType}</td>
        <td>${room.bidet}</td>
        <td>${room.bedSize}</td>
        <td>${room.numBeds}</td>
        <td>${room.costPerNight}</td>
      </tr>
      `)
    })
  },

  showBookRoomPrompt(room) {
    $('.room__booking-box').show();
    $('.book__room-num').text(`${room.number}`);
  },

  showUpgradeRoomPrompt(room) {
    $('.room__upgrade-box').show();
    $('.book__room-num').text(`${room.number}`);
  }, 

  showUnbookWarning(room) {
    $('.customer__unbook-box').show();
    $('.unbook-warning').text(`Unbook Room: ${room.number}?`)
  },

  showFoodLabel(dish, price) {
    $('.orders__food-box').show();
    $('.orders__current-order').text(`Order a ${dish} for $${price}?`);
  },

  updateOrderTable(orders) {
    $('.customer-orders-body').empty();
    $('.customer__search-input').val('');
    orders.forEach(order => {
      $('.customer-orders-body').append(`
      <tr>
        <td>${order.userID}</td>
        <td>${order.date}</td>
        <td>${order.food}</td>
        <td>${order.totalCost}</td>
      </tr>
      `)
    })
  },

  displayNewCustomer(name) {
    $('.search__list').empty();
    $('.header__search-input').val('');
    $('.header__current-customer').text(`Current Customer:  ${name}`);
    $('.main__panel-container .main__panel-tabs li.active').removeClass('active'); 
    $('.main__panel-container .panel.active').hide();
    $('.customer-tab').addClass('active');
    $('#customer').slideDown(300, function() {
      $(this).addClass('active');
    });
  },
  
  displayNewCustomerShowHide() {
    $('.customer__book-room').show();
    $('.customer__book-room').attr('disabled', false);
    $('.customer__booking-box').hide();
    $('.customer__fees-box').hide();
    $('.customer-bookings-table').hide();
  },
}

export default domUpdates;