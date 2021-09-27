

class Node {
  constructor(value, left= null, right=null) {
      this.value = value;
      this.next = null;
      this.left =left
      this.right =right
  }
}


class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let result = [];
    let travers = (node) => {
      result.push(node.value);
      if (node.left) {
        travers(node.left);
      }
      if (node.right) {
        travers(node.right);
      }
    };
    travers(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    let travers = (node) => {
      if (node.left) {
        travers(node.left);
      }
      result.push(node.value);
      if (node.right) {
        travers(node.right);
      }
    };
    travers(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let travers = (node) => {
      if (node.left) {
        travers(node.left);
      }
      if (node.right) {
        travers(node.right);
      }
      result.push(node.value);
    };
    travers(this.root);
    return result;
  }

  findMaximumValue() {
    if (!this.root) {
      return "the tree is empty";
    }
    let maxNumber = this.root.value;
    let travers = (node) => {
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
      if (node.value > maxNumber) maxNumber = node.value;
    };

    travers(this.root);
    return maxNumber;
  }

  breadthFirstSearch(tree) {
    if (!this.root) {
      return "empty";
    }
    let queue = [tree];
    let result = [];
    while (queue.length > 0) {
      let item = queue.shift();
      let value = item.value;
      console.log(value);
      result.push(value);
      if (item.left == null && item.right == null) {
        continue;
      }
      if (item.left != null) {
        queue.push(item.left);
      }

      if (item.right != null) {
        queue.push(item.right);
      }
    }
    return result;
  }


  TreeIntersection(firstTreeBranches, secondTreeBranches){

let array =[]

let travers = (nodeOne, nodeTwo) => {
  if(!nodeOne || !nodeTwo ){

    throw new Error('no compatiable nodes')
  }
  if (nodeOne && nodeTwo) {
    if(nodeOne.value === nodeTwo.value){
      array.push(nodeOne.value);
    } 
    if(nodeOne.left, nodeTwo.left )
   { travers(nodeOne.left, nodeTwo.left)}
  
   if(nodeOne.right, nodeTwo.right )
   { travers(nodeOne.right, nodeTwo.right)}
  
   return array;
  }
 
}
travers (firstTreeBranches, secondTreeBranches)
return array;
};









}
  







module.exports = BinaryTree;