"use strict";

const BinaryTree = require("./binaryTree");
const Node = require("./binaryTree");

function fizzBuzz(tree) {
  function main(value) {
    let THEValue;
    if (value % 3 === 0 && value % 5 === 0 )  {
     return THEValue = "FizzBuzz";
    } else if (value % 5 === 0) {
     return THEValue = "Buzz";
    } else if (value % 3 === 0) {
     return THEValue = "Fizz";
    } 
  //  return THEValue = value.toString();
    
  }

  function trevers(tree) {
    let collection = {};
    for (const key in tree) {
      const val= tree[key];
      if (val && typeof val === "object") {
        collection[key] = trevers(val);
      } else {
        collection[key] = main(val);
      }
    }
    return collection;
  }
  return trevers(tree);
}
module.exports = fizzBuzz;