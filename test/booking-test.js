import { expect } from "chai";
import { createLogin } from "../src/booking";

describe("login", () => {
    it.skip("should create a login", () => {
        const login = createLogin('customer1',"overlook2021")
        expect(login).to.deep.equal({username: 'customer1', password: "overlook2021"})
    });
    it.skip("should create a different login", () => {
        const user = createUser('customer2',"overlook2021")
        expect(login).to.deep.equal({username: 'customer2', password: "overlook2021"})
    });
    it.skip("should not accept an incorrect login", () => {
        const user = createUser('lady12',"lovebug1")
        expect(user).to.equal('Invalid username and password')
    });
    it.skip("should not create a user with partial data", () => {
        const user = createUser('customer1',"")
        expect(user).to.equal('Please fill out inputs')
    });
});