import './css/styles.css';
import './images/turing-logo.png'
import HotelData from './classes/hotelData.js'
import Booking from './classes/booking.js'

//Fetch my data!
fetchData()

function fetchData() {
  const customers = fetch('https://overlook-api-jfogiato.vercel.app/api/v1/customers')
    .then((res) => res.json())
  const rooms =  fetch('https://overlook-api-jfogiato.vercel.app/api/v1/rooms')
    .then((res) => res.json())
  const bookings = fetch('https://overlook-api-jfogiato.vercel.app/api/v1/bookings')
    .then((res) => res.json())

  Promise.all([customers, rooms, bookings])
    .then((data) => {
      let allData = {
        customers: data[0].customers,
        rooms: data[1].rooms,
        bookings: data[2].bookings
      }
      return allData
    })
    .then((allData) => {
      hotelData = new HotelData(allData)
      renderData()
    })
}

//Global variables

var isAdmin = JSON.parse(sessionStorage.getItem('isAdmin')) || false
var loggedIn = JSON.parse(sessionStorage.getItem('loggedIn')) || false
var hotelData
var currentUser = 50
var roomsBooked
var userID
var currentEvent

var booking

//Current Date

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

if (day < 10) {
  day = `0${day}`
}
if (month < 10) {
  month = `0${month}`
}

//The Daily Statistics page is set to the sample date because 
//there is no data for todays date. 
var todaysDate = year + '/' + month + '/' + day
var sampleDate = '2022/04/22'

  
//Event Listeners and their variables

const title = document.querySelector('#page-title')
const logInButton = document.querySelector('#log-in-button')
const badLogin = document.querySelector('#bad-login')
const logOutButton = document.querySelector('#log-out')
const login = document.querySelector('#login')
const customerNav = document.querySelector('#customer-buttons')
const adminNav = document.querySelector('#admin-buttons')
const dataPane = document.querySelector('#info-pane-text')
const dataArea = document.querySelector('#data')


logInButton.addEventListener('click', logIn)
logOutButton.addEventListener('click', logOut)

//log into page

function renderData() {
  bookHotelButton.style.display = 'none'
  if (loggedIn === true) {
    checkPrivlage()
  }
}

function logIn() {
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value
  if (username === 'customer50' && password === 'overlook2021') {
    sessionStorage.setItem('isAdmin', false)
    sessionStorage.setItem('loggedIn', true)
    checkPrivlage()
  } else if (username === 'manager' && password === 'overlook2021') {
    sessionStorage.setItem('isAdmin', true)
    sessionStorage.setItem('loggedIn', true)
    checkPrivlage()
  } else {
    badLogin.style.display = 'block'
    setTimeout(() => {
      badLogin.style.display = 'none'
    }, 1500)
  }
}

function checkPrivlage() {
  isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'))
  if (isAdmin === true) { 
    adminView()
  } else {
    customerView()
  }
}

function logOut() {
  sessionStorage.clear()
  window.location.href = 'index.html' 
}

//2 views

function customerView() {
  customerNav.style.display = 'block'
  login.style.display = 'none'
  logOutButton.style.display = 'block'
  dataPane.innerText = `Hello, ${hotelData.customers[currentUser - 1].name}`
  myInfo()
}

function adminView() {
  adminNav.style.display = 'block'
  login.style.display = 'none'
  logOutButton.style.display = 'block'
  title.innerText = "Overlook Admin"
  dataPane.innerText = `Admin Menu`
  dailyStats()
}

//Customer logged in

const myInfoButton = document.querySelector('#my-info')
const bookingsButton = document.querySelector('#booking-button')
const bookHotelButton = document.querySelector('#book-new-button')
const pastBookingsButton = document.querySelector('#past-bookings')
const statMain = document.querySelector('#stat-main')

const dalyStatButton = document.querySelector('#daily-stat-button')
const customerDataButton = document.querySelector('#customer-data-button')

myInfoButton.addEventListener('click', myInfo)
bookingsButton.addEventListener('click', myBookings)
pastBookingsButton.addEventListener('click', pastBookings)
bookHotelButton.addEventListener('click', bookHotel)

dalyStatButton.addEventListener('click', dailyStats)
customerDataButton.addEventListener('click', customerData)

//Customer Logged In Functionality

function myInfo() {
  bookHotelButton.style.display = 'block'
  statMain.innerHTML = `
  <h1 id="stat-title">Your profile info!</h2>`
  statMain.innerHTML += `
  <h1>Name: </h1> 
  <h2> ${hotelData.customers[currentUser - 1].name}</h2>
  <h1>ID: </h1> 
  <h2> ${hotelData.customers[currentUser - 1].id}</h2>
  <h1>Location: </h1>
  <h2>Denver, CO </h2>
  <h1>Amount of trips: </h1>
  <h2>470 </h2>
  `
}

function myBookings() {
  var userBookings = hotelData.bookings.filter(booking =>
    booking.userID === currentUser)
  statMain.innerHTML = 
  `
  <h1 id="stat-title">All your bookings: ${userBookings.length} bookings!</h2>
  `
  userBookings.forEach(booking => {
    statMain.innerHTML +=
    `
    <button value="${booking.id}" 
    class="booking-date">${booking.date}</button>
    `
  })
  const bookedButtons = document.querySelectorAll('.booking-date')
  bookedButtons.forEach(button => {
    button.addEventListener('click', bookingData)
  })
}

function pastBookings() {
  var userBookings = hotelData.bookings.filter(booking =>
    booking.userID === currentUser && 
    new Date(todaysDate).valueOf() > new Date(booking.date).valueOf())
  statMain.innerHTML = 
  `
  <h1 id="stat-title">You have 
  ${userBookings.length} past bookings!</h2>
  `
  userBookings.forEach(booking => {
    statMain.innerHTML +=
    `
    <button value="${booking.id}" 
    class="booking-date">${booking.date}</button>
    `
  })
  const bookedButtons = document.querySelectorAll('.booking-date')
  bookedButtons.forEach(button => {
    button.addEventListener('click', bookingData)
  })
}

function bookingData(Event) {
  dataArea.innerHTML = ''
  var booking = hotelData.bookings
    .filter(booking => booking.id === Event.target.value)
  statMain.innerHTML = `
  <h1 id="stat-title">Your Booking info!</h2>`
  statMain.innerHTML += `
  <li>
  <h1>Booking  Date: </h1>
  <h2>${booking[0].date}</h2>
  </li>
  <li>
    <h1>Room Number</h1>
    <h2>${booking[0].roomNumber}</h2>
  </li>
  <li>
  <h1>Booking ID</h1>
  <h2>${booking[0].id}</h2>
</li>
<button id="remove-booking" class="book-button">Remove Booking :(</button>
<button id="back-button" class="book-button">Back to Bookings</button>
  `

  const removeBook = document.querySelector('#remove-booking')
  const backButton = document.querySelector('#back-button')
   
  backButton.addEventListener('click', () => {
    if (isAdmin === true ) {
      displayCustomerInfo(currentEvent)
    } else {
      myBookings()
    }
  })
  removeBook.addEventListener('click', () => {
    removeBooking(booking[0])
  })
}

function removeBooking(booking) {
  fetch('http://localhost:3001/api/v1/bookings/' + booking.id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error('Issue with request: ', response.status)
      }
      return response.json()
    })
    .catch(() => alert('Error, unable to find the bookings API'))
  setTimeout(() => {
    location.reload() 
  }, 500)
}

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

// Manager logged in functionality

function dailyStats() {
  bookHotelButton.style.display = 'none'
  dataArea.innerHTML = ""
  roomsBooked = hotelData.bookings
    .filter(booking => booking.date === sampleDate)
  let totalRevenue = roomsBooked.reduce((acc, room) => {
    acc += hotelData.rooms[room.roomNumber].costPerNight
    return acc
  }, 0)
  statMain.innerHTML = `
  <h1>Rooms booked today: </h1> 
  <h2> ${roomsBooked.length}</h2>
  <h1>Rooms available today: </h1> 
  <h2> ${hotelData.rooms.length - roomsBooked.length}</h2>
  <h1>Percentage of rooms available today: </h1> 
  <h2> ${Math.floor(roomsBooked.length / hotelData.rooms.length * 1000)}%</h2>
  <h1>Total Revenue Today</h1>
  <h2>$${totalRevenue}</h2>
  `
}

function customerData() {
  bookHotelButton.style.display = 'none'
  updateResult("")
  statMain.innerHTML = `
  <h1 id="stat-title">Search for a customer here!</h1>
  <label id="label" for="search">Enter Customer's name</label>
  <input id="search" class="search-customer" 
  placeholder="Enter Username" required>  
  `

  var search = document.querySelector('.search-customer')
  search.addEventListener("input", (event) => {
    var searchValue = event.target.value.toLowerCase();
    updateResult(searchValue);
  });
}

function updateResult(searchValue) {
  // let data = hotelData.customers.map(customer => customer.name)
  dataArea.innerHTML = ""
  var filterNames = hotelData.customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(searchValue)
    );
  })
  let maxNames = 0
  filterNames.forEach(customer => {
    maxNames++
    if (maxNames < 25) {
      dataArea.innerHTML +=
      `
      <button value="${customer.id}"
       class="name-button">${customer.name}</button>
      `
    }
  })
  var nameButtons = document.querySelectorAll('.name-button')
  nameButtons.forEach(button => {
    button.addEventListener('click', displayCustomerInfo)
  })
}

function displayCustomerInfo(Event) {
  bookHotelButton.style.display = 'block'
  bookHotelButton.innerText = "Book for User"
  bookHotelButton.style.color = "#4d194d"
  currentEvent = Event
  userID = Event.target.value
  dataArea.innerHTML = ''
  statMain.innerHTML = 
  `
  <h1 id="stat-title">All current bookings for ${Event.target.innerHTML}</h1>
  `

  var userBookings = hotelData.bookings.filter(booking =>
    booking.userID === parseInt(userID))
  var bookedRooms = []

  userBookings.forEach(booking => {
    bookedRooms.push(booking.roomNumber)
    dataArea.innerHTML +=
      `
      <button value="${booking.id}" 
      class="booking-date">${booking.date}</button>
      `
  })

  var totalCost = calculateTotalCost(bookedRooms)

  statMain.innerHTML =
  `
  <h1 id="stat-title">All current bookings for ${Event.target.innerHTML} 
  - Total money spent: $${Math.floor(totalCost)}</h1>
  `

  const bookedButtons = document.querySelectorAll('.booking-date')
  bookedButtons.forEach(button => {
    button.addEventListener('click', bookingData)
  })  

}

function calculateTotalCost(bookedRooms) {
  return bookedRooms.reduce((acc, room) => {
    hotelData.rooms.forEach(room2 => {
      if (room === room2.number) {
        acc += room2.costPerNight
      }
    })
    return acc
  }, 0)
}

//Book New Hotel Button

function bookHotel() {
  dataArea.innerHTML = ''
  statMain.innerHTML = `
  <h1 id="stat-title">First, choose a month!</h2>`
  booking = new Booking(hotelData)
  genCalender()
}

function genCalender() {
  statMain.innerHTML += 
  `
  <section id="month-buttons">
    <button value="1" class="calender-month-button">January</button>
    <button value="2" class="calender-month-button">February</button>
    <button value="3" class="calender-month-button">March</button>
    <button value="4" class="calender-month-button">April</button>
    <button value="5" class="calender-month-button">May</button>
    <button value="6" class="calender-month-button">June</button>
    <button value="7" class="calender-month-button">July</button>
    <button value="8" class="calender-month-button">August</button>
    <button value="9" class="calender-month-button">September</button>
    <button value="10" class="calender-month-button">October</button>
    <button value="11" class="calender-month-button">November</button>
    <button value="12" class="calender-month-button">December</button>
  </section>
    `
  const calenderButtons = document.querySelectorAll('.calender-month-button')
  calenderButtons.forEach(button => {
    button.addEventListener('click', chooseDay)
  })
}

function chooseDay(Event) {
  booking.currentMonth = Event.target.value
  statMain.innerHTML = ''
  statMain.innerHTML = `
  <h1 id="stat-title">Now, let's choose a day!</h2>`
  const daysInMonth = getDays(2021, booking.currentMonth)
  for (var i = 1; i < daysInMonth + 1; i++) {
    statMain.innerHTML += 
    `
    <button value="${i}" class="calender-day-button">${i}</button>
    `
  }
  const dayButtons = document.querySelectorAll('.calender-day-button')
  dayButtons.forEach(button => {
    button.addEventListener('click', chooseYear)
  })
}

function chooseYear(Event) {
  booking.currentDay = Event.target.innerText
  statMain.innerHTML = ''
  for (var i = 2019; i < 2037; i++) {
    statMain.innerHTML += 
    `
    <button value="${i}" class="calender-year-button">${i}</button>
    `
  }
  const yearButtons = document.querySelectorAll('.calender-year-button')
  yearButtons.forEach(button => {
    button.addEventListener('click', typeOfRoom)
  })
}

function typeOfRoom(Event) {
  booking.currentYear = Event.target.innerText
  statMain.innerHTML = `
  <h1 id="stat-title" class="room-type">Choose Type of Room</h1>
  `
  hotelData.rooms.reduce((acc, room) => {
    if (!acc.includes(room.roomType)) {
      statMain.innerHTML +=
      `
      <button class="room-type-button">${room.roomType}</button>
      `
      acc.push(room.roomType)
    }
    return acc
  }, [])
  var roomTypeButton = document.querySelectorAll('.room-type-button')
  
  roomTypeButton.forEach(roomButton => {
    roomButton.addEventListener('click', roomsAvailable)
  })
}

function roomsAvailable(Event) {
  booking.roomType = Event.target.innerText.toLowerCase()
  booking.addZeros()
  booking.setDate()
  statMain.innerHTML = `
  <h1 id="stat-title">Available rooms on ${booking.date}</h1>
  `
  var sameRoomType = booking.filterRoomType()

  var takenThatDay = booking.takenThatDay()
  if (takenThatDay.length === 25) {
    statMain.innerHTML = `
    <h1 id="stat-title">No available rooms</h1>
    `
  } else {
    sameRoomType.forEach(room => {
      if (!takenThatDay.includes(room.number)) {
        statMain.innerHTML +=
        `
        <button value="${room.number}" class="available-room-button">
        ${room.number}</button>
        `
      }
    })
  }
  var roomButtons = document.querySelectorAll('.available-room-button')

  roomButtons.forEach(button => {
    button.addEventListener('click', confirmRoomDate)
  })
}

function confirmRoomDate(Event) {
  booking.roomNum = JSON.parse(Event.target.value)
  statMain.innerHTML = `
  <h1 id="stat-title" class="selected-date">You have chosen </h1>
  <h2>Room #${booking.roomNum} on 
  ${booking.currentMonth}/${booking.currentDay}/${booking.currentYear}</h2>
  <button id="book-it" class="book-button">Yes! Book It.</button>
  <button id="change-date" class="book-button">Change Booking Date.</button>
  `

  const bookNew = document.querySelector('#book-it')
  const changeDate = document.querySelector('#change-date')

  bookNew.addEventListener('click', bookNewHotel)
  changeDate.addEventListener('click', bookHotel)

}

function bookNewHotel() {
  var currentDate = 
  booking.currentYear + '/' + booking.currentMonth + '/' + booking.currentDay
  if (isAdmin === true) {
    currentUser = parseInt(userID)
  }
  fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify({
      userID: currentUser,
      date: currentDate,
      roomNumber: booking.roomNum
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error('Issue with request: ', response.status)
      }
      return response.json()
    })
    .catch(() => alert('Error, unable to find the bookings API'))
  setTimeout(() => {
    location.reload() 
  }, 500)
}