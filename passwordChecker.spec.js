import { verifier } from "./verifier";

describe("verifier", () => {
    it("should return the correct error message when fewer than 8 characters", () => {
        expect(verifier("ABC")).toBe("password should be longer than 8 characters");
    });
    it("should return a success message when longer than 8 characters", () => {
        expect(verifier("111111111")).toBe("password meets the minimum length requirement");
    });
    it("should return a success message when exactly 8 characters", () => {
        expect(verifier("12345678")).toBe("password meets the minimum length requirement");
    });
    it("should return an error message if all the characters are lowercase", () => {
        expect(verifier("abcdefgh")).toBe("password should contain at least one uppcase letter");
    });
});


