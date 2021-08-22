'use strict';
const Node =require('./node')
class LinkedList{

constructor(){
this.head=null;
this.length=0;
}

append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

insert(value){

this.head=new Node(value, this.head);
this.length++
}


// insertbefore(value,Newval){
//     let node=new Node(Newval);
//     let currently=this.head;
//     if(currently.value===value){
//       node.next=currently;
//       this.head=node;
//     }
//     while (currently) {
//       if(currently.next==value){
//         node.next=currently.next;
//         currently.next=node;
//         break;
//       }
//       currently=currently.next;
//     }
//   }

insertbefore(value, index){
    if(index>0 && index >this.length){
    
        return;
    }
    if(index ===0){

        this.head = new Node(value, this.head);
        return;
    }
const node = new Node(value);
let current, previous;

//ser current to first
current=this.head;
let count=0;

while(count<index){

    previous=current; //node before index
    count++;
    current=current.next;  //node after index
}

node.next=current;
previous.next=node;

this.length++;
    }

insertafter(value){

let node =new Node(value);
let current;

if(!this.head){
this.head =node;

}else{

current=this.head;

while(current.next){
current=current.next;

}
current.next=node;
}

this.length++;
}


printList(){
    let current = this.head;
   
    while (current) {
        console.log(current.value);
        current=current.next;
    }
    
}

}


const LL= new LinkedList()

LL.insert(10);
// console.log(LL)
LL.insert(20);
LL.append(1);
LL.append(2);
LL.insertafter(656,2)
LL.insertbefore(3434,1)
// coinsertlastnsole.log(LL)
// LL.insert(20);
// console.log(LL)
LL.printList();
module.exports = LinkedList;






//   insertafter(value,newval){
//     let node=new Node(newval);
//     let current=this.head;
//     while (current) {
//       if(current.value==value){
//         node.next=current.next;
//         current.next=node;
//         break;
//       }
//       current=current.next;
//     }
//   }




// }