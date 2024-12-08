import chai from 'chai';
import reduce from '../src/reduce.js'; 

const expect = chai.expect;

describe("reduce", () => {

  it("should return the accumulated value of array elements", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n, 0);
    expect(result).to.equal(6);
  });

  it("should return an accumulated object when reducing an object", () => {
    const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {});
    expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
  });

  it("should handle an empty array with an initial accumulator", () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).to.equal(0);
  });

  it("should return the first element as accumulator if none is provided", () => {
    const result = reduce([1, 2, 3], (sum, n) => sum + n);
    expect(result).to.equal(6);
  });

  it("should return the accumulator when reducing an object without an initial value", () => {
    const result = reduce({ 'a': 1, 'b': 2 }, (acc, val, key) => {
      acc[key] = val;
      return acc;
    });
    expect(result).to.deep.equal({ 'a': 1, 'b': 2 });
  });

  it("should work with a more complex accumulator function", () => {
    const result = reduce([1, 2, 3, 4], (acc, val) => {
      acc.push(val * 2);
      return acc;
    }, []);
    expect(result).to.deep.equal([2, 4, 6, 8]);
  });

});
