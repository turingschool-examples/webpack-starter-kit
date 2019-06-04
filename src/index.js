import $ from "../node_modules/jquery";
import "./css/base.scss";
import "./images/overlook-logo.png";
import fetch from "cross-fetch";
import RoomsDefault from "./RoomsDefault";
import RoomServiceDefault from "./RoomServiceDefault";
import sData from "./data-sample";
import domUpdates from "./domUpdates";
import MainRepo from "./MainRepo";
import CustomersRepo from './CustomersRepo';
import RoomsRepo from './RoomsRepo';
import Customer from './Customer';

let users = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users').then(function(response) {
  return response.json()
});

let roomServices = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices').then(function(response) {
  return response.json()
});

let bookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings').then(function(response) {
  return response.json()
});

let rooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms').then(function(response) {
  return response.json()
});

let data = {'users': {}, 'roomServices': {}, 'bookings': {}, 'rooms': {}}

Promise.all([users, roomServices, bookings, rooms])

  .then(function(values) {
    data['users'] = values[0].users;
    data['roomServices'] = values[1].roomServices;
    data['bookings'] = values[2].bookings;
    data['rooms'] = values[3].rooms;
    return data;
  })
  .catch(error => console.log(`Error in promises ${error}`));


// setTimeout(timer, 1000);
// function timer() {
//   console.log(data);
// }



function today() {
  var fullDate = new Date();
  var twoDigitMonth =
    fullDate.getMonth().length + 1 === 1
      ? fullDate.getMonth() + 1
      : "0" + (fullDate.getMonth() + 1);
  var twoDigitDay =
    fullDate.getDate().length === 1
      ? fullDate.getDate()
      : "0" + fullDate.getDate()
  var currentDate =
    twoDigitDay + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
  return currentDate;
}
var hotelData;

setTimeout(start, 2000);
// bookingsData roomsData
function start() {
  

  const mainRepo = new MainRepo(data, today());
  hotelData = mainRepo.data;


  const roomsRepo = new RoomsRepo(hotelData, today());
  roomsRepo.roomsAvailable(today())


  const customersRepo = new CustomersRepo(hotelData, today());
  $("#customers-body-search-add-input").keyup(function() {
    let value = $("#customers-body-search-add-input").val();
    customersRepo.searchCustomerName(value);
  });

  const roomsDefault = new RoomsDefault(hotelData, today());
  roomsDefault.noRoomsAvailable();
  roomsDefault.percentageRoomsOccupied();
  roomsDefault.mostPopularDay();
  roomsDefault.leastPopularDay();

  const roomServiceDefault = new RoomServiceDefault(hotelData, today());
  roomServiceDefault.todayTotalIncome(today());
  roomServiceDefault.allServicesOfOneDay();
  


  $("#selected-name").click(function(e) {
    if ($(e.target).attr('class') === "selected-name__close-btn") {
      $("#selected-name").text("");
      $(".rooms-general-info").css('display', 'flex');
      $(".rooms-customer-info").css('display', 'none');

      $(".services-general-info").css('display', 'block');
      $(".services-customer-info").css('display', 'none');
    }
  });
   
  $("#datepicker").change(function() {
    let pickedDate = $("#datepicker").val();
    let arr = pickedDate.split("-");
    let fixedDate = `${arr[2]}/${arr[1]}/${arr[0]}`;

    const roomServiceDefault = new RoomServiceDefault(hotelData, fixedDate);
    roomServiceDefault.todayTotalIncome(today());
    roomServiceDefault.allServicesOfOneDay();
  })
  
  $("#datepicker-2").change(function() {
    let pickedDate = $("#datepicker-2").val();
    let arr = pickedDate.split("-");
    let fixedDate = `${arr[2]}/${arr[1]}/${arr[0]}`;

    const roomsRepo = new RoomsRepo(hotelData, today());
    roomsRepo.roomsAvailable(fixedDate)
  })

  function appendCustomerToDom(name) {
    $("#selected-name").text("");
    $("#selected-name").append(`<h4 class="selected-name__name">${name}</h4>`);
    $("#selected-name").append(`<button class="selected-name__close-btn">&times;</button>`)
  }

  function filterDataOfOneCustomer(name) {
    const customer = new Customer(hotelData, name)
    customer.customerBookingHistory();
    customer.customerServicesHistory();
  }

  function showAllAvailableRooms(date, roomType) {
    const mainRepo = new MainRepo(data, today());
    // hotelData = mainRepo.data;
    
    mainRepo.allAvailableRooms(today(), roomType);
  }

// add existing customer...

  $("#customers-body-found-name").click(function(e) {
    if ($(e.target).attr('class') === "names-found") {
      let name =  $(e.target).text()
      appendCustomerToDom(name);
      $("#customers-body-found-name").text("");
      $("#customers-body-search-add-input").val("");
      filterDataOfOneCustomer(name);
      showAllAvailableRooms(today(), 'All room types');
    }
  })

// add new customer....
  $("#customers-body-add-btn").click(function() {

    if ($("#customers-body-search-add-input").val() !== "" ) {
      let newCustomer = $("#customers-body-search-add-input").val();
      mainRepo.addNewCustomer(newCustomer);
      appendCustomerToDom(newCustomer);
      $("#customers-body-search-add-input").val("");
      $("#customers-body-add-btn").attr("disabled", true);
    }
  })

  // $("#datepicker-controller").change(function() {
  //   let pickedDate = $("#datepicker-controller").val();
  //   let arr = pickedDate.split("-");
  //   let fixedDate = `${arr[2]}/${arr[1]}/${arr[0]}`;
    
  //   showAllAvailableRooms(fixedDate, "roomType")
  // });

  $(".select-room").change(function() {
    let roomType =  $('.select-room').find(":selected").val();
    showAllAvailableRooms(date, roomType)
  })

  $(".available-all-rooms").click(function(e) {
    let roomNumber = $(e.target).next().text();
    let customerName = $('.selected-name__name').text();
    let roomType =  $('.select-room').find(":selected").val();
    $(e.target).text("Booked");
    const mainRepo = new MainRepo(data, today());
    mainRepo.bookingRoom(customerName, roomNumber);
    showAllAvailableRooms(date, roomType)
  })
}


const showTime = () => {
  var date = new Date()
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  var time = h + ":" + m + " " + session;
  domUpdates.time(time);

  setTimeout(showTime, 1000);
};
showTime();

const date = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let current_datetime = new Date();
  let formatted_date =
    days[current_datetime.getDay()] +
    "  |  " +
    months[current_datetime.getMonth()] +
    " " +
    current_datetime.getDate() +
    ", " +
    current_datetime.getFullYear();
  domUpdates.date(formatted_date);
};
date();

$(document).ready(function() {

  $(window).scroll(function() {
    if (window.scrollY >= 350) {
      $(".body-section-one-open-close-more").text("SCROLL DOWN");
      $(".arrow").css("transform", "rotate(45deg)");
      $(".arrow").css("marginTop", "0px");
    } else {
      $(".body-section-one-open-close-more").text("SCROLL UP");
      $(".arrow").css("transform", "rotate(-135deg)");
      $(".arrow").css("marginTop", "7px");
    }
    
  });

  
  $(".body-section-two__headers").click(function(e) {
    let target = $(e.target).text();
    if (target === 'CUSTOMERS'|| target === 'SERVICES') {
      $('li').css('color', 'rgba(255,255,255,0.4)');
      $(`.${$(e.target).attr('class')}`).css('color', '#fff');
      $('.content-body').css('display', 'none');
      $(`#${$(e.target).attr('data-id')}`).css('display', 'block');
    } else if (target === 'ROOMS' ) {
      $('li').css('color', 'rgba(255,255,255,0.4)');
      $(`.${$(e.target).attr('class')}`).css('color', '#fff');
      $('.content-body').css('display', 'none');
      $(`#${$(e.target).attr('data-id')}`).css('display', 'flex');
    }
  });
  
  

});
