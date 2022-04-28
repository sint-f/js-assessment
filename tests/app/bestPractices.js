if (typeof window === "undefined") {
  require("../../app/1-bestPractices");
  var expect = require("chai").expect;
}

describe("best practices", () => {
  it("you should avoid global variables", () => {
    bestPracticesAnswers.globals();
    expect(window.myObject).not.to.be.ok;
  });

  it("you should use parseInt correctly", () => {
    expect(bestPracticesAnswers.parseInt("12")).to.eql(12);
    expect(bestPracticesAnswers.parseInt("12px")).to.eql(12);
    expect(bestPracticesAnswers.parseInt("0x12")).to.eql(0);
  });

  it("you should use Number correctly", () => {
    expect(bestPracticesAnswers.Number("12")).to.eql(12);
    expect(bestPracticesAnswers.Number("12px")).to.eql(NaN);
  });

  it("you should understand strict comparison", () => {
    expect(bestPracticesAnswers.identity(1, "1")).to.eql(false);
    expect(bestPracticesAnswers.identity(1, 1)).to.eql(true);
    expect(bestPracticesAnswers.identity(0, false)).to.eql(false);
  });
});
