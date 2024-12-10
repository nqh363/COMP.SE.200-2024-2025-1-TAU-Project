import chai from 'chai';
import toNumber from '../src/toNumber.js';

const expect = chai.expect;

describe("toNumber", () => {

  it("should return the same number if the input is a number", () => {
    const result = toNumber(42);
    expect(result).to.equal(42);
  });

  it("should return NaN for a symbol", () => {
    const symbol = Symbol('test');
    const result = toNumber(symbol);
    expect(result).to.be.NaN;
  });

  it("should convert a string containing a number to that number", () => {
    const result = toNumber("42");
    expect(result).to.equal(42);
  });

  it("should convert a string with leading/trailing spaces to the correct number", () => {
    const result = toNumber("  42  ");
    expect(result).to.equal(42);
  });

  it("should return NaN for a string with a bad hexadecimal number", () => {
    const result = toNumber("0xGHI");
    expect(result).to.be.NaN;
  });

  it("should correctly convert binary strings to numbers", () => {
    const result = toNumber("0b1010");
    expect(result).to.equal(10);
  });

  it("should correctly convert octal strings to numbers", () => {
    const result = toNumber("0o12");
    expect(result).to.equal(10);
  });

  it("should return NaN for a string with invalid binary or octal format", () => {
    const result = toNumber("0b1022");
    expect(result).to.be.NaN;
  });

  it("should return 0 when the input is 0", () => {
    const result = toNumber(0);
    expect(result).to.equal(0);
  });

  it("should return Infinity for the Infinity value", () => {
    const result = toNumber(Infinity);
    expect(result).to.equal(Infinity);
  });

  it("should convert a negative number string to a number", () => {
    const result = toNumber("-42");
    expect(result).to.equal(-42);
  });

  it("should return NaN for a non-numeric string", () => {
    const result = toNumber("hello");
    expect(result).to.be.NaN;
  });

});