import chai from "chai"
import countBy from "../src/countBy.js"

const expect = chai.expect

describe('countBy', () => {
    it('should count elements by a property', () => {
      const product = [
        { 'product': 'milk', 'active': true },
        { 'product': 'cheese', 'active': true },
        { 'product': 'butter', 'active': false },
      ];
      const result = countBy(product, (value) => value.active);
      expect(result).to.equal({ true: 2, false: 1 });
    });
    it('should handle a string collection and count by length', () => {
        const strings = ['one', 'two', 'five', 'four'];
        const result = countBy(strings, (value) => value.length);
        expect(result).to.equal({ 3: 2, 4: 2 });
      });
      it('should count elements by a property', () => {
        const product = [
          { 'product': 'carrot', 'weight': 100},
          { 'product': 'potato', 'weight': 500 },
          { 'product': 'onion', 'weight': 200 },
        ];
        const result = countBy(product, (value) => value.weight);
        expect(result).to.equal({ 100: 1, 500: 1, 200:1 });
      });
    })
    