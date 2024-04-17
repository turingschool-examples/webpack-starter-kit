import { expect } from "chai";
import { createUser, createRoom } from "../src/customer";

describe("User", () => {
    it("should create a user", () => {
        const user = createUser(1,"Milo Anthony")
        expect(user).to.deep.equal({id: 1, name: "Milo Anthony"})
    });
    it("should create a different user", () => {
        const user = createUser(2,"Karen Kendricks")
        expect(user).to.deep.equal({id: 2, name: "Karen Kendricks"})
    });
    it.skip("should not create a user with no data", () => {
        const user = createUser(1,"Milo Anthony")
        expect(user).to.deep.equal({id: 1, name: "Milo Anthony"})
    });
    it.skip("should not create a user with partial data", () => {
        const user = createUser(1,"Milo Anthony")
        expect(user).to.deep.equal({id: 1, name: "Milo Anthony"})
    });
});
describe("Rooms", () => {
    it.skip("should create a room", () => {
        
    });
    it.skip("should create a different room", () => {
        
    });
    it.skip("should not create a room with no data", () => {
        
    });
    it.skip("should not create a room with partial data", () => {
        
    });
})
describe("Bookings", () => {
    it.skip("should create a booking", () => {
        
    });
    it.skip("should create a different booking", () => {
       
    });
    it.skip("should show future bookings", () => {
    
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
