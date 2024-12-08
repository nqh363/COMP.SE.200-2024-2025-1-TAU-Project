import chai from "chai"
import compact from "../src/compact.js"

const expect = chai.expect


describe("compact", () => {
 it("should remove falsey values from the array", () =>{
     expect(compact([0, 1, false, 2, " ", 3, 100, NaN, null, undefined, 500.98])).to.equal([1, 2, 3, 100, 500.98])
 });
 it("when the whole array is falsey", () =>{
    expect(compact([false, NaN, null, undefined])).to.equal([])
 });
 it("when no falsey values", () =>{
    expect(compact([100, 'Apple', 50.98, 'a'])).to.equal([100, Apple, 50.98, 'a'])
 });
 it("array with different data types", () =>{
    expect(compact([0, 'hello', false, 42, null, {}, []])).to.equal(['hello', 42, {}, []])
 });
 it("empty array", () =>{
    expect(compact([])).to.equal([])
 });

})