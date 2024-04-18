function getAvailableRooms(bookings, rooms, date) {
    const filteredRoomsByDate = bookings.filter((booking) => {
        return date !== booking.date
    })
    const getRooms = filteredRoomsByDate.map((room) => {
        const foundRoom = rooms.find((eachRoom) => {
            return eachRoom.number === room.roomNumber
        })
        return foundRoom
    })
    if (getRooms.length === 0) {
        return 'We apologize, but unfortunately there are no rooms for your selected date'
    } else {
        console.log('get', getRooms)
    return getRooms
    }
}




export {getAvailableRooms}