//import createMathOperation from '../src/.internal/createMathOperation.js'
import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect


describe("add", () => {
 it("addition of positive (3.00) with positive (6.00), expecting positive (9.00)", () =>{
     expect(add(3.00,6.00)).to.equal(9.00)
 });
 it("addition of positive (300.00) with zero (0.00), expecting positive (300.00)", () =>{
    expect(add(300.00,0.00)).to.equal(300.00)
 });
 it("addition of 3 digits number (528.98) with positive (750.95), expecting 4 digits number (1279.93)", () =>{
    expect(add(528.98,750.95)).to.equal(1279.93)
 }); 
})