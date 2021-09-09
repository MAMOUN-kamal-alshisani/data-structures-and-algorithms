const BinaryTree = require('../binaryTree')
const Node =require('../binaryTree')

const fizzBuzz=require('../fizzBuzz')


describe("k arrtree", () => {
  it("if value divisible by 3", () => {
    let tree = new BinaryTree();
    tree.root = new Node(3);
    let result = fizzBuzz(tree);
    expect(result.root.value).toEqual("Fizz");
  });

  it("if value divisible by 5", () => {
    let tree = new BinaryTree();
    tree.root = new Node(5);
    let result = fizzBuzz(tree);
    expect(result.root.value).toEqual("Buzz");
  });

  it("if value divisible by 5 & 3", () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    let result = fizzBuzz(tree);
    expect(result.root.value).toEqual("FizzBuzz");
  });

  it("if value not divisible by 5 & 3", () => {
    let tree = new BinaryTree();
    tree.root = new Node(7);
    let result = fizzBuzz(tree);
    expect(result.root.value).toEqual("7");
  });

// describe('tree', () => {
//     let tree = null;
//     beforeAll(() => {
//         let one = new Node(1);
//         let two = new Node(2);
//         let three = new Node(3);
//         let four = new Node(4);
//         let five = new Node(5);
//         let six = new Node(6);
//         let seven = new Node(7);
//         let eight = new Node(8);
//         let nine = new Node(9);

//         one.left = two;
//         one.right = three;
//         three.left = four;
//         three.right = five;
//         two.left = six;
//         six.right = seven;
//         seven.left = eight;
//         seven.right = nine;

    

//         tree = new Tree(one);
//     });


//     it('preOrder', () => {// root -> left -> right
//         let preOrder = tree.preOrder();
//         let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
//         expect(preOrder).toEqual(expected);
//     });

//     it('postOrder', () => {// left -> right -> root
//         let postOrder = tree.postOrder();
//         let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
//         expect(postOrder).toEqual(expected);
//     });

//     it('inOrder', () => {// left -> root -> right
//         let inOrder = tree.inOrder();
//         let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
//         expect(inOrder).toEqual(expected);
//     });

//     it("breadth first", () => {
//         let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//         let one = new Node(1);
//         let two = new Node(2);
//         let three = new Node(3);
//         let four = new Node(4);
//         let five = new Node(5);
//         let six = new Node(6);
//         let seven = new Node(7);
//         let eight = new Node(8);
//         let nine = new Node(9);

//         one.left = two;
//         one.right = three;
//         two.left = four;
//         two.right = five;
//         three.left = six;
//         three.right = seven;
//         seven.left = eight;
//         seven.right = nine;

//         let tree = new Tree();
    
//         tree.root = one;
//         expect(tree.breadthFirst(one)).toEqual(expected);
//       });
    // it('breadthFirst', () => {// left -> root -> right
        // let breadth = tree.breadthFirst();
//         let expected = [7, 4, 5, 3, 8, 6, 14, 32, 10] 


//  let one = new Node(7);
// let two = new Node(4);
// let four = new Node(5);
// let five = new Node(3);
// let three = new Node(8);
// let six = new Node(6);
// let seven = new Node(14);
// let eight = new Node(32);
// let nine = new Node(10);

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.right = six;
// five.left = seven;
// five.right = eight;
// six.left = nine;

// let tree = new Tree();

// tree.root = one;
//         expect(tree.breadthFirst(one)).toEqual(expected);
//     });
});