import { expect } from "chai";
import { users,rooms,bookings } from "./mock-data";
import {  showBooking, calculateCostPerNight, calculateBookingCost} from "../src/customer";

describe("Bookings", () => {
    it ("should show future bookings", () => {
        const futureBooking = showBooking(bookings,"5fwrgu4i7k55hl6t6")
        
        expect(futureBooking).to.deep.equal({id:"5fwrgu4i7k55hl6t6", userID:1, date:"2024/9/25", roomNumber:2})
    });
    it("should show past bookings", () => {
        const futureBooking = showBooking(bookings,"5fwrgu4i7k55hl6t9")
    
        expect(futureBooking).to.deep.equal({id:"5fwrgu4i7k55hl6t9", userID:1, date:"2024/4/20", roomNumber:3})
    });
});
describe("Cost", () => {
    it.skip("should calculate the cost of two nights", () => {
        const cost = calculateCostPerNight(room,1,2)

        expect(cost).to.equal()
    });
    it.skip("should calculate the cost of seven nights", () => {
        const cost = calculateCostPerNight(room,2,7)
        expect(cost).to.equal()
    });
    it.skip("should calculate total cost of past bookings", () => {
        const cost = calculateBookingCost(bookings,)
    });
    it.skip("should calculate total cost of future bookings", () => {
        
    });
    it.skip("should calculate total cost of all bookings", () => {
        
    });
});
