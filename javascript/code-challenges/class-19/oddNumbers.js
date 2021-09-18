'use strict';

const Tree = require('./binaryTree');

const Node = require('./node');

function oddSumNumber (tree) {

    if(!tree){
        console.log('null')
    }
     
    let sum = 0;

    function OddNum(number){
        
        if(number.value %2 == 1){
            sum += number.value;
        }
        if(number.left){
          OddNum(number.left)
        }
        if(number.right){
          OddNum(number.right)
            }
            OddNum(tree.root);
        return sum
    }
    
}

let tree = null;


let eight = new Node(8);
let three = new Node(3);
let one = new Node(1);
let six = new Node(6);
let four = new Node(4);
let seven = new Node(7);
let ten = new Node(10);
let fourteen = new Node(14);
let therteen = new Node(13);


eight.left= three;
eight.right = ten;
three.left = one;
three.right= six;
six.left= four;
six.right = seven;
ten.right=fourteen;
fourteen.left=therteen;

tree = new Tree(eight);

console.log('sum',oddSumNumber(tree));

module.exports = oddSumNumber