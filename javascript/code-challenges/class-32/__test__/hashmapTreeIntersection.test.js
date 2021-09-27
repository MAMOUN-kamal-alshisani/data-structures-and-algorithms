
const Node =require('../hashmapTreeIntersection');
const BinaryTree = require("../hashmapTreeIntersection");



describe("HashMap Intersection", () => {
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(4);
  let four = new Node(5);
  let five = new Node(11);
  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  let tree = new BinaryTree();
  tree.root = one;
  // -----------------------------------------
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(6);
  let node4 = new Node(7);
  let node5 = new Node(9);
  node1.left = node2;
  node1.right = node3;
  node3.left = node4;
  node3.right = node5;
  let tree2 = new BinaryTree();
  tree2.root = node1;
  it("smiliar nodes", () => {
    let expected = [1, 2];
    let tree = new BinaryTree();
    expect(tree.TreeIntersection(one, node1)).toEqual(tree.TreeIntersection(one, node1));
  });
  it("throw err if empty", () => {
    let tree = new BinaryTree();
    expect(() => {
      tree.TreeIntersection();
    }).toThrow("no compatiable nodes");
  
  
  });

})