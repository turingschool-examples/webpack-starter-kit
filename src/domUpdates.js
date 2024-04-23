import { apiCall, fetchUser} from "./apiCalls";
import { calculateTotalCost, userBookings } from "./bookings";
import { buttonRender, mapRoomsFromBookings, renderRoomCards, renderUserCard } from "./render";
import { dataModel, apiData } from "./scripts";
import { filterRoomsByDate, filterRoomsByType } from "./search";

const profileButton = document.getElementById('user-profile');
const userProfile = document.getElementById('user-card')
const searchButton = document.getElementById('search-rooms');
const loginButton = document.getElementById('login');
const loginWarning = document.getElementById('invalid-login')
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const dateSelect = document.getElementById('date-select');
const roomDropdown = document.getElementById('room-type');
const search = document.getElementById('search')
const loginPage = document.getElementById('login-page')
const homePage = document.getElementById('homepage')
const bookingsRooms = document.getElementById('bookings-rooms')
const availableRooms = bookingsRooms.classList.contains('available')
//event listeners
loginButton.addEventListener('click',()=>{
    login(usernameField.value, passwordField.value)
});

searchButton.addEventListener('click',()=>{
    hideElements([userProfile])
    showElements([search])
    displaySearch()
});

profileButton.addEventListener('click',()=>{
    showElements([userProfile])
    hideElements([search])
    displayUser()
});

search.addEventListener('change',()=>{
    displaySearch()
});

//event handlers
function login(username, password){
    if(!username || !password){
        showElements([loginWarning]);
    } else {
        dataModel.customer = fetchUser(7);
        hideElements([loginPage, loginWarning]);
        showElements([homePage]);
        setTimeout(()=>{
            displayUser()
        },100)
    };
};
function displaySearch(){
    bookingsRooms.classList.add('available')
    const availableRooms = bookingsRooms.classList.contains('available')
    bookingsRooms.innerHTML=''
    let toRender = filterRoomsByDate(apiData.getRooms(),apiData.getBookings(),dateSelect.value)
    toRender = filterRoomsByType(toRender, roomDropdown.value)
    if(typeof toRender === 'object'){
        const roomCards = renderRoomCards(toRender, availableRooms)
        roomCards.forEach(card => {
            bookingsRooms.innerHTML+=card
        });
    } else {
        bookingsRooms.innerHTML = toRender
    }
    
}
function displayUser(){
    bookingsRooms.classList.remove('available')
    const availableRooms = bookingsRooms.classList.contains('available')
    bookingsRooms.innerHTML=''
    const user = dataModel.customer.getInformation().information
    const bookings = userBookings(user.id,apiData.getBookings());
    const totalSpent = calculateTotalCost(bookings,apiData.getRooms());
    userProfile.innerHTML = renderUserCard(user.name,totalSpent)
    if(typeof bookings === 'object'){
        const toRender = mapRoomsFromBookings(bookings, apiData.getRooms())
        const roomCards = renderRoomCards(toRender, availableRooms)
       
        roomCards.forEach(card => {
            bookingsRooms.innerHTML+= card  
        });
    } else {
        bookingsRooms.innerText = bookings
    }
}

function hideElements(elementArray) {
    elementArray.forEach((element) => {
      element.classList.add("hidden");
      element.ariaHidden = true;
    });
  }
  
  function showElements(elementArray) {
    elementArray.forEach((element) => {
      element.classList.remove("hidden");
      element.ariaHidden = false;
    });
  }
  