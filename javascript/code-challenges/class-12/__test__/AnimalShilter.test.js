"use strict";
const { Animal, AnimalShelter } = require("../AnimalShelter");
describe("animal shelter", () => {
  test("enqueue dog", () => {
    let TheShelter = new AnimalShelter();
    let dog = new Animal("dog");

    TheShelter.enqueue(dog);
    expect(TheShelter.dog.Spush.length).toEqual(1);
  });

  test('dequeue dog',()=>{
    let TheShelter = new AnimalShelter();
    let dog = new Animal("dog");
    let dog2 = new Animal("dog");
    TheShelter.enqueue(dog);
    TheShelter.enqueue(dog2);
    
    TheShelter.dequeue(dog2);
    expect(TheShelter.dog.Spop.length).toEqual(1);
  });

  test('enqueue cat',()=>{
    let TheShelter = new AnimalShelter();
    let cat = new Animal("cat");

    TheShelter.enqueue(cat);

    expect(TheShelter.cat.Spush.length).toEqual(1);
  });

  test('dequeue cat',()=>{
    let TheShelter = new AnimalShelter();
    let cat = new Animal("cat");
    let cat1 = new Animal("cat");

    TheShelter.enqueue(cat);
    TheShelter.enqueue(cat1);
    TheShelter.dequeue(cat1);

    expect(TheShelter.cat.Spop.length).toEqual(1);
  });

  test(' enqueue not cat or dog',()=>{
    let TheShelter = new AnimalShelter();
    let minion = new Animal("minion");
    
    expect(TheShelter.enqueue(minion)).toEqual('must choose both cat and dog!');
  });

  test(' dequeue not cat or dog',()=>{
    let TheShelter = new AnimalShelter();
    let minion= new Animal("minion");
    
    expect(TheShelter.dequeue(minion)).toEqual(null);
  });
});