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
  it('Returns string if the string length is equal to column number', () => {
    expect(wrap("Lorem", 5)).to.equal("Lorem");
  });
  it('Returns a string with line breaks inserted at the right places', () => {
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal('Lorem ipsum dolor \n sit eu amet, elit na \n magna sem amet nulla \n vel purus ac ligula.');
  });
});
