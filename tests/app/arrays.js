if (typeof window === "undefined") {
  require("../../app/arrays");
  var expect = require("chai").expect;
}

describe("arrays", () => {
  var a;

  beforeEach(() => {
    a = [1, 2, 3, 4];
  });

  it("you should be able to determine the location of an item in an array", () => {
    expect(arraysAnswers.indexOf(a, 3)).to.eql(2);
    expect(arraysAnswers.indexOf(a, 5)).to.eql(-1);
  });

  it("you should be able to remove all instances of a value from an array", () => {
    var result = arraysAnswers.remove(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(" ")).to.eql("1 3 4");
  });

  it("you should be able to add an item to the end of an array", () => {
    var result = arraysAnswers.append(a, 10);

    expect(result).to.have.length(5);
    expect(result[result.length - 1]).to.eql(10);
  });

  it("you should be able to remove the last item of an array", () => {
    var result = arraysAnswers.truncate(a);

    expect(result).to.have.length(3);
    expect(result.join(" ")).to.eql("1 2 3");
  });

  it("you should be able to add an item to the beginning of an array", () => {
    var result = arraysAnswers.prepend(a, 10);

    expect(result).to.have.length(5);
    expect(result[0]).to.eql(10);
  });

  it("you should be able to remove the first item of an array", () => {
    var result = arraysAnswers.curtail(a);

    expect(result).to.have.length(3);
    expect(result.join(" ")).to.eql("2 3 4");
  });

  it("you should be able to join together two arrays", () => {
    var c = ["a", "b", "c", 1];
    var result = arraysAnswers.concat(a, c);

    expect(result).to.have.length(8);
    expect(result.join(" ")).to.eql("1 2 3 4 a b c 1");
  });

  it("you should be able to count the occurences of an item in an array", () => {
    var result = arraysAnswers.count([1, 2, 4, 4, 3, 4, 3], 4);

    expect(result).to.eql(3);
  });

  it("BONUS: you should be able to find duplicates in an array", () => {
    var result = arraysAnswers.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

    expect(result.sort()).to.eql([1, 3, 4]);
  });

  it("BONUS: you should be able to square each number in an array", () => {
    var result = arraysAnswers.square(a);

    expect(result).to.have.length(4);
    expect(result.join(" ")).to.eql("1 4 9 16");
  });
});
