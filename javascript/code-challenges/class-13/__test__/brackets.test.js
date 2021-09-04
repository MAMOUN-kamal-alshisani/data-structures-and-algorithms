"use strict";
const Stack = require('../stack')
const validateBrackets = require("../brackets");


describe(" balanced ", () => {
  it("if brackets are in balance", () => {
    let str1ng = "{}";
    let str2ng="{}(){}";
    expect(validateBrackets(str1ng)).toEqual(true);
    expect(validateBrackets(str2ng)).toEqual(true);
  });

  it("if case not balanced", () => {

    let str8ng = "{(})";
    let str7ng="(](";
    expect(validateBrackets(str8ng)).toEqual(false);
    expect(validateBrackets(str7ng)).toEqual(false);
  });

  });
