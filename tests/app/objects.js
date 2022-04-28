if (typeof window === "undefined") {
  require("../../app/objects");
  var expect = require("chai").expect;
}

describe("objects and context", function () {
  it("you should be able to return the cat name", function () {
    expect(objectsAnswers.name()).to.eql(cat.name);
  });

  it("you should be able to return the changed cat name", function () {
    expect(objectsAnswers.changeName("Chip")).to.eql(cat.name);
  });

  it("you should be able to add a key/value to the object", function () {
    objectsAnswers.add("gender", "male");

    expect(cat.gender).to.eql("male");
  });
});
