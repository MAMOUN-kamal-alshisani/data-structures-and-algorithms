'use strict';
class Stack{
    constructor(value,next=null){
        this.value=value;
        this.next=next;
        this.top=null;
        let stack=[];
        let maxstack=[];
    }

    push(value){
        stack.push(value)
if(stack.length == 1){

    maxstack.push(value);
    return;
}

if(value> maxstack[maxstack.length -1]){
maxstack.push(value);}
else{maxstack.push(maxstack[maxstack.length -1])}
}


getMax(){

    return maxstack[maxstack.length -1];
}

     pop(){
maxstack.pop();
stack.pop();
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
// stack.push(11);
// stack.push(22);
// stack.push(33);
// stack.pop();
// console.log(stack.top);

push(20);
console.log((getMax()));
push(10);
console.log((getMax()));
push(50);
console.log((getMax()));




module.exports= Stack;



