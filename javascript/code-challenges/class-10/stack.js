'use strict';
class Stack{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
        this.top=null
    }

    push(value){
let stack= new Stack(value);
if(this.top){
stack.next =this.top;
this.top=stack;



}
this.top= stack

    }

pop(){

    if(this.top){
      let current = this.top;
     let poped = this.top.value;
        this.top=current.next;
        return poped;
    
        }
       throw new Error('empty stack');

}

peek(){

let val;

if(this.top){

val=this.top.value;
return val

}

throw new Error('empty stack');


}
isEmpty(){
    if(!this.top){
        throw new Error('this stack empty stack'); 
    }
    return 'the stack have values';
}

}



let stack = new Stack();
stack.push(11);
stack.push(22);
stack.push(33);

console.log(stack.top.next);






module.exports= Stack;
    