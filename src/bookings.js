function userBookings(userID, bookings){
    const userBookings = bookings.filter((booking => booking.userID === userID));
    if(!userBookings[0]){
        return 'No bookings found.'
    }
    return userBookings
};
function getBookingCost(room){ 
    try{
        if(room.number){
            return{
                room: room.number,
                cost: room.costPerNight
            }
        }
    } catch(error){
        if(error instanceof TypeError){
            console.error('String passed in, no cost to find.')
        } else {
            logMyErrors(error)};
    };
    return {room: null, cost: 0.0};
};
export {
    userBookings,
    getBookingCost,
}