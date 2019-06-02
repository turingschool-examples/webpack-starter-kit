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

}

export default RoomsRepo