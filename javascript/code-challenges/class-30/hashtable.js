// class Node{

//   constructor(value,next=null){
// this.value=value;
// this.next=next;

//   }
// }

// class Linkedlist {
//   constructor(){
//     this.head=null
//   }

//   add(value) {
//     const node = new Node(value);
//     if (!this.head) {
//         this.head = node;
//         return;
//     }

//     let current = this.head;
//     while (current.next) {
//         current = current.next;
//     }
//     current.next = node;
// }

// values() {
//     let values = [];
//     let current = this.head;
//     while (current) {
//         values.push(current.value);
//         current = current.next;
//     }
//     return values;
// }
// }



// class HashTable{

//   constructor(){
//     this.table =  new Array(127);
//     this.size = 0;
//   }
//   _hash(key){

//     let hash = 0;

//     for (let i = 0; i<key.length;i++){
//       hash +=key.charCodeAt(i);
//     }
//     return hash % this.table.length;
//   }

//   set(key, value){
//     let hash= this._hash(key)
//     this.table[hash] = [key, value]
//     }
  
// }



class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }
  insert(value) {
      const node = new Node(value);
      if (!this.head) {
          this.head = node;
          return;
      }

      let current = this.head;
      while (current.next) {
          current = current.next;
      }
      current.next = node;
  }

  values() {
      let values = [];
      let current = this.head;
      while (current) {
          values.push(current.value);
          current = current.next;
      }
      return values;
  }
}
//charCodeAt() a = 97, z = 122
class HashTable {
  constructor(size) {
      this.size = size;
      this.map = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.map.length;
  }


  set(key, value) {
      let hash = this._hash(key);

      if (!this.map[hash]) {
          this.map[hash] = new LinkedList();
      }

      // we need to make sure that the key is unique

      let bucket = { [key]: value };
      this.map[hash].insert(bucket);
  }


  get(key) {
    const getvalue = this._hash(key);
    return this.map[getvalue];
  }


contain(key){
  let get =this.get(key)
let hash = this._hash(key)
  while(this.size !==0){
    if(!this.get(key)){
return false;
    }
  else{return true}
  }

}


}

let Ht = new HashTable(127)



Ht.set('france','Country');
Ht.set('paris','Capital');
Ht.set('jordan','Country');
Ht.set('Amman','Capital');
Ht.set('Az_Zarqa','City');
Ht.set('As_Sukhnah','Country_side');
Ht.set('Mamoun','Citizen');






// console.log(myhash.get("John")); // [ 'Canada', 300 ]
// console.log(myhash.get("Cathy")); // [ 'France', 100 ]
// console.log(myhash.get("Ovi")); 


Ht.map.forEach( (data,i) => {
console.log(i, data && data.values());
});
console.log(Ht.contain('44'));
console.log(Ht.get('Mamoun'));
console.log(Ht.get('As_Sukhnah'));



module.exports = HashTable;