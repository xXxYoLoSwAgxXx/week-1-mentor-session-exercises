var expect = require('chai').expect;
var sinon = require('sinon');
var func = require('../exercises.js');

describe("#firstReverse", function() {
  it("should return a string that is reversed", function() {
    var reversedString = func.firstReverse('abc');
    expect(reversedString).to.equal('cba');
  });
  it("should return null if the argument is not a string", function() {
    var shouldBeNull = func.firstReverse(10);
    expect(shouldBeNull).to.equal(null);
  });
});

describe("#alphaOrder", function() {
  it("should return a string in alphabetical order", function() {
    var sortedString = func.alphaOrder('cake');
    expect(sortedString).to.equal('acek');
  });
  it("should return null if the argument is not a string", function() {
    var shouldBeNull = func.alphaOrder(10);
    expect(shouldBeNull).to.equal(null);
  });
});

describe('#vowelCount', function() {
  it("should return the amount of vowels in a string", function() {
    var amountOfVowels = func.vowelCount('oreo');
    expect(amountOfVowels).to.equal(3);
  });
  it("should return null if the argument is not a string", function() {
    var shouldBeNull = func.vowelCount(10);
    expect(shouldBeNull).to.equal(null);
  });
});

describe('#timeConvert', function() {
  it("should return a properly formated string", function() {
    var time = func.timeConvert(68);
    expect(time).to.equal('1:8');
  });
  it("should return null if the argument is not a number", function() {
    var shouldBeNull = func.timeConvert('imAString!');
    expect(shouldBeNull).to.equal(null);
  });
});

describe('#repeatString', function() {
  it("should return a string repeated N amount of times", function() {
    var repeated = func.repeatString('zomg', 3);
    expect(repeated).to.equal('zomgzomgzomg');
  });
  it("should return null if the first argument is not a string", function() {
    var shouldBeNull = func.repeatString(10, 'imAString!');
    expect(shouldBeNull).to.equal(null);
  });
  it("should return null if the second argument is not a number", function() {
    var shouldBeNull = func.repeatString(10, 'imAString!');
    expect(shouldBeNull).to.equal(null);
  });
});
