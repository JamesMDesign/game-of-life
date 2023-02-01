import { adderFunction } from "./adderFunction";

describe("adder", function() {
    it("should add two numbers", function() {
        expect(adderFunction(1, 2)).toBe(3);
    })
    it("should add three numbers", function() {
        expect(adderFunction(1,2,3)).toBe(6);
    })
    it("should add as many numbers as I want", function() {
        expect(adderFunction(1,1,1,1,1,1,1,1)).toBe(8);
    })
});

