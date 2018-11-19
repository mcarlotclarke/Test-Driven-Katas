// when the input is an empty string
// when the string is less than 20 characters const { expect } = require('chai');
const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns string if the string length is less than column number', () => {
    expect(wrap("Lorem", 10)).to.equal("Lorem");
  });
});

 
  