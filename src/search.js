function filterRoomsByDate(rooms, bookings, date = null){ 
    if(!date){
        return 'Please enter a current or future date.'
    }
    const newDate = convertDate(date)
    const bookedRooms = bookings.reduce((roomNumbers, booking)=>{
        if(booking.date === newDate){
            roomNumbers.push(booking.roomNumber);
        };
        return roomNumbers
    },[])
    const results = rooms.filter((room) => {
        const isBooked = bookedRooms.find((roomNumber) => room.number === roomNumber);
        return !isBooked
    });
    if(!results[0]){
        return 'Our apologies! No Rooms are availible on that date, please select a different one.'
    };
    return results;
};
function filterRoomsByType(rooms, roomType = 'none'){
    try{
        if(roomType === 'none'){
            return rooms
        }
        const result = rooms.filter((room)=> room.roomType === roomType)
        if(!result[0]){
            return 'Our apologies! No rooms were found under the required specifications. Please try adjusting one or more of your search criteria.'
        } else {
            return result
        }
    } catch (error){
        if(error.message === 'rooms.filter is not a function'){
            console.error('Inapproriate search crtieria, user notified.')
            return rooms
        }
    }
}
function convertDate(date){
    return date.split('-').join('/') 
}

export{filterRoomsByDate, filterRoomsByType};