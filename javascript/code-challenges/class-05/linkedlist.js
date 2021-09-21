
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
 addtwonumbers(l1,l2){
     let a =[]
while (l1 !=null || l2 !=null){

    let v1 = 0
    let v2 = 0
    if(l1 != null)v1=l1.value
    if(l2 != null)v2=l2.value
let sum = v1 + v2
a.push(sum)
    if(l1 != null)l1=l1.next
    if(l2 != null)l2=l2.next
}
console.log(a);
    }
}

const LL= new LinkedList()

LL.addtwonumbers([16354],[34343])