'use strict';
const Node =require('./node')
class LinkedList{

constructor(){
this.head=null;

}
append(value){

    const node = new Node(value);
    if(!this.head){
this.head =node;
return this;

    }
    let currently=this.head;
    while (currently.next){

currently=currently.next;
    }
    currently.next =node;
}
}


module.exports = LinkedList;