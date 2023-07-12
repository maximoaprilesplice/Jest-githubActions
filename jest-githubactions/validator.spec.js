import { isOnlyNumber, isNumberAndLetter, isOnlyLetter } from "./validator";

describe("Validator Number Test", () => {
  it("Number True", () => {
    expect(isOnlyNumber("9")).toBeTruthy();
  });
  it("Number False", () => {
    expect(isOnlyNumber("false")).toBeFalsy();
  });
});

describe("Validator AlphaNumber Test", () => {
  it("Alpha Number", () => {
    expect(isNumberAndLetter("test99")).toBeTruthy();
  });
  it("Alpha", () => {
    expect(isNumberAndLetter("abc")).toBeTruthy();
  });
  it("Number", () => {
    //skip or only
    expect(isNumberAndLetter("123")).toBeTruthy();
  });
});

describe("Validator Alpha Test", () => {
  it("Alpha True", () => {
    expect(isOnlyLetter("abc")).toBeTruthy();
  });
  it("Alpha False", () => {
    expect(isOnlyLetter("ab56")).toBeFalsy();
  });
});
