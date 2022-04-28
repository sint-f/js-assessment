if (typeof window === "undefined") {
  require("../../app/objects");
  var expect = require("chai").expect;
}

describe("objects and context", () => {
  it("you should be able to return the cat name", () => {
    expect(objectsAnswers.name()).to.eql(cat.name);
  });

  it("you should be able to return the changed cat name", () => {
    expect(objectsAnswers.changeName("Chip")).to.eql(cat.name);
  });

  it("you should be able to add a key/value to the object", () => {
    objectsAnswers.add("gender", "male");

    expect(cat.gender).to.eql("male");
  });
});
