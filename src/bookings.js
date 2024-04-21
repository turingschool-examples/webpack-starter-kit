import { bookings } from "../test/test-data";

function userBookings(userID, bookings){
    const userBookings = bookings.filter((booking => booking.userID === userID));
    if(!userBookings[0]){
        return 'No bookings found.'
    }
    return userBookings
};

function getBookingCost(rooms, roomNumber){
    try{
        const cost = (rooms.find((element) => 
        element.number === roomNumber)).costPerNight
        return cost
    } catch (error){
        if(error instanceof TypeError){
            console.error('No cost to find, returning default of 0.0')
        }
    }
    return 0.0
};

function calculateTotalCost(userBookings, rooms){
    try{
        const $rooms = []
        userBookings.forEach(booking => {
            const roomNumber = booking.roomNumber
            if(!$rooms[`${roomNumber}`]){
                $rooms[`${roomNumber}`] = {
                    room: roomNumber,
                    cost: getBookingCost(rooms, roomNumber),
                    tally: 1
                }
            } else {
                $rooms[`${roomNumber}`].tally++
            }
        });
        const cost = $rooms.reduce((cost, room)=>{
            cost += room.cost * room.tally;
            return cost;
        },0)
        return cost
    }
    catch (error){
        if(error instanceof TypeError){
            console.error('No cost to calculate, returning default of 0.0')
        }
    }
    return 0.0
};
export {
    userBookings,
    getBookingCost,
    calculateTotalCost
}