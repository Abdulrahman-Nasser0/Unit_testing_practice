const { expect } = require('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun');

describe("returnsThree function", function(){
    it('should return the number 3', function(){
        let num = returnsThree();
        expect(num).to.equal(3);
    });
});

describe("reciprocal function", function(){
    context('when provided with valid numbers', function() {
        it('should return the reciprocal of the given number', function() {
          // Testing with multiple valid inputs
          expect(reciprocal(2)).to.equal(0.5);
          expect(reciprocal(4)).to.equal(0.25);
          expect(reciprocal(-5)).to.equal(-0.2);
          expect(reciprocal(0.1)).to.equal(10);
        });
    });

    context('when provided with invalid numbers', function(){
        it('should throw an error if given zero', function(){
            expect(() => reciprocal(0)).to.throw('Cannot calculate reciprocal of zero')
        })
        it('should throw an error if given a non-number', function(){
            expect(() => reciprocal('string')).to.throw('Input must be a number');
            expect(() => reciprocal([])).to.throw('Input must be a number');
            expect(() => reciprocal({})).to.throw('Input must be a number');
        });
    })
});