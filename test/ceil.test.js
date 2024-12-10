import chai from "chai"
import ceil from "../src/ceil.js"

const expect = chai.expect


describe("ceil", () => {
    it('should round up to the nearest integer when no precision is provided', () => {
        expect(ceil(4.98)).to.equal(5);
        expect(ceil(-4.98)).to.equal(-4);
      });
    
      it('should round up to the specified positive precision', () => {
        expect(ceil(100.98, 1)).to.equal(101);  
      });
    
      
    
      it('should handle edge cases like whole numbers', () => {
        expect(ceil(5)).to.equal(5);
        expect(ceil(-5)).to.equal(-5);
      });
    
      it('should handle zero precision explicitly set', () => {
        expect(ceil(12.98, 0)).to.equal(13);
        expect(ceil(-15.09, 0)).to.equal(-15);
      });
    
      it('should handle large positive and negative numbers', () => {
        expect(ceil(123456789.1234, 2)).to.equal(123456789.13);
        expect(ceil(-123456789.1234, 2)).to.equal(-123456789.12);
      });
    
      it('should handle precision greater than the number of decimal places', () => {
        expect(ceil(5.2, 2)).to.equal(5.2);
        expect(ceil(-5.2, 2)).to.equal(-5.2);
      });
    
      it('should handle negative precision greater than the magnitude of the number', () => {
        expect(ceil(45, -3)).to.equal(1000);
        expect(ceil(-45, -3)).to.equal(0);
      });
    
      it('should handle non-numeric inputs gracefully', () => {
        expect(() => ceil('4.006')).to.throw('TypeError');
        expect(() => ceil(null)).to.throw('TypeError');
        expect(() => ceil(undefined)).to.throw('TypeError');
      });
})