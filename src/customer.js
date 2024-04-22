const showBooking = (bookings,id) => {
    return bookings.find(booking => {
        return booking.id === id
        
    })
}
const calculateCostPerNight = () =>{}

const calculateBookingCost = (bookings, id, days) => {}

module.exports = {
    showBooking,
    calculateCostPerNight
    //calculateBookingCost   
}