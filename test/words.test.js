import chai from 'chai';
import words from '../src/words.js'; 

const expect = chai.expect;

describe("words", () => {

  it("should return an array of words separated by spaces and punctuation", () => {
    const result = words('fred, barney, & pebbles');
    expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
  });

  it("should split words correctly based on a custom pattern", () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g);
    expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
  });

  it("should handle an empty string", () => {
    const result = words('');
    expect(result).to.deep.equal([]);
  });

  it("should return an empty array if no words match the pattern", () => {
    const result = words('1234', /[a-zA-Z]+/g);
    expect(result).to.deep.equal([]);
  });

  it("should correctly handle strings with unicode characters", () => {
    const result = words('hello world, привет мир');
    expect(result).to.deep.equal(['hello', 'world', 'привет', 'мир']);
  });

  it("should handle a string with only punctuation", () => {
    const result = words(',,;?!');
    expect(result).to.deep.equal([]);
  });

  it("should correctly handle words with numbers", () => {
    const result = words('abc123, xyz456');
    expect(result).to.deep.equal(['abc', '123', 'xyz', '456']);
  });

});
