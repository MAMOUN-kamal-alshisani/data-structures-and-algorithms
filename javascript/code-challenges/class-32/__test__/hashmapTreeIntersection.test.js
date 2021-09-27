// const LinkedList =require('../hashmapTreeIntersection');
const Node =require('../hashmapTreeIntersection');
const BinaryTree = require("../hashmapTreeIntersection");


  it("throw error if one of trees is empty", () => {
    let trees = new BinaryTree();
    expect(() => {
      trees.TreeIntersection();
    }).toThrow("there is no root to comapare");
  

});