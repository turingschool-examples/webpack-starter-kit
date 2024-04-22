import { bookings } from "../test/mock-data"
const createUser = (id,name) => {
    let user = {
        id,
        name
    }
    return user
}

const createRoom = (number,roomType,bidet,bedSize,numBeds,costPerNight) => {
    let room = {
        number,
        roomType,
        bidet,
        bedSize,
        numBeds,
        costPerNight
    }
    return room
}
const createBooking = (id, userID,date,roomNumber) => {
    let booking = {
        id,
        userID,
        date,
        roomNumber
    }
    return booking
}
const showBooking = (id) => {
bookings.reduce((acc,booking)=>{
    console.log(booking)
}, {})
}

module.exports = {
    createUser,
    createRoom,
    createBooking,
    showBooking,
    //calculateCostPerNight    
}