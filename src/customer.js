const showFutureBooking = (bookings,user) => {
    const currentDate = new Date();
    return bookings.filter(booking => {
        const bookingDate = new Date(booking.date);
        return bookingDate > currentDate && booking.userID === user
    })
}
const showPastBookings = (bookings, user) => {
    const currentDate = new Date()
    return bookings.filter(booking => {
        const bookingDate = new Date(booking.date);
        return bookingDate < currentDate && booking.userID === user
    })
}
const calculateCostPerNight = (rooms, roomNumber, days = 1) => {
    let cost = 0 ;
    rooms.forEach(room => {
        if (room.number === roomNumber) {
            cost += room.costPerNight * days; 
        }
    });
    return cost;
}

const calculateFutureBookingCosts = (bookings,rooms,days = 1, user) => {
    let futureBookings = showFutureBooking(bookings, user)
    let totalCost = 0
    futureBookings.forEach(booking =>{
        const {roomNumber} = booking
        const cost = calculateCostPerNight(rooms, roomNumber, days)
        totalCost += cost            
    })
    return totalCost
}

const calculatePastBookingCosts = (bookings,rooms,days = 1, user) => {
    let pastBookings = showPastBookings(bookings, user)
    let totalCost = 0
    pastBookings.forEach(booking =>{
        const {roomNumber} = booking
        const cost = calculateCostPerNight(rooms, roomNumber, days)
        totalCost += cost            
    })
    return totalCost  
}

const calculateAllBookingCosts = (bookings, rooms, days = 1, user) => {
    let totalCost = 0;
    bookings.forEach(booking => {
        if (!user || booking.userID === user) {
            const { roomNumber } = booking;
            const cost = calculateCostPerNight(rooms, roomNumber, days);
            totalCost += cost;
        }
    });

    return totalCost
};



module.exports = {
    showFutureBooking,
    showPastBookings,
    calculateCostPerNight,
    calculateFutureBookingCosts,
    calculatePastBookingCosts,
    calculateAllBookingCosts 
}