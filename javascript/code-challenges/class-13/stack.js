'use strict';
class Stack{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
        this.top=null;
       this.length=0;
        this.down=null;
        
    }

    push(value){
let stack= new Stack(value);
if(this.length ===0){
this.top =stack;
this.down=stack;



}else{

let first=this.top;
this.top= stack
this.top.next= first
}

this.length++;
return this.length;
    }

pop(){

    if(this.length == 0)
    
        return null;

    let first=this.top;
        
  if(this.length == 1)
this.down=null;
this.top = this.top.next;
    this.length--;
    return first;
  
}

peek() {
    let value;
    if (this.top) {
      value = this.top.value;
      return value;
    }
}
isEmpty() {
    if (!this.top) {
      return false;
    }
    return true;
  }
}




let stack = new Stack();
stack.push(11);
stack.push(22);
stack.push(33);

console.log(stack.top.next);






module.exports= Stack;
    
// "use strict";

// const Node = require("./node");

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }

//   push(value) {
//     let newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     if (this.length === 0) return null;

//     let temp = this.first;

//     if (this.length === 1) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.length--;
//     return temp;
//   }

//   peek() {
//     let value;
//     if (this.first) {
//       value = this.first.value;
//       return value;
//     }
//     // throw new Error("the stack is empty");
//   }

//   isEmpty() {
//     if (!this.first) {
//       return false;
//     }
//     return true;
//   }
// }

// // let stack = new Stack();
// // stack.push(10);
// // stack.push(15);
// // stack.push(20);

// // console.log(stack.isEmpty());

// module.exports = Stack;