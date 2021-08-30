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
    