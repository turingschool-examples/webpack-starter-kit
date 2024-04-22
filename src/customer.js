const showFutureBooking = (bookings) => {
    const currentDate = new Date();
    return bookings.filter(booking => {
        const bookingDate = new Date(booking.date);
        return bookingDate > currentDate
    })
}
const showPastBookings = (bookings) => {
    const currentDate = new Date()
    return bookings.filter(booking => {
        const bookingDate = new Date(booking.date);
        return bookingDate < currentDate
    })
}
const calculateCostPerNight = (rooms, roomNumber, days) => {
    let cost = 0 ;
    rooms.forEach(room => {
        if (room.number === roomNumber) {
            cost += room.costPerNight * days; 
        }
    });
    return cost;
}

const calculateFutureBookingCosts = (bookings,rooms,days) => {
    let futureBookings = showFutureBooking(bookings)
    let totalCost = 0
    futureBookings.forEach(booking =>{
        const {roomNumber} = booking
        const cost = calculateCostPerNight(rooms, roomNumber, days)
        totalCost += cost            
    })
    return totalCost
}

const calculatePastBookingCosts = (bookings,rooms,days) => {
    let pastBookings = showPastBookings(bookings)
    let totalCost = 0
    pastBookings.forEach(booking =>{
        const {roomNumber} = booking
        const cost = calculateCostPerNight(rooms, roomNumber, days)
        totalCost += cost            
    })
    return totalCost  
}

const calculateAllBookingCosts = (bookings, rooms, days) => {
    let totalCost = 0
    bookings.forEach(booking =>{
        const {roomNumber} = booking
        const cost = calculateCostPerNight(rooms, roomNumber, days)
        totalCost += cost            
    })
    console.log(totalCost)
    return totalCost  
}



module.exports = {
    showFutureBooking,
    showPastBookings,
    calculateCostPerNight,
    calculateFutureBookingCosts,
    calculatePastBookingCosts,
    calculateAllBookingCosts 
}