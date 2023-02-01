import { checker } from "./gameoflife";

var testCases = [
    {
        cell: 1,
        neighbors: [0, 1, 0]
    },
    {
        cell: 0,
        neighbors: [1, 1, 1]
    },
    {
        cell: 1,
        neighbors: [0, 0, 1]
    },
    {
        cell: 0,
        neighbors: [1, 0, 0]
    },
    {
        cell: 1,
        neighbors: [0, 1, 1]
    },
    {
        cell: 1,
        neighbors: [1, 1, 1, 1]
    }
];

describe("checker", () => {
    it("there should be a dead cell when two neighbors are dead", () => {
        expect(checker(testCases[0])).toBe(0);
    });
    it("the cell should be become alive when 3 neighbors are alive", () => {
        expect(checker(testCases[1])).toBe(1);
    });
    it("there should be a dead cell when two neighbors are dead", () => {
        expect(checker(testCases[2])).toBe(0);
    });
    it("there should be a dead cell when two neighbors are dead", () => {
        expect(checker(testCases[3])).toBe(0);
    });
    it("the cell should remain alive as two neighbors are alive", () => {
        expect(checker(testCases[4])).toBe(1);
    });
    it("the cell dies from overcrowding", () => {
        expect(checker(testCases[5])).toBe(0);
    });

});

