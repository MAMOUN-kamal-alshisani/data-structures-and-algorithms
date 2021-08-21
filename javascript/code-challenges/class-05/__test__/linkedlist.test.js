'use strict';

const LL =require('../linkedlist');

describe('linked list',()=>{

    it('should create new linked list', ()=>{
    
        //arrange
       
    
        //aact
    const list = new LL();
    //assert
   expect(list.head).toBeNull();


    });
    
    it('should add node to an empty linked list', ()=>{
    
        //arrange
       
        const list = new LL();
    const value = 'first value';
        //aact
    
      list.append(value)
    
    //assert
   expect(list.head.value).toBe(value);
   expect(list.head.next).toBeNull();
    });

    it('should append node to linked list with some ', ()=>{
    
        //arrange
       
        const list = new LL();
    const value1 = 'first value';
    list.append(value1)
    const value2 = 'second value';
        //aact
    
        list.append(value2)
    
    //assert
    expect(list.head.value).toBe(value1);
    expect(list.head.next.value).toBe(value2);
    expect(list.head.next.next).toBeNull();
//    expect(list.head.next).toBeNull(value);
    });
    })