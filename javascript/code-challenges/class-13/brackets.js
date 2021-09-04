"use strict";

const Stack = require("./stack");

function validateBrackets(string) {
  const stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "[" || string[i] == "{" || string[i] == "(") {
      stack .push(string[i]);
    } else if (
      (stack.peek() == "[" && string[i] == "]") ||
      (stack .peek() == "{" && string[i] == "}") ||
      (stack .peek() == "(" && string[i] == ")")
    ) {
      stack .pop();
    }
  }
  if (stack.isEmpty()) {
    return false;
  } else {
    return true;
  }
}

let str1ng = "{()[]}";
let str2ng = "{}(){}";
let str3ng = "()[[Extra Characters]]";
let str4ng = "(){}[[]]";
let str5ng = "{}{Code}[Fellows](())";
let str6ng = "[({}]";
let str7ng = "(](";
let str8ng = "{(})";

console.log(validateBrackets(str1ng));
console.log(validateBrackets(str2ng));
console.log(validateBrackets(str3ng));
console.log(validateBrackets(str4ng));
console.log(validateBrackets(str5ng));
console.log(validateBrackets(str6ng));
console.log(validateBrackets(str7ng));
console.log(validateBrackets(str8ng));

module.exports=validateBrackets;