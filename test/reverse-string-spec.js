const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');
describe('reverseString class', function(){
    
    it('should return the reversed string', function(){
        let rStr = reverseString('fun');
        expect(rStr).equal('nuf');
    });
    it('should throw an error with wrong inputs', function(){
        
        expect(()=>reverseString(23)).to.throw('invalid input');
    });
    
});