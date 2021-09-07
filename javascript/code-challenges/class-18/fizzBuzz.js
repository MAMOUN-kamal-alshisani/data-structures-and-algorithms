class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// Fizz Buzz
let fizzBuzz = (value) => {
  if (value%3 === 0 && value%5 === 0) {
    value = 'FizzBuzz'
  } else if (value %3 === 0) {
    value = 'Fizz'
  } else if (value %5 === 0) {
    value = 'Buzz'
  } else {
    value = value.toString()
  }
  return value
}

// traverse tree
let recaverse = (node) => {
  if (node === null) return null

  let Value = fizzBuzz(node.value)

  let Nodes = new Node(Value)
  Nodes.left = recaverse(node.left)
  Nodes.right = recaverse(node.right)

  return Nodes
}

//Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  //Fizz Buzz method
  fizzBuzzTree() {
    let Tree = new BinaryTree

    //call traverse
    Tree.root = recaverse(this.root)
    return Tree
  }

}

module.exports = {
  Node,
  BinaryTree
}