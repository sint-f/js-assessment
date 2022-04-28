if (typeof window === "undefined") {
  require("../../app/numbers");
  var expect = require("chai").expect;
}

describe("numbers", function () {
  it("you should be able to round a number to the nearest integer", function () {
    expect(numbersAnswers.round(128.8)).to.eql(129);
    expect(numbersAnswers.round(12.2)).to.eql(12);
    expect(numbersAnswers.round(12.5)).to.eql(13);
  });

  it("you should be able to round a number to the next largest integer", function () {
    expect(numbersAnswers.ceil(0.95)).to.eql(1);
    expect(numbersAnswers.ceil(7.004)).to.eql(8);
    expect(numbersAnswers.ceil(-7.004)).to.eql(-7);
  });

  it("you should be able to round a number to the largest integer less than or equal to a given number", function () {
    expect(numbersAnswers.floor(5.95)).to.eql(5);
    expect(numbersAnswers.floor(5.05)).to.eql(5);
    expect(numbersAnswers.floor(-5.05)).to.eql(-6);
  });

  it("you should be able to find the highest-valued number", function () {
    expect(numbersAnswers.max(1, 3)).to.eql(3);
    expect(numbersAnswers.max(5, 2)).to.eql(5);
    expect(numbersAnswers.max(-5, -3)).to.eql(-3);
  });

  it("you should be able to find the lowest-valued number", function () {
    expect(numbersAnswers.min(1, 3)).to.eql(1);
    expect(numbersAnswers.min(5, 2)).to.eql(2);
    expect(numbersAnswers.min(-5, -3)).to.eql(-5);
  });
});
