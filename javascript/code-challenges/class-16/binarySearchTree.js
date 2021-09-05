const Node =require('./node')
const BinaryTree =require('./binerytree')

class BinarySearchTree extends BinaryTree{

constructor(){
    super()

this.root = null;

}
add(value){

const node = this.root;
if(node === null){
    this.root = new Node(value);
    return;
}else {
    const searchTree = function(node){
        if(value < node.value){
            if(node.left ===null){
                node.left = new Node(value)
                return;
            }else if(node.left !==null){
                return searchTree(node.left);
            }
        }else if(value> node.value){
            if(node.right === null){
                node.right = new Node(value);
                return;
            }else if(node.right !==null){
                return searchTree(node.right);
            }
        }else{ return null;
        }
    }
    return searchTree(node)
}


}

contains(value){

   let current = this.root;
   while (current){
if(value ===current.value){
    return true;
}
if(value<current.value){
    current =current.left;

}else{current=current.right}

   }return false;
}


findMax(){

let current = this.root;

while(current.right !==null){
    current = current.right;
}
return current.value
}
}


const bst = new BinarySearchTree()
console.log(bst.add(1));
bst.add(1)
bst.add(2)
bst.add(3)
bst.add(4)
bst.add(5)
console.log(bst.findMax());
bst.add(6)
bst.add(7)
bst.add(8)
bst.add(9)

bst.add(15)
console.log(bst.findMax());
console.log(bst.contains(1));
console.log(bst.contains(2));
console.log(bst.contains(20));
module.exports= BinarySearchTree;