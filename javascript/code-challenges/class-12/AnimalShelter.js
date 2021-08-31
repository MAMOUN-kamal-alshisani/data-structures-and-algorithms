  
"use strict";

const Queue=require('./queue');
const Animal=require('./Animal');

class AnimalShelter{
    constructor(){
        this.cat=new Queue();
        this.dog=new Queue();
    }

    enqueue(animal){
        if(animal.type==='dog'){
            this.dog.enqueue(animal);
            return this.dog;
        }else if(animal.type==='cat'){
            this.cat.enqueue(animal);
            return this.cat;
        }else{
            return 'must choose both cat and dog!'; 
        }
    }

    dequeue(pref){
        if(pref.type==='dog'){
            this.dog.dequeue(pref);
        }else if(pref.type==='cat'){
            this.cat.dequeue(pref);
        }else{
            return null;
        }
    }
}

let shelter= new AnimalShelter();
let dog=new Animal('dog');
let cat=new Animal('cat');
let ca2t=new Animal('cat');

shelter.enqueue(dog);
shelter.enqueue(cat);
shelter.enqueue(ca2t);
shelter.dequeue(ca2t);

console.log(shelter);


module.exports={
    Animal,
    AnimalShelter
}