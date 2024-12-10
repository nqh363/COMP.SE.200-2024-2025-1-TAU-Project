import chai from 'chai'
import drop from '../src/drop.js'

const expect = chai.expect

describe("Drop", () => {
    it("should drop 1 element from the beginning", () => {
        expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
    });

    it("should drop 2 elements from the beginning", () => {
        expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    });

    it("should return an empty array if n is larger than the array length", () => {
        expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    });

    it("should return the original array if n is 0", () => {
        expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
    });

    it("should return an empty array if the input array is empty", () => {
        expect(drop([], 2)).to.deep.equal([]);
    });

    it("should drop no elements if n is negative", () => {
        expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
    });

    it("should handle n being a non-integer (converted to integer)", () => {
        expect(drop([1, 2, 3], 1.5)).to.deep.equal([2, 3]);
    });
})