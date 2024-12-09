import chai from 'chai';
import isDate from '../src/isDate.js'; 

const expect = chai.expect;

describe("isDate", () => {

  it("should return true for a valid Date object", () => {
    const result = isDate(new Date());
    expect(result).to.be.true;
  });

  it("should return false for a string that looks like a date", () => {
    const result = isDate('Mon April 23 2012');
    expect(result).to.be.false;
  });

  it("should return false for a number", () => {
    const result = isDate(123);
    expect(result).to.be.false;
  });

  it("should return false for an object", () => {
    const result = isDate({ 'user': 'barney' });
    expect(result).to.be.false;
  });

  it("should return false for an array", () => {
    const result = isDate([1, 2, 3]);
    expect(result).to.be.false;
  });

  it("should return false for null", () => {
    const result = isDate(null);
    expect(result).to.be.false;
  });

  it("should return false for undefined", () => {
    const result = isDate(undefined);
    expect(result).to.be.false;
  });

  it("should return true for a Date object created from constructor", () => {
    const result = isDate(new Date('2023-12-01'));
    expect(result).to.be.true;
  });

});