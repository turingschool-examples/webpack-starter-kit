class RoomsRepo {
    constructor(data) {
        this.data = data;
    }

    findMostPopBookingDate() {
        const filterDates = this.data.bookings.bookings.reduce((totalDates, booking) => {
            totalDates[booking.date] = (totalDates[booking.date] || 0) + 1;
            return totalDates;
        }, {});
        const maxCount = Math.max(...Object.values(filterDates));
        return Object.keys(filterDates).filter(bookingDate => filterDates[bookingDate] === maxCount);
          
    }

    filterRoomType(type) {
        const filtered = this.data.rooms.rooms.filter(room => room.roomType === type)
        console.log('filtered', filtered)
        return filtered
    }

    filterRoomByDate(date, type) {
        return this.filterRoomType(date).filter(room => room.roomType === type)
    }

}

export default RoomsRepo