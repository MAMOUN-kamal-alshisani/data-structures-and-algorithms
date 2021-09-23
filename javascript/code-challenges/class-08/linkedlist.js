'use strict';
const Node =require('./node')
class LinkedList{

constructor(){
this.head=null;
this.tail=null;
this.size=0;
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
let node= new Node(value)

node.next = this.head;
this.head = node;
if(this.size == 0){
  this.tail = node;
}
this.size +=1
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

reverselist(k){

  let linkArray=[];
  let current=this.head;
  while (current) {
    linkArray.push(current.value);
    current=current.next;
  }
  // console.log(newLinkedList.reverse());
  linkArray.reverse();

  if(k>=linkArray.length || k<0){
    return 'error';
  }else{
    return linkArray[k]
  }
}
toString() {
  let result = "";
  let current = this.head;

  while (current) {
    result += `${current.value}${current.next ? ", " : ""}`;
    current = current.next;
  }

  return result;
}

zipList(list1, list2){
let List3=new LinkedList;

  let List1 = list1.head;
  let List2 = list2.head;

  List3.append(List1.value);
  List1 = List1.next;

  while (List1 || List2) {
    if (List2) {
      List3.append(List2.value);
      List2 = List2.next;
    }
    if (List1) {
      List3.append(List1.value);
      List1 = List1.next;
    }
  }
  return List3;
};


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
// LL.append(1);
// LL.append(2);
// LL.insertafter(656,2)
// LL.insertbefore(3434,4)
// coinsertlastnsole.log(LL)
// LL.insert(20);
console.log(LL)

// console.log(LL.reverselist(2))

let List1 = new LinkedList();
// List1.insert(1);
// List1.append(3);
// List1.append(2);
// // List1.append(7);
// // List1.append(11);
// let List2 = new LinkedList();
// List2.insert(5);
// List2.append(9);
// List2.append(4);
console.log(LL.insert());
// console.log(LL.zipList(List1, List2).toString());
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