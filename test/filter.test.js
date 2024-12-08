import chai from 'chai';
import filter from '../src/filter.js'; 

const expect = chai.expect;

describe("Filter", () => {
  it("should return an array with elements that pass the predicate", () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
  });

  it("should return an empty array when no elements pass the predicate", () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([]);
  });

  it("should return an empty array if the input array is empty", () => {
    const users = [];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([]);
  });

  it("should return all elements if the predicate always returns truthy", () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': true }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal(users);
  });

  it("should return an empty array if the predicate always returns falsy", () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false }
    ];

    const result = filter(users, ({ active }) => active);

    expect(result).to.deep.equal([]);
  });
});
