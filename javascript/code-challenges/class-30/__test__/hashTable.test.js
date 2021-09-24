const LinkedList =require('../hashtable');
const Node =require('../hashtable');
const HashTable =require('../hashtable');
const assert = require('assert');
const { notEqual } = require('assert');

describe('linked list',()=>{

 
    it('set key/value to HashTable', ()=>{
    
    //     //arrange
    
        const table = new HashTable(27);
    //     // table.set('france','Country');
        table.set('germany','Country');
    // //assert
    expect(table.set('france','Country')).not.toEqual(null)

    // expect(table.contain('france')).toBe(true);
  //  expect(table.get('france'))
  //  expect(list.head.next).toBeNull();
    });

    it('Retrieving based on a key returns the value stored ', ()=>{
    
    //     //arrange
        const table = new HashTable();
     table.set('America','Country');
    //     table.set('germany','Country');
    //     //aact
    expect(table.contain('America')).toBe(true);
    // expect(table.get('germany'))
    
    //assert
      // expect(table.get('france'))

    // expect(list.head.next.value).toBe(value2);
    // expect(list.head.next.next).toBeNull();
//    expect(list.head.next).toBeNull(value);
    });
    it("Successfully handle a collision within the hashtable", () => {

      const table = new HashTable(3);
      table.set('America','Country');
         table.set('germany','Country');
     //     //aact
     expect(table.contain('library')).toBe(false);

      
      });

      it("Successfully hash a key to an in-range value", () => {
        const table = new HashTable(7);
      
        let key ='mamoun';
       //     //aact
       expect(table._hash(key)).toBeGreaterThanOrEqual(2);
       expect(table._hash(key)).toBeLessThanOrEqual(2)
      });


    
    //   it("insert After node", () => {
    //     let NList = new LL();
    //     NList.insert(1);
    //     NList.append(2);
    //     NList.append(3);
    //    NList.insertafter(1, 4);
    //     console.log(NList.head.value);
    //     console.log(NList.head.next.value);
    //     expect(NList.head.value).toEqual(1);
    //     expect(NList.head.next.value).toEqual(2);
    //   });
    //   it("append()", () => {
    //     let NList = new LL();
    //     let NewValue = "First Item";
    //     NList.append(NewValue);
    //     expect(NList.head.value).toEqual(NewValue);
    
    //     let secondOne = "Second Item";
    //     NList.append(secondOne);
    //     expect(NList.head.next.value).toEqual(secondOne);
    //     expect(NList.head.next.next).toBeNull();
    //     expect(NList.head.value).toEqual(NewValue);
    //   });

    //   it("reverse() Where k is greater than the length of the linked list", () => {
    //     let NList = new LL();
    
    //     NList.insert(4);
    //     NList.append(2)
    //     NList.append(6)
    //     expect(NList.reverselist(6)).toEqual("error");
    
  
    //   });
     
    //   it("reverse() Where k and the length of the list are the same", () => {
    //     let NList = new LL();
  
    //     NList.insert(4);
    //     NList.append(2)
    //     NList.append(6)
    //     NList.insert(5);
    //     expect(NList.reverselist(4)).toEqual("error");
    //   });
    
    //   it("reverse()  Where k is not a positive integer", () => {
    //     let NList = new LL();
        
    //     NList.insert(4);
    //     NList.append(2)
    //     NList.append(6)
    //     NList.insert(5);
    //     expect(NList.reverselist(-4)).toEqual("error");
    //   });

    //   it("reverse() Where the linked list is of a size 1", () => {
    //     let NList = new LL();
    //     NList.insert(4);
      
    //     expect(NList.reverselist(0)).toEqual(4);
    //   });

      
    //   it("reverse() Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    //     let NList = new LL();
        
    //     NList.insert(4);
    //     NList.append(2)
    //     NList.append(6)
    //     NList.insert(5);
    //     NList.insert(8);
    //     expect(NList.reverselist(3)).toEqual(5);
    //   });

    });
