// 'use strict';
// const Node =require('./node')
// class LinkedList{

// constructor(){
// this.head=null;
// this.length=0
// }

// insert(value){

//     this.head=new Node(value, this.head);
//     this.length++
//     }

// append(value){

//     const node = new Node(value);
//     if(!this.head){
// this.head =node;
// return this;

//     }
//     let currently=this.head;
//     while (currently.next){

// currently=currently.next;
//     }
//     currently.next =node;
// }

// toString() {
//     let result = "";
//     let current = this.head;
  
//     while (current) {
//       result += `${current.value}${current.next ? ", " : ""}`;
//       current = current.next;
//     }
  
//     return result;
//   }
// }
// module.exports = LinkedList;

// const LL= new LinkedList()
// LL.append(1);
// LL.append(10);
// LL.append(-1);
// console.log(LL.toString());

'use strict';
const Node=require('./node');

class Linkedlist{

constructor(){
this.head=null;
this.length=0


}
insert(data){

const node = new Node(data, this.head)
this.head = node
this.length++
}
insert(data){
const node= new Node(data, this.head)
    this.head=node
    
    
    
    }
    
}

