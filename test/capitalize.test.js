import chai from "chai"
import capitalize from "../src/capitalize.js"

const expect = chai.expect


describe("capitalize", () => {
 it("converting the first character of milk to upper case, expecting (Milk)", () =>{
     expect(capitalize('milk')).to.equal('Milk')
 });
 it("converting the first character of multiple words to upper case, expecting (Christmas balls in three different sizes)", () =>{
    expect(capitalize('christmas balls in three different sizes')).to.equal('Christmas balls in three different sizes')
 });
 it("handling of two sentences seperated by fullsstop, expecting (Milk product. The condition is good)", () =>{
    expect(capitalize('milk product. the condition is good')).to.equal('Milk product. the condition is good')
 });
 it('should capitalize a mixed-case string, expecting (Milk product)', () => {
    expect(capitalize('MIlk PRoduct')).to.equal('Milk product');
 });

  it('should return an empty string when input is an empty string', () => {
    expect(capitalize('')).to.equal('');
  });

  it('should handle strings with space at the end, expect(Milk)', () => {
    expect(capitalize('milk  ')).to.equal('Milk  ');
  });
  it('should handle strings with space at the begining, expect(Milk)', () => {
    expect(capitalize(' milk')).to.equal(' milk');
  });

  it('should handle non-string inputs, expect(1234)', () => {
    expect(capitalize(1234)).to.equal('1234');
 });
  it('For single-character string, expect(A)', () => {
    expect(capitalize('a')).to.equal('A');   
  });

  it('should handle special characters at the start of the string, expect(*coconut)', () => {
    expect(capitalize('*coconut')).to.equal('*coconut');
  });
  it('all upper case string, expect(Milk)', () => {
    expect(capitalize('APPLE')).to.equal('Apple');
  });
})
