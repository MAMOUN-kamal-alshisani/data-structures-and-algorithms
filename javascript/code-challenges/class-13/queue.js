'use strict';

const Stack=require('./stack');

class Queue{

    constructor(value,next=null){
        this.value=value;
        this.next=next;
        this.top=null
        this.front=null;
this.Spush = new Stack()
this.Spop = new Stack()
        this.back=null;
       this.size=0;
    }

    enqueue(value){
        this.Spush.push(value);
        this.size = this.Spush.length + this.Spop.length;
    }
    dequeue(){
        if (this.Spop.length > 0) {
            this.size = this.Spush.length + this.Spop.length - 1;
            return this.Spop.pop();
    }
    while(this.Spush.length > 0) {
        this.Spop.push(this.Spush.pop())
    }

    this.size = this.Spush.length + this.Spop.length - 1;
    return this.Spop.pop();
    }
    peek(){
        let value;
        if (this.front) {
            value=this.front.value;
            return value
        }
        throw new Error(' Queue is empty'); 
    }

    isEmpty(){
        if(!this.front){
            throw new Error('Queue is empty'); 
        }
        return 'the Queue is not empty!'
    }
    printList(){
        let current = this.head;
       
        while (current) {
            console.log(current.value);
            current=current.next;
        }
        
    }
}


let queue = new Queue();
queue.enqueue("m");
queue.enqueue("a");
queue.enqueue("m");
// queue.enqueue("o");
// queue.enqueue("u");
// queue.enqueue("n");
queue.printList();

console.log(queue);

module.exports=Queue;