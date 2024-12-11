import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect


describe("add", () => {
 it("addition of positive with decimal place (3.00) with positive (6.00), expecting positive (9.00)", () =>{
     expect(add(3.00,6.00)).to.equal(9.00)
 });
 it("addition of positive (300.00) with zero (0.00), expecting positive (300.00)", () =>{
    expect(add(300.00,0.00)).to.equal(300.00)
 });
 it("addition of two positive integers", () =>{
    expect(add(500,700)).to.equal(1200)
 });
 it("addition of negative (-100) with positive (200), expecting (100)", () =>{
   expect(add(-100,200)).to.equal(100)
}); 
it("addition of negative (-100) with negative (-200), expecting (-300)", () =>{
   expect(add(-100,-200)).to.equal(-300)
});
it("addition of negative (-500) with zero (0), expecting (-500)", () =>{
   expect(add(-500,0)).to.equal(-500)
});
it("addition of positive (500) with word (a), should handle gracefully", () =>{
   expect(add(500,'a')).to.throw('TypeError')
});
})
