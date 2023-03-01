import './css/styles.css';
import './images/turing-logo.png'
import HotelData from './classes/hotelData.js'

//Fetch my data!
fetchData()

function fetchData() {
  const customers = fetch('http://localhost:3001/api/v1/customers')
    .then((res) => res.json())
  const rooms =  fetch('http://localhost:3001/api/v1/rooms')
    .then((res) => res.json())
  const bookings = fetch('http://localhost:3001/api/v1/bookings')
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
var currentMonth
var currentDay
var currentYear
var roomType

//Event Listeners and their variables

const title = document.querySelector('#page-title')
const logInButton = document.querySelector('#log-in-button')
const badLogin = document.querySelector('#bad-login')
const logOutButton = document.querySelector('#log-out')
const login = document.querySelector('#login')
const customerNav = document.querySelector('#customer-buttons')
const adminNav = document.querySelector('#admin-buttons')
const dataPane = document.querySelector('#info-pane-text')


logInButton.addEventListener('click', logIn)
logOutButton.addEventListener('click', logOut)

//log into page

function renderData() {
  console.log(hotelData)
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
  dataPane.innerText = `Daily Statistics`
}

//Customer logged in

const myInfoButton = document.querySelector('#my-info')
const bookingsButton = document.querySelector('#booking-button')
const bookHotelButton = document.querySelector('#book-new-button')
const statMain = document.querySelector('#stat-main')

myInfoButton.addEventListener('click', myInfo)
bookingsButton.addEventListener('click', myBookings)
bookHotelButton.addEventListener('click', bookHotel)

function myInfo() {
  statMain.innerHTML = `
  <h1 id="stat-title">Your profile info!</h2>`
  statMain.innerHTML += `
  <li>
    <h1>Name: </h1> 
    <h2> ${hotelData.customers[currentUser - 1].name}</h2>
  </li>
  <li>
    <h1>ID: </h1> 
    <h2> ${hotelData.customers[currentUser - 1].id}</h2>
  </li>
  <li>
  <h1>Location: </h1>
  <h2>Denver, CO </h2>
  </li>
  <li>
    <h1>Amount of trips: </h1>
    <h2>470 </h2>
  </li>
  `
}

function myBookings() {
  var userBookings = hotelData.bookings.filter(booking =>
    booking.userID === currentUser)
  console.log(userBookings)
  statMain.innerHTML = 
  `
  <h1 id="stat-title">You currently have ${userBookings.length} bookings!</h2>
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
    myBookings()
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

function bookHotel() {
  statMain.innerHTML = ''
  statMain.innerHTML = `
  <h1 id="stat-title">First, choose a month!</h2>`
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
  currentMonth = Event.target.value
  statMain.innerHTML = ''
  statMain.innerHTML = `
  <h1 id="stat-title">Now, let's choose a day!</h2>`
  const daysInMonth = getDays(2021, currentMonth);
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
  currentDay = Event.target.innerText
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
  currentYear = Event.target.innerText
  statMain.innerHTML = `
  <h1 id="stat-title" class="room-type">Choose Type of Room</h1>
  `
  var roomArray = hotelData.rooms.reduce((acc, room) => {
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
  roomType = Event.target.innerText.toLowerCase()
  if (currentDay < 10) {
    currentDay = 0 + currentDay 
  }
  if (currentMonth < 10) {
    currentMonth = 0 + currentMonth 
  }
  var date = `${currentYear}/${currentMonth}/${currentDay}`
  statMain.innerHTML = `
  <h1 id="stat-title">Available rooms on ${date}</h1>
  `
  var sameRoomType = hotelData.rooms
    .filter(room => room.roomType === roomType.toLowerCase())

  var takenThatDay = hotelData.rooms.reduce((acc, room) => {
    hotelData.bookings.forEach(booking => {
      if (booking.date === date && booking.roomNumber === room.number) {
        acc.push(booking.roomNumber)
      }
    })
    return acc
  }, [])

  console.log(sameRoomType)
  console.log(takenThatDay)
  console.log(takenThatDay.includes(25))

  sameRoomType.forEach(room => {
    console.log(takenThatDay.includes(room.number))
    console.log(room)
    if (!takenThatDay.includes(room.number)) {
      statMain.innerHTML +=
      `
      <button value="${room}" class="calender-day-button">
      ${room.number}</button>
      `
    }
  })
}

function confirmDate(Event) {
  currentYear = Event.target.innerText
  statMain.innerHTML = `
  <h1 id="stat-title" class="selected-date">You have chosen </h1>
  <h2>${currentMonth}/${currentDay}/${currentYear}</h2>
  <button id="book-it" class="book-button">Yes! Book It.</button>
  <button id="change-date" class="book-button">Change Booking Date.</button>
  `

  const bookNew = document.querySelector('#book-it')
  const changeDate = document.querySelector('#change-date')

  bookNew.addEventListener('click', bookNewHotel)
  changeDate.addEventListener('click', bookHotel)

}

function bookNewHotel() {
  let num = Math.floor(Math.random() * 400)
  var currentDate = currentYear + '/' + currentMonth + '/' + currentDay
  var yueh = JSON.stringify({
    userID: currentUser,
    date: currentDate,
    roomNumber: num })
  console.log(yueh)
  fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify({
      userID: currentUser,
      date: currentDate,
      roomNumber: num
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

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};