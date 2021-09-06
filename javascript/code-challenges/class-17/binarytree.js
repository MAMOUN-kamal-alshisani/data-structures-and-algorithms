const Node = require('./node')

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    preOrder() {// root left right
        let result = [];

        let recursive = (node) => {
            result.push(node.value);
            if (node.left) recursive(node.left);
            if (node.right) recursive(node.right);
        }

        recursive(this.root);

        return result;
    }

    postOrder() {// left -> right -> root
        let result = [];

        let recursive = (node) => {
            if (node.left) recursive(node.left);
            if (node.right) recursive(node.right);
            result.push(node.value);
        }

        recursive(this.root);

        return result;
    }

    inOrder() {// left -> root -> right
        let result = [];

        let recursive = (node) => {
            if (node.left) recursive(node.left);
            result.push(node.value);
            if (node.right) recursive(node.right);
        }

        recursive(this.root);

        return result;
    }
    breadthFirst(tree) {
        if (!this.root) {
          return null;
        }
        let queue = [tree];
        let values = [];
        while (queue.length > 0) {
          let data = queue.shift();
          let value = data.value;
          console.log(value);
         values.push(value);
          if (data.left == null && data.right == null) {
            continue;
          }
          if (data.left != null) {
            queue.push(data.left);
          }
    
          if (data.right != null) {
            queue.push(data.right);
          }
        }
        return values;
      }
    
    
}
let one = new Node(7);
let two = new Node(4);
let four = new Node(5);
let five = new Node(3);
let three = new Node(8);
let six = new Node(6);
let seven = new Node(14);
let eight = new Node(32);
let nine = new Node(10);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;
five.left = seven;
five.right = eight;
six.left = nine;

let tree = new BinaryTree();

tree.root = one;

console.log(tree.breadthFirst(one))


module.exports = BinaryTree;