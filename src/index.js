import $ from "../node_modules/jquery";
import "./css/base.scss";
import "./images/overlook-logo.png";
import fetch from "cross-fetch";
import RoomsDefault from "./RoomsDefault";
import RoomServiceRepo from "./RoomServiceRepo";
import sData from "./data-sample";
import domUpdates from "./domUpdates";
import MainRepo from "./MainRepo";

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

setTimeout(start, 1000);
// bookingsData roomsData
function start() {
  const roomsDefault = new RoomsDefault(sData.bookings, sData.rooms, today());
  roomsDefault.noRoomsAvailable();
  roomsDefault.percentageRoomsOccupied();
  roomsDefault.mostPopularDay();
  roomsDefault.leastPopularDay();

  const roomServiceRepo = new RoomServiceRepo(sData.roomServices, today());
  roomServiceRepo.todayTotalIncome();
  roomServiceRepo.allServicesOfOneDay();
  const mainRepo = new MainRepo(sData);

  $("#customers-body-search-input").keyup(function() {
    let value = $("#customers-body-search-input").val();
    mainRepo.searchCustomerName(value);
  });


  $("#customers-body-found-name").click(function(e) {
     
    if ($(e.target).attr('class') === "names-found") {
      $("#selected-name").text("");
      $("#selected-name").append(`<h4 class="selected-name__name">${$(e.target).text()}</h4>`);
      $("#selected-name").append(`<button class="selected-name__close-btn">&times;</button>`)
      $("#customers-body-found-name").text("");
      $("#customers-body-search-input").val("");
    }
  })

  $("#selected-name").click(function(e) {
    if ($(e.target).attr('class') === "selected-name__close-btn") {
      $("#selected-name").text("");
    }
  });
   
  $("#datepicker").change(function() {
    let pickedDate = $("#datepicker").val();
    let arr = pickedDate.split("-");
    let fixedDate = `${arr[2]}/${arr[1]}/${arr[0]}`;

    const roomServiceRepo = new RoomServiceRepo(sData.roomServices, fixedDate);
    roomServiceRepo.allServicesOfOneDay();
  })
  

}

const showTime = () => {
  var date = new Date().toLocaleTimeString();
  // var h = date.getHours(); // 0 - 23
  // var m = date.getMinutes(); // 0 - 59
  // var session = "AM";

  // if (h == 0) {
  //   h = 12;
  // }

  // if (h > 12) {
  //   h = h - 12;
  //   session = "PM";
  // }

  // h = h < 10 ? "0" + h : h;
  // m = m < 10 ? "0" + m : m;

  // var time = h + ":" + m + " " + session;
  domUpdates.time(date);

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
    if (target === 'CUSTOMERS' || target === 'ROOMS' || target === 'SERVICES') {
      $('li').css('color', 'rgba(255,255,255,0.4)');
      $(`.${$(e.target).attr('class')}`).css('color', '#fff');
      $('.content-body').css('display', 'none');
      $(`#${$(e.target).attr('data-id')}`).css('display', 'block');
    }
  })
  

});
