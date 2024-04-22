import { expect } from "chai";
import { users,rooms,bookings } from "./mock-data";
import {  showFutureBooking,showPastBookings, calculateCostPerNight, calculateFutureBookingCosts,  calculatePastBookingCosts, calculateAllBookingCosts} from "../src/customer";

describe("Bookings", () => {
    it("should show future bookings", () => {
        const futureBookings = showFutureBooking(bookings)
        
        expect(futureBookings).to.deep.equal([{
            id:"5fwrgu4i7k55hl6sz", 
            userID:1, 
            date:"2024/5/25", 
            roomNumber:1
        },
        {
            id:"5fwrgu4i7k55hl6t6", 
            userID:1, 
            date:"2024/9/25", 
            roomNumber:2}
    ])
    });
    it("should show past bookings", () => {
        const pastBookings = showPastBookings(bookings)
    
        expect(pastBookings).to.deep.equal([{id:"5fwrgu4i7k55hl6t9", userID:1, date:"2024/4/20", roomNumber:3}])
    });
});
describe("Cost", () => {
    it("should calculate the cost of two nights", () => {
        const cost = calculateCostPerNight(rooms,1,2)

        expect(cost).to.equal(1300.9)
    });
    it("should calculate the cost of seven nights", () => {
        const cost = calculateCostPerNight(rooms,2,7)
        expect(cost).to.equal(2648.94)
    });
    it("should calculate total cost of future bookings", () => {
        const cost = calculateFutureBookingCosts(bookings,rooms,3)
        const room1Cost = calculateCostPerNight(rooms,1,3)
        const room2Cost = calculateCostPerNight(rooms, 2, 3)
        expect(cost).to.equal(room1Cost + room2Cost)  
    });
    it("should calculate total cost of past bookings", () => {
        const cost = calculatePastBookingCosts(bookings,rooms, 4)
        const roomCost = calculateCostPerNight(rooms,3,4)
        expect(cost).to.equal(roomCost)
    });
    it("should calculate total cost of all bookings", () => {
        const cost = calculateAllBookingCosts(bookings, rooms, 2)
        const room1Cost = calculateCostPerNight(rooms,1,2)
        const room2Cost = calculateCostPerNight(rooms, 2,2)
        const room3Cost = calculateCostPerNight(rooms,3,2)
        expect(cost).to.equal(room1Cost+room2Cost+room3Cost)
    });
});
