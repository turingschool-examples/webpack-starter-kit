function getAllCustomerRoomBookings(customer, bookings, rooms) {
  const customerBookings = bookings.filter(
    (booking) => booking.userID === customer.id
  );
  const roomsBooked = customerBookings.reduce((bookedRooms, curBooking) => {
    const allRooms = rooms.forEach((room) => {
      if (curBooking.roomNumber === room.number) {
        bookedRooms.push(room);
      }
    });
    return bookedRooms;
  }, []);
  if (roomsBooked.length === 0) {
    return "You currently have no bookings";
  } else {
    return roomsBooked;
  }
}

function getTotalCostForAllBookings(customerBookings) {
    if (customerBookings === 'You currently have no bookings') {
        return 0
    } else {
    const totalSpent = customerBookings.reduce((total, booking) => {
        total += booking.costPerNight;
        return total;
    }, 0)
    return parseFloat(totalSpent.toFixed(2))
}
}

export { getAllCustomerRoomBookings, getTotalCostForAllBookings };
