import { expect } from "chai";
import { createUser, createRoom, createBooking, showBooking} from "../src/customer";

describe("User", () => {
    it("should create a user", () => {
        const user = createUser(1,"Milo Anthony")
        expect(user).to.deep.equal({id: 1, name: "Milo Anthony"})
    });
    it("should create a different user", () => {
        const user = createUser(2,"Karen Kendricks")
        expect(user).to.deep.equal({id: 2, name: "Karen Kendricks"})
    });
});
describe("Rooms", () => {
    it("should create a room", () => {
        const room = createRoom(1,"presidential", true, "california king", 1, 650.45)
        expect(room).to.deep.equal({number:1,roomType:"presidential",bidet:true, bedSize: "california king", numBeds:1,costPerNight:650.45})
    });
    it("should create a different room", () => {
        const room = createRoom(2,"suite", false, "full", 2, 378.42)
        expect(room).to.deep.equal({number:2,roomType:"suite",bidet: false, bedSize: "full",numBeds: 2,costPerNight: 378.42})
    });
});
describe("Bookings", () => {
    it("should create a booking", () => {
        const booking = createBooking("5fwrgu4i7k55hl6sz",1,"2024/5/25",11)
        expect(booking).to.deep.equal({id:"5fwrgu4i7k55hl6sz", userID:1, date:"2024/5/25", roomNumber:11})
    });
    it("should create a different booking", () => {
        const booking = createBooking("5fwrgu4i7k55hl6t6",1,"2024/4/25",8)
        expect(booking).to.deep.equal({id:"5fwrgu4i7k55hl6t6", userID:1, date:"2024/4/25", roomNumber:8})
    });
    it.skip("should show future bookings", () => {
    const booking1 = createBooking("5fwrgu4i7k55hl6sz",1,"2024/2/25",11);
    const booking2 = createBooking("5fwrgu4i7k55hl6t6",1,"2024/9/25",8)
    const bookings = [booking1,booking2]
    const futureBooking = showBooking("5fwrgu4i7k55hl6t6")
    
    expect(futureBooking).to.deep.equal({id:"5fwrgu4i7k55hl6t6", userID:1, date:"2024/9/25", roomNumber:8})
    });
    it.skip("should show past bookings", () => {
     
    });
});
describe("Cost", () => {
    it.skip("should calculate the cost of two nights", () => {
        
    });
    it.skip("should calculate the cost of seven nights", () => {
        
    });
    it.skip("should calculate total cost of past bookings", () => {
        
    });
    it.skip("should calculate total cost of future bookings", () => {
        
    });
    it.skip("should calculate total cost of all bookings", () => {
        
    });
});
