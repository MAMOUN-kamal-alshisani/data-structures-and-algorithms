// 'use strict';


// class Queue{

//     constructor(value,next=null){
//         this.value=value;
//         this.next=next;
//         this.top=null
//         this.front=null;
//         this.back=null;
//     }

//     enqueue(value){
//         let queue=new Queue(value);
//         if(!this.front){
//             this.front=queue;
//             this.back=queue;
//         }else{
//             this.back.next=queue;
//             this.back=queue;
//         }
//     }
//     dequeue(){
//         if(!this.front){
//             throw new Error(' Queue is empty'); 
//         }
//         let LastNode=this.front;
//         if(this.front===this.back){
//             this.back=null;
//         }
//         this.front=this.front.next;

//         return LastNode.value;
//     }

//     peek(){
//         let value;
//         if (this.front) {
//             value=this.front.value;
//             return value
//         }
//         throw new Error(' Queue is empty'); 
//     }

//     isEmpty(){
//         if(!this.front){
//             throw new Error('Queue is empty'); 
//         }
//         return 'the Queue is not empty!'
//     }
//     printList(){
//         let current = this.head;
       
//         while (current) {
//             console.log(current.value);
//             current=current.next;
//         }
        
//     }
// }


// let queue = new Queue();
// queue.enqueue("m");
// queue.enqueue("a");
// queue.enqueue("m");
// // queue.enqueue("o");
// // queue.enqueue("u");
// // queue.enqueue("n");
// queue.printList();

// console.log(queue);

// module.exports=Queue;