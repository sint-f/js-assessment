if (typeof window === "undefined") {
  require("../../app/2-strings");
  var expect = require("chai").expect;
}

describe("strings", () => {
  it("you should be able to find the index where the substring appeared", () => {
    const quote =
      "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
    const substring = "green eggs and ham";

    expect(stringsAnswers.index(quote, substring)).to.eql(14);
  });

  it("you should be able to check if the quote contains the substring", () => {
    const quote =
      "I do not like green eggs and ham. I do not like them, Sam-I-Am.";

    expect(stringsAnswers.contains(quote, "green")).to.be.ok;
    expect(stringsAnswers.contains(quote, "eggs")).to.be.ok;
    expect(stringsAnswers.contains(quote, "red")).not.to.be.ok;
    expect(stringsAnswers.contains(quote, "pepper")).not.to.be.ok;
  });

  it("you should be able to capitalize the first character of a string", () => {
    const str = "baRTHOlomEW";

    expect(stringsAnswers.capitalize(str)).to.eql("Bartholomew");
  });
});
