

const bst = require("../binarySearchTree");

describe(" Binary Search Tree", () => {
  it("Can successfully instantiate an empty tree", () => {
    let nodeTree = new bst();
    expect(nodeTree.root).toEqual(null);
  });

  it("Can successfully instantiate a tree with a single root node",()=>{
    let nodeTree = new bst();
    nodeTree.add(9);
    expect(nodeTree.root.value).toEqual(9);
    expect(nodeTree.contains(9)).toEqual(true);
  })

  it("Can successfully add a left child and right child to a single root node",()=>{
    let nodeTree = new bst ();
    nodeTree.add(6);
    nodeTree.add(5);
    nodeTree.add(7);
    expect(nodeTree.root.value).toEqual(6);
    // expect(nodeTree.root.left.value).toEqual(5);
    expect(nodeTree.root.right.value).toEqual(7);
  })
  it("Can successfully return a collection from a preorder traversal",()=>{
    let valueCollection=[ 20,11,3,9,14,31,62,57,72,90]
    let nodeTree=new bst();
    nodeTree.add(20)
    nodeTree.add(31)
    nodeTree.add(11)
    nodeTree.add(3)
    nodeTree.add(9)
    nodeTree.add(62)
    nodeTree.add(57)
    nodeTree.add(72)
    nodeTree.add(14)
    nodeTree.add(90)
 
   
    console.log('.......',nodeTree.preOrder());
    expect(nodeTree.preOrder()).toEqual(valueCollection);
  })
  it("Can successfully return a collection from an inorder traversal",()=>{
    let valueCollection=[ 3,9,11,14,20,31,57,62,72,90]
    let nodeTree=new bst();
    nodeTree.add(20)
    nodeTree.add(31)
    nodeTree.add(11)
    nodeTree.add(3)
    nodeTree.add(9)
    nodeTree.add(62)
    nodeTree.add(57)
    nodeTree.add(72)
    nodeTree.add(14)
    nodeTree.add(90)
    console.log('........',nodeTree.inOrder());
    expect(nodeTree.inOrder()).toEqual(valueCollection);
  })
  it("Can successfully return a collection from a postorder traversal",()=>{
    let valueCollection=[ 9,3,14,11,57,90,72,62,31,20]
    let nodeTree=new bst();
    nodeTree.add(20)
    nodeTree.add(31)
    nodeTree.add(11)
    nodeTree.add(3)
    nodeTree.add(9)
    nodeTree.add(62)
    nodeTree.add(57)
    nodeTree.add(72)
    nodeTree.add(14)
    nodeTree.add(90)
    console.log('=======>>>>',nodeTree.postOrder());
    expect(nodeTree.postOrder()).toEqual(valueCollection);
  })

});